import { motion } from "framer-motion";
import { use } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const BannerTwo = () => {
    const {theme} = use(ThemeContext);
  return (
    <div
      className={`relative overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center rounded-2xl shadow-lg
      ${
        theme === "light"
          ? "bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-400"
          : "bg-gradient-to-r from-slate-900 via-teal-950 to-emerald-950"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-2xl text-center px-4 sm:px-6"
      >
        <h1
          className={`text-3xl md:text-4xl font-bold mb-4
          ${theme === "light" ? "text-slate-800" : "text-slate-100"}`}
        >
          Affordable Living, Made Easy
        </h1>
        <p
          className={`text-base md:text-lg
          ${theme === "light" ? "text-slate-600" : "text-slate-300"}`}
        >
          Save on rent and utilities by sharing spaces with trustworthy
          roommates.
        </p>
      </motion.div>
    </div>
  );
};

export default BannerTwo;