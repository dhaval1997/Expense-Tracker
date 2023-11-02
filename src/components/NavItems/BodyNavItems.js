import React from "react";
import { NavLink } from "react-router-dom";

const BodyNavItems = ({ path = "", title, div }) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive
            ? "flex flex-col sm:flex-row items-center text-gray-700"
            : "flex flex-col sm:flex-row items-center text-gray-400";
        }}
      >
        <h2 className="m-1 ms-0.5 font-semibold">{title}</h2>
      </NavLink>
      {div && <div className=" min-w-[1.3px] bg-gray-200 rounded"></div>}
    </>
  );
};

export default BodyNavItems;
