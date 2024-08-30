import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png"; // Adjust the path as needed

import cart_icon from "../assests/cart.png";
import heart_icon from "../assests/heart.png";
import profile_icon from "../assests/profile.png";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} height="40px" width="40px" alt="Dr.Pet Logo" />
        </Link>

        <ul className="hidden sm:flex gap-4 text-slate-500">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/Team" className="hover:underline">
              Team
            </Link>
          </li>
          <li>
            <Link to="/Services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link to="/Products" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        <form className="bg-slate-100 p-1 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none w-20 sm:w-60"
          />
          <FaSearch className="w-5 h-5 text-slate-600" />
        </form>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Link to="/Wishlist">
              <img src={heart_icon} width="40px" alt="Wishlist" />
            </Link>
            <div className="absolute top-0 bottom-0 right-0 left-7 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
              0
            </div>
          </div>

          <div className="relative">
            <Link to="/Cart">
              <img src={cart_icon} width="45px" alt="Cart" />
            </Link>
            <div className="absolute top-0 right-0 left-7 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
              0
            </div>
          </div>

          <Link to="/login">
            <img src={profile_icon} width="40px" alt="login" />
          </Link>
        </div>
      </div>
    </header>
  );
}
