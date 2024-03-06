import React from "react";
import "./News_cards.css"

export default function News_card_3(props) {
    return (
        <div className="news_cards">
            <img src={`${props.img}`} className="news_images" alt="News"/>
            <a id={localStorage.darkTheme === "true" ? "dark" : "light"} href={props.link} className="news_links"
               target={"_blank"}>
                <h3>{props.title}</h3></a>
        </div>
    )
}