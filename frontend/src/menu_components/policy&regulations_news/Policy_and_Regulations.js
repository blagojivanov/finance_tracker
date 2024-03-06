import React, {useState} from "react";
import Navbar from "../../navbar_components/Navbar";
import Commercial from "../../main_components/Commercial";
import Menu from "../Menu";
import Bot from "../../main_components/Bot";
import Hidden_Element from "../../main_components/Hidden_Element";
import Policy_and_Regulations_News_Main from "../../main_components/news_mains/Policy_and_Regulations_News_Main";
import Advertisement_6 from "../../main_components/advertisements/Advertisement_6";
import Advertisement_10 from "../../main_components/advertisements/Advertisement_10";

export default function Policy_and_Regulations() {

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
            <Policy_and_Regulations_News_Main/>
            <Commercial/>
            <Advertisement_10/>
            <Advertisement_6/>
            <Bot/>
            <Menu/>
        </div>
    )
}