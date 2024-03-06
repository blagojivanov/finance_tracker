import React, {useEffect, useRef} from "react";
import "./Advertisement.css";

export default function Advertisement_11() {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('ended', () => {
                videoRef.current.play();
            });
            videoRef.current.play();
        }
    }, []);

    return (
        <div className="advertisement_card_1">
            <div className="advertisement_card_image">
                <a href="https://www.porsche.com.mk" target={"_blank"}>
                    <video className="adds_image" width="95%" height="30%" muted autoPlay ref={videoRef}>
                        <source src={require('../../video_commercials/Video_Porsche.mp4')} type="video/mp4"/>
                    </video>
                </a>
            </div>
        </div>
    )
}