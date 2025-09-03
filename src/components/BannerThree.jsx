import { motion } from "framer-motion";
import { use } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const BannerThree = () => {
    const {theme} = use(ThemeContext);
  return (
    <div
      className={`relative overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center rounded-2xl shadow-lg
      ${
        theme === "light"
          ? "bg-gradient-to-r from-fuchsia-300 via-purple-300 to-violet-400"
          : "bg-gradient-to-r from-slate-900 via-purple-950 to-fuchsia-950"
      }`}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-2xl text-center px-4 sm:px-6"
      >
        <h1
          className={`text-3xl md:text-4xl font-bold mb-4
          ${theme === "light" ? "text-slate-800" : "text-slate-100"}`}
        >
          Connect & Build Friendships
        </h1>
        <p
          className={`text-base md:text-lg
          ${theme === "light" ? "text-slate-600" : "text-slate-300"}`}
        >
          More than just a roommate – find friends, build networks, and share
          experiences.
        </p>
      </motion.div>
    </div>
  );
};

export default BannerThree;