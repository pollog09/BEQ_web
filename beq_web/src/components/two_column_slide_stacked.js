import React from 'react';
import Image from 'next/image';

const TwoColumnSlideStacked = ({ slides }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full slide py-8">
      <div className="w-full md:w-1/2 text-left md:pr-10">
        <h2 className="text-3xl font-semibold text-white text-center">Beneficios para los clientes</h2>
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-6">
        {slides.map((slide, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-24 h-24 relative">
              <Image src={slide.imageSrc} alt={slide.alt} layout="fill" objectFit="cover" className="rounded-md" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{slide.title}</h3>
              <p className="text-white text-sm">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoColumnSlideStacked;