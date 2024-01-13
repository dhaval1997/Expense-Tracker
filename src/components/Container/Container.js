import React from "react";

const Container = ({children}) => {
  return (
    <div className="mt-4 px-3 sm:mt-6 min-h-screen">
      <div className=" max-w-3xl mx-auto">{children}</div>
    </div>
  );
};

export default Container;
