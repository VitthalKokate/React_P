import React from 'react'
import {NavLink} from 'react-router-dom'

function Head() {
  return (
   <>
    <div className=" bg-gray-100">
        {/* Header Section with Navigation Links */}
        <header className="bg-blue-600 p-4 shadow-md">
          <nav className="container mx-auto flex justify-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 text-white text-lg font-semibold' : 'text-white text-lg font-semibold hover:text-yellow-300'
              }
            >
              First Page
            </NavLink>
            <NavLink
              to="/results"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 text-white text-lg font-semibold' : 'text-white text-lg font-semibold hover:text-yellow-300'
              }
            >
              Results Page
            </NavLink>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 text-white text-lg font-semibold' : 'text-white text-lg font-semibold hover:text-yellow-300'
              }
            >
              Update Page
            </NavLink>
          </nav>
        </header>
      </div>
   </>
  )
}

export default Head;