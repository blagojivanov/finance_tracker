import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import App from "../App";
import FAQ_Page from "../navbar_components/F.A.Q._Page";
import About_Page from "../navbar_components/About_Page";
import Contact_Page from "../navbar_components/Contact_Page";
import Subscribe from "../navbar_components/Subscribe_Page"
import Latest_News from "../menu_components/latest_news/Latest_News";
import Business from "../menu_components/business_news/Business";
import Crypto from "../menu_components/crypto_news/Crypto";
import Code from "../navbar_components/Code_Page";
import Technology from "../menu_components/technology_news/Technology";
import Policy_and_Regulations_Page from "../menu_components/policy&regulations_news/Policy_and_Regulations";
import {AnimatePresence} from "framer-motion";

export default function Animation_Routes() {

    const location = useLocation();
    const [darkMode, setDarkMode] = React.useState(true)
    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<App/>}/>
                <Route path="f.a.q." element={<FAQ_Page/>}/>
                <Route path="about" element={<About_Page/>}/>
                <Route path="contact" element={<Contact_Page/>}/>
                <Route path="subscribe" element={<Subscribe/>}/>
                <Route path="latest_news" element={<Latest_News/>}/>
                <Route path="business" element={<Business/>}/>
                <Route path="crypto" element={<Crypto/>}/>
                <Route path="technology" element={<Technology/>}/>
                <Route path="code" element={<Code/>}/>
                <Route path="policy_and_regulations" element={<Policy_and_Regulations_Page/>}/>
            </Routes>
        </AnimatePresence>
    )
}