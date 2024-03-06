import React, {useState} from "react";
import "../Menu_Components.css";
import Navbar from "../../navbar_components/Navbar";
import Menu from "../Menu";
import Commercial from "../../main_components/Commercial";
import Bot from "../../main_components/Bot";
import Latest_News_Main from "../../main_components/news_mains/Latest_News_Main";
import Hidden_Element from "../../main_components/Hidden_Element";
import Advertisement_2 from "../../main_components/advertisements/Advertisement_2";
import Advertisement_9 from "../../main_components/advertisements/Advertisement_9";

export default function Latest_News() {

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
            <Latest_News_Main/>
            <Commercial/>
            <Advertisement_9/>
            <Advertisement_2/>
            <Bot/>
            <Menu/>
        </div>
    )
}