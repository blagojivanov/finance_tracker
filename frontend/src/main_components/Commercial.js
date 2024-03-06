import React from "react";
import {ReactComponent as User} from "../images/images_svg/User.svg";
import "./Commercial.css";
import {Link} from "react-router-dom";

export default function Commercial() {

    const Commercial_style = {
        textDecoration: 'none',
    }
    return (
        <div className="web_commercial">
            <User className="user_icon"/>
            <Link id={localStorage.darkTheme === "true" ? "dark" : "light"} style={Commercial_style} to="/subscribe"
                  className="web_text">Subscribe now & keep track of all your favorite stocks</Link>
        </div>
    )
}