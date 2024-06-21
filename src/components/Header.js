import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../reduxStore/userSlice";
import { toggleGptSearchView } from "../reduxStore/gptSlice";

const Header = () => {

    const toggleGpt = useSelector((store) => store.gptSearch.showGptSearchPage);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userSignedIn, setUserSignedIn] = useState(false);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserSignedIn(true);
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, displayName, email, photoURL } = user;
                dispatch(
                    addUser({
                        userId: uid,
                        userName: displayName,
                        email: email,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unSubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    };

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView());
    };

    return (
        <div className="absolute top-0 bg-gradient-to-b from-black bg-opacity-55 w-full ">
            {/* <div className="flex justify-between mx-10 sm:mx-10 lg:mx-52 mt-5 items-center"> */}
            <div
                className={`${!toggleGpt && "flex justify-between"}  mx-4 mt-5 items-center ${userSignedIn ? "lg:mx-5" : "lg:mx-52"
                    } `}
            >
                <a href="/">
                    <img className="w-28 sm:w-40" src={LOGO_URL} alt="logo" />
                </a>
                {userSignedIn ? (
                    <div className="flex justify-around">
                        <button
                            className="rounded-lg bg-purple-700 text-white font-semibold px-4 py-1 mr-4"
                            onClick={handleGptSearch}
                        >
                            {toggleGpt ? "Home" : "Gpt Search"}
                        </button>
                        {toggleGpt && (
                            <select
                                className="rounded-lg  text-black font-semibold px-4 py-1"
                            >
                                <option value="eng">English</option>
                            </select>
                        )}
                        <button
                            className="rounded-lg bg-red-600 text-white font-semibold px-4 py-1"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link to="/signIn">
                        <button className="rounded-lg bg-red-600 text-white font-semibold px-4 py-1">
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
