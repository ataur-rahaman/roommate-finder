import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const FeaturedCard = ({ singleData }) => {
  return (
    <div className="card border-2 border-gray-900 shadow-md rounded-xl overflow-hidden">
      <div className="card-body bg-[url('https://i.ibb.co.com/chSRjLWg/bg-good.webp')] bg-cover bg-center bg-no-repeat p-4 sm:p-6 rounded-xl space-y-4">

        <h2 className="card-title text-white flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 px-4 bg-gray-700 rounded-[10px] shadow-2xl w-full max-w-full">
          <span className="text-[#0EA5E9]">
            <FaLocationDot />
          </span>
          <span className="truncate">{singleData.location}</span>
        </h2>

        <p className="text-sm text-white sm:text-base text-center py-3 px-4 bg-gray-600 rounded-[10px] shadow-2xl break-words">
          {singleData.title}
        </p>

        <div className="flex text-black flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 py-2 px-3 bg-gray-600 rounded-[10px] shadow-2xl">
          <span className="bg-[#E7F6FD] py-2 px-3 rounded-[10px] text-sm sm:text-base">
            Room Type: <span className="font-bold">{singleData.roomType}</span>
          </span>
          <span className="bg-[#E7F6FD] py-2 px-3 rounded-[10px] text-sm sm:text-base">
            {singleData.availability}
          </span>
        </div>

        <div className="card-actions mt-4">
          <Link to={`/details/${singleData._id}`} className="btn outline-0 border-0 w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-sm sm:text-base rounded-[10px]">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
