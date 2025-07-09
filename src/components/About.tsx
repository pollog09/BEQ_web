import React from 'react';
import { Target, Users, Lightbulb, TrendingUp, CheckCircle, Clock, DollarSign, Telescope as Scope } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Cumplimiento de Normas',
      description: 'Nos aseguramos de que todos nuestros proyectos cumplan con los más altos estándares de calidad'
    },
    {
      icon: Clock,
      title: 'Adherencia a los Plazos',
      description: 'Respetamos los plazos establecidos, entregando resultados a tiempo'
    },
    {
      icon: DollarSign,
      title: 'Gestión de Costos',
      description: 'Mantenemos un control estricto sobre los costos, asegurando que se mantengan dentro del presupuesto acordado'
    },
    {
      icon: Scope,
      title: 'Alcance Definido',
      description: 'Trabajamos dentro de límites y objetivos definidos, garantizando la satisfacción del cliente'
    }
  ];

  const objectives = [
    {
      title: 'Residencial',
      description: 'Proporcionar servicios personalizados que garanticen la seguridad y la eficiencia energética en los hogares'
    },
    {
      title: 'Comercial',
      description: 'Desarrollar proyectos que optimicen el uso de recursos y mejoren la funcionalidad de los espacios comerciales'
    },
    {
      title: 'Industrial',
      description: 'Implementar soluciones robustas y sostenibles que impulsen la productividad y el crecimiento en las industrias'
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Compromiso con la Calidad',
      description: 'En Quality Build Engineering, nos esforzamos por establecer relaciones sólidas y duraderas con nuestros clientes. Nuestro enfoque centrado en el cliente, combinado con nuestra experiencia y conocimiento técnico, nos permite ofrecer soluciones de ingeniería personalizadas que se adaptan a las necesidades específicas de cada cliente.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación Constante',
      description: 'Nuestro equipo de ingenieros altamente capacitados está constantemente buscando formas innovadoras de abordar los desafíos técnicos más complejos. Nos enorgullece ofrecer soluciones creativas y eficaces que superan las expectativas de nuestros clientes.'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Cada proyecto es único y merece una atención especial. Nos dedicamos a entender las necesidades específicas de cada cliente para ofrecer soluciones personalizadas y efectivas.'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-delayed" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Quiénes Somos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En Quality Build Engineering (QBE), nos dedicamos a ofrecer servicios de construcción excepcionales, 
              guiados por nuestra misión de excelencia y compromiso con la calidad. Nuestra experiencia y conocimiento 
              técnico nos permite ofrecer soluciones innovadoras que superan las expectativas.
            </p>
          </div>

          {/* Company Presentation */}
          <div className="mb-16 animate-slide-left">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Presentación de la Empresa</h3>
              <p className="text-gray-300 leading-relaxed">
                En el competitivo mundo de la ingeniería, destacarse requiere no solo experiencia y conocimiento, 
                sino también un compromiso inquebrantable con la calidad. En Quality Build Engineering (QBE), 
                nos enorgullecemos de ofrecer soluciones de ingeniería de alta calidad que superan las expectativas 
                de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-slide-left">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Nuestra Misión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ofrecer un servicio de calidad excepcional, caracterizado por la innovación y la confianza, 
                  especializándonos en proyectos de ingeniería eléctrica, civil y mecánica para los sectores 
                  residencial, comercial e industrial.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-slide-right">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Nuestra Visión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Convertirnos en un referente en el sector de la ingeniería, reconocidos por nuestra excelencia 
                  en el diseño y ejecución de proyectos innovadores y sostenibles, estableciendo relaciones 
                  sólidas y duraderas con nuestros clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Commitment to Excellence */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">Compromiso con la Excelencia</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-cyan-400 mb-3">{value.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-cyan-400 mb-6">Objetivos</h3>
            <div className="text-center mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300">
                <h4 className="text-xl font-bold text-cyan-400 mb-3">General</h4>
                <p className="text-gray-300">
                  Ofrecer soluciones innovadoras y eficientes en los sectores residencial, industrial y comercial 
                  en los campos de la ingeniería eléctrica, mecánica y civil.
                </p>
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-center text-cyan-400 mb-8">Específicos</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <h5 className="text-xl font-bold text-cyan-400 mb-3">{objective.title}</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">¿Por Qué Elegirnos?</h3>
            <div className="space-y-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex-shrink-0">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-cyan-400 mb-4">{item.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;