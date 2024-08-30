import React from "react";
import "./AHome.css";
import SideBar from "../../components/ADMIN/SideBar";
import NavBar from "../../components/ADMIN/NavBar";
import Widget from "../../components/ADMIN/Widget";

const AHome = () => {
  return (
    <div className="ahome">
      <SideBar />
      <div className="homecontainer">
        <NavBar /> 
        <div className="widgets">
        <Widget type="user"/> 
        <Widget type="order"/> 
        <Widget type="earning"/> 
        <Widget type="balance"/> 
      
      </div>
      </div>
    </div>
  );
};

export default AHome;
