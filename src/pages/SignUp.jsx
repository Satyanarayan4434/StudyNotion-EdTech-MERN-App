import React, { useEffect, useState } from "react";
import countrycode from "../data/countrycode.json";
import signUpImage from "../assets/Images/signup.webp";
import frame from "../assets/Images/frame.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignUpData } from "../slices/slice/authSlice";
import { sendOtp } from "../services/operations/authApi";


export default function SignUp() {
  //Password On off
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //Data Holder
  const [data, setData] = useState({
    accountType: "Student",
    fname: "",
    lname: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [submitedData, setSubmitedData] = useState(null);
  const [userType, setUserType] = useState("Student");
  const [selectedCountryCode, setCountryCode] = useState("+91");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Input Handle Change Handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Country Code Handler
  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  // User Type Declaration
  const handleButtonActive = (userType) => {
    setUserType(userType);
    setData((prevData) => ({
      ...prevData,
      accountType: userType,
    }));
  };

  // Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const fullPhoneNumber = `${selectedCountryCode}${data.number}`;

    //Data Validation
    if (
      !data.fname ||
      !data.lname ||
      !data.email ||
      !data.number ||
      !data.password ||
      !data.confirmPassword
    ) {
      alert("Fill all the details correctly");
      return;
    }

    //Password Matching
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    //Final Data after phone number combination with country code
    const finalData = {
      ...data,
      number: fullPhoneNumber,
    };
    setSubmitedData(finalData);

    //Dispatch Data to Redux
    dispatch(setSignUpData(data));
    dispatch(sendOtp(data.email, navigate));

    setData({
      fname: "",
      lname: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
    setCountryCode("+91");
  };

  //Console Data
  useEffect(() => {
    if (submitedData) {
      console.log(submitedData);
    }
  }, [submitedData]);

  return (
    <div className="flex items-center justify-center bg-richblack-900 text-richblack-50 gap-14 py-28">
      <div className="flex flex-col items-start gap-2 w-[35rem]">
        <div className="text-[36px] font-bold leading-10">
          Join the millions learning to code with StudyNotion for free
        </div>
        <div>
          Build skills for today, tomorrow, and beyond.{" "}
          <span>Education to future-proof your career.</span>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className={`flex bg-richblack-800  items-center justify-between w-[15rem] rounded-full py-2 ${
              userType ? "px-2" : ""
            }`}
          >
            <div
              onClick={() => handleButtonActive("Student")}
              className={`${
                userType === "Student"
                  ? "bg-richblack-900 px-3 py-2 rounded-full"
                  : "py-2 px-3"
              }`}
            >
              Student
            </div>
            <div
              onClick={() => handleButtonActive("Instructor")}
              className={`${
                userType === "Instructor"
                  ? "bg-richblack-900 px-3 py-2 rounded-full"
                  : "py-2 px-3"
              }`}
            >
              Instructors
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 items-center"
            >
              {/* Fname and Lname */}
              <div className="flex items-center justify-between w-[30rem] gap-14">
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="fname">
                    First Name : <span className="text-pink-300">*</span>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    value={data.fname}
                    onChange={handleChange}
                    className="border-none text-richblack-50 bg-richblack-800 py-2 px-2 rounded-xl"
                  />
                </div>
                <div className="flex flex-col  gap-2 items-start">
                  <label htmlFor="lname">
                    Last Name : <span className="text-pink-300">*</span>
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    value={data.lname}
                    onChange={handleChange}
                    className="border-none text-richblack-50 bg-richblack-800 py-2 px-2 rounded-xl"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-2 flex-col items-start">
                <label htmlFor="email">
                  Email : <span className="text-pink-300">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  className="border-none w-[30rem] text-richblack-50 bg-richblack-800 py-2 px-2 rounded-xl"
                  lassName=""
                />
              </div>

              {/* Phone Number */}
              <div>
                <div className="flex flex-col items-start gap-2 w-[30rem]">
                  <label htmlFor="number">
                    Phone Number : <span className="text-pink-300">*</span>
                  </label>
                  <div className="flex gap-3">
                    <select
                      onChange={handleCountryCodeChange}
                      value={selectedCountryCode}
                      name="countryCode"
                      id="countryCode"
                      className="border-none w-[15%] bg-richblack-800 outline-none rounded-xl"
                    >
                      {countrycode.map((code) => (
                        <option key={code.country} value={code.code}>
                          {code.code} {code.country}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="number"
                      id="number"
                      value={data.number}
                      pattern="[0-9]*"
                      onChange={handleChange}
                      className="border-none text-richblack-50 w-[28rem] bg-richblack-800 py-2 px-2 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* password and confirm */}
              <div className="flex items-center w-[30rem] justify-between">
                <div className="flex flex-col gap-2 items-start relative">
                  <label htmlFor="password">
                    Password : <span className="text-pink-300">*</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="border-none text-richblack-50 bg-richblack-800 py-2 px-2 rounded-xl"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute bottom-3 right-6"
                  >
                    {showPassword ? (
                      <div>
                        <FaEye />
                      </div>
                    ) : (
                      <div>
                        <FaEyeSlash />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start relative">
                  <label htmlFor="cnfPassword">
                    Confirm Password : <span className="text-pink-300">*</span>
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="cnfPassword"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    className="border-none text-richblack-50 bg-richblack-800 py-2 px-2 rounded-xl"
                  />
                  <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute bottom-3 right-6"
                  >
                    {showConfirmPassword ? (
                      <div>
                        <FaEye />
                      </div>
                    ) : (
                      <div>
                        <FaEyeSlash />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}

              <button
                className=" items-center w-[30rem] py-2 rounded-xl bg-yellow-50 text-richblack-800"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative z-10">
          <img src={signUpImage} alt="sign_up_image" />
        </div>
        <div className="absolute top-6 -right-6 z-0">
          <img src={frame} alt="Frame" />
        </div>
      </div>
      
    </div>
  );
}
