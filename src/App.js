import { useEffect } from 'react';
import Aos from 'aos';
import { BrowserRouter } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from 'react-tiny-fab';
import Title from './components/Title';
import Title2 from './components/Title2';
import OpportunityItem, {
  OpportunityItemDesk,
} from './components/OportunitiesItem';
import Footer from './components/Footer';
import NavigationMobile from './components/NavigationMobile';
import NavigationDesktop from './components/NavigationDesktop';
import circleFillAccent from './assets/images/circle-fill-accent.svg';
import redFormula from './assets/images/fede1.png';
import logo from './assets/images/ascj.png';
import mail from './assets/images/emailp.svg';
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
    namestag: '',
  },
  {
    image: '',
    text: '',
    frame: true,
    namestag: '',
  },
];

const top = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // for smoothly scrolling
  });
};

function App() {
  const styles = {
    backgroundColor: '#485922',
    marginLeft: '75%',
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <BrowserRouter>
      <div style={{ overflowX: 'hidden' }}>
        <Fab
          mainButtonStyles={styles}
          icon={<KeyboardArrowUpIcon />}
          onClick={top}
        />
        <section className="banner-header" alt="Bg-goventuresbuilds">
          <div className="blue-layer" />
          <nav>
            <img
              className="brand md:hidden"
              alt="Logo-goventurespositive"
              src={logo}
            />
            <NavigationDesktop />
          </nav>
          <div className="header-container">
            <div className="md:flex md:justify-center">
              <div className="md:hidden">
                <NavigationMobile />
              </div>
              <div
                className="large-title-container"
                style={{
                  zIndex: '300',
                }}
              >
                <h1 className="title text-right md:text-lg md:text-center">
                  Del mineral a la piedra
                </h1>
                <p className="text-right md:text-center">
                  <button
                    type="submit"
                    style={{
                      zIndex: '30',
                      backgroundColor: 'transparent',
                      border: '2px solid white',
                      color: 'white',
                    }}
                  >
                    ¿Quienes somos?
                  </button>
                </p>
              </div>
            </div>
          </div>

          <img
            alt="bubble"
            className="circle-fill-accent"
            src={circleFillAccent}
          />
        </section>
        <section className="formula-section flex flex-col lg:flex-row-reverse">
          <div
            data-aos="fade-left"
            className="pt-0 lg:mt-24 xl:mt-32 sizeXl"
            style={{
              marginRight: '10%',
            }}
          >
            <Title2
              title={
                <>
                  <span style={{}} className="md:text-6xl">
                    ASCJ
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
          <div id="formula-image-container" data-aos="fade-right">
            <img
              style={{
                marginLeft: '10%',
              }}
              className="hidden sm:block"
              src={redFormula}
              alt="goventures-formula"
            />
            <img
              className="block sm:hidden"
              src={redFormula}
              alt="goventures-formula-movil"
            />
          </div>
          {/* <img className='circle-fill-primary' src={circleFillPrimary} /> */}
        </section>

        <section className="union-w-m">
          <section className="w-full">
            <section id="what-we-do-section">
              <Title title="ASCJ" dark />
              <div className="mt-10 lg:mb-0 md:mx-20">
                <p className="cp px-4">
                  Entre otros elementos, se exhiben los dibujos científicos de
                  las tallas prehispánicas del artista, Daniel Salazar, quien
                  aplicó la técnica de puntillismo a base de tinta china sobre
                  papel transparente.
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
                    disminuir el ocultamiento de la tradición, la exclusión
                    social y la vulnerabilidad del patrimonio cultural que sufre
                    la población de El Salvador.{' '}
                  </b>
                </p>
                <p
                  className="block sm:hidden text-white pt-8 md:pt-0 text-center md:text-left md:text-sm lg:text-xl pb-8 md:px-20"
                  data-aos="fade-right"
                >
                  <b className="md:text-lg lg:text-2xl">
                    At Geko Ventures we pour over 20 years of knowledge in
                    technology,
                  </b>{' '}
                  awesome contacts, keen investors, and proven business
                  methodologies to gear up for a winning and lasting solutions.
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
              marginRight: '20%',
              width: '20%',
              height: '35%',
            }}
            alt="img"
            data-aos="fade-right"
            src="https://i0.wp.com/www.diariocolatino.com/wp-content/uploads/2015/08/toque-de-piedra-decima-entrega-nueva-web.jpg?zoom=2&resize=660%2C330&ssl=1"
          />
          <section className="idk mt-5 md:mt-0">
            <p id="personal-inspiration" data-aos="fade-left">
              Entre otros elementos, se exhiben los dibujos científicos de las
              tallas prehispánicas del artista
              <b className="text-3xl">
                , Daniel Salazar, quien aplicó la técnica de puntillismo.
              </b>
            </p>
          </section>
          <div data-aos="fade" />
        </div>

        <section id="#opport" className="relative mt-20 sm:mt-24 op-container">
          <Title
            title={
              <>
                Archivo <br className="md:hidden" /> Rojo:
              </>
            }
          />
          <div
            className="mt-24 grid grid-cols-2 ml-12 mr-12 gap-y-24 md:hidden"
            data-aos="fade-left"
          >
            {gridItems.map((el, index) => (
              <OpportunityItem key={`archivo-${index}`} {...el} />
            ))}
          </div>
          <div
            className="mt-24 grid grid-cols-2 ml-12 mr-12 gap-y-24 md:grid-cols-3 gridDesk"
            data-aos="fade-left"
          >
            {gridItems.map((el, index) => (
              <OpportunityItemDesk key={`rojo-${index}`} {...el} />
            ))}
          </div>
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
          <section id="contactUs" className="mt-32 relative">
            <Title title="Contact us" />
            <div
              className="flex justify-center mt-24 mb-24"
              data-aos="fade-down"
            >
              <div className="flex flex-row items-center gap-4">
                <img
                  href="mailto:asociacioncabezasdejaguar@gmail.com"
                  src={mail}
                  className="w-8 h-8 md:w-16 md:h-16"
                  alt="alt"
                  style={{
                    color: '#BCCF8F',
                  }}
                />
                <span
                  href="mailto:asociacioncabezasdejaguar@gmail.com"
                  className="text-sm opacity-70 md:text-xl"
                >
                  asociacioncabezasdejaguar@gmail.com
                </span>
              </div>
            </div>
            {/* <img className='circle-fill-primary-top' src={circleFillPrimary} />
            <img className='minired-top' src={minired} />
            <img className='circle-fill-accent'  src={circleFillAccent} /> */}
          </section>
          <Footer />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
