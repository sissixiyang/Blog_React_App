import {Avatar} from "@material-ui/core"
import React,{ useState } from "react";
import {GoogleLogout} from "react-google-login";
import { useDispatch, useSelector} from "react-redux"
import {
    selectSignedIn,
    selectUserData,
    setInput,
    setSignedIn,
    setUserData,
} from "../features/userSlice";

import "../styling/navbar.css"

const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech");// 1. name of variable/constant that is storing value;2. change this value:set...
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData)

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    }
    return (
        <div className ="navbar">
            <h1 className = "navbar__header">
                BlogMania
            </h1>
            {isSignedIn && (
                <div className ="blog__search">
                    <input className = "search" placeholder = "Search for a blog" value = {inputValue} onChange = {(e) => setInputValue(e.target.value)}/>
                    <button className = "submit" onClick ={handleClick}> Search</button>
                </div>      
            )}

            {isSignedIn ? (
                <div className = "navbar__user__data">
                    <Avatar 
                        className = "user"
                        src = {userData?.imageUrl}
                        alt = {userData?.name}
                    />
                    <h1 className ="signedInd">{userData?.giveName}</h1>
                    <GoogleLogout
                        clientId="291688090734-8cm43jgpp07og23bs5k5337airfpvigh.apps.googleusercontent.com" //attribute; render also;
                        render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className = "logout__button"
                        >
                            Login out
                        </button>
                        )}
                        onLogoutSuccess={logout}
                    />
                </div>
            ): (
                <h1 className ="notSignedIn"> User not available</h1>
            )}
        </div>
    )
}

export default Navbar;