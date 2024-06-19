import React from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="absolute top-0 bg-gradient-to-b from-black bg-opacity-55 w-full ">
            <div className="flex justify-between mx-10 sm:mx-10 lg:mx-52 mt-5 items-center">
                <a href="/">
                    <img className="w-28 sm:w-40" src={LOGO_URL} alt="logo" />
                </a>
                <Link to="/signIn">
                    <button className="rounded-lg bg-red-600 text-white font-semibold px-4 py-1">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
