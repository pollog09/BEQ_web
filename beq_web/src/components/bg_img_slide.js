import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const BgImgSlide = (img, text) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-blue-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/hose.jpg" // Replace with the actual image path
          alt="Engineers discussing quality commitment"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>
      
      {/* Content Box */}
      <div className="relative z-10 bg-white p-8 md:p-12 max-w-lg rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Compromiso con la Calidad
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          En <span className="font-bold">QBE</span>, la calidad no es solo una meta; es una promesa. Cada miembro de nuestro equipo
          está comprometido con la mejora continua y la innovación, asegurando que nuestros servicios no solo cumplan con
          los estándares actuales, sino que también establezcan nuevos puntos de referencia en la industria.
        </p>
      </div>
    </div>
  );
};

export default BgImgSlide;