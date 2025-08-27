import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const [errorMsg, setErrorMsg] = useState(null);


    return (
        <>
    <title>Login</title>
    <div className=" mx-auto flex justify-center items-center mt-10 bg-[#EEF6FF] py-[100px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <div className="card-body">
          <h1 className="text-4xl mb-5">Login here</h1>
          <form >
            
            <input
              type="email"
              name="email"
              className="input mb-2 w-full"
              placeholder="Email"
              id="email"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input mb-2 w-full"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute rounded-full p-2 right-7 top-2 border-2 z-10"
              >
                {showPassword ? "❌" : "👀"}
              </button>
            </div>
            
            {
            //   errorMsg ? 
            //   <div className="text-red-500 p-3">
            //   {errorMsg}
            // </div>
            // :
            // ""
            }
            
            <div>
              <span>
                Don't have any account?{" "}
                <Link
                  state={location.state}
                  to={"/signup"}
                  className="link link-hover text-blue-500"
                >
                  Sign up
                </Link>
              </span>
            </div>
            
            <div className="flex flex-col">
              <input
              className="btn mt-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white border-0"
              type="submit"
              value="Login"
            />
              <button  className="btn bg-white text-black border-[#e5e5e5] mt-5">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    );
};

export default LogIn;