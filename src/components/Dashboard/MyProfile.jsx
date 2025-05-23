import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

export const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="flex flex-col gap-10 px-10 py-10 bg-richblack-900 text-richblack-50 h-screen border-t-[1px] border-richblack-50 border-l-[1px]">
      <div className="font-bold text-4xl">My Profile</div>
      <div className="flex flex-col gap-6 px-[5rem] ">

        {/* 1st card */}
        <div className="flex bg-richblack-800 w-full justify-between border-[1px] border-richblack-50 rounded-xl p-3 items-start">
          <div className="flex gap-3 items-center ">
            <img
              src={user?.image}
              alt={`profile-${user?.firstName} ${user?.lastName}`}
              className="rounded-full w-[4rem]"
            />
            <div className="flex flex-col items-start justify-between">
              <div className="text-lg text-richblack-25 font-semibold">
                {user?.firstName} {user?.lastName}
              </div>
              <div className="text-richblack-300 ">{user?.email}</div>
            </div>
          </div>
          <div>
            <Link className="bg-yellow-100 text-richblack-800 px-4 rounded-md py-1 flex items-center gap-1" to="/dashboard/settings"><FaRegEdit /> Edit</Link>
          </div>
        </div>

        {/* 2nd Card */}
        <div className="flex flex-col items-start border-[1px] bg-richblack-800 border-richblack-50 rounded-xl p-3 w-full">
          <div className="flex items-center justify-between w-full ">
            <div className="text-lg text-richblack-25 font-semibold">Additional Details</div>
            <Link to="/dashboard/settings" className="bg-yellow-100 text-richblack-800 px-4 rounded-md py-1 flex items-center gap-1"><FaRegEdit />Edit</Link>
          </div>
          <div className="text-richblack-300 ">{user?.additionalDetails?.about !== null?user.additionalDetails.about:"Add Your Bio"}</div>
        </div>

        {/* 3rd Card */}
        <div className="flex flex-col items-start border-[1px] gap-3 bg-richblack-800 border-richblack-50 rounded-xl p-3 w-full">
          <div className="flex items-center justify-between w-full ">
            <div className="text-lg text-richblack-25 font-semibold">Personal Details</div>
            <Link to="/dashboard/settings"  className="bg-yellow-100 text-richblack-800 px-4 rounded-md py-1 flex items-center gap-1"><FaRegEdit />Edit</Link>
          </div>
          <div className="flex items-center justify-between w-[70%]">
            <div>
              <div className="text-lg text-richblack-25 font-semibold">First Name</div>
              <div className="text-richblack-300 ">{user?.firstName}</div>
            </div>
            <div>
              <div className="text-lg text-richblack-25 font-semibold">Last Name</div>
              <div className="text-richblack-300 ">{user?.lastName}</div>
            </div>
          </div>
          <div className="flex items-center justify-between w-[75.4%] ">
            <div>
              <div className="text-lg text-richblack-25 font-semibold">Email</div>
              <div className="text-richblack-300 ">{user?.email}</div>
            </div>
            <div>
              <div className="text-lg text-richblack-25 font-semibold">Contact Number</div>
              <div className="text-richblack-300 ">{user?.additionalDetails?.contactNumber !== null?user?.additionalDetails?.contactNumber:"Add Phone Number"}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
