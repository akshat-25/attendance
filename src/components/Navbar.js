import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-black via-stone-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center pt-3">
                <img className="h-20 w-20 rounded-full" src={logo} alt="Logo" />
                <p className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl font-black ml-5">
                  Attendance Tracker
                </p>
              </div>
              <div className="flex flex-row items-center pt-2">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-md font-medium"
                    to="/"
                  >
                    Home
                  </Link>
                </div>
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-md font-medium"
                    to="/about"
                  >
                    {" "}
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
