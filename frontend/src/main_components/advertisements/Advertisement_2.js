import React from "react";
import "./Advertisement.css";

export default function Advertisement_2() {

    return (
        <div className="advertisement_card">
            <div className="advertisement_card_image">
                <a href="https://www.anhoch.com" target={"_blank"}>
                    <img className="adds_image" src={require('../../images/images_jpg/anhoch.jpg')} alt="Adds"/>
                </a>
            </div>
        </div>
    )
}