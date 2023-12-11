import React from "react";
import Logo from "../Logo";

// Import Icons from react icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-stone-800 py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <Logo size="large" />
            {/* <span className="font-bold text-lg">Airbnb Clone</span> */}
          </div>

          <div className="flex space-x-4 font-semibold">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Listings
            </a>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>

        <hr className="my-4 border-gray-500" />

        <div className="flex justify-between">
          {/* Copy right */}
          <div className="text-sm text-gray-500">
            <p>&copy; 2023 Airbnb Clone. All rights reserved.</p>
            <p>Designed and developed Nikhil</p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3 clear-right">
            {/* Instagram Icon */}
            <FaFacebook className="hover:text-gray-400 cursor-pointer" />
            {/* LinkedIn Icon */}
            <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
            {/* Twitter Icon */}
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            {/* Facebook Icon */}
            <FaFacebook className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
