import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "src/Components/Layout/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
