import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import BackgroundImg from "./BackgroundImg";

const Body = () => {

    return (
        <div className="w-full max-h-full bg-black">
            <BackgroundImg/>
            <Outlet />
            <Header />
        </div>
    );
};

export default Body;
