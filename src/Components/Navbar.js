/* eslint-disable jsx-a11y/anchor-is-valid */
// Navbar.js
import React from "react";
import logo from "../logo.png";

function Navbar() {
  return (
    <nav className="bg-purple-600 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">
            <img src={logo} alt="Your Logo" className="w-22 h-16" />
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
