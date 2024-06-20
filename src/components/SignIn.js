import {
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { checkValidData } from "../utils/checkValidation";
import GoogleSignIn from "./GoogleSignIn";

const SignIn = () => {
    const [errorMsg, setErrorMsg] = useState(null);

    const passwordRef = useRef();
    const emailRef = useRef();

    const handleSignIn = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(error.code);
            });
    };

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent!")
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(error.code);
            });
    };

    return (
        <div className="absolute w-full h-full top-0 left-0 right-0  bg-black sm:bg-opacity-55">
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full h-fit sm:w-[50%] lg:w-[30%] my-20 lg:my-36 sm:my-10 text-center mx-auto px-8 sm:px-14 sm:py-3 lg:py-9 bg-black bg-opacity-75 grid gap-3 lg:gap-5 "
            >
                <label className="text-white text-left text-4xl font-bold">
                    Sign In
                </label>
                <input
                    ref={emailRef}
                    className="px-5 py-3 rounded-md bg-black bg-opacity-10 border border-solid border-neutral-500 text-white"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    ref={passwordRef}
                    className="px-5 py-3 rounded-md bg-black bg-opacity-10 border border-solid border-neutral-500 text-white"
                    type="password"
                    placeholder="Password"
                />
                <button
                    className="bg-red-600 w-full py-3 text-white font-medium rounded-md"
                    onClick={handleSignIn}
                >
                    Sign In
                </button>
                <p className="text-red-600">{errorMsg}</p>
                <h1
                    className="text-white text-left hover:underline cursor-pointer"
                    onClick={handleForgotPassword}
                >
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
                <GoogleSignIn />
            </form>
        </div>
    );
};

export default SignIn;
