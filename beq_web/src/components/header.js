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
    <header ref={titleRef} className="bg-black text-white fixed top-0 shadow-md w-full py-12 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 ref={titleRef} className="text-white text-2xl md:text-3xl font-bold">
        Quality Build Engineering
        <FontAwesomeIcon ref={gearRef} icon={faCog} className="ml-4 text-white text-3xl md:text-3xl" />
        </h1>
        <nav>
          <ul className="flex space-x-14">
            <li><a href="#nuestros-servicios" className="hover:underline">Nuestros Servicios</a></li>
            <li><a href="#por-que-elegirnos" className="hover:underline">Por Qué Elegirnos</a></li>
            <li><a href="#objetivos" className="hover:underline">Objetivos</a></li>
            <li><a href="#mision" className="hover:underline">Misión</a></li>
            <li><a href="#vision" className="hover:underline">Visión</a></li>
            <li><a href="#areas-operacion" className="hover:underline">Áreas de Operación</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;