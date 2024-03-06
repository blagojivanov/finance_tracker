import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Tracker.css";
import {CryptoData_2} from "../crypto_cards_info/Crypto_cards_info_2";
import Crypto_cards_1 from "../crypto_cards/Crypto_cards_1";
import {CryptoData_4} from "../crypto_cards_info/Crypto_cards_info_4";
import Crypto_cards_2 from "../crypto_cards/Crypto_cards_2";
import {CryptoData_7} from "../crypto_cards_info/Crypto_cards_info_7";
import Crypto_cards_3 from "../crypto_cards/Crypto_cards_3";
import {CryptoData_1} from "../crypto_cards_info/Crypto_cards_info_1";
import Crypto_cards_4 from "../crypto_cards/Crypto_cards_4";
import {CryptoData_5} from "../crypto_cards_info/Crypto_cards_info_5";
import Crypto_cards_5 from "../crypto_cards/Crypto_cards_5";
import {CryptoData_3} from "../crypto_cards_info/Crypto_cards_info_3";
import Crypto_cards_6 from "../crypto_cards/Crypto_cards_6";
import {CryptoData_6} from "../crypto_cards_info/Crypto_cards_info_6";
import Crypto_cards_7 from "../crypto_cards/Crypto_cards_7";

export default function Tracker() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const last_1 = CryptoData_1.length;
    const last_2 = CryptoData_2.length;
    const last_3 = CryptoData_3.length;
    const last_4 = CryptoData_4.length;
    const last_5 = CryptoData_5.length;
    const last_6 = CryptoData_6.length;
    const last_7 = CryptoData_7.length;

    const cards_1 = CryptoData_1.slice(last_1 - 1, last_1).map(item => {
        return (
            <Crypto_cards_1
                key={item.close}
                {...item}
            />
        )
    })

    const cards_2 = CryptoData_2.slice(last_2 - 1, last_2).map(item => {
        return (
            <Crypto_cards_2
                key={item.close}
                {...item}
            />
        )
    })

    const cards_3 = CryptoData_3.slice(last_3 - 1, last_3).map(item => {
        return (
            <Crypto_cards_3
                key={item.close}
                {...item}
            />
        )
    })

    const cards_4 = CryptoData_4.slice(last_4 - 1, last_4).map(item => {
        return (
            <Crypto_cards_4
                key={item.close}
                {...item}
            />
        )
    })

    const cards_5 = CryptoData_5.slice(last_5 - 1, last_5).map(item => {
        return (
            <Crypto_cards_5
                key={item.close}
                {...item}
            />
        )
    })

    const cards_6 = CryptoData_6.slice(last_6 - 1, last_6).map(item => {
        return (
            <Crypto_cards_6
                key={item.close}
                {...item}
            />
        )
    })

    const cards_7 = CryptoData_7.slice(last_7 - 1, last_7).map(item => {
        return (
            <Crypto_cards_7
                key={item.close}
                {...item}
            />
        )
    })

    return (
        <Carousel className="crypto_tracker" responsive={responsive}>
            {cards_1}
            {cards_2}
            {cards_3}
            {cards_4}
            {cards_5}
            {cards_6}
            {cards_7}
        </Carousel>
    )
}