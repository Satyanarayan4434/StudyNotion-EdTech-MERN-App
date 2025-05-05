import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendResetPasswordToken } from "../services/operations/authApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const [isUrlSend, setisUrlSend] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  console.log(email);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      return toast.error("Type your email first");
    }
    try {
      await dispatch(sendResetPasswordToken({ email }));
      setisUrlSend(true);
    } catch (error) {
      setisUrlSend(false);
      console.log("Error while sending Reset Password Email ->", error);
    }
    console.log(isUrlSend);
  };

  return (
    <div className="bg-richblack-900 flex items-center justify-center h-screen">
      {isUrlSend === true ? (
        <div className="flex items-start gap-3 flex-col text-richblack-50 w-[23rem]">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[36px] ">Check email</div>
            <div className="text-richblack-200">
              We have sent the reset email to:
              {email}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="flex w-[23rem] py-2 px-2 bg-yellow-100 items-center justify-center text-richblack-800 rounded-xl"
          >
            Resend Email
          </button>
          <Link to="/login">Back to login</Link>
        </div>
      ) : (
        <div className="flex items-start gap-3 flex-col text-richblack-50 w-[23rem]">
          <div className="font-bold text-[36px] ">Reset your password</div>
          <div className="text-richblack-200">
            Have no fear. We’ll email you instructions to reset your password.
            If you dont have access to your email we can try account recovery
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start w-full gap-3"
          >
            <label htmlFor="email">
              Email : <span className="text-pink-300">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="text-richblack-50 flex w-full py-2 px-2 rounded-xl bg-richblack-800 "
              placeholder="example@gmail.com"
            />
            <button
              type="submit"
              className="flex w-[23rem] py-2 px-2 bg-yellow-100 items-center justify-center text-richblack-800 rounded-xl"
            >
              Reset Password
            </button>
          </form>
          <Link to="/login">Back to login</Link>
        </div>
      )}
    </div>
  );
};
