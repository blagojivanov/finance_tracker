import React from "react";
import {ReactComponent as Code_1} from "../images/images_svg/qr-code.svg";
import qr_dark from "../images/images_png/qr-code-dark.png";
import qr_white from "../images/images_png/qr-code-white.png";
import "./QR_Code.css";

export default function QR_Code() {

    return (
        <div className="drop_down">
            <Code_1 id={localStorage.darkTheme === "true" ? "dark" : "light"} className="code"/>
            <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="drop_down_content">
                {localStorage.darkTheme === "true" ? <img className="qr_image" src={qr_dark} alt="QR-code-dark"/> :
                    <img className="qr_image" src={qr_white} alt="QR-code-white"/>}
                <span id={localStorage.darkTheme === "true" ? "dark" : "light"} className="drop_down_text_1">Scan to Download App</span>
                <span id={localStorage.darkTheme === "true" ? "dark" : "light"} className="drop_down_text_2">IOS & Android</span>
                <span id={localStorage.darkTheme === "true" ? "dark" : "light"} className="drop_down_border"></span>
            </div>
        </div>
    )
}