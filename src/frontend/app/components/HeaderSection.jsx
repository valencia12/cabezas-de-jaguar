import React from 'react';
import logo from '../../public/assets/images/ascj.png';
import Header from './Header';

const HeaderSection = () => (
  <section className="banner-header" alt="Bg-goventuresbuilds">
    <div className="blue-layer" />
    <nav>
      <img className="brand md:hidden" alt="Logo-goventurespositive" src={logo} />
      <Header />
    </nav>
    <div className="header-container">
      <div className="md:flex md:justify-center">
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
            Archivo Rojo <br />
          </h3>
          <br />
          <div
            style={{
              display: 'flex',
              border: '3px solid white',
              borderRadius: '5px',
              fontSize: '1em'
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeaderSection;
