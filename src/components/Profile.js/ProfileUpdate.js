import React, { useRef } from "react";
import Container from "../Container/Container";
import NormalCard from "../Container/NormalCard";
import { useAuth } from "../../context/AuthContext";

const ProfileUpdate = () => {
  const { user, updateUserProfile } = useAuth();
  console.log("user from profile", user);
  console.log("user from profile", updateUserProfile);
  const nameRef = useRef();
  const photoRef = useRef();
  const profileUpdateHandler = (e) => {
    e.preventDefault();
    const newName = nameRef.current.value;
    const newPhotoURL = photoRef.current.value;
    updateUserProfile(newName, newPhotoURL);
  };

  return (
    <Container>
      <NormalCard>
        <h1 className="text-gray-600 text-center p-4 font-semibold">
          Update Profile
        </h1>
        <form onSubmit={profileUpdateHandler}>
          <div className="grid sm:grid-cols-3 gap-3 text-gray-600">
            <div className="space-y-1">
              <label className="font-medium">Name</label>
              <input
                type="text"
                style={{ outline: "none" }}
                required
                ref={nameRef}
                className="w-full text-gray-700 border rounded border-gray-300 h-9 p-2 "
              />
            </div>
            <div className="space-y-1">
              <label className="font-medium">
                Photo URL<span className="font-light">(optional)</span>
              </label>
              <input
                type="text"
                style={{ outline: "none" }}
                ref={photoRef}
                className="w-full text-gray-700 border rounded border-gray-300 h-9 p-2 "
              />
            </div>
            <button
              type="submit"
              className="bg-gray-600 py-1.5 px-4 rounded hover:bg-gray-700 font-semibold text-gray-50 self-end sm:mt-0 mt-2"
            >
              Update
            </button>
          </div>
        </form>
      </NormalCard>
    </Container>
  );
};

export default ProfileUpdate;
