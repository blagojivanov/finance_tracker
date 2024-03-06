import React from "react";
import "./News_cards.css"
import {ReactComponent as Arrow_gold} from "../../images/images_svg/Chevron_right_gold.svg";

export default function News_card(props) {

    const read_more_style = {
        textDecoration: "none",
        fontSize: 13,
        color: "goldenrod",

    }

    let timeStamp = props.time * 1000;

    const date = new Date(timeStamp);

    const dateFormat = date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();

    return (
        <div className="news_card">
            <img src={`${props.img}`} className="news_image" alt="News"/>
            <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="blur">
                <p className="news_time">{dateFormat}</p>
                <p className="news_2_title">Global News</p>
                <p className="news_link"></p>
                <h3 id={localStorage.darkTheme === "true" ? "dark" : "light"} className="news_link">{props.title}</h3>
                <br/>
                <h5>{props.text.slice(0, 115)}
                    <span>...</span>
                </h5>
                <Arrow_gold className="arrow"/>
                <a href={props.link} className="read_more" style={read_more_style} target={"_blank"}>Read more</a>
            </div>
        </div>
    )
}