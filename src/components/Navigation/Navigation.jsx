import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li className="navigation__item">
					<Link className="navigation__link" to="/">
						Home
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__link" to="/">
						Particulieren
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__link" to="/">
						Bedrijven
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__link" to="/">
						Projecten
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__link" to="/">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
