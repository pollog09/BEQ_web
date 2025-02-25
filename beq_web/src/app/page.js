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
        <TittleSlide tittle="Quienes Somos" text=" Quality Build Engineering se dedica a ofrecer servicios de construcción excepcionales, guiados
                                                  por nuestra misión y visión. Estamos comprometidos con la calidad, la innovación y la
                                                  satisfacción del cliente, lo que nos posiciona como una opción preferida en el mercado." />
        <TwoColumnSlide imageSrc="/metro.jpg" tittle="Presentacion de la Empresa" logo="whitelogo.png" text="En el competitivo mundo de la ingeniería, destacarse requiere no solo experiencia y conocimiento, sino también un compromiso inquebrantable con la calidad. En Quality Build Engineering (QBE), nos enorgullecemos de ofrecer soluciones de ingeniería de alta calidad que superan las expectativas de nuestros clientes." />
        <TittleSlide tittle="Nuestros Servicios" />
        <TwoColumnSlideStacked slides={slides1} title="Beneficios para los clientes"/>
        <TittleSlide tittle="Por que Elegirnos" />
        <BgImgSlide img="/hose.jpg" text="En Quality Build Engineering, nos esforzamos por establecer relaciones sólidas y duraderas con nuestros clientes. Nuestro enfoque centrado en el cliente, combinado con nuestra experiencia y conocimiento técnico, nos permite ofrecer soluciones de ingeniería personalizadas que se adaptan a las necesidades específicas de cada cliente." title="Compromiso con la Calidad" />
        <TwoColumnSlideInverted imageSrc="/tubes.jpg" title1="Innovación Constante:" text1="En Quality Build Engineering, nos esforzamos por establecer relaciones sólidas y duraderas con nuestros clientes. Nuestro enfoque centrado en el cliente, combinado con nuestra experiencia y conocimiento técnico, nos permite ofrecer soluciones de ingeniería personalizadas que se adaptan a las necesidades específicas de cada cliente." 
                                                      title2="Atención Personalizada:" text2="Nuestro equipo de ingenieros altamente capacitados está constantemente buscando formas innovadoras de abordar los desafíos técnicos más complejos. Nos enorgullece ofrecer soluciones creativas y eficaces que superan las expectativas de nuestros clientes." />
        <TittleSlide tittle="Objetivos" />
        <TwoColumnSlideInverted imageSrc="/hidraulic.jpg" title1="General:" text1="Ofrecer soluciones innovadoras y eficientes en los
                                                                              sectores residencial, industrial y comercial en los campos de
                                                                              la ingeniería eléctrica, mecánica y civil"
                                                      title2="Especifos:" text2=" Residencial: Proporcionar servicios personalizados que
                                                                                  garanticen la seguridad y la eficiencia energética en los
                                                                                  hogares.
                                                                                  Comercial: Desarrollar proyectos que optimicen el uso de
                                                                                  recursos y mejoren la funcionalidad de los espacios
                                                                                  comerciales.
                                                                                  Industrial:
                                                                                  Implementar
                                                                                  soluciones
                                                                                  robustas
                                                                                  y
                                                                                  sostenibles que impulsen la productividad y el
                                                                                  crecimiento en las industrias" />
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
        <TwoColumnSlide imageSrc="/tubes.jpg" text=" Nuestra misión es ofrecer un servicio de calidad
                                                      excepcional, caracterizado por la innovación y la
                                                      confianza,
                                                      a todos nuestros clientes. Nos
                                                      especializamos en proyectos de ingeniería eléctrica,
                                                      civil y mecánica, entre otros, abarcando los sectores
                                                      residencial, comercial e industrial" />               
        <TittleSlide tittle="Vision" />
        <TwoColumnSlide imageSrc="/tubes.jpg" text="Nuestra visión es convertirnos en un referente en el
                                                      sector de la ingeniería, reconocidos por nuestra
                                                      excelencia en el diseño y ejecución de proyectos
                                                      innovadores y sostenibles. Nos esforzamos por
                                                      establecer relaciones sólidas y duraderas con
                                                      nuestros clientes, basadas en la confianza y el
                                                      compromiso con la calidad." />
        <TittleSlide tittle="Areas de Operacion" />
        <TwoColumnSlide 
          imageSrc="/plant.jpg" 
          tittle="Estamos comprometidos a ofrecer soluciones innovadoras y eficientes en los siguientes sectores:"
          text={
            <div className="text-left">
              <ul className="list-disc pl-5 ">
              <li>Residencial: Proporcionamos servicios personalizados que garantizan la seguridad y el confort en el hogar.</li>
                <li>Comercial: Desarrollamos proyectos que optimizan la funcionalidad y eficiencia de los espacios comerciales.</li>
                <li>Industrial: Implementamos soluciones robustas y sostenibles que impulsan la productividad y el crecimiento industrial.</li>
                <li>Instalaciones Eléctricas Industriales: Diseño e instalación de sistemas eléctricos en plantas industriales, incluyendo cableado, paneles de control y distribución de energía.</li>
                <li>Remodelación Eléctrica Industrial: Actualización y optimización de sistemas eléctricos existentes en instalaciones industriales para mejorar la eficiencia y la seguridad.</li>
                <li>Calidad y Eficiencia Energética: Implementación de tecnologías y prácticas para reducir el consumo de energía y mejorar la eficiencia de los sistemas eléctricos, incluyendo el uso de fuentes de energía renovable.</li>
                <li>Auditorías Eléctricas: Evaluación y análisis de sistemas eléctricos para identificar áreas de mejora, reducir el desperdicio de energía y asegurar el cumplimiento de regulaciones y estándares.</li>
                <li>Mantenimiento de Transformadores y Subestaciones: Inspección, reparación y mantenimiento preventivo de transformadores y subestaciones para asegurar su operación óptima y prolongar su vida útil.</li>
                <li>Optimización Energética: Desarrollo e implementación de soluciones para maximizar el uso eficiente de la energía, incluyendo la instalación de equipos de monitoreo y control de energía.</li>
                <li>Servicios de Calidad: Enfoque constante en la calidad de los servicios prestados, asegurando que se cumplan los más altos estándares y satisfaciendo las necesidades y expectativas de los clientes.</li>
              </ul>
            </div>
          }
        />
        <TittleSlide tittle="Casos de Estudio" 
        text={
          <div className="text-left">
            <ul className="list-disc pl-5">
              <li>Remodelación eléctrica en la planta industrial de Cadence, Coyol, Alajuela. Septiembre 2024</li>
              <li>Mantenimiento del transformador pedestal principal en Teradyne 2025</li>
              <li>Auditoría de calidad energética en DICOMA 2024</li>
              <li>Auditoría eléctrica en CADENCE 2024</li>
            </ul>
          </div>
        }
        />
        </main> 
      <Footer />
    </div> : null
  );
}