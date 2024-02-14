import React from 'react';
import MainBtn from '../buttons/MainBtn';

export default function HeroHome() {
	return (
		<section className="hero-home">
						<div className="hero-home__images-wrapper">
				<div className="hero-home__fg-image-wrapper">
					<img src="/img/self-portrait.webp" alt="" className="hero-home__fg-image" />
				</div>
				<div className="hero-home__bg-image-wrapper">
					<img src="/img/home-being-plasterd.webp" alt="" className="hero-home__bg-image" />
				</div>
			</div>
			<div className="hero-home__content">
				<h1 className="hero-home__title">Expert plastering, exceptional results</h1>
				<h1 className="">Expert plastering, exceptional results</h1>
				<div className="hero-home__button-wrapper">
					<MainBtn link="/two" content="Huur mij in!" />
					<MainBtn classNames={'btn--secondary'} link="/two" content="contact me" />
				</div>
			</div>

		</section>
	);
}
