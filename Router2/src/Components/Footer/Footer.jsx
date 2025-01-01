import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <div className="mt-2">
          <NavLink
            to="/privacy-policy"
            className="text-gray-400 hover:text-white mx-2"
            activeClassName="text-yellow-500"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms-of-service"
            className="text-gray-400 hover:text-white mx-2"
            activeClassName="text-yellow-500"
          >
            Terms of Service
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-gray-400 hover:text-white mx-2"
            activeClassName="text-yellow-500"
          >
            Contact Us
          </NavLink>
        </div>
        <div className="mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
