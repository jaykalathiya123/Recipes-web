import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/logo.png" // Replace with your logo path
                        alt="Recipe Food Logo"
                        className="h-10 w-10 mr-2"
                    />
                    <h1 className="text-white text-2xl font-bold">Recipe Food</h1>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">


                    <Link to="/" className="text-white hover:text-yellow-200 transition duration-300" >Home</Link>

                    <Link to="/viewrecipe" className="text-white hover:text-yellow-200 transition duration-300" > View Recipes</Link>
                </nav>
        
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
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
        </header>
    );
};

export default Header;
