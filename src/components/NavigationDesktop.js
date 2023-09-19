import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/images/ascj.png';


const navs = [
  {
    name: 'Cabezas de Jaguar',
    id: '/'
  },
  {
    name: 'Archivo Rojo',
    id: '/archivo'
  }
];

const NavigationDesktop = () => (
  <nav className="hidden md:flex md:justify-between lg:px-20 pl120">
    <div>
      <img alt="brand" className="brand" src={logo} />
    </div>
    <div className="flex flex-row">
      {navs.map((it, index) => (
        <div className="pt-8 pb-8 pointer nav-text" key={`navigation-div-${it.id}-${index}`}>
          <span className="text-white" key={`navigation-span-${it.id}-${index}`}>
            <HashLink smooth="true" to={it.id} key={`navigation-hashlink-${it.id}-${index}`}>
              <span key={`navigation-name-${it.id}-${index}`}>{it.name}</span>
            </HashLink>
          </span>
        </div>
      ))}
    </div>
  </nav>
);

export default NavigationDesktop;
