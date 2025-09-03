import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateFindPostPage = () => {
  const thisData = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newListing = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/listings/${thisData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my-listings")
        }
        else{
           Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: true,
            
          }); 
        }
        
      });
  };

  return (
    <>
    <title>Update listing</title>
    <div className="bg-[#E7F6FD] py-[100px] px-2">
      <form onSubmit={handleUpdateListing} className="max-w-5xl mx-auto">
        <h2 className="text-2xl text-black text-center md:text-5xl font-extrabold leading-tight tracking-tight mb-[50px]">
          Update Your Roommate <span className="text-[#0EA5E9]">Listing</span>
        </h2>
        <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
          <input
            type="text"
            name="title"
            defaultValue={thisData.title}
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md"
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="location"
            defaultValue={thisData.location}
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md"
            placeholder="Location"
            required
          />
          <input
            type="number"
            name="rentAmount"
            defaultValue={thisData.rentAmount}
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md"
            placeholder="Rent Amount"
            required
          />

          <select
            name="roomType"
            defaultValue={thisData.roomType}
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md cursor-pointer"
            required
          >
            <option value="" disabled>
              Select your room type ⬇️
            </option>
            <option value="Single">Single</option>
            <option value="Shared">Shared</option>
          </select>

          <input
            type="text"
            name="lifestyle"
            defaultValue={thisData.lifestyle}
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md"
            placeholder="Lifestyle Preferences (Pets, Smoking, Night Owl, etc.)"
            required
          />
          <textarea
            name="description"
            defaultValue={thisData.description}
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md"
            placeholder="Description"
            required
          />
          <input
            type="tel"
            name="contactInfo"
            defaultValue={thisData.contactInfo}
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md"
            placeholder="Contact Info"
            required
          />

          <select
            name="availability"
            defaultValue={thisData.availability}
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md cursor-pointer"
            required
          >
            <option value="" disabled>
              Select Availability ⬇️
            </option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>

          <input
            type="email"
            value={thisData.userEmail}
            readOnly
            name="userEmail"
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md"
            placeholder="User Email"
          />
          <input
            type="text"
            value={thisData.userName}
            readOnly
            name="userName"
            className="input mb-2 w-full focus:border-2 focus:border-[#0EA5E9] focus:outline-0 focus:shadow-none rounded-md"
            placeholder="User Name"
          />
        </div>
        <div className="max-w-1/2 mx-auto">
          <input
            type="submit"
            value="Update"
            className="btn mt-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xl border-0 rounded-4xl w-full"
          />
        </div>
      </form>
    </div>
    </>
  );
};

export default UpdateFindPostPage;
