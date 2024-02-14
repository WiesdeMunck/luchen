import React from 'react';

export default function HeroHome() {
	return (
		<section className="hero-home">
			<div className="hero-home__content">
				<h1 className="hero-home__title"></h1>
				<div className="hero-home__button-wrapper">
					<a href="">btn 1</a>
					<a href="">btn 2</a>
				</div>
			</div>
			<div className="hero-home__images-wrapper">
				<div className="hero-home__bg-image-wrapper">
					<img src="/img/self-portrait.webp" alt="" className="hero-home__bg-image" />
				</div>
				<div className="hero-home__fg-image-wrapper">
					<img src="" alt="" className="hero-home__fg-image" />
				</div>
			</div>
		</section>
	);
}
