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

const [isLoading, setIsLoadig] = useState(false);

useEffect(() => {
  setIsLoadig(true); 
}, []);

  return (
    isLoading  ? 
    <div className="min-h-screen flex flex-col justify-between p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
      <Header /> 

      <main className="flex flex-col gap-8 items-center flex-grow mt-16">
        <FullWidthImage image="whitelogo.png" />
        <TittleSlide tittle="Quienes Somos" />
        <TwoColumnSlide imageSrc="/metro.jpg" tittle="Presentacion de la Empresa" logo="whitelogo.png" text="En el competitivo mundo de la ingeniería, destacarse
                                                                              requiere no solo experiencia y conocimiento, sino
                                                                              también un compromiso inquebrantable con la calidad.
                                                                              En Quality Build Engineering (QBE), nos enorgullecemos
                                                                              de ofrecer servicios de ingeniería mecánica, eléctrica y
                                                                              civil que no solo cumplen, sino que superan las
                                                                              expectativas de nuestros clientes. Nuestro lema,
                                                                              Ingeniería de Calidad, refleja nuestra dedicación a la
                                                                              excelencia en cada proyecto que emprendemos" />
        <TittleSlide tittle="Nuestros Servicios" />
        <TwoColumnSlideStacked />
        <TittleSlide text="Por que Elegirnos" />
        <BgImgSlide />
        <TwoColumnSlide imageSrc="/heater.jpg" tittle="Your tittle here" text="Your text here" />
        <TwoColumnSlide imageSrc="/hidraulic.jpg" tittle="Your tittle here" text="Your text here" />
        {/* You can add more slides here if needed */}
      </main>
      <Footer />
    </div> : null
  );
}