import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
    {/* logo and title */}
      <div className="flex items-center space-x-3">
        <img
          src="/images/flowerlogo.jpeg"
          alt="Flower Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-xl font-bold text-green-700 dark:text-green-300">
          Bloom Basket
        </span>
      </div>

      {/* Theme Toggle Button  */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:scale-105 transition-transform"
        title="Toggle Theme"
      >
        <div className="bg-white rounded-full p-2 shadow-md dark:bg-gray-700">
          {theme === "light" ? (
            <FaMoon size={20} className="text-black" />
          ) : (
            <FaSun size={20} className="text-yellow-400" />
          )}
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
