import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyListingsPage = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/listings?email=${user.email}`)
        .then((res) => res.json())
        .then((allData) => setMyData(allData));
    }
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/listings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                const newMyData = myData.filter(data => data._id !== _id);
                setMyData(newMyData);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <>
    <title>My listing</title>
      <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-sky-500">
          My Roommate Listings
        </h1>
        <div className="text-center md:text-start">
          <span className="mb-4 text-2xl font-bold inline-block">
            Total listing: <span className="text-green-500">{myData.length}</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-sky-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Rent (৳)</th>
                <th className="px-4 py-3 text-left">Room Type</th>
                <th className="px-4 py-3 text-left">Availability</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {myData.map((item) => (
                <tr
                  key={item._id}
                  className="border-t hover:bg-sky-50 transition duration-200"
                >
                  <td className="px-4 py-3">{item.title}</td>
                  <td className="px-4 py-3">{item.location}</td>
                  <td className="px-4 py-3">{item.rentAmount}</td>
                  <td className="px-4 py-3">{item.roomType}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${
                        item.availability === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.availability}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      className="bg-sky-500 mr-2 hover:bg-sky-600 cursor-pointer text-white px-4 py-1.5 rounded-md text-sm"
                      to={`/update/${item._id}`}
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-700 hover:bg-red-600 cursor-pointer text-white px-4 py-1.5 rounded-md text-sm mt-2 md:mt-0"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyListingsPage;
