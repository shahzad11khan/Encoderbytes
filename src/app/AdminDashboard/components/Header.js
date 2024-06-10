"use client";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between opacity-90 w-full">
      {/* Left side: Logo */}
      <div className="flex items-center">
        <Image
          src="/logos/logo.png"
          alt="Logo"
          className="h-8 w-auto"
          height={200}
          width={200}
        />
      </div>

      {/* Middle: Encoderbytes */}
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold">Encoderbytes</h1>
      </div>

      {/* Right side: Profile image and dropdown */}
      <div className="flex items-center">
        <div className="relative">
          <Image
            src="/clients/markus1.png"
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
            height={70}
            width={70}
            onClick={toggleDropdown}
          />
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-10 text-black">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
