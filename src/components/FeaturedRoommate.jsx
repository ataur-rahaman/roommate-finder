import React, { use } from "react";
import FeaturedCard from "./FeaturedCard";
import { ThemeContext } from "../theme/ThemeContext";
import { Typewriter } from 'react-simple-typewriter'

const FeaturedRoommate = ({ featuredData }) => {
  const {theme} = use(ThemeContext);

  return (
    <div className={theme === "light" ? "bg-white" : "bg-gray-700"}>
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 ${theme === "light" ? "bg-white" : "bg-gray-700"}`}>
  <h1 className={`text-3xl ${theme === "light" ? "text-black" : "text-white"} sm:text-4xl md:text-5xl font-extrabold text-center leading-tight tracking-tight mb-10 sm:mb-14`}>
    Recommended <span>For You - </span>
    <span style={{ color: '#0EA5E9', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Best-match', 'Better-home', 'Good-vibe']}
            loop={30}
            cursor
            cursorStyle='>'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
  </h1>

  <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {
      featuredData.map(singleData => (
        <FeaturedCard key={singleData._id} singleData={singleData} />
      ))
    }
  </div>
</div>
</div>

  );
};

export default FeaturedRoommate;
