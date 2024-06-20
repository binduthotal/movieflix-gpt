import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../reduxStore/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
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
                <button
                    className="rounded-lg bg-red-600 text-white font-semibold px-4 py-1"
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Header;