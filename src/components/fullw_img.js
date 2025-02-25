import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FullWidthImage = ({ image, width = '100%', height = 'auto' }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, { opacity: 1, duration: 2, delay: 1 });
  }, []);

  return (
    <div
      className="flex items-center justify-center bg-black"
      style={{ width, height }}
    >
      <img
        ref={imgRef}
        src={image}
        alt="Full Width"
        className="opacity-0"
        style={{ width: '50%', height }}
      />
    </div>
  );
};

export default FullWidthImage;