import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';

const MarcasGrid = ({ card, coleccionAlts }) => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className="mt-16  lg:w-full" id="keyprojects">
      <div className="marcas-grid">
        {coleccionAlts.map((e, keys) => {
          if (card) {
            if (keys === 0) {
              return (
                <div
                  key={`marcas-${keys}`}
                  data-aos="fade-left"
                  className="marcas-item w-24 h-24 mx-auto shadow-lg rounded-full flex justify-center items-center p-5 md:w-40 md:h-40 lg:w-48 lg:h-48"
                  style={{ background: '#fff', zIndex: 1 }}
                >
                  <a
                    style={{
                      display: 'contents'
                    }}
                    href={e.links}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img style={{ width: '90%' }} src={e.img} alt={e.namestag} />
                  </a>
                </div>
              );
            }
            return (
              <div
                key={`marcas-shadow-${keys}`}
                data-aos="fade-left"
                className="marcas-item w-24 h-24 mx-auto shadow-lg rounded-full flex justify-center items-center p-5 md:w-40 md:h-40 lg:w-48 lg:h-48"
                style={{ background: '#fff', zIndex: 1 }}
              >
                <a
                  style={{
                    display: 'contents'
                  }}
                  href={e.links}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img style={{ width: '80%' }} src={e.img} alt={e.namestag} />
                </a>
              </div>
            );
          }

          if (!card) {
            return (
              <div
                key={`marcas-center-${keys}`}
                data-aos="fade-left"
                className="marcas-item lg:w-60 lg:mr-4 lg:ml-4 flex justify-center items-center"
              >
                <img
                  className="md:w-24 lg:w-60 lg:max-w-60 md:flex-1 w-full"
                  src={e.img}
                  alt="img"
                />
              </div>
            );
          }
          return <div key={`marcas-none-${keys}`} />;
        })}
      </div>
    </div>
  );
};

export default MarcasGrid;
