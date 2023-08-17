import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/images/ascj.png';
import icon1 from '../assets/images/icon1.svg';

const items = [
  'What we do',
  'Key project',
  'Partners',
  'The Team',
  'Ready to build? Contact us',
];
const navs = [
  {
    name: 'Cabezas de Jaguar',
    id: '#what-we-do-section',
  },
  {
    name: 'Archivo Rojo',
    id: '#keyprojects',
  },
  {
    name: 'Centro Cultural',
    id: '#partners',
  },
  {
    name: 'Quienes somos?',
    id: '#theteam',
  },
];

const NavigationDesktop = () => (
  <nav className="hidden md:flex md:justify-between lg:px-20 pl120">
    <div>
      <img alt="brand" className="brand" src={logo} />
    </div>
    <div className="flex flex-row">
      {navs.map((it) => (
        <div className="pt-8 pb-8 pointer nav-text">
          <span className="text-white">
            <HashLink smooth to={it.id}>
              <span>{it.name}</span>
            </HashLink>
          </span>
        </div>
      ))}
    </div>
  </nav>
);

export default NavigationDesktop;
