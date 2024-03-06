import React, {useState} from "react";
import "./Main.css";
import {getNewsData, updateNewsData} from "./news_info/News_info";
import News_Card from "./news_cards/News_card";
import News_Card_1 from "./news_cards/News_cards_1";
import News_Card_2 from "./news_cards/News_cards_2";
import News_Card_3 from "./news_cards/News_cards_3";
import News_Card_4 from "./news_cards/News_cards_4";
import {ReactComponent as Search} from "../images/images_svg/Search.svg";
import axios from "axios";

const randomNumber = Math.floor(Math.random() * 12) + 1;
const randomNumber_1 = randomNumber + 1;
const randomNumber_2 = randomNumber + 2;
const randomNumber_3 = randomNumber + 3;
const randomNumber_4 = randomNumber + 4;
const randomNumber_5 = randomNumber + 5;

export default function Main() {

    const [key, setkey] = useState(0);
    const [searchv, setSV] = useState('')

    const searchN = (e) => {
        axios.post('/newssearch', {
                searchv: searchv
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            },
        )
            .then(function (response) {
                console.log(getNewsData())
                console.log(JSON.parse(response.data));
                updateNewsData(JSON.parse(response.data));
                console.log(getNewsData().length)
                console.log(getNewsData())
                setkey((key) => key + 1)
            })
            .catch(function (error) {

            });
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchN();

        }
    }
    const handleMessageChange = (e) => {
        setSV(e.target.value);
    };

    const style_copyright = {
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }


    const card = getNewsData().slice(randomNumber, randomNumber_1).map(item => {
        return (
            <News_Card
                key={item.link}
                {...item}
            />
        )
    })

    const Cards_1 = getNewsData().slice(randomNumber_1, randomNumber_2).map(item => {
        return (
            <News_Card_1
                key={item.link}
                {...item}
            />
        )
    })

    const Cards_2 = getNewsData().slice(randomNumber_2, randomNumber_3).map(item => {
        return (
            <News_Card_2
                key={item.link}
                {...item}
            />
        )
    })

    const Cards_3 = getNewsData().slice(randomNumber_3, randomNumber_4).map(item => {
        return (
            <News_Card_3
                key={item.link}
                {...item}
            />
        )
    })

    const Cards_4 = getNewsData().slice(randomNumber_4, randomNumber_5).map(item => {
        return (
            <News_Card_4
                key={item.link}
                {...item}
            />
        )
    })

    return (
        <div key={key}>
            <main id={localStorage.darkTheme === "true" ? "dark" : "light"} className="main">
                <div className="child_element">
                    <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="news_box">
                        <input type="text" placeholder="Search..."
                               id={localStorage.darkTheme === "true" ? "dark" : "light"}
                               className="news_search" value={searchv} onKeyDown={handleKeyPress}
                               onChange={handleMessageChange}/>
                        <Search id={localStorage.darkTheme === "true" ? "dark" : "light"} className="search_icon"/>
                    </div>
                    {card}
                    <div className="news">
                        {Cards_1}
                        {Cards_2}
                        {Cards_3}
                        {Cards_4}
                    </div>
                </div>
            </main>
            <span className="copyright"
                  style={style_copyright}>© Copyright 2023/2024. All rights reserved!</span>
        </div>
    );
}