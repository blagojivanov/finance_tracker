import React from "react";
import "./Advertisement.css";

export default function Advertisement_5() {

    return (
        <div className="advertisement_card">
            <div className="advertisement_card_image">
                <a href="https://coinprime.io" target={"_blank"}>
                    <img className="adds_image" src={require('../../images/images_png/crypto.png')} alt="Adds"/>
                </a>
            </div>
        </div>
    )
}