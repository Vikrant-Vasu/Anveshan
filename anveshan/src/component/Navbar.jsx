import React from "react";
import { useState } from "react";

import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link} from "react-router-dom";

function Navbar() {

 

  return (
    <nav className="bg-white w-full z-10 fixed top-0 shadow-lg">
      <div className="container mx-auto py-2 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            {" "}
            <img
              src="https://www.anveshan.farm/cdn/shop/files/anveshan-logo-jan2024.png?v=1704711118&width=180"
              alt="Logo"
              className="h-6 mr-4"
            />
          </Link>
        </div>

        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-500 hover:text-black">
              Sampler Kit
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-black">
              Shop by Category
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-black">
              Shop by Solution
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-black">
              Our Story
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-black">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-black">
              Traceability
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-black">
              Refund Policy
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          <button className="text-green-800 hover:text-green-900">
            <FaSearch />
          </button>

          <button className="text-green-800 hover:text-green-900">
            <FaUser />
          </button>

          <button
            
            className="text-green-800 hover:text-green-900"
          >
            <Link to="/Cart">
              <FaShoppingCart />
            </Link>
          </button>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;

