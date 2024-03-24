import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navigation({ toggleMenu, handleClick }) {




	return (

		<nav className={`navigation ${!toggleMenu ? 'js-navigation__toggle' : ''} `}>

			<div className='navigation__header'>
				<Link className="navigation__logo-wrapper" to="/">
					<img className="navigation__logo" src="/img/logo.webp" alt="" />
				</Link>

				<FontAwesomeIcon onClick={handleClick} tabIndex={'0'} className='navigation__xmark' icon={['fas', 'xmark']} />
			</div>

			<ul className="navigation__list">
				<li className="navigation__item">
					<Link className="navigation__link" to="/">
						Home
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__link" to="/particulieren">
						Particulieren
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__link" to="/bedrijven">
						Bedrijven
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__link" to="/projecten">
						Projecten
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__link" to="/contact">
						Contact
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__link" to="/blog">
						Blog
					</Link>
				</li>
			</ul>
		</nav>
	);
}
