import React from "react";
import "./Advertisement.css";

export default function Advertisement_6() {

    return (
        <div className="advertisement_card">
            <div className="advertisement_card_image">
                <a href="https://www.endava.com/en/" target={"_blank"}>
                    <img className="adds_image" src={require('../../images/images_jpg/endava.jpg')} alt="Adds"/>
                </a>
            </div>
        </div>
    )
}