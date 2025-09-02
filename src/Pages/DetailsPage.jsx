import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { SlLike } from "react-icons/sl";
import { motion } from "framer-motion";
import { AuthContext } from "../auth/AuthContext";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";

const DetailsPage = () => {
  const { user } = use(AuthContext);
  const [likesData, setLikesData] = useState(null);
  // console.log(user);
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
    _id,
  } = useLoaderData();

  const handleLikes = () => {
    const thisId = _id;
    const thisEmail = userEmail;
    const likerEmail = user.email;
    const likeData = { thisId, thisEmail, likerEmail };

    if (thisEmail === likerEmail) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not able to like your won listing",
      });
      return;
    } else {
      fetch("http://localhost:3000/likes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(likeData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("You liked this listing", {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            setLikesData(likesData + 1)
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/likes/count?thisId=${_id}`)
    .then(res => res.json())
    .then(likes => {
      console.log(likes);
      setLikesData(likes.count);
    })
  },[_id])
// console.log(likesData);
  return (
    <div className="min-h-screen bg-[#F0F9FF] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-xl p-6 space-y-4">
        <p className="text-black text-xl border-2 border-t-0 border-x-0 py-4 px-3 border-[#E7F6FD] rounded-[5px]"><span className="text-green-500 text-2xl p-2 border-2 rounded-[5px]">{likesData}</span> people interested in</p>
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
          <h2 className="text-lg text-black font-semibold mt-4 mb-1">
            Description
          </h2>
          <p className="whitespace-pre-line bg-[#E7F6FD] p-4 rounded-md text-gray-800 break-words">
            {description}
          </p>
        </div>
        <div className="flex items-center ">
          <motion.span
            onClick={handleLikes}
            whileHover={{ scale: 1.03 }}
            className="flex items-center cursor-pointer gap-2 text-white text-md font-bold py-2 px-3 bg-[#0EA5E9] hover:shadow-xs rounded-[8px]"
          >
            <SlLike /> Like {likesData}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
