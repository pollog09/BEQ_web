import React from 'react';
import { 
  Zap, 
  Building, 
  Cog, 
  FileCheck, 
  Shield, 
  Battery, 
  BarChart3, 
  Settings,
  Home,
  Building2,
  Factory,
  Wrench,
  Gauge,
  Lightbulb,
  Search,
  Cpu,
  Zap as ZapIcon
} from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Cog,
      title: 'Ingeniería Mecánica',
      description: 'Diseñamos y desarrollamos soluciones innovadoras que optimizan la eficiencia y el rendimiento de los sistemas mecánicos.',
      features: ['Diseño de sistemas', 'Optimización de procesos', 'Análisis de rendimiento', 'Mantenimiento predictivo']
    },
    {
      icon: Zap,
      title: 'Ingeniería Eléctrica',
      description: 'Ofrecemos servicios desde el diseño de sistemas eléctricos hasta la implementación de soluciones de energía sostenible.',
      features: ['Sistemas eléctricos', 'Energía renovable', 'Automatización', 'Control de potencia']
    },
    {
      icon: Building,
      title: 'Ingeniería Civil',
      description: 'Proveemos soluciones integrales en infraestructura, desde la planificación hasta la ejecución de proyectos.',
      features: ['Diseño estructural', 'Planificación urbana', 'Gestión de obras', 'Supervisión técnica']
    }
  ];

  const solutions = [
    {
      icon: FileCheck,
      title: 'Soluciones Integrales de Proyectos',
      description: 'Nos especializamos en ofrecer soluciones completas para proyectos relacionados con instalaciones eléctricas, civiles y mecánicas. Nuestro enfoque abarca desde el diseño hasta la implementación, asegurando que cada etapa del proyecto se ejecute con precisión y eficiencia.'
    },
    {
      icon: Shield,
      title: 'Apoyo en Permisos',
      description: 'Brindamos apoyo integral en la gestión de los permisos necesarios para la construcción, remodelación o expansión de infraestructuras. Nuestro equipo se encarga de todos los aspectos burocráticos, facilitando el proceso para que nuestros clientes se enfoquen en sus objetivos principales.'
    },
    {
      icon: Battery,
      title: 'Calidad Energética',
      description: 'Estamos comprometidos a proporcionar un apoyo excepcional en términos de calidad energética. Evaluamos y optimizamos el uso de energía en cada proyecto, asegurando eficiencia y sostenibilidad en entornos residenciales, comerciales e industriales.'
    }
  ];

  const operationAreas = [
    {
      icon: Home,
      title: 'Residencial',
      description: 'Proporcionamos servicios personalizados que garantizan la seguridad y el confort en el hogar.'
    },
    {
      icon: Building2,
      title: 'Comercial',
      description: 'Desarrollamos proyectos que optimizan la funcionalidad y eficiencia de los espacios comerciales.'
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Implementamos soluciones robustas y sostenibles que impulsan la productividad y el crecimiento industrial.'
    }
  ];

  const specializedServices = [
    {
      icon: ZapIcon,
      title: 'Instalaciones Eléctricas Industriales',
      description: 'Diseño e instalación de sistemas eléctricos en plantas industriales, incluyendo cableado, paneles de control y distribución de energía.'
    },
    {
      icon: Wrench,
      title: 'Remodelación Eléctrica Industrial',
      description: 'Actualización y optimización de sistemas eléctricos existentes en instalaciones industriales para mejorar la eficiencia y la seguridad.'
    },
    {
      icon: Gauge,
      title: 'Calidad y Eficiencia Energética',
      description: 'Implementación de tecnologías y prácticas para reducir el consumo de energía y mejorar la eficiencia de los sistemas eléctricos, incluyendo el uso de fuentes de energía renovable.'
    },
    {
      icon: Search,
      title: 'Auditorías Eléctricas',
      description: 'Evaluación y análisis de sistemas eléctricos para identificar áreas de mejora, reducir el desperdicio de energía y asegurar el cumplimiento de regulaciones y estándares.'
    },
    {
      icon: Cpu,
      title: 'Mantenimiento de Transformadores y Subestaciones',
      description: 'Inspección, reparación y mantenimiento preventivo de transformadores y subestaciones para asegurar su operación óptima y prolongar su vida útil.'
    },
    {
      icon: Lightbulb,
      title: 'Optimización Energética',
      description: 'Desarrollo e implementación de soluciones para maximizar el uso eficiente de la energía, incluyendo la instalación de equipos de monitoreo y control de energía.'
    }
  ];

  const caseStudies = [
    {
      title: 'Remodelación Eléctrica',
      description: 'Planta industrial de Cadence, Coyol, Alajuela.',
      date: 'Septiembre 2024',
      type: 'Industrial'
    },
    {
      title: 'Mantenimiento de Transformador',
      description: 'Transformador pedestal principal en Teradyne',
      date: '2025',
      type: 'Mantenimiento'
    },
    {
      title: 'Auditoría Energética',
      description: 'Calidad energética en DICOMA',
      date: '2024',
      type: 'Auditoría'
    },
    {
      title: 'Auditoría Eléctrica',
      description: 'Sistema eléctrico en CADENCE',
      date: '2024',
      type: 'Auditoría'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800" />
      <div className="absolute top-40 left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-delayed" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Nuestros Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios de ingeniería especializados para satisfacer 
              las necesidades más exigentes de nuestros clientes.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
                  {/* Background image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={index === 0 ? '/metal.jpg' : index === 1 ? '/electric.jpg' : '/tubes.jpg'}
                      alt={`${service.title} background`}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/60 to-slate-900/50" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">Nuestras Soluciones</h3>
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex-shrink-0">
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-cyan-400 mb-4">{solution.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operation Areas */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">Áreas de Operación</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {operationAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-cyan-400 mb-4">{area.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">Servicios Especializados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializedServices.map((service, index) => (
                <div 
                  key={index}
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden group"
                >
                  {/* Background image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={
                        index === 0 ? '/power.jpg' :
                        index === 1 ? '/riel.jpg' :
                        index === 2 ? '/heater.jpg' :
                        index === 3 ? '/metro.jpg' :
                        index === 4 ? '/hidraulic.jpg' :
                        '/hose.jpg'
                      }
                      alt={`${service.title} background`}
                      className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-800/65 to-slate-900/80" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex-shrink-0">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-cyan-400 mb-3">{service.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">Casos de Estudio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-cyan-400">{study.title}</h4>
                    <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
                      {study.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">{study.description}</p>
                  <p className="text-gray-400 text-sm">{study.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                ¿Necesitas una solución personalizada?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Nuestro equipo de expertos está listo para desarrollar soluciones a medida 
                que se adapten perfectamente a las necesidades específicas de tu proyecto.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;