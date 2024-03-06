import React from "react";
import "./Crypto_cards.css";
import {CryptoData_5, id} from "../crypto_cards_info/Crypto_cards_info_5";
import {CategoryScale} from "chart.js";
import {useState} from "react";
import LineChart from "./LineChart";
import Chart from "chart.js/auto";
import {SymbolsData} from "../crypto_cards_info/Symbols";

Chart.register(CategoryScale);
export default function Crypto_cards_5(props) {

    const [chartData, setChartData] = useState({
        labels: CryptoData_5.map((data) => data.time),
        datasets: [
            {
                data: CryptoData_5.map((data) => data.close),
                borderColor: "green",
                borderWidth: 2,
                backgroundColor: "ghostwhite",
            }
        ]
    });

    return (
        <div className="gallery">
            <div className="article-card">
                <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="content">
                    <p className="cards_item_1">{SymbolsData[id].name} ({SymbolsData[id].sym}) -</p>
                    <p className="cards_item_2">{props.close.toFixed(2)} $</p>
                </div>
                <LineChart chartData={chartData}/>
            </div>
        </div>
    )
}