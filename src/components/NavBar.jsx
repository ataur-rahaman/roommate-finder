import React, { use } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router";
import { spring } from "framer-motion";
import { FaSlideshare } from "react-icons/fa";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { AuthContext } from "../auth/AuthContext";
import { ThemeContext } from "../theme/ThemeContext";

const NavBar = () => {
  const location = useLocation();
  const userData = location.state;
  const { user, logOutUser } = use(AuthContext);
  const {theme, setTheme} = use(ThemeContext);
  // console.log(user);
  const links = (
    <>
      <li>
        <NavLink className="hover:text-sky-500 bg-[#0000]" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-sky-500 bg-[#0000]" to={"add-to-find"}>
          Add to Find Roommate
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-sky-500 bg-[#0000]" to={"listings"}>
          Browse Listing
        </NavLink>
      </li>
      {
        user && 
        <li>
        <NavLink className="hover:text-sky-500 bg-[#0000]" to={"my-listings"}>
          My Listing
        </NavLink>
      </li>
      }
    </>
  );

  const handleLogOut = () => {
    logOutUser();
  };

  const handleTheme = () => {
    if(theme === "light"){
      setTheme("dark")
    }
    if(theme === "dark"){
      setTheme("light")
    }
  }
  console.log(theme);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, type: spring, stiffness: 200 }}
      className={theme === "light" ? "bg-white" : "bg-gray-800"}
    >
      <div className={ `${theme === "light" ? "navbar text-black w-11/12 mx-auto flex justify-between items-center bg-[#0000]" : "navbar text-white w-11/12 mx-auto flex justify-between items-center bg-gray-800"}`}>
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-1 items-center w-fit">
            <div>
              <FaSlideshare className={`${theme === "light" ? "text-4xl text-[#40bffa]" : "text-4xl text-[#40bffa]"}`} />
            </div>
            <Link className="hidden md:block text-lg font-extrabold" to={"/"}>
              <span>Roommate</span>
              <span className="text-[#0EA5E9]">Finder</span>
            </Link>
          </div>
        </div>
        <div>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-5 text-[16px] font-medium">
              {links}
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center gap-5">
          <div>
            {user ? (
              <>
                <div className="dropdown dropdown-end dropdown-hover relative">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-12 rounded-full">
                      {user && (
                        <>
                          <img
                            alt="logo-avatar"
                            referrerPolicy="no-referrer"
                            src={
                              user
                                ? user?.photoURL ||
                                  user?.providerData?.[0]?.photoURL
                                : userData?.user.photoURL
                            }
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content rounded-box z-1 mt-0 w-52 p-2 shadow-2xl top-4 right-4 bg-[#fffffff3]"
                  >
                    <li className=" text-[18px] mb-3">
                      {user.displayName}
                    </li>
                    <li className="text-white mb-3">
                      <Link to="/my-listings" className="text-[14px] font-bold bg-sky-500 hover:bg-sky-600 text-center">My Listings 📃</Link>
                    </li>
                    <li
                      onClick={handleLogOut}
                      className="text-white"
                    >
                      <p className="text-[16px] font-bold bg-red-500 hover:bg-red-600 text-center">Logout</p>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to={"login"}
                  className={theme === "light" ? "py-2 px-4 bg-transparent hover:bg-[#F0F9FF] rounded-4xl text-black border border-[#7dd3fc] mr-2 text-xl" : "py-2 px-4 bg-transparent hover:bg-[#F0F9FF] rounded-4xl text-white hover:text-black border border-[#7dd3fc] mr-2 text-xl"}
                >
                  Login
                </Link>
                <Link
                  to={"register"}
                  className="py-2 px-4 bg-[#0EA5E9] rounded-4xl text-white border-0 text-xl"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div onClick={handleTheme}>
            {theme === "light" ? <MdOutlineDarkMode className="text-3xl cursor-pointer" /> : <MdLightMode className="text-3xl cursor-pointer text-yellow-500" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
