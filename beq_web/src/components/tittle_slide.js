import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const TittleSlide = ({ tittle, backgroundImage }) => {
  const titleRef = useRef(null);
  const gearRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.to(gearRef.current, { rotation: 360, repeat: -1, duration: 2, ease: "linear" });
  }, []);

  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 ref={titleRef} className="text-white text-5xl md:text-5xl font-bold flex items-center tex-center">
            {tittle}
        </h1>
      </div>
    </div>
  );
};

export default TittleSlide;