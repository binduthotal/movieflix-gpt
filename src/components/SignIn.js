import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState(null);
    const password = useRef();
    return (
        <div className="absolute w-full h-full top-0 left-0 right-0  bg-black sm:bg-opacity-55">
            <form className="w-full h-fit sm:w-[50%] lg:w-[30%] my-20 lg:my-40 sm:my-10 text-center mx-auto px-8 sm:px-14 sm:py-3 lg:py-10 lg:pb-28 bg-black bg-opacity-75 grid gap-3 lg:gap-7 ">
                <label className="text-white text-left text-4xl font-bold">
                    Sign In
                </label>
                <input
                    className="px-5 py-3 rounded-md bg-black bg-opacity-10 border border-solid border-neutral-500 text-white"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    ref={password}
                    className="px-5 py-3 rounded-md bg-black bg-opacity-10 border border-solid border-neutral-500 text-white"
                    type="password"
                    placeholder="Password"
                />
                <button className="bg-red-600 w-full py-3 text-white font-medium rounded-md">
                    Sign In
                </button>
                <h1 className="text-white text-left hover:underline cursor-pointer">
                    Forgot Password?
                </h1>
                <div className="text-left px-2 flex items-center">
                    <input type="checkbox" className="size-5 mr-2" />
                    <label className="text-white text-lg">Remember me?</label>
                </div>
                <h1 className="text-white text-left">
                    New to Netflix?
                    <Link to="/" className="font-semibold hover:underline">
                        Sign Up now
                    </Link>
                </h1>
            </form>
        </div>
    );
};

export default SignIn;
