import { motion } from "framer-motion";
import { use } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const BannerOne = () => {
    const {theme} = use(ThemeContext);
  return (
    <div
      className={`relative overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center rounded-2xl shadow-lg
      ${
        theme === "light"
          ? "bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-400"
          : "bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-2xl text-center px-4 sm:px-6"
      >
        <h1
          className={`text-3xl md:text-4xl font-bold mb-4
          ${theme === "light" ? "text-slate-800" : "text-slate-100"}`}
        >
          Find Your Perfect Roommate
        </h1>
        <p
          className={`text-base md:text-lg
          ${theme === "light" ? "text-slate-600" : "text-slate-300"}`}
        >
          Connect with people who share your lifestyle, budget, and location
          preferences.
        </p>
      </motion.div>
    </div>
  );
};

export default BannerOne;