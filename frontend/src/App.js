import React, {useState} from "react";
import './App.css';
import Navbar from "./navbar_components/Navbar";
import Main from "./main_components/Main";
import Menu from "./menu_components/Menu";
import Card from "./main_components/Slideshow";
import Advertisement_1 from "./main_components/advertisements/Advertisement_1";
import Commercial from "./main_components/Commercial";
import Tracker from "./main_components/Tracker";
import Hidden_Element from "./main_components/Hidden_Element";
import Bot from "./main_components/Bot";

function update() {
    fetch("/update").then((res) => res.text())
        .then((text) => {
        });
}

update()

setInterval(update, 3600000)

export default function App() {

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
        <div key={key} id={localStorage.darkTheme === "true" ? "dark" : "light"} className="app">
            <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="toggler">
                <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="toggler--slider"
                     onClick={Toggle}>
                    <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="toggler--slider--circle">
                    </div>
                </div>
            </div>
            <Navbar/>
            <Hidden_Element/>
            <Commercial/>
            <Card/>
            <Advertisement_1/>
            <Bot/>
            <Tracker/>
            <Main/>
            <Menu/>
        </div>
    );
};