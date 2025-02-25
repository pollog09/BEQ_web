import React from 'react';
import Image from 'next/image';

const TwoColumnSlideStacked = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full slide py-8">
      <div className="w-full md:w-1/2 text-left md:pr-10">
        <h2 className="text-3xl font-semibold text-white text-center">Beneficios para los clientes</h2>
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 relative">
            <Image src="/air.jpg" alt="Ingeniería Mecánica" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Ingeniería Mecánica</h3>
            <p className="text-white text-sm">
              Diseñamos y desarrollamos soluciones innovadoras que optimizan la eficiencia y el rendimiento de los sistemas mecánicos. Nuestro equipo está capacitado para abordar desafíos complejos con creatividad y precisión.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 relative">
            <Image src="/danger.jpg" alt="Ingeniería Eléctrica" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Ingeniería Eléctrica</h3>
            <p className="text-white text-sm">
              Ofrecemos servicios que van desde el diseño de sistemas eléctricos hasta la implementación de soluciones de energía sostenible. Nos aseguramos de que cada proyecto cumpla con los más altos estándares de seguridad y eficiencia.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 relative">
            <Image src="/power.jpg" alt="Ingeniería Civil" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Ingeniería Civil</h3>
            <p className="text-white text-sm">
              Nos especializamos en la planificación y ejecución de proyectos de infraestructura que mejoran la calidad de vida en las comunidades. Nuestro enfoque integral garantiza resultados duraderos y sostenibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSlideStacked;