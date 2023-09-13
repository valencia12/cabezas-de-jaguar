import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import { Fab } from 'react-tiny-fab';
import Title from './components/Title';
import Title2 from './components/Title2';
import Footer from './components/Footer';
import NavigationDesktop from './components/NavigationDesktop';
import redFormula from './assets/images/fede1.png';

import 'react-tiny-fab/dist/styles.css';
import 'aos/dist/aos.css';
import './App.css';

const gridItems = [
  {
    image: '',
    text: (
      <>
        Click <br /> Para ir a Archivo Rojo:
      </>
    ),
    frame: false,
    namestag: ''
  },
  {
    image: '',
    text: '',
    frame: true,
    namestag: ''
  }
];

const top = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};

function App() {
  const styles = {
    backgroundColor: '#485922',
    marginLeft: '75%'
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Fab
        mainButtonStyles={styles}
        icon={<KeyboardArrowUpIcon />}
        onClick={top}
      />
      <section className="banner-header" alt="Bg-goventuresbuilds">
        <div className="blue-layer" />
        <nav>
          <NavigationDesktop />
        </nav>
        <div className="header-container">
          <div className="md:flex md:justify-center">
            <div className="md:hidden">
             
            </div>
            <div
              className="large-title-container"
              style={{
                zIndex: '300',
                borderRadius: '3px',
                opacity: '0.9'
              }}
            >
              <h3
                className="title text-right md:text-lg md:text-center"
                style={{
                  fontSize: '1.8em',
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                Pasados y Futuro <br />
              </h3>
              <br />
              <div
                style={{
                  display: 'flex',
                  border: '3px solid white',
                  borderRadius: '5px',
                  fontSize: '1em'
                }}
              >
                <h3 className="md:text-center">
                  <span
                    style={{
                      fontSize: '1.8em',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    Investigaciones del dr Federico Paredes Umaña sobre el
                    período preclásico en el sureste mesoamericano y la
                    tradición escultórica Cabezas de Jaguar
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="formula-section flex flex-col lg:flex-row-reverse">
        <div
          data-aos="fade-left"
          className="pt-0 lg:mt-24 xl:mt-32 sizeXl"
          style={{
            marginRight: '10%'
          }}
        >
          <div
            style={{
              marginTop: '5em'
            }}
          >
            <Title2
              title={
                <>
                  <span style={{}} className="md:text-6xl">
                    Proyecto arqueológico Cabezas de Jaguar
                  </span>
                  <br />{' '}
                  <span className="md:text-4xl">
                    {' '}
                    Cabezas de Jaguar, pasado y futuro{' '}
                  </span>
                </>
              }
            />
          </div>
        </div>
        <div id="formula-image-container" data-aos="fade-right">
          <img className="hidden sm:block" src={redFormula} alt="dr-fede" />
          <img className="block sm:hidden" src={redFormula} alt="dr-fede" />
        </div>
        {/* <img className='circle-fill-primary' src={circleFillPrimary} /> */}
      </section>

      <section className="union-w-m">
        <section className="w-full">
          <section id="what-we-do-section">
            {/* <Title title="ACCJ" dark /> */}
            <div className="mt-10 lg:mb-0 md:mx-20">
              <p className="cp px-4">
                El Proyecto Arqueológico Cabezas de Jaguar es un esfuerzo
                académico y cultural fundado por el Dr. Federico Paredes Umaña
                que busca visibilizar el legado de los pueblos originarios del
                occidente y centro de El Salvador desde una perspectiva, pionera
                en el país, de Arqueología Social e Interculturalidad.
              </p>
            </div>
          </section>
          <div className="accent-bg md:flex md:justify-between md:pt-2  relative">
            <div className="flex justify-center md:items-center">
              <p
                className="hidden sm:block text-white pt-8 md:pt-0 text-center md:text-left md:text-sm lg:text-xl pb-8 md:px-20"
                data-aos="fade-right"
              >
                <b className="md:text-lg lg:text-2xl">
                  La exposición Cabezas de Jaguar, pasado y futuro busca
                  disminuir el ocultamiento de la tradición, la exclusión social
                  y la vulnerabilidad del patrimonio cultural que sufre la
                  población de El Salvador.{' '}
                </b>
              </p>
              <p
                className="block sm:hidden text-white pt-8 md:pt-0 text-center md:text-left md:text-sm lg:text-xl pb-8 md:px-20"
                data-aos="fade-right"
              >
                <b className="md:text-lg lg:text-2xl">
                  Desde el año 2006 el proyecto ha registrado 69 monumentos de
                  la tradición escultórica Cabeza de Jaguar en los actuales,
                </b>{' '}
                Departamentos de Santa Ana, Sonsonate, Ahuachapán y San
                Salvador.
              </p>
            </div>
            <div data-aos="fade" />

            {/** MOLECULA DE ENMEDIO */}
          </div>
        </section>
      </section>
      <div className="flex flex-col-reverse md:flex-row-reverse md:justify-between md:items-center">
        <img
          style={{
            height: '35%'
          }}
          alt="img"
          data-aos="fade-right"
          src="https://i0.wp.com/www.diariocolatino.com/wp-content/uploads/2015/08/toque-de-piedra-decima-entrega-nueva-web.jpg?zoom=2&resize=660%2C330&ssl=1"
        />
        <section className="idk mt-5 md:mt-0">
          <p id="personal-inspiration" data-aos="fade-left">
            Desde el año 2006 el proyecto ha registrado 69 monumentos de la
            tradición escultórica Cabeza de Jaguar en los actuales,
            <b className="text-3xl">
              Departamentos de Santa Ana, Sonsonate, Ahuachapán y San Salvador.
            </b>
          </p>
        </section>
        <div data-aos="fade" />
      </div>

      <section id="#opport" className="relative mt-20 sm:mt-24 op-container">
        <Title
          title={
            <>
              Asociación Cultural <br className="md:hidden" /> Cabezas de Jagua:
            </>
          }
          titleStyle={{
            fontSize: '2em'
          }}
        />
        <Title
          titleStyle={{
            fontSize: '2em'
          }}
          title={
            <>
              ACCJ <br /> Fines u objetivos:
            </>
          }
        />
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <ul>
            <li>
              Fortalecer la identidad cultural como fundamento de la mejora de
              la calidad de vida de la población salvadoreña, centroamericana y
              mesoamericana.
            </li>
            <li>
              Promover la creación e implementación del modelo de gestión
              comunitaria del patrimonio cultural con énfasis en la
              participación de pueblos indígenas.
            </li>
            <li>
              Desarrollar e implementar procesos educativos, formativos y de
              diálogo de saberes vinculados a la cultura.
            </li>
            <li>
              Impulsar, diseñar, asesorar y realizar investigaciones de alta
              calidad relacionadas con la cultura la identidad y el patrimonio
              cultural.
            </li>
            <li>
              Promover, difundir, visibilizar y publicar contenidos relacionados
              con los procesos culturales, el patrimonio cultural y el
              fortalecimiento de la identidad salvadoreña, centroamericana y
              mesoamericana.
            </li>
          </ul>
        </div>
        <Title
          title={
            <>
              Archivo <br className="md:hidden" /> <Link to='/archivo'> Rojo: Click Aqui </Link>
            </>
          }
        />
        {/* <img id="circle-fill-accent-desk"  className='opacity-30 circle-fill-accent ' src={circleFillPrimary} />
          <img className='red-float md:hidden' src={red} /> */}
      </section>

      {/* <section id="keyprojects" className='mt-48 relative marcas-container'>
          <Title title={"Key Projects"} />
          <div className='mx-5 mt-8' >
            <p className='opacity-70 text-center md:text-xl'>
              We have Worked alongside these projects and companies:
            </p>
            <MarcasGrid images={marcas} card coleccionAlts={coleccionAlts} />
          </div>
          <img src={red} className="red-rotated marginred" />
          <img className='circle-fill-primary' src={circleFillAccent}
            style={{
              zIndex: "-10"
            }}
          /> */}

      {/* </section> */}
      {/* <section id="partners" className='mt-16 partners-container' >
          <img className='w-full' src={wave4} />
          <div className='ml-12 mr-12 mt-10' >
            <Title title={"Partners"} />
            <p className='text-gray-500 text-center mt-8 md:text-xl'>
              Nobody knows how long it took to build Rome, but we would bet it was done by teaming up.
            </p>

            <ParnertsGrid images={partnersAlt} partnersAlt={partnersAlt} />

          </div>
          <img className='w-full' src={wave2} />
        </section> */}
      <section className="lg:relative">
        {/* <div className='flex justify-end relative'>
            <img src={red} className="red-rotated-2 md:absolute" />
            <img className='circle-fill-accent' src={circleFillPrimary} />
          </div> */}
        {/* <div id="theteam" className='ml-4 mr-4'>
            <Title title={"The team"} />
            <div className='mt-10' data-aos="fade-right" >
              <TeamGrid />
            </div>
          </div> */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
