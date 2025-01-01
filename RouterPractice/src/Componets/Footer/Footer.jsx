import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {

    return(
       <>
         <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="flex justify-center space-x-4">
        <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
        <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
        <a href="#contact" className="hover:text-gray-400">Contact Us</a>
      </div>
      <div className="text-center mt-4 text-sm">
        <p>&copy; 2024 MySite. All rights reserved.</p>
        <img
          src="https://www.example.com/sample-image.jpg"
          alt="Footer Image"
          className="mx-auto mt-2 h-16 w-16 rounded-full"
        />
      </div>
    </footer>

        </>
    )
    
}