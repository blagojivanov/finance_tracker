import React, {useState} from "react";
import Navbar from "../../navbar_components/Navbar";
import Menu from "../Menu";
import Commercial from "../../main_components/Commercial";
import Bot from "../../main_components/Bot";
import Hidden_Element from "../../main_components/Hidden_Element";
import Business_News_Main from "../../main_components/news_mains/Business_News_Main";
import Advertisement_3 from "../../main_components/advertisements/Advertisement_3";
import Advertisement_7 from "../../main_components/advertisements/Advertisement_7";

export default function Business() {

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
            <Business_News_Main/>
            <Commercial/>
            <Advertisement_7/>
            <Advertisement_3/>
            <Bot/>
            <Menu/>
        </div>
    )
}