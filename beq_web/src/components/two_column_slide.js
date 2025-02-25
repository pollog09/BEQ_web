import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TwoColumnSlide = ({ imageSrc, tittle, text }) => {
    const slideRef = useRef(null);

    useEffect(() => {
        const slide = slideRef.current;
        gsap.fromTo(
            slide,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: slide,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div ref={slideRef} className="flex flex-col md:flex-row items-center justify-center w-full slide py-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img src={imageSrc} alt="Img" className="w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4">
                <h2 className="text-xl md:text-2xl font-bold text-center">{tittle}</h2>
                <br />
                <br />
                <p className="text-base md:text-lg text-center">{text}</p>
            </div>
        </div>
    );
};

export default TwoColumnSlide;