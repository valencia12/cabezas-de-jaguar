import React, { useEffect } from 'react';
import Aos from 'aos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import { Fab } from 'react-tiny-fab';
import Title from './components/Title';
import Title2 from './components/Title2';
import Footer from './components/Footer';
import NavigationDesktop from './components/NavigationDesktop';
import 'react-tiny-fab/dist/styles.css';
import 'aos/dist/aos.css';
import './AppComponent.css';
import redFormula from '../public/assets/images/fede1.png';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function AppComponent() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Botón para volver arriba */}
      <Fab mainButtonStyles={{ backgroundColor: '#485922', marginLeft: '75%' }} icon={<KeyboardArrowUpIcon />} onClick={scrollToTop} />

      {/* Encabezado y Navegación */}
      <header className="banner-header flex flex-col items-center p-4">
        <div className="blue-layer" />
        <nav className="w-full mb-4">
          <NavigationDesktop />
        </nav>
        <h1 className="main-title text-white" style={{ fontSize: '2em', margin: '10px 0', opacity: 0.9 }}>
            Pasados y Futuro
          </h1>
        <div className="header-container text-center">
          
          <p className="subtitle text-white" style={{ fontSize: '1.2em', maxWidth: '90%', margin: '0 auto' }}>
            Investigaciones del Dr. Federico Paredes Umaña sobre el período preclásico en el sureste mesoamericano y la tradición escultórica Cabezas de Jaguar.
          </p>
        </div>
      </header>

      {/* Sección de Proyecto */}
      <section className="project-section flex flex-col lg:flex-row items-center mt-10">
        <div data-aos="fade-right" className="project-image-container w-full lg:w-1/2 flex justify-center">
          <img src={redFormula} alt="dr-fede" style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} />
        </div>
        <div data-aos="fade-left" className="project-description w-full lg:w-1/2 text-center lg:text-left p-6">
          <Title2 title={<><span>Proyecto Arqueológico Cabezas de Jaguar</span><br /><span>Cabezas de Jaguar, pasado y futuro</span></>} />
        </div>
      </section>

      {/* Descripción de Proyecto */}
      <section className="description-section bg-light py-10 px-6 text-center">
        <p className="project-text text-md md:text-lg">
          El Proyecto Arqueológico Cabezas de Jaguar es un esfuerzo académico y cultural fundado por el Dr. Federico Paredes Umaña que busca visibilizar el legado de los pueblos originarios del occidente y centro de El Salvador desde una perspectiva pionera de Arqueología Social e Interculturalidad.
        </p>
        <p className="additional-text  mt-6 md:text-xl">
          La exposición Cabezas de Jaguar, pasado y futuro, busca disminuir el ocultamiento de la tradición, la exclusión social y la vulnerabilidad del patrimonio cultural en El Salvador.
        </p>
      </section>

      {/* Imagen e Inspiración */}
      <section className="inspiration-section flex flex-col md:flex-row items-center justify-between mt-10 px-6">
        <img
          src="https://i0.wp.com/www.diariocolatino.com/wp-content/uploads/2015/08/toque-de-piedra-decima-entrega-nueva-web.jpg?zoom=2&resize=660%2C330&ssl=1"
          alt="img"
          className="inspiration-image"
          style={{ maxWidth: '50%', height: 'auto', padding: '10px' }}
          data-aos="fade-right"
        />
        <div className="inspiration-text text-center md:text-left md:max-w-lg" data-aos="fade-left">
          <p>
            Desde el año 2006 el proyecto ha registrado 69 monumentos de la tradición escultórica Cabeza de Jaguar en los actuales
            <b className="text-lg"> Departamentos de Santa Ana, Sonsonate, Ahuachapán y San Salvador.</b>
          </p>
        </div>
      </section>

      {/* Objetivos de la Asociación */}
      <section className="goals-section mt-20 px-6 text-center">
        <Title title="Asociación Cultural Cabezas de Jaguar:" titleStyle={{ fontSize: '2em' }} />
        <Title title="ACCJ Fines y objetivos:" titleStyle={{ fontSize: '1.8em', marginTop: '10px' }} />
        <ul className="goals-list mt-6 text-sm md:text-lg">
          <li>Fortalecer la identidad cultural como base de mejora en la calidad de vida en El Salvador y Mesoamérica.</li>
          <li>Promover la gestión comunitaria del patrimonio cultural con participación indígena.</li>
          <li>Desarrollar e implementar procesos educativos y culturales.</li>
          <li>Realizar investigaciones de alta calidad sobre identidad y patrimonio cultural.</li>
          <li>Visibilizar y publicar contenidos relacionados con el patrimonio cultural.</li>
        </ul>
      </section>

      {/* Archivo Rojo */}
      <section className="archive-section text-center py-10">
        <Title title={<><span>Archivo</span><Link onClick={scrollToTop} to="/archivo" className="link"> Rojo: Click Aquí </Link></>} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AppComponent;
