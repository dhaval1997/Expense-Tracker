import React from "react";
import ProfileInfo from "../components/Profile.js/ProfileInfo";
import ProfileUpdate from "../components/Profile.js/ProfileUpdate";
import Container from "../components/Container/Container";

const Profile = () => {
  return (
    <>
      <Container>
        <ProfileInfo />
        <div className="m-4"></div>
        <ProfileUpdate />
      </Container>
    </>
  );
};

export default Profile;
