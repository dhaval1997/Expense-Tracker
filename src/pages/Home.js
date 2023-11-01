import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>welcome to the Expense Tracker.</h2>
      <h2>
        <span>Your Profile is incomplete.</span>
        <span>
          <Link to="/updateprofile" className="text-blue-600">
            Complete now.
          </Link>
        </span>
      </h2>
    </div>
  );
};

export default Home;
