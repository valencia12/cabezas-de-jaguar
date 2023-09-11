import React from 'react';
import { Link } from 'react-router-dom';
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
    name: 'Inicio',
    id: '/',
  },
  {
    name: 'Archivo Rojo',
    id: '#',
  },
];

const Header = () => (
  <nav className="hidden md:flex md:justify-between lg:px-20 pl120">
    <div>
      <img alt="brand" className="brand" src={logo} />
    </div>
    <div className="flex flex-row">
      {navs.map((it) => (
        <div className="pt-8 pb-8 pointer nav-text">
          <span className="text-white">
            <Link smooth to={it.id}>
              <span>{it.name}</span>
            </Link>
          </span>
        </div>
      ))}
    </div>
  </nav>
);

export default Header;
