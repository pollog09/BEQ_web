import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BgImgSlide = (img, text) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url({img})" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 ref={textRef} className="text-white text-4xl md:text-6xl font-bold">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default BgImgSlide;