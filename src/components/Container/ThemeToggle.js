// ThemeToggle.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
        />
      </label>
    </div>
  );
};

export default ThemeToggle;
