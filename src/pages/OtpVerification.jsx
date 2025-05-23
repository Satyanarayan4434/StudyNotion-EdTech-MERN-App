import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/operations/authApi";
import { useDispatch } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import { GiBackwardTime } from "react-icons/gi";
import { sendOtp } from "../services/operations/authApi";

export const OtpVerification = () => {
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const {
    firstName,
    lastName,
    email,
    contactNumber,
    password,
    confirmPassword,
    accountType,
  } = useSelector((state) => state.auth.signUpData);


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUp({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        contactNumber,
        otp,
        navigate,
      })
    );
    setOtp(otp);
  };
console.log(otp);
  return (
    <div className="bg-richblack-900 text-richblack-50 flex flex-col items-center justify-center h-screen ">
      <div className="w-[23rem] flex flex-col gap-2  -mt-40">
        <div className="flex flex-col">
          <div className="text-[36px] font-bold">Verify email</div>
          <div className="text-richblack-300">
            A verification code has been sent to you. Enter the code below
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} className="!w-[50px] !h-[50px] rounded-md border border-richblack-700 text-richblack-50 bg-richblack-800 text-2xl text-center focus:outline-none focus:ring-2 focus:ring-yellow-500"/>}
          />
          <button type="submit" className="flex items-center justify-center font-semibold bg-yellow-100 text-richblack-900 py-3 rounded-xl">Verify Email</button>
        </form>
        <div className="flex items-center justify-between">
          <Link to="/login" className="flex items-center gap-1"><IoArrowBack />Back to login</Link>
          <button className="flex items-center gap-1" onClick={()=>dispatch(sendOtp({email, navigate}))}><GiBackwardTime />Resend it</button>
        </div>
      </div>
    </div>
  );
};
