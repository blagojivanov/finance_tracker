import React from "react";
import "../Menu_cards.css";

export default function Business_News_cards_2(props) {

    let timeStamp = props.time * 1000;

    const date = new Date(timeStamp);

    const dateFormat = date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();

    return (
        <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="menu_2_cards">
            <img src={`${props.img}`} className="menu_2_images" alt="Latest News"/>
            <div className="menu_2_container">
                <p className="news_time_stamp">{dateFormat}</p>
                <p className="menu_2_title">{props.category}</p>
                <div className="menu_2_title_container">
                    <a id={localStorage.darkTheme === "true" ? "dark" : "light"} href={props.link}
                       className="menu_2_links" target={"_blank"}><h3>{props.title}</h3></a>
                    <p className="menu_2_text">{props.text}
                        <span>...</span>
                    </p>
                </div>
            </div>
        </div>
    )
}