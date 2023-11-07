import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { logoutAction } from "../../store/authActions"; 

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const logoutHandler = async () => {
    try {
      dispatch(logoutAction()); // Dispatch the logout action
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
        {user ? (
          <>
            <NavLink
              to={"/profile"}
              className={({ isActive }) => {
                return isActive
                  ? "flex text-gray-50"
                  : "flex text-gray-300 hover:text-gray-100";
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
          </>
        ) : (
          <>
            <NavLink to="/login" className="text-gray-200 hover:text-gray-100">
              Log In
            </NavLink>
            <NavLink to="/signup" className="text-gray-200 hover:text-gray-100">
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
