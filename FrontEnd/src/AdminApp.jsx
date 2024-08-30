import React from "react";
import { Route, Routes } from "react-router-dom";

import AHome from "./Pages/Admin/aHome";
import ALogin from "./Pages/Admin/aLogin";
import AList from "./Pages/Admin/AList";
import ANew from "./Pages/Admin/aNew";
import ASingle from "./Pages/Admin/aSingle";

// Define or import userInputs and productInputs here
const userInputs = []; // Replace with actual user inputs configuration
const productInputs = []; // Replace with actual product inputs configuration

const AdminApp = () => {
  return (
    <div className="AdminApp">
      <Routes>
        <Route path="/" element={<AHome />} />
        <Route path="login" element={<ALogin />} />
        <Route path="users">
          <Route index element={<AList />} />
          <Route path=":userId" element={<ASingle />} />
          <Route path="new" element={<ANew inputs={userInputs} title="Add New User" />} />
        </Route>
        <Route path="products">
          <Route index element={<AList />} />
          <Route path=":productId" element={<ASingle />} />
          <Route path="new" element={<ANew inputs={productInputs} title="Add New Product" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminApp;
