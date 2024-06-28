import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import BackgroundImg from "./BackgroundImg";
import Footer from "./footer/Footer";

const Body = () => {

    return (
      <div className="w-full max-h-full bg-black">
        <BackgroundImg />
        <Outlet />
        <Header />
        <Footer />
      </div>
    );
};

export default Body;
