import React, { useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Home = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    const timeOutRef = useRef(null);
    const resetTimeOut = () => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    };
    useEffect(() => {
        resetTimeOut();
        timeOutRef.current = setTimeout(() => 
            setSlideIndex((prevSlide) => 
            prevSlide === colors.length - 1? 0 : prevSlide+1), 2500);
    })
    return (
        <div className="content">
            <Header title={"Hello there 👋"} desc={"I'am Vinsen, UI/UX Designer GoTo Company"}/>
            <main>
                <section id="hello" className="container">
                    <h2>I'am Vinsen</h2>
                    <p>
                        Hello, it's me Vinsen. I lived at Lampung Indonesia.
                    </p>
                </section>                
                <div className="slideshow slideshow-container">
                    <div
                        className="slideshowSlider"
                        style={{ transform: `translate3d(${-slideIndex * 100}%, 0, 0)` }}>
                        {colors.map((backgroundColor, index) => (
                        <div
                            key={index}
                            className="slide"
                        >
                            <div className="slide-content" style={{ backgroundColor }}>
                                
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="slideshowDots">
                        {colors.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${slideIndex === idx ? " active" : ""}`}
                            onClick={() => {
                            setSlideIndex(idx);
                            }}
                        ></div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;