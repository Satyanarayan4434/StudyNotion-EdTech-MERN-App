import React, { useEffect, useState } from "react";
import loginImage from "../assets/Images/login.webp";
import frame from "../assets/Images/frame.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../services/operations/authApi";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  const [submitedData, setSubmitedData] = useState(null);


  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.email || !data.password) {
      alert("Fill all the details correctly");
      return;
    }

    setSubmitedData(data);
    dispatch(login({email, password, navigate}));
    setData({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (submitedData) {
      console.log(submitedData);
    }
  }, [submitedData]);

  return (
    <div className="flex items-center justify-center bg-richblack-900 text-richblack-50 gap-14 py-28">
      <div className="flex flex-col items-start gap-2 w-[35rem]">
        <div className="text-[36px] font-bold leading-10">Welcome Back</div>
        <div>
          Build skills for today, tomorrow, and beyond.{" "}
          <span>Education to future-proof your career.</span>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 items-center"
            >
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
                />
              </div>

              {/* password and confirm */}
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
                  className="border-none  w-[30rem] text-richblack-50 bg-richblack-800 py-2 px-2 rounded-xl"
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
          <img src={loginImage} alt="sign_up_image" />
        </div>
        <div className="absolute top-6 -right-6 z-0">
          <img src={frame} alt="Frame" />
        </div>
      </div>
    </div>
  );
}
