import React from "react";
import Container from "../Container/Container";
import NormalCard from "../Container/NormalCard";
import { useAuth } from "../../context/AuthContext";

const ProfileInfo = () => {
  const { user } = useAuth();
  return (
    <Container>
      <NormalCard>
        <h1 className="text-gray-600 text-center font-semibold">User Profile</h1>
        <div className="flex space-x-3 sm:space-x-6">
          <img
            src={user.photoURL ? user.photoURL : ""}
            alt=""
            className="w-20 h-20 object-cover rounded inline sm:w-40"
          />
          <div className="font-medium text-gray-500 shrink">
            <p>
              Name: <span className="text-gray-600 capitalize">{user.displayName}</span>
            </p>
            <p>
              Email: <span className="text-gray-600">{user.email}</span>
            </p>
          </div>
        </div>
      </NormalCard> 
    </Container>
  );
};

export default ProfileInfo;
