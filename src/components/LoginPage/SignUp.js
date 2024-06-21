import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebaseConfig";
import { USER_PHOTO_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../../reduxStore/userSlice";
import { checkValidData } from "../../utils/checkValidation";
import GoogleSignIn from "./GoogleSignIn";

const SignUp = () => {
    const dispatch = useDispatch();

    const [errorMsg, setErrorMsg] = useState(null);

    const passwordRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef();

    const handleSignUp = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;

        const validation = checkValidData(email, password, name);

        if (validation) {
            console.log((validation, "valid Message"));
            setErrorMsg(validation);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: USER_PHOTO_URL,
                })
                    .then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL,
                            })
                        );
                        // ...
                    })
                    .catch((error) => {
                        setErrorMsg(error.message);
                        // An error occurred
                        // ...
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(error);
                // ..
            });
    };

    return (
        <div className="absolute w-full h-full top-0 left-0 right-0  bg-black sm:bg-opacity-55">
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full h-fit sm:w-[50%] lg:w-[30%] my-20 lg:my-36 sm:my-10 text-center mx-auto px-8 sm:px-14 sm:py-3 lg:py-9 bg-black bg-opacity-75 grid gap-3 lg:gap-5 "
            >
                <label className="text-white text-left text-4xl font-bold">
                    Sign Up
                </label>
                <input
                    ref={emailRef}
                    className="px-5 py-3 rounded-md bg-black bg-opacity-10 border border-solid border-neutral-500 text-white"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    ref={nameRef}
                    className="px-5 py-3 rounded-md bg-black bg-opacity-10 border border-solid border-neutral-500 text-white"
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    ref={passwordRef}
                    className="px-5 py-3 rounded-md bg-black bg-opacity-10 border border-solid border-neutral-500 text-white"
                    type="password"
                    placeholder="Password"
                />
                <button
                    className="bg-red-600 w-full py-3 text-white font-medium rounded-md"
                    onClick={handleSignUp}
                >
                    Sign Up
                </button>
                <p className="text-red-600">{errorMsg}</p>
                <div>
                    <div className="text-left px-2 flex items-center my-1">
                        <input type="checkbox" className="size-5 mr-2" />
                        <label className="text-white text-lg">Remember me?</label>
                    </div>
                    <h1 className="text-white text-left">
                        Already a member?
                        <Link to="/signIn" className="font-semibold hover:underline">
                            Sign In
                        </Link>
                    </h1>
                </div>
               <GoogleSignIn/>
            </form>
        </div>
    );
    //  (
    //   <div className="absolute w-full h-full top-0 left-0 right-0  bg-black bg-opacity-65">
    //     <div className="text-white text-center sm:my-64 sm:grid sm:gap-6  hidden">
    //       <h1 className="font-extrabold text-5xl ">
    //         Unlimited movies, TV shows and more
    //       </h1>
    //       <h1 className="text-3xl">Watch anywhere. Cancel anytime.</h1>
    //       <h1 className="text-3xl">
    //         Ready to watch? Enter your email to create or restart your
    //         membership.
    //       </h1>
    //       <div className="flex justify-center items-center">
    //         <input
    //           className=" mr-4 border border-solid border-neutral-500 w-[20%] px-4 py-4 bg-black bg-opacity-65"
    //           type="email"
    //           placeholder="Email address"
    //         />
    //         <button
    //           className="bg-red-600 text-white font-semibold text-2xl px-8 py-3 rounded-md"
    //           onClick={handleOnClick}
    //         >
    //           Get Started
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // );
};

export default SignUp;
