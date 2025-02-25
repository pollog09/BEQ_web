import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TwoColumnSlide = ({ imageSrc, title1, text1, title2, text2 }) => {
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
            <h2 className="text-xl md:text-2xl font-bold text-center">{title1}</h2>
            <p className="text-base md:text-lg text-center">{text1}</p>
            <br />
            <h2 className="text-xl md:text-2xl font-bold text-center">{title2}</h2>
            <p className="text-base md:text-lg text-center">{text2}</p>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4">
            <img src={imageSrc} alt="Img" className="w-full h-auto" />
          </div>
        </div>
      );
      };
      
export default TwoColumnSlide;