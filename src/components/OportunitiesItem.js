import React, { useEffect } from 'react';
import Aos from 'aos';
import Archivo from '../assets/images/archivot.png';
import Adorno from '../assets/images/cabezas.jpeg';

const OpportunityItem = ({ image, text, namestag, frame = false }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <img
        src={image}
        alt={namestag}
        className="ml-4 mr-4"
        style={{
          width: '50%',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'visible',
        }}
        data-aos="fade-left"
      >
        {frame && <img src={Archivo} alt="archivo" className="center-image" />}
        <h3 className="text-blue-900 font-normal text-center text-sm md:text-lg">
          {text}
        </h3>
      </div>
    </>
  );
};

export const OpportunityItemDesk = ({
  image,
  text,
  frame = false,
  namestag,
}) => (
  <div
    className="flex flex-row justify-center"
    style={{
      marginLeft: '20%',
    }}
  >
    <img
      src={Adorno}
      alt={namestag}
      className="mr-4 w-20 md:mr-8 md:w-16 lg:w-24 xl:w-28 lg:mr-24"
    />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {frame && <img src={Archivo} alt="archivo" className="center-image " />}
      <h3
        data-aos="fade-left"
        className="font-normal text-center md:text-lg lg:text-xl xl:text-2xl"
      >
        {text}
      </h3>
    </div>
  </div>
);

export default OpportunityItem;
