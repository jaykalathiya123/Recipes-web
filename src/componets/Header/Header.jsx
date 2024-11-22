import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <header className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 shadow-lg">
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* Logo */}
            <div className="flex items-center">
            <div className="text-[40px] mr-3">
            🍽
            </div>
              <h1 className="text-white text-2xl font-extrabold tracking-wide">
                Recipe Food
              </h1>

            </div>
      
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link
                to="/"
                className="text-white text-lg hover:text-blue-200 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/viewrecipe"
                className="text-white text-lg hover:text-blue-200 transition duration-300"
              >
                View Recipes
              </Link>

              <Link  to="/LoginFrom"  className="bg-black p-3 text-white"  >
                Login
            </Link>

            <Link  to="/registerform"  className="bg-black p-3 text-white"  >
                registerform
            </Link>
            </nav>
      
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={handleMobileMenuToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
      
          {/* Mobile Dropdown Menu */}
          <div
            id="mobile-menu"
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } bg-blue-600 text-white md:hidden`}
          >
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-blue-500 transition duration-300"
              onClick={handleMobileMenuToggle}
            >
              Home
            </Link>
            <Link
              to="/viewrecipe"
              className="block px-4 py-2 hover:bg-blue-500 transition duration-300"
              onClick={handleMobileMenuToggle}
            >
              View Recipes
            </Link>
            <Link
              to="/viewrecipe"
              className="block px-4 py-2 hover:bg-blue-500 transition duration-300"
              onClick={handleMobileMenuToggle}
            >
              View Recipes
            </Link>

            <Link
              to="/LoginFrom"
              className="block px-4 py-2 hover:bg-blue-500 transition duration-300"
              onClick={handleMobileMenuToggle}
            >
              Login
            </Link>

            
          </div>
        </header>
      );
      
};

export default Header;
