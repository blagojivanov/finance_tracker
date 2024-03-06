import React, {useState, useEffect} from "react";
import "./Bot.css";
import axios from "axios";
import {ReactComponent as Send} from "../images/images_svg/Send.svg";

export default function Bot() {

    const [message, setMessage] = useState('');
    const [sentMessage, setSentMessage] = useState('How can I help you today?');
    const [displayMess, setDisplayMess] = useState('...');

    const sendMessage = (e) => {
        // e.preventDefault();
        axios.post('/bot', {
                message: message
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }

            },
        )
            .then(function (response) {
                    setDisplayMess(message)
                    setSentMessage(response.data)
                    setMessage('')
                }
            ).catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 410) {
                alert("Can't process message");
            }
        })
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    useEffect(() => {
        const bot_text = document.querySelector(".bot_text_2");

        const testLoad = () => {
            setTimeout(() => {
                bot_text.textContent = "I'm Bitty";
            }, 0);
        };

        testLoad();
    }, []);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="bot">
            <div className="bot_container">
                <div className="bot_div">
                    <img className="bot_image" src={require('../images/images_png/Bitty.png')} alt=""/>
                    <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="bot_name">
                        <span className="bot_text_2">I'm Bitty</span>
                    </div>
                    <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="bot_status">Active</div>
                </div>
                <form id={localStorage.darkTheme === "true" ? "dark" : "light"} className="bot_form">
                    {displayMess === '...' ? "" : <span id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                                        className="human_message">{displayMess}</span>}
                    <span id={localStorage.darkTheme === "true" ? "dark" : "light"}
                          className="bot_message">{sentMessage}</span>
                    <br/>
                </form>
                <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="input_box_2">
                    <input onKeyDown={handleKeyPress} type={"text"} value={message} onChange={handleMessageChange}
                           maxLength="35" className="input_type"/>
                    <button type="submit"
                            className="bot_submit"
                            onClick={sendMessage}><Send/>
                    </button>
                </div>
                <svg className="bot_svg" viewBox="0 0 500 200" preserveAspectRatio="xMinYMin meet">
                    <path className="bot_path" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z">
                    </path>
                </svg>
            </div>
        </div>
    )
};