import React from "react";
import "./Slideshow.css";
import image1 from "../images/images_png/finki_photo.png";
import image2 from "../images/images_png/iCardio.png";
import image3 from "../images/images_jpg/anhoch.jpg";

export default function Slideshow() {

    const images = [image1, image2, image3];
    const links = ["https://finki.ukim.mk", "https://www.icardio.ai", "https://www.anhoch.com"];
    const delay = 2500;

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
            >
                {images.map((imagePath, index) => (
                    <div className="slide" key={index}>
                        <a href={links[index]} target={"_blank"}><img className="advertisement_card_2" src={imagePath}
                                                                      alt={`Image ${index + 1}`}/></a>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
