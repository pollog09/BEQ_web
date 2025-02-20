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
        <div ref={slideRef} className="flex items-center justify-center w-full slide">
            <div className="w-1/2">
                <img src={imageSrc} alt="Slide" className="w-full h-auto" />
            </div>
            <div className="w-1/2 p-4">
                <h1 className="text-2xl font-bold mb-4">{tittle}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TwoColumnSlide;