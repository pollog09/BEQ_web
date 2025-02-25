import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const titleRef = useRef(null);
  const gearRef = useRef(null);

  useEffect(() => {
    gsap.set(gearRef.current, { rotation: 0 }); // Set initial rotation to 0
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.to(gearRef.current, { rotation: 360, repeat: -1, duration: 2, ease: "linear" });
  }, []);

  return (
    <header ref={titleRef} className="bg-black text-white fixed top-0 shadow-md w-full py-4 md:py-6 lg:py-8 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        <h1 ref={titleRef} className="text-white text-xl md:text-2xl lg:text-3xl font-bold flex items-center">
          Quality Build Engineering
          <FontAwesomeIcon ref={gearRef} icon={faCog} className="ml-2 md:ml-4 text-white text-2xl md:text-3xl" />
        </h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 lg:space-x-14">
          <li className="hidden md:block"><a href="#nuestros-servicios" className="hover:underline">Nuestros Servicios</a></li>
          <li className="hidden md:block"><a href="#por-que-elegirnos" className="hover:underline">Por Qué Elegirnos</a></li>
          <li className="hidden md:block"><a href="#objetivos" className="hover:underline">Objetivos</a></li>
          <li className="hidden md:block"><a href="#mision" className="hover:underline">Misión</a></li>
          <li className="hidden md:block"><a href="#vision" className="hover:underline">Visión</a></li>
          <li className="hidden md:block"><a href="#areas-operacion" className="hover:underline">Áreas de Operación</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;