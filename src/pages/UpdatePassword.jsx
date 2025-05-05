import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../services/operations/authApi";

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
          <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3">
            <div className="flex flex-col">
              <label htmlFor="password">
                New Password: <span className="text-pink-200">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                id="password"
                className="w-[20rem] bg-richblack-900 p-2 rounded-xl text-richblack-50 outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">
                Confirm New Password: <span>*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                id="confirmPassword"
                className="w-[20rem] bg-richblack-900 p-2 rounded-xl text-richblack-50 outline-none"
                onChange={handleChange}
              />
              <div className={`${watchPassword === true ? `flex` : `hidden`}`}>
                *Confirm password is not matched with password
              </div>
            </div>
            <button type="submit">Reset Password</button>
          </form>
        </div>
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
};
