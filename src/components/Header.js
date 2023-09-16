import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/ascj.png';
import icon1 from '../assets/images/icon1.svg';

const items = [
  'What we do',
  'Key project',
  'Partners',
  'The Team',
  'Ready to build? Contact us'
];
const navs = [
  {
    name: 'Inicio',
    id: '/'
  },
  {
    name: 'Archivo Rojo',
    id: '#'
  }
];

const Header = () => (
  <nav className="hidden md:flex md:justify-between lg:px-20 pl120">
    <div>
      <img alt="brand" className="brand" src={logo} />
    </div>
    <div className="flex flex-row">
      {navs.map((it, index) => (
        <div className="pt-8 pb-8 pointer nav-text" key={`header-div-${it.id}-${index}`}>
          <span className="text-white" key={`header-span-${it.id}-${index}`}>
            <Link smooth="true" to={it.id} key={`header-link-${it.id}-${index}`}>
              <span key={`header-name-${it.id}-${index}`}>{it.name}</span>
            </Link>
          </span>
        </div>
      ))}
    </div>
  </nav>
);

export default Header;
