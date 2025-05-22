import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export const PasswordChange = () => {
  const { data, setData } = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const editPassword = (data) => {
    if (data.password !== data.confirmPassword) {
        return toast.error("Password Does'nt Match")
    }
    setData(data);
    reset();
  };

  console.log(data);
  
  const cancelHandler = () =>{
    reset();
    setData(null)
    navigate("/dashboard/my-profile");
  }

  return (
    <div className="flex flex-col items-start gap-6 text-richblack-50 bg-richblack-800 px-4 py-4 rounded-xl">
      <div className="text-lg font-semibold">Password</div>
      <div>
        <form className="flex flex-col gap-6 w-[40rem]" onSubmit={handleSubmit(editPassword)}>


          <div className="flex w-full gap-3 justify-between">
            <div className="flex flex-col gap-2 w-[100%] relative">
            <label className="text-richblack-300 " htmlFor="password">Password :</label> 
            <input type={showPassword ? "text" : "password"}  name="password" id="password" className="bg-richblack-900  text-richblack-50 px-4 py-3 rounded-xl outline-none  flex w-[100%] " {...register("password", {required:true})}/>
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute bottom-6 right-6"
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
            <div></div>
            {errors.passowrd && <span>passowrd is required</span>}
          </div>


          <div className="flex flex-col gap-2 w-[100%] relative">
            <label className="text-richblack-300 " htmlFor="confirmPassword">Confirm Password :</label>
            <input  type={showConfirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" className="bg-richblack-900  text-richblack-50 px-4 py-3 rounded-xl outline-none  flex w-[100%] " {...register("confirmPassword", {required:true})}/>
            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute bottom-6 right-6"
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
            <div></div>
            {errors.confirmPassword && <span>Confirm Password is required</span>}
          </div>
          </div>

         <div className="flex items-center gap-6">
            <button className="bg-richblack-900 px-4 py-2 rounded-xl" onClick={()=>cancelHandler()}>Cancel</button>
            <button type="submit" className="bg-yellow-100 text-richblack-900 px-10 py-2 rounded-xl">Save</button>
          </div>

        </form>
      </div>
    </div>
  );
};
