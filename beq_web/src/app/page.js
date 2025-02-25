"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TwoColumnSlide from "../components/two_column_slide.js";
import BgImgSlide from '../components/bg_img_slide.js';
import TittleSlide from '../components/tittle_slide.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import FullWidthImage from '../components/fullw_img.js';
import TwoColumnSlideStacked from '../components/two_column_slide_stacked.js';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); 
  }, []);

  const slides = [
    {
      imageSrc: "/air.jpg",
      alt: "Ingeniería Mecánica",
      title: "Ingeniería Mecánica",
      text: "Diseñamos y desarrollamos soluciones innovadoras que optimizan la eficiencia y el rendimiento de los sistemas mecánicos. Nuestro equipo está capacitado para abordar desafíos complejos con creatividad y precisión."
    },
    {
      imageSrc: "/danger.jpg",
      alt: "Ingeniería Eléctrica",
      title: "Ingeniería Eléctrica",
      text: "Ofrecemos servicios que van desde el diseño de sistemas eléctricos hasta la implementación de soluciones de energía sostenible. Nos aseguramos de que cada proyecto cumpla con los más altos estándares de seguridad y eficiencia."
    },
    {
      imageSrc: "/hidraulic.jpg",
      alt: "Ingeniería Civil",
      title: "Ingeniería Civil",
      text: "Proveemos soluciones integrales en el ámbito de la ingeniería civil, abarcando desde la planificación y diseño hasta la ejecución de proyectos de infraestructura de gran envergadura."
    }
  ];

  return (
    isLoading ? 
    <div className="min-h-screen flex flex-col justify-between p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
      <Header /> 

      <main className="flex flex-col gap-8 items-center flex-grow mt-16">
        <FullWidthImage image="whitelogo.png" />
        <TittleSlide tittle="Quienes Somos" />
        <TwoColumnSlide imageSrc="/metro.jpg" tittle="Presentacion de la Empresa" logo="whitelogo.png" text="En el competitivo mundo de la ingeniería, destacarse requiere no solo experiencia y conocimiento, sino también un compromiso inquebrantable con la calidad. En Quality Build Engineering (QBE), nos enorgullecemos de ofrecer soluciones de ingeniería de alta calidad que superan las expectativas de nuestros clientes." />
        <TittleSlide tittle="Nuestros Servicios" />
        <TwoColumnSlideStacked slides={slides} />
        <TittleSlide tittle="Por que Elegirnos" />
        <BgImgSlide img="/hose.jpg" text="En Quality Build Engineering, nos esforzamos por establecer relaciones sólidas y duraderas con nuestros clientes. Nuestro enfoque centrado en el cliente, combinado con nuestra experiencia y conocimiento técnico, nos permite ofrecer soluciones de ingeniería personalizadas que se adaptan a las necesidades específicas de cada cliente." title="Compromiso con la Calidad" />
        <TittleSlide tittle="Objetivos" />
        {/* You can add more slides here if needed */}
      </main>
      <Footer />
    </div> : null
  );
}