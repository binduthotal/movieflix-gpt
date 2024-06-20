import React from "react";
import { BACKGROUNG_IMG_URL } from "../utils/constants";
import Header from "./Header";
import { Outlet } from "react-router";

const Body = () => {

    return (
        <div className="w-full max-h-full bg-black">
            <img
                className="w-full h-lvh object-cover hidden sm:block"
                alt="Background"
                src={BACKGROUNG_IMG_URL}
            />
            <Outlet />
            <Header />
        </div>
    );
};

export default Body;
