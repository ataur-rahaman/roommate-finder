import React from 'react';
import { useLoaderData } from 'react-router'; // Use react-router-dom not 'react-router'

const DetailsPage = () => {
  const {
    title,
    location,
    rentAmount,
    roomType,
    lifestyle,
    description,
    contactInfo,
    availability,
    userEmail,
    userName,
  } = useLoaderData();

  return (
    <div className="min-h-screen bg-[#F0F9FF] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-[#0EA5E9]">{title}</h1>

        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Location:</span> {location}
          </div>
          <div>
            <span className="font-semibold">Rent Amount:</span> ৳{rentAmount}
          </div>
          <div>
            <span className="font-semibold">Room Type:</span> {roomType}
          </div>
          <div>
            <span className="font-semibold">Lifestyle:</span> {lifestyle}
          </div>
          <div>
            <span className="font-semibold">Availability:</span> {availability}
          </div>
          <div>
            <span className="font-semibold">Contact:</span> {contactInfo}
          </div>
          <div>
            <span className="font-semibold">Posted By:</span> {userName}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {userEmail}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mt-4 mb-1">Description</h2>
          <p className="whitespace-pre-line bg-[#E7F6FD] p-4 rounded-md text-gray-800 break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
