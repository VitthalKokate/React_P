import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <NavLink to="/" exact className="hover:text-gray-400">
            My Website
          </NavLink>
        </div>
        <div className="space-x-4">
          <NavLink
            to="/"
            exact
            className="text-white hover:text-gray-400"
            activeClassName="text-yellow-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-gray-400"
            activeClassName="text-yellow-500"
          >
            About Us
          </NavLink>
          <NavLink
            to="/ContactForm"
            className="text-white hover:text-gray-400"
            activeClassName="text-yellow-500"
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
