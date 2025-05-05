import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../services/operations/authApi";
import { FaArrowLeft } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const UpdatePassword = () => {
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [watchPassword, setWatchPassword] = useState(false);
  const { token } = useParams();
  console.log("Token Passed from frontend ->", token);
  const { password, confirmPassword } = data;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!token) {
    toast.error("token is Invalid");
    return;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!password || !confirmPassword) {
      toast.error("Fill all the details correctly!");
      return;
    }

    if (password !== confirmPassword) {
      setWatchPassword(true);
      toast.error("Passwords do not match.");
      return;
    }
    dispatch(resetPassword({ password, confirmPassword, token, navigate }));
    setData({
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex flex-col text-richblack-50 h-screen items-center justify-center bg-richblack-900 -mt-20">
      <div className="border-richblack-100 border-[1px] p-3 rounded-xl bg-richblack-800 flex flex-col gap-3">
        <div className="flex flex-col items-start">
          <div className="text-[36px] font-semibold">Choose new password</div>
          <div className="text-sm text-richblack-300 ">
            Almost done. Enter your new password and youre all set.
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-3"
          >
            <div className="flex flex-col w-full relative">
              <label htmlFor="password">
                New Password: <span className="text-pink-200">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={data.password}
                id="password"
                className="bg-richblack-900 p-2 rounded-xl text-richblack-50 outline-none"
                onChange={handleChange}
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
            <div className="flex flex-col w-full relative">
              <label htmlFor="confirmPassword">
                Confirm New Password: <span className="text-pink-200">*</span>
              </label>
              <input
                 type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={data.confirmPassword}
                id="confirmPassword"
                className=" bg-richblack-900 p-2 rounded-xl text-richblack-50 outline-none"
                onChange={handleChange}
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
              <div className={`${watchPassword === true ? `flex` : `hidden`}`}>
                *Confirm password is not matched with password
              </div>
            </div>
            <button
              type="submit"
              className=" bg-yellow-100 w-full items-center justify-center text-richblack-800 py-2 rounded-xl"
            >
              Reset Password
            </button>
          </form>
        </div>
        <Link to="/login" className="flex items-center gap-2">
          <FaArrowLeft />
          Back to Login
        </Link>
      </div>
    </div>
  );
};
