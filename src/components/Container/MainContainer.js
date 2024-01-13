import React from 'react';

const MainContainer = ({ children }) => {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center bg-gray-100">
      {children}
    </div>
  );
};

export default MainContainer;
