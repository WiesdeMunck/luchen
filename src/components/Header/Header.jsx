import React from 'react';
import { Link } from 'react-router-dom';
import MainBtn from '../buttons/MainBtn';
import Navigation from '../Navigation/Navigation';

export default function Header() {
	return (
		<header className="grid-item">
			<div className='header '>
			<Link className='header__logo-wrapper' to="/">
			<img className='header__logo' src="/img/logo.webp" alt="" />
			</Link>
			<svg
				role="button"
				tabIndex={0}
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="28"
				viewBox="0 0 32 28"
				fill="none"
				className='header__hamburger-icon'
			>
				<rect width="32" height="4" rx="2" fill="#002012" />
				<rect y="12" width="32" height="4" rx="2" fill="#002012" />
				<rect y="24" width="32" height="4" rx="2" fill="#002012" />
			</svg>

			<Navigation />

			<MainBtn link="/" classNames={'header__cta'} content={"Neem contact op!"} />
			</div>
		</header>
	);
}
