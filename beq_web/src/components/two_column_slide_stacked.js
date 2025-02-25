import React from 'react';
import Image from 'next/image';

const TwoColumnSlideStacked = ({ slides, title, titleImageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full slide py-8">
      <div className="w-full md:w-1/2 text-left md:pr-10 mb-4 md:mb-0">
        {titleImageSrc ? (
          <div className="relative w-full h-48 md:h-96"> {/* Adjusted height for mobile and desktop */}
            <Image src={titleImageSrc} alt="Title Image" layout="fill" objectFit="contain" />
          </div>
        ) : (
          <h2 className="text-3xl font-semibold text-white text-center">{title}</h2>
        )}
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-6">
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-24 h-24">
              <Image src={slide.imageSrc} alt={slide.alt} layout="fill" objectFit="cover" className="rounded-md" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white">{slide.title}</h3>
              <div className="text-white text-sm">{slide.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoColumnSlideStacked;