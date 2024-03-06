import React, {useState} from "react"
import Navbar from "../../navbar_components/Navbar";
import Commercial from "../../main_components/Commercial";
import Menu from "../Menu";
import Bot from "../../main_components/Bot";
import Hidden_Element from "../../main_components/Hidden_Element";
import Crypto_News_Main from "../../main_components/news_mains/Crypto_News_Main";
import Advertisement_4 from "../../main_components/advertisements/Advertisement_4";
import Advertisement_8 from "../../main_components/advertisements/Advertisement_8";

export default function Crypto() {

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
            <Crypto_News_Main/>
            <Commercial/>
            <Advertisement_8/>
            <Advertisement_4/>
            <Bot/>
            <Menu/>
        </div>
    )
}