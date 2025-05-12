import React from "react";
import { logout } from "../../services/operations/authApi";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalState } from "../../slices/slice/modalSlice";

export const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout(navigate));
  };
  const cancelHandler = () => {
    dispatch(modalState(false))
  }

  return (
    <div className="flex flex-col items-center justify-center bg-richblack-600 p-3 rounded-xl gap-6">
      <div className="text-[36px] font-semibold text-richblack-50">Are You Sure?</div>
      <div className="flex justify-between items-center w-full">
        <button className="flex items-center gap-2 bg-yellow-100 rounded-xl px-2 py-1" onClick={() => logoutHandler()}>
          Logout <LuLogOut />
        </button>
        <button onClick={()=>cancelHandler()} className="bg-richblack-900 px-2 py-1 rounded-xl text-richblack-50">Cancel</button>
      </div>
    </div>
  );
};
