import React from "react";
import "./SideBar.css";
import {
  Home,
  Users,
  User,
  Box,
  ShoppingCart,
  Truck,
  CheckSquare,
  Bell,
  FileText,
  Settings,
  UserCheck,
  LogOut,
} from "lucide-react"; // Importing suitable icons

import logo from "../../assests/logo.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="Dr.pet Logo" className="logo" />
        {/* <span className="logo">Dr.pet</span> */}
      </div>
      <hr />
      <div className="list-disc pl-6 space-y-2">
        <ul>
          <p className="title">MAIN</p>
          <li className="sidebar-item">
            <Home />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li className="sidebar-item">
            <Users />
            <span>Employees</span>
          </li>
          <li className="sidebar-item">
            <User />
            <span>Customers</span>
          </li>
          <li className="sidebar-item">
            <Box />
            <span>Products</span>
          </li>
          <li className="sidebar-item">
            <ShoppingCart />
            <span>Orders</span>
          </li>
          <li className="sidebar-item">
            <Truck />
            <span>Delivery</span>
          </li>
          <li className="sidebar-item">
            <CheckSquare />
            <span>Status</span>
          </li>
          <li className="sidebar-item">
            <Bell />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li className="sidebar-item">
            <FileText />
            <span>Logs</span>
          </li>
          <li className="sidebar-item">
            <Settings />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li className="sidebar-item">
            <UserCheck />
            <span>Profile</span>
          </li>
          <li className="sidebar-item">
            <LogOut />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default SideBar;
