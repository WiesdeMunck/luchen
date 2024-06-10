import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Particulieren', path: '/particulieren' },
  { name: 'Bedrijven', path: '/bedrijven' },
  { name: 'Projecten', path: '/projecten' },
  { name: 'Contact', path: '/contact' },
//   { name: 'Blog', path: '/project' },
];

export default function Navigation({ toggleMenu, handleClick }) {
  const location = useLocation();

  return (
    <nav className={`navigation ${!toggleMenu ? 'js-navigation__toggle' : ''} `}>
      <div className='navigation__header'>
        <NavLink className="navigation__logo-wrapper" to="/">
          <img className="navigation__logo" src="/img/logo.webp" alt="" />
        </NavLink>

        {/* <FontAwesomeIcon onClick={handleClick} tabIndex={'0'} className='navigation__xmark' icon={['fas', 'xmark']} /> */}
      </div>

		<div className='navigation__list-wrapper'>
      <ul className="navigation__list">
        {navLinks.map((link, index) => (
          <li key={index} className="navigation__item">
            <NavLink
				  onClick={handleClick}
              className={`navigation__link ${location.pathname === link.path ? 'navigation__link--active' : ''}`}
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
		</div>
    </nav>
  );
}
