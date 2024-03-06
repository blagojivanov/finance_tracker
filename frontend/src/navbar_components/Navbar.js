import React from "react";
import "./Navbar.css";
import QR_Code from "./QR_Code";
import {ReactComponent as Logo_1} from "../images/images_svg/Navbar_Logo_1.svg";
import {ReactComponent as Logo_2} from "../images/images_svg/Navbar_Logo_2.svg";
import {Link} from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <nav>
                <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="nav_1">
                    <ul id={localStorage.darkTheme === "true" ? "dark" : "light"} className="navbar">
                        {localStorage.darkTheme === "true" ? <Logo_2 className="navbar_logo"/> :
                            <Logo_1 className="navbar_logo"/>}
                        <li>
                            <Link
                                to="/"
                                id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                className="navbar_text">Home</Link>
                        </li>
                        <li>
                            <Link
                                to="/f.a.q."
                                id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                className="navbar_text">F.A.Q.</Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                className="navbar_text">About</Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                className="navbar_text">Contact</Link>
                        </li>
                        <QR_Code/>
                        <Link
                            to="/subscribe"
                            className="subscribe"
                            role="button">Subscribe</Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};