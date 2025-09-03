import React from 'react';
import { useLoaderData, Link } from 'react-router';

const BrowseListingsPage = () => {
  const listings = useLoaderData();

  return (
    <>
    <title>All listing</title>
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-sky-500">Browse Roommate Listings</h1>
      <div className='text-center md:text-start'><span className='mb-4 text-2xl font-bold inline-block'>Total listing: <span className='text-green-500'>{listings.length}</span></span></div>

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
          <tbody className='text-black'>
            {listings.map((item) => (
              <tr key={item._id} className="border-t hover:bg-sky-50 transition duration-200">
                <td className="px-4 py-3">{item.title}</td>
                <td className="px-4 py-3">{item.location}</td>
                <td className="px-4 py-3">{item.rentAmount}</td>
                <td className="px-4 py-3">{item.roomType}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                    item.availability === 'Available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {item.availability}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Link to={`/details/${item._id}`}>
                    <button className="bg-sky-500 hover:bg-sky-600 cursor-pointer text-white px-4 py-1.5 rounded-md text-sm">
                      Details
                    </button>
                  </Link>
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

export default BrowseListingsPage;
