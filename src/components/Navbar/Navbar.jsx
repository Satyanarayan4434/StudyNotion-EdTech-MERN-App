import React from "react";
import { NavbarLinks } from "../../data/navbar-links";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { logout } from "../../services/operations/authApi";



export const Navbar = () => {
  const subLinks = [
    { course: "Python", path: "/python" },
    { course: "Web Development", path: "/web development" },
  ];

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="relative flex justify-between items-center px-[10rem] bg-richblack-800 py-6 text-richblack-50">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="flex gap-3 items-center">
        {NavbarLinks.map((link, index) => {
          return link.title === "Catalog" ? (
            <div key={index} className="group">
              <div className="flex items-center ">
                {link.title}
                <MdArrowDropDown />
              </div>
              <div className="hidden group-hover:flex flex-col gap-2 z-10 absolute bg-richblack-25 text-richblack-800 rounded-xl p-5">
                {subLinks.map((link, index) => {
                  return (
                    <div key={index}>
                      <Link
                        className="px-3 py-1 bg-richblack-300 text-lg font-bold gap-2 flex rounded-lg"
                        to={link.path}
                      >
                        {link.course}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div key={index}>
              <Link to={link.path}>{link.title}</Link>
            </div>
          );
        })}
      </div>
      <div>
        {token === null ? (
          <div>
            <div className="flex items-center gap-6">
              <div>
                <Link to="/login">Login</Link>
              </div>
              <div>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-[2rem] h-[2rem] group relative">
              <div >
                <img src={user.image} alt="" className=" rounded-full"/>
              </div>
              <div className="absolute top-10 opacity-0 z-10 flex gap-2 p-2 flex-col group-hover:opacity-100 bg-richblack-50 text-richblack-800 rounded-xl">
                <Link to="/dashboard/my-profile">Dashboard</Link>
                <button onClick={()=>dispatch(logout(navigate))} className="flex gap-1 items-center">Logout <LuLogOut /></button>
              </div>
            </div>
            <div>
              {user.accountType !== "Instructor" && "Admin" ? (
                <div className="flex items-start gap-1 group text-yellow-100">
                  <FaCartShopping size="2em"/>
                  <div className="group-hover:animate-bounce">{totalItems}</div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
