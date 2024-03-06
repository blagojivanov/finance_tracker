import React, {useState} from "react";
import Navbar from "../../navbar_components/Navbar";
import Commercial from "../../main_components/Commercial";
import Menu from "../Menu";
import Bot from "../../main_components/Bot";
import Hidden_Element from "../../main_components/Hidden_Element";
import Technology_News_Main from "../../main_components/news_mains/Technology_News_Main";
import Advertisement_5 from "../../main_components/advertisements/Advertisement_5";
import Advertisement_11 from "../../main_components/advertisements/Advertisement_11";

export default function Technology() {

    const [key, setKey] = useState(0);
    const Toggle = () => {
        let darkTheme = localStorage.getItem('darkTheme')
        if (darkTheme === 'true') {
            localStorage.setItem('darkTheme', 'false');
        } else {
            localStorage.setItem('darkTheme', 'true');
        }
        setKey((key) => key + 1);
    }
    return (
        <div key={key} id={localStorage.darkTheme === "true" ? "dark" : "light"} className="news_body">
            <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="toggler">
                <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="toggler--slider"
                     onClick={Toggle}>
                    <div id={localStorage.darkTheme === "true" ? "dark" : "light"}
                         className="toggler--slider--circle"></div>
                </div>
            </div>
            <Navbar/>
            <Hidden_Element/>
            <Technology_News_Main/>
            <Commercial/>
            <Advertisement_11/>
            <Advertisement_5/>
            <Bot/>
            <Menu/>
        </div>
    )
}