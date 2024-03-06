import React, {useState} from "react";
import "./Subscribe.css";
import {ReactComponent as Email} from "../images/images_svg/Email.svg";
import {ReactComponent as User_ID} from "../images/images_svg/Name_and_Surname.svg";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {asad} from "./Code_Page";

export default function Subscribe_Page() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const darkMode = params.get("darkMode") === "true";

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const [isFormValid, setIsFormValid] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
        validateForm();
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
        validateForm();
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateForm();
    };

    const validateForm = () => {
        if (name.trim() !== '' && surname.trim() !== '' && email.trim() !== '') {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const signUpUser = (e) => {
        e.preventDefault();
        axios.post('/subscribe', {
                name: name,
                surname: surname,
                email: email
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }

            },
        )
            .then(function (response) {
                console.log(response);
                asad(email)
                if (response.status === 200)
                    navigate("/code")
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 410) {
                    alert("Already subscribed");
                }
            });
    }

    const style_home_button = {
        textDecoration: "none",
    }

    return (
        <div>
            <div className="animated_body">
                <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="animated_wrapper">
                    <div className="animated_box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="subscribe_wrapper">
                <span id={localStorage.darkTheme === "true" ? "dark" : "light"} className="bg_animate_3"></span>
                <span id={localStorage.darkTheme === "true" ? "dark" : "light"} className="bg_animate_4"></span>
                <div className="form_box register">
                    <h2 id={localStorage.darkTheme === "true" ? "dark" : "light"} className="h2">Subscribe</h2>
                    <form action="#">
                        <div className="input_box_1">
                            <input type="text" value={name} onChange={handleNameChange} required
                                   id={localStorage.darkTheme === "true" ? "dark" : "light"} className="input_type"/>
                            <label className="log_in_label"
                                   id={localStorage.darkTheme === "true" ? "dark" : "light"}>Name</label>
                            <User_ID className="log_in_user" id={localStorage.darkTheme === "true" ? "dark" : "light"}/>
                        </div>
                        <div className="input_box_1">
                            <input type="text" value={surname} id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                   onChange={handleSurnameChange}
                                   required className="input_type"/>
                            <label className="log_in_label"
                                   id={localStorage.darkTheme === "true" ? "dark" : "light"}>Surname</label>
                            <User_ID className="log_in_user" id={localStorage.darkTheme === "true" ? "dark" : "light"}/>
                        </div>
                        <div className="input_box_1">
                            <input type="text" value={email} id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                   onChange={handleEmailChange}
                                   required className="input_type"/>
                            <label className="log_in_label"
                                   id={localStorage.darkTheme === "true" ? "dark" : "light"}>Email</label>
                            <Email className="log_in_user" id={localStorage.darkTheme === "true" ? "dark" : "light"}/>
                        </div>
                        <button type="submit" className="log_in_btn"
                                id={localStorage.darkTheme === "true" ? "dark" : "light"} disabled={!isFormValid}
                                onClick={signUpUser}>Subscribe
                        </button>
                        <div className="log_reg_link">
                            <p id={localStorage.darkTheme === "true" ? "dark" : "light"} className="home_link">Want to
                                go back? <Link to="/" id={localStorage.darkTheme === "true" ? "dark" : "light"}
                                               className="register_link" style={style_home_button}>Home</Link></p>
                        </div>
                    </form>
                </div>
                <div className="info_text register">
                    <h2>Subscribe Now!</h2>
                    <p>Get the best tech news, crypto advice, unmissable stock prices and more.</p>
                </div>
            </div>
        </div>
    )
}
