import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <>
    <title>Error</title>
    <motion.main
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, type: "tween", stiffness: 200 }}
      className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center dark:bg-gray-900"
    >
      <div className="relative">
        <h1 className="text-9xl font-extrabold tracking-widest text-gray-900 dark:text-white">
          404
        </h1>
        <div className="absolute top-0 left-0 -translate-x-1 -translate-y-1 rotate-12 transform bg-[#0FA7E9] px-2 text-sm text-white">
          Page Not Found
        </div>
      </div>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-[#0FA7E9] px-5 py-3 font-medium text-white shadow-md transition-colors hover:bg-[#0D94CE] focus:outline-none focus:ring-2 focus:ring-[#0FA7E9] focus:ring-opacity-75"
      >
        Go Back Home
      </Link>
    </motion.main>
    </>
  );
};

export default ErrorPage;
