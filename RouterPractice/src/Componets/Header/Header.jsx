import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header(){

    return(
        <>
 <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center text-white">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-semibold">MySite</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink to="/" className="hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="about" className="hover:text-gray-400">
            About
          </NavLink>
          <NavLink to="/contactus" className="hover:text-gray-400">
            Contact Us
          </NavLink>
          <NavLink to="/login" className="hover:text-gray-400">
            Login
          </NavLink>
        </div>
      </nav>
    </header>
        </>
    )
}