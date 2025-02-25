import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} BEQ Engineering. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com/qualitybuildengineering/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/quality-build-engineering-59028b31b/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=615618735365" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" />
          </a>
          <a href="https://qbelatam.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} className="text-white text-2xl" />
          </a>
          <a href="mailto:proyectos@qbelatam.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
          </a>
        </div>
        <p className="text-sm">
          Quality Build Engineering se dedica a ofrecer servicios de construcción excepcionales, guiados por nuestra misión y visión. Estamos comprometidos con la calidad, la innovación y la satisfacción del cliente, lo que nos posiciona como una opción preferida en el mercado.
        </p>
      </div>
    </footer>
  );
};

export default Footer;