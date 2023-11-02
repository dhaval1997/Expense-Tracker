import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { logOut } = useAuth();
  const logoutHandler = async () => {
    try {
      await logOut();
    } catch (err) {
        console.error(err);
    }
  };
  return (
    <div className="bg-gray-600 px-4 py-2">
      <div className="max-w-3xl mx-auto gap-5 flex items-center justify-end">
        <NavLink to="/" className={"me-auto"}>
          <h1 className="font-semibold text-2xl text-gray-50">
            Expense Tracker
          </h1>
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => {
            return isActive
              ? "flex text-gray-100"
              : "flex text-gray-200 hover:text-gray-100";
          }}
        >
          Profile
        </NavLink>
        <button
          className="bg-gray-200 px-3 py-0.5 rounded text-gray-600 hover:bg-gray-100"
          onClick={logoutHandler}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
