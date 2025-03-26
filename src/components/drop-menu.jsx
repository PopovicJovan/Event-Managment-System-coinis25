import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImage from "../assets/logo.png";
import { useAuthContext } from "../context/auth-context";

export const DropMenuComponent = ({ onclick, isdrop, children, icon }) => {
  return (
    <div className="relative inline-block">
      <button
        className="text-white p-2 hover:text-purple-700 transition-all duration-300 ease-in-out cursor-pointer"
        onClick={onclick}
      >
        {icon}
      </button>
      {isdrop && (
        <div className="absolute left-0 top-full z-10 bg-gray-800 text-white rounded-md shadow-lg mt-2 p-4 min-w-[200px]">
          {children}
        </div>
      )}
    </div>
  );
};
