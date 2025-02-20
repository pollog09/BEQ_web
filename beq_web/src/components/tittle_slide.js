import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TittleSlide = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('path/to/your/background.jpg')" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 ref={titleRef} className="text-white text-5xl md:text-7xl font-bold">
          BEQ Engineering
        </h1>
      </div>
    </div>
  );
};

export default TittleSlide;