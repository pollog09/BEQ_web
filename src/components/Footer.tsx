import React from 'react';
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/quality-build-engineering-59028b31b/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=615618735365', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/qualitybuildengineering/', label: 'Instagram' }
  ];

  const quickLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Quiénes Somos', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Contacto', href: '#contact' }
  ];

  const services = [
    'Ingeniería Eléctrica',
    'Ingeniería Civil',
    'Ingeniería Mecánica',
    'Auditorías Energéticas',
    'Mantenimiento Industrial',
    'Consultoría Técnica'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/whitelogo.png" 
                  alt="QBE Logo" 
                  className="h-8 w-auto"
                />
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                    QBE
                  </span>
                  <span className="text-xs text-gray-400 block">Quality Build Engineering</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Innovación y excelencia en ingeniería eléctrica, civil y mecánica 
                para los sectores residencial, comercial e industrial.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400">Servicios</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    San José, Costa Rica
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+50688888888" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300">
                    +506 8888-8888
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <a href="mailto:proyectos@qbelatam.com" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300">
                    proyectos@qbelatam.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} QBE Latam - Quality Build Engineering. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;