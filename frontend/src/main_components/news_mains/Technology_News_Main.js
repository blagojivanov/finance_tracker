import React, {useState} from "react";
import "../Main.css";
import Technology_News_Card_1 from "../../menu_components/technology_news/Technology_News_cards_1";
import Technology_News_Card_2 from "../../menu_components/technology_news/Technology_News_cards_2";
import Technology_News_Card_3 from "../../menu_components/technology_news/Technology_News_cards_3";
import Technology_News_Card_4 from "../../menu_components/technology_news/Technology_News_cards_4";
import Technology_News_Card_5 from "../../menu_components/technology_news/Technology_News_cards_5";
import Technology_News_Card_6 from "../../menu_components/technology_news/Technology_News_cards_6";
import Technology_News_Card_7 from "../../menu_components/technology_news/Technology_News_cards_7";
import {CryptoData_1} from "../../crypto_cards_info/Crypto_cards_info_1";
import {SymbolsData} from "../../crypto_cards_info/Symbols";
import Chart from "react-apexcharts";
import {TechData} from "../news_info/Technology_Info";

async function fnd(option1, option2) {

    let val;
    let adder = "m";
    if (option2 === "1 Week") {
        adder = "w";
    } else if (option2 === "1 Year") {
        adder = "y"
    }

    console.log("in request:", option1, option2);
    await fetch("/price/" + option1 + "/" + adder).then((res) => res.text())
        .then((text) => {
            val = JSON.parse(JSON.parse(text));
        });

    return val;
}

const randomNumber = Math.floor(Math.random() * (TechData.length - 7)) + 1;
const randomNumber_1 = randomNumber + 1;
const randomNumber_2 = randomNumber + 2;
const randomNumber_3 = randomNumber + 3;
const randomNumber_4 = randomNumber + 4;
const randomNumber_5 = randomNumber + 5;
const randomNumber_6 = randomNumber + 6;
const randomNumber_7 = randomNumber + 7;
export default function Technology_News_Main() {

    const style_copyright = {
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }


    const Technology_News_card_1 = TechData.slice(randomNumber, randomNumber_1).map(item => {
        return (
            <Technology_News_Card_1
                key={item.time}
                {...item}
            />
        )
    })

    const Technology_News_card_2 = TechData.slice(randomNumber_1, randomNumber_2).map(item => {
        return (
            <Technology_News_Card_2
                key={item.time}
                {...item}
            />
        )
    })

    const Technology_News_card_3 = TechData.slice(randomNumber_2, randomNumber_3).map(item => {
        return (
            <Technology_News_Card_3
                key={item.time}
                {...item}
            />
        )
    })

    const Technology_News_card_4 = TechData.slice(randomNumber_3, randomNumber_4).map(item => {
        return (
            <Technology_News_Card_4
                key={item.time}
                {...item}
            />
        )
    })

    const Technology_News_card_5 = TechData.slice(randomNumber_4, randomNumber_5).map(item => {
        return (
            <Technology_News_Card_5
                key={item.time}
                {...item}
            />
        )
    })

    const Technology_News_card_6 = TechData.slice(randomNumber_5, randomNumber_6).map(item => {
        return (
            <Technology_News_Card_6
                key={item.time}
                {...item}
            />
        )
    })

    const Technology_News_card_7 = TechData.slice(randomNumber_6, randomNumber_7).map(item => {
        return (
            <Technology_News_Card_7
                key={item.time}
                {...item}
            />
        )
    })

    let CryptoDataVal = CryptoData_1;
    let TimeStamp = CryptoDataVal.map((obj) => obj.time)
    let dates = TimeStamp.map((timestamp) => {
        const dateObject = new Date(timestamp); // Convert to milliseconds
        const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
        return dateObject.toLocaleDateString(undefined, options);
    });

    const [key, setKey] = useState(0);

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
    };

    const Data = (option1, option2) => {
        console.log("Option 1", option1);
        console.log("Option 2", option2);
    };

    const updateState = () => {
        const newState = {...state};

        newState.options.colors = ["green"];

        newState.series[0].data = CryptoDataVal.map((obj) => obj.close.toFixed(5));

        let nTimeStamp = CryptoDataVal.map((obj) => obj.time)
        let ndates = nTimeStamp.map((timestamp) => {
            const ndateObject = new Date(timestamp); // Convert to milliseconds
            const noptions = {year: 'numeric', month: 'numeric', day: 'numeric'};
            return ndateObject.toLocaleDateString(undefined, noptions);
        });

        newState.options.xaxis.categories = ndates;

        setState(newState);
    };

    const handleSaveClick = async () => {
        let prom = await Promise.all(await fnd(selectedOption1, selectedOption2))
        CryptoDataVal = prom;
        updateState()
        setKey((key) => key + 1);
    };

    const [state, setState] = useState({
        options: {
            colors: ["green"],
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: dates,
                labels: {
                    style: {
                        colors: "goldenrod"
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "goldenrod"
                    }
                }
            }
        },
        series: [
            {
                name: "series-1",
                data: CryptoDataVal.map((obj) => obj.close.toFixed(5))
            }
        ]
    })

    return (
        <div>
            <main id={localStorage.darkTheme === "true" ? "dark" : "light"} className="main_2">
                <div className="child_element_2">
                    <div className="chart_container">
                        <div className="chart_header">
                            <select id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                    className="crypto_dropdown" value={selectedOption1} onChange={handleOption1Change}>
                                <option value="">Choose an option</option>
                                {SymbolsData.map((crypto_sym) => (
                                    <option id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                            className="crypto_dropdown_content" key={crypto_sym.name}
                                            value={crypto_sym.sym}>
                                        {crypto_sym.name}
                                    </option>
                                ))}
                            </select>
                            <select id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                    className="crypto_dropdown" value={selectedOption2} onChange={handleOption2Change}>
                                <option id={localStorage.darkTheme === "true" ? "dark" : "light"} key="Year 1"
                                        className="crypto_dropdown_content" value="1 Year">1 Year
                                </option>
                                <option id={localStorage.darkTheme === "true" ? "dark" : "light"} key="Month 1"
                                        className="crypto_dropdown_content" value="1 Month">1 Month
                                </option>
                                <option id={localStorage.darkTheme === "true" ? "dark" : "light"} key="Week 1"
                                        className="crypto_dropdown_content" value="1 Week">1 Week
                                </option>
                            </select>
                            <button id={localStorage.darkTheme === "true" ? "dark" : "light"} className="crypto_button"
                                    onClick={handleSaveClick}>Save
                            </button>
                        </div>
                        <Chart
                            key={key}
                            options={state.options}
                            series={state.series}
                            type="area"
                            width="870"
                            height="250"
                        />
                    </div>
                    <h2 id={localStorage.darkTheme === "true" ? "dark" : "light"} className="stories">
                        <span className="blank_space">a</span>
                        Stories for you
                    </h2>
                    {Technology_News_card_1}
                    {Technology_News_card_2}
                    {Technology_News_card_3}
                    {Technology_News_card_4}
                    {Technology_News_card_5}
                    {Technology_News_card_6}
                    {Technology_News_card_7}
                </div>
            </main>
            <span className="copyright_1"
                  style={style_copyright}>© Copyright 2023/2024. All rights reserved!</span>
        </div>
    );
}