import React, {useEffect, useRef} from "react";
import "./Menu.css";
import {ReactComponent as Drop_Down} from "../images/images_svg/Drop_Down.svg";
import {ReactComponent as Document} from "../images/images_svg/Documents.svg";
import {ReactComponent as Dollar} from "../images/images_svg/Dollar.svg";
import {ReactComponent as Chart} from "../images/images_svg/Chart.svg";
import {ReactComponent as Bot} from "../images/images_svg/Bot.svg";
import {ReactComponent as Info} from "../images/images_svg/Info.svg";
import {ReactComponent as Bitcoin_1} from "../images/images_svg/Bitcoin_1.svg";
import {ReactComponent as Bitcoin_2} from "../images/images_svg/Bitcoin_2.svg";
import {Link} from "react-router-dom";

export default function Menu() {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('ended', () => {
                videoRef.current.play();
            });
            videoRef.current.play();
        }
    }, []);

    const [show, setShow] = React.useState(false);

    return (
        <div className="body">
            <div className={show ? `sidebar` : `sidebar_1`} id={localStorage.darkTheme === "true" ? "dark" : "light"}>
                <div className="logo_details" onClick={() => setShow(!show)}>
                    <div className="menu_logo">
                        <div className="menu_text"
                             id={localStorage.darkTheme === "true" ? "dark" : "light"}>Announcements
                        </div>
                    </div>
                    <Drop_Down className='menu_icon' id={localStorage.darkTheme === "true" ? "dark" : "light"}/>
                </div>
                <ul className="nav_list">
                    <li>
                        <span className="brand"
                              id={localStorage.darkTheme === "true" ? "dark" : "light"}>{show ? "" : "Crypto & Stocks Hub"}</span>
                    </li>
                    <li>
                        <Link to="/latest_news">
                            <Document className='document_icon'
                                      id={localStorage.darkTheme === "true" ? "dark" : "light"}/>
                            <span className="links_name" id={localStorage.darkTheme === "true" ? "dark" : "light"}>Latest News</span>
                        </Link>
                        <span className="tooltip">Latest News</span>
                    </li>
                    <li>
                        <Link to="/business">
                            <Dollar className='dollar_icon' id={localStorage.darkTheme === "true" ? "dark" : "light"}/>
                            <span className="links_name"
                                  id={localStorage.darkTheme === "true" ? "dark" : "light"}>Business</span>
                        </Link>
                        <span className="tooltip">Business</span>
                    </li>
                    <li>
                        <Link to="/crypto">
                            <Chart className='chart_icon' id={localStorage.darkTheme === "true" ? "dark" : "light"}/>
                            <span className="links_name"
                                  id={localStorage.darkTheme === "true" ? "dark" : "light"}>Crypto</span>
                        </Link>
                        <span className="tooltip">Crypto</span>
                    </li>
                    <li>
                        <Link to="/technology">
                            <Bot className='bot_icon' id={localStorage.darkTheme === "true" ? "dark" : "light"}/>
                            <span className="links_name"
                                  id={localStorage.darkTheme === "true" ? "dark" : "light"}>Technology</span>
                        </Link>
                        <span className="tooltip">Technology</span>
                    </li>
                    <li>
                        <Link to="/policy_and_regulations">
                            <Info className='info_icon' id={localStorage.darkTheme === "true" ? "dark" : "light"}/>
                            <span className="links_name" id={localStorage.darkTheme === "true" ? "dark" : "light"}>Policy & Regulations</span>
                        </Link>
                        <span className="tooltip">Policy</span>
                    </li>
                </ul>
                <video id="video_commercial" width="95%" height="25%" muted autoPlay ref={videoRef}>
                    <source src={require('../video_commercials/Video_T-Mobile.mp4')} type="video/mp4"/>
                </video>
                <div className="profile_content">
                    <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="profile">
                        <div className="profile_details">
                            {localStorage.darkTheme === "true" ? <Bitcoin_2 className="img_3"/> :
                                <Bitcoin_1 className="img_1"/>}
                            <span className="circle_1"></span>
                            <div className="name_job">
                                <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="name">Finance
                                    -Tracker
                                </div>
                                <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="job">Crypto &
                                    Stocks
                                </div>
                            </div>
                        </div>
                        {show ? (localStorage.darkTheme === "true" ? <Bitcoin_2 className="img_4"/> :
                            <Bitcoin_1 className="img_2"/>) : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}