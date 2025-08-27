import React from 'react';
import { motion } from "framer-motion";
import { Link, NavLink } from 'react-router';
import { spring } from 'framer-motion';
import { FaSlideshare } from 'react-icons/fa';

const NavBar = () => {
    const user = {};
    const links = (
    <>
      <li>
        <NavLink className="hover:text-sky-500 bg-[#0000]" to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className="hover:text-sky-500 bg-[#0000]" to={"add-to-find"}>Add to Find Roommate</NavLink>
      </li>
      <li>
        <NavLink className="hover:text-sky-500 bg-[#0000]" to={"Listing"}>Browse Listing</NavLink>
      </li>
    </>
  );


  const handleLogOut = () => {

  }


    return (
        <motion.div 
    initial={ {y: -100} }
    animate={ {y: 0} }
    transition={ {duration: 0.3, type: spring, stiffness: 200} }
    className="bg-[#0000] shadow-sm "
    >
      <div className="navbar w-11/12 mx-auto flex justify-between items-center bg-[#0000]">
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
          <div className='flex gap-1 items-center w-fit'>
            <div><FaSlideshare className='text-4xl text-[#40bffa]'/></div>
            <Link className="hidden md:block text-lg font-extrabold" to={"/"}>
            <span>Roommate</span><span className='text-[#0EA5E9]'>Finder</span>
          </Link>
          </div>
        </div>
        <div>
            <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-5 text-[16px] font-medium">{links}</ul>
          </div>
        </div>

          <div className="">
          
          <div>
            {user ? (
              <>
                <div className="dropdown dropdown-end dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-12 rounded-full">
                      {
                        user 
                        && <>
                        <img
                        alt="logo-avatar"
                        referrerPolicy="no-referrer"
                        src={user && user?.photoURL}
                      />
                        </>
                      }
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-0 w-52 p-2 shadow"
                  >
                    <li>
                      <Link to={"profile"}>
                        Profile
                      </Link>
                    </li>
                    <li onClick={handleLogOut}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>

              </>
            ) : (
              <>
              <Link to={"login"} className="py-2 px-4 bg-transparent hover:bg-[#F0F9FF] rounded-4xl text-black border border-[#7dd3fc] mr-2">
                Login
              </Link>
              <Link to={"signup"} className="py-2 px-4 bg-[#0EA5E9] rounded-4xl text-white border-0">
                Sign Up
              </Link>
              </>
            )}
          </div>
        </div> 
      </div>
    </motion.div>
    );
};

export default NavBar;