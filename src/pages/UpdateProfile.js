import React from "react";

const UpdateProfile = () => {
  return (
    <>
      <div className="my-5">
        <h2>Winners never quite, Quitters never win.</h2>
      </div>
      <h1>Contact Details:</h1>
      <form>
        <div className="flex m-5">
          <label>Full Name:</label>
          <input
            type="text"
            className="border bg-gray-50 rounded text-gray-700 h-6 p-2 "
          />
          <label>Profile Photo URL:</label>
          <input
            type="text"
            className="border bg-gray-50 rounded text-gray-700 h-6 p-2 "
          />
        </div>
        <button className="p-1.5 px-4 bg-gray-700 border rounded hover:bg-gray-600 font-semibold text-gray-100">
          Update
        </button>
        <button className="p-1.5 px-4 border rounded hover:bg-red-500 font-semibold text-red-300 ">
          Cancel
        </button>
      </form>
    </>
  );
};

export default UpdateProfile;
