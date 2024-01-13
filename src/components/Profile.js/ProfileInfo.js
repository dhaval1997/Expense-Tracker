import React from "react";
import Container from "../Container/Container";
import NormalCard from "../Container/NormalCard";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.auth); // Access user from the Redux store

  const varified = user.emailVerified ? "Verified" : "Not Verified!";
  return (
    <>
      <NormalCard>
        <h1 className="text-gray-600 text-center p-4 font-semibold">
          User Profile
        </h1>
        <div className="flex space-x-3 sm:space-x-6">
          <img
            src={user.photoURL ? user.photoURL : ""}
            alt=""
            className="w-20 h-20 object-cover rounded inline sm:w-30"
          />
          <div className="font-medium text-gray-500 shrink">
            <p>
              Name:{" "}
              <span className="text-gray-600 capitalize">
                {user.displayName}
              </span>
            </p>
            <p>
              Email: <span className="text-gray-600">{user.email}</span>
            </p>
            <p>
              Verification status: <span className="text-gray-600">{varified}</span>
            </p>
          </div>
        </div>
      </NormalCard>
    </>
  );
};

export default ProfileInfo;
