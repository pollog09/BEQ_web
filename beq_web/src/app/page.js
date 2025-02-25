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
import TwoColumnSlideInverted from "../components/two_column_slide_inverted.js";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); 
  }, []);


  // Slides 1 Stackked
  const slides1 = [
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

// Slides 2 Stacked
const slides2 = [
  {
    imageSrc: "/metal.jpg",
    alt: "Soluciones Integrales de Proyectos",
    title: "Soluciones Integrales de Proyectos",
    text: "Nos especializamos en ofrecer soluciones completas para proyectos relacionados con instalaciones eléctricas, civiles y mecánicas. Nuestro enfoque abarca desde el diseño hasta la implementación, asegurando que cada etapa del proyecto se ejecute con precisión y eficiencia."
  },
  {
    imageSrc: "/tubes.jpg",
    alt: "Apoyo en Permisos",
    title: "Apoyo en Permisos",
    text: "Brindamos apoyo integral en la gestión de los permisos necesarios para la construcción, remodelación o expansión de infraestructuras. Nuestro equipo se encarga de todos los aspectos burocráticos, facilitando el proceso para que nuestros clientes se enfoquen en sus objetivos principales."
  },
  {
    imageSrc: "/heater.jpg",
    alt: "Calidad Energética",
    title: "Calidad Energética",
    text: "Estamos comprometidos a proporcionar un apoyo excepcional en términos de calidad energética. Evaluamos y optimizamos el uso de energía en cada proyecto, asegurando eficiencia y sostenibilidad en entornos residenciales, comerciales e industriales."
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
        <TwoColumnSlideStacked slides={slides1} title="Beneficios para los clientes"/>
        <TittleSlide tittle="Por que Elegirnos" />
        <BgImgSlide img="/hose.jpg" text="En Quality Build Engineering, nos esforzamos por establecer relaciones sólidas y duraderas con nuestros clientes. Nuestro enfoque centrado en el cliente, combinado con nuestra experiencia y conocimiento técnico, nos permite ofrecer soluciones de ingeniería personalizadas que se adaptan a las necesidades específicas de cada cliente." title="Compromiso con la Calidad" />
        <TwoColumnSlideInverted imageSrc="/tubes.jpg" title1="Innovación Constante:" text1="En Quality Build Engineering, nos esforzamos por establecer relaciones sólidas y duraderas con nuestros clientes. Nuestro enfoque centrado en el cliente, combinado con nuestra experiencia y conocimiento técnico, nos permite ofrecer soluciones de ingeniería personalizadas que se adaptan a las necesidades específicas de cada cliente." 
                                                      title2="Atención Personalizada:" text2="Nuestro equipo de ingenieros altamente capacitados está constantemente buscando formas innovadoras de abordar los desafíos técnicos más complejos. Nos enorgullece ofrecer soluciones creativas y eficaces que superan las expectativas de nuestros clientes." />
        <TittleSlide tittle="Objetivos" />
        <TwoColumnSlideInverted imageSrc="/tubes.jpg" title1="Innovación Constante:" text1="En Quality Build Engineering, nos esforzamos por establecer relaciones sólidas y duraderas con nuestros clientes. Nuestro enfoque centrado en el cliente, combinado con nuestra experiencia y conocimiento técnico, nos permite ofrecer soluciones de ingeniería personalizadas que se adaptan a las necesidades específicas de cada cliente."
                                                      title2="Atención Personalizada:" text2="Nuestro equipo de ingenieros altamente capacitados está constantemente buscando formas innovadoras de abordar los desafíos técnicos más complejos. Nos enorgullece ofrecer soluciones creativas y eficaces que superan las expectativas de nuestros clientes." />
        <TwoColumnSlideStacked slides={slides2} titleImageSrc="/power.jpg"/>
        <BgImgSlide 
          img="/tubes.jpg" 
          title="Compromiso con la Excelencia" 
          text={
            <ul className="list-disc pl-5 text-left">
              <li>Cumplimiento de Normas: Nos aseguramos de que todos nuestros proyectos cumplan con los más altos estándares de calidad.</li>
              <li>Adherencia a los Plazos: Respetamos los plazos establecidos, entregando resultados a tiempo.</li>
              <li>Gestión de Costos: Mantenemos un control estricto sobre los costos, asegurando que se mantengan dentro del presupuesto acordado.</li>
              <li>Alcance Definido: Trabajamos dentro de límites y objetivos definidos, garantizando la satisfacción del cliente.</li>
            </ul>
          }
        />
        <TittleSlide tittle="Mision" />
        <TittleSlide tittle="Vision" />
        <TittleSlide tittle="Areas de Operacion" />
        </main> 
      <Footer />
    </div> : null
  );
}