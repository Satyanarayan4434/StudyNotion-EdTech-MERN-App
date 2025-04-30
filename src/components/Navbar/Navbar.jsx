// import React, { useEffect, useState } from "react";
import { NavbarLinks } from "../../data/navbar-links";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
// import { apiConnector } from "../../services/apiconnector";
// import { categories } from "../../services/apis";

export const Navbar = () => {
  const subLinks = [
    { course: "Python", path: "/python" },
    { course: "Web Development", path: "/web development" },
  ];


  // const [catLinks, setCatLinks] = useState([]);

  // const fetchAllCategories = async () => {
  //   try {
  //     const result = await apiConnector("GET", categories.CATEGORIES_API);
  //     console.log(result);
  //     setCatLinks(result.data);
  //   } catch (error) {
  //     console.log("Error While fetching data of categories");
  //   }
  // };

  // useEffect(() => {
  //   fetchAllCategories();
  // }, []);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  return (
    <div className="relative flex justify-between items-center px-[10rem] bg-richblack-800 py-6 text-richblack-50">
      <div>
        <img src={Logo} alt="" />
      </div>
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
                <Link to="/signUp">Sign Up</Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* <div>
              {user.accountType !== "Instructor" && "Admin" ? (
                <div>
                  <FaCartShopping />
                  {totalItems}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              <Link to="/profile">
                <img src={user.image} alt="" />
              </Link>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};
