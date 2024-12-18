import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Title from './Title';

const Footer = () => (
  <section>
  <div className="footter">
    <div className="flex flex-col">
      <div className="flex justify-start">
        <Title
          title={'ACCJ'}
          titleStyle={{
            color: '#FFF'
          }}
        />
      </div>

      <div className="grid gap-4 grid-cols-5 mt-6 pl-8 link-container">
        <HashLink smooth to="/">
          <h3>Cabezas de Jaguar</h3>
        </HashLink>
        <HashLink smooth to="/archivo">
          <h3>Archivo Rojo</h3>
        </HashLink>
        <HashLink smooth to="#">
          <h3>Centro Cultural</h3>
        </HashLink>
        <HashLink smooth to="#">
          <h3>Quienes somos?</h3>
        </HashLink>
      </div>

      <div className="flex justify-end mt-2">
        <span className="cpy">Copyright ACCJ</span>
      </div>
    </div>
  </div>
  </section>
);

export default Footer;
