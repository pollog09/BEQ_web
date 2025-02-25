import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const BgImgSlide = ({ img, text, title }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-128 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
};

export default BgImgSlide;