import React from "react";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import { Globe, Moon, Bell, MessageCircle, List, Maximize } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <div className="items">
          <div className="item">
            <Globe className="icon" />
            English
          </div>
          <div className="item">
            <Moon className="icon" />
          </div>
          <div className="item">
            <Maximize className="icon" />
          </div>
          <div className="item">
            <MessageCircle />
            <div className="counter" > 2 </div>
          </div>
          <div className="item">
            <Bell className="icon" />
            <div className="counter" > 1 </div>
          </div>
          <div className="item">
            <List className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
