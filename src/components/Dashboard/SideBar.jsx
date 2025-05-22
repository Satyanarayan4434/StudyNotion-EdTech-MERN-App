import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../Loading";
import { sidebarLinks } from "../../data/dashboard-links";
import { SiderLinks } from "./SiderLinks";
import { LuLogOut } from "react-icons/lu";
import { LogoutModal } from "../Dashboard/LogoutModal";
import { modalState } from "../../slices/slice/modalSlice";



export const SideBar = () => {
  const { loading } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
   const showModal = useSelector((state) => state.modal);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const userAccountType = user?.accountType;

  const filterdUser = sidebarLinks.filter((Link) => {
    if (!Link.type) {
      return true;
    } else if (Link.type === userAccountType) {
      return true;
    } else {
      return null;
    }
  });

  const modalHandler = () => {
    dispatch(modalState(true));
  };

  return (
    <div className="min-h-screen border-t-[1px] border-richblack-50 flex flex-col gap-6 ">
      <div className="">
        {filterdUser.map((data) => {
          return (
            <SiderLinks
              key={data.id}
              name={data.name}
              path={data.path}
              icon={data.icon}
            />
          );
        })}
      </div>
      <hr className="w-full text-richblack-50 pr-6" />
      <button
        onClick={() => modalHandler()}
        className="flex items-center gap-2 pl-4 text-richblack-50"
      >
        Logout <LuLogOut />
      </button>
      {showModal && (
        <div  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" // Fixed position, covers viewport, semi-transparent background, centered content, higher z-index
           onClick={(e) => { 
             if (e.target === e.currentTarget) { 
               dispatch(modalState(false)); 
             } 
           }}>
          <LogoutModal />
        </div>
      )}
    </div>
  );
};
