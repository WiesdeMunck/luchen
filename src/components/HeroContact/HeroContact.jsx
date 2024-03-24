import React from 'react';


export default function HeroContact() {
	return (
		<section className="grid-item --no-full-height">
			<div className="hero-contact">
				<figure className="hero-contact__img-wrapper">
					<img
						src="/img/home-being-plasterd.webp"
						alt=""
						className="hero-contact__img"
					/>
				</figure>
				<div className="hero-contact__from-wrapper">
					<div className="hero-contact__content-wrapper">
						<h1 className="hero-contact__content-title">
							Neem contact op
						</h1>
						<ul className="hero-contact__content-list">
							<li className="hero-contact__content-list-item">
								info@luschenstukadoors.nl
							</li>
							<li className="hero-contact__content-list-item">
								06 - 53500500
							</li>
						</ul>
					</div>
					<form action="" className="hero-contact__form">
						<label htmlFor="name">Naam</label>
						<input type="text" />
						<label htmlFor="email">Email</label>
						<input type="email" />
						<label htmlFor="message">Bericht</label>
						<textarea
							name="message"
							id="message"
							rows="10"
						></textarea>
					</form>
				</div>
			</div>
		</section>
	);
}
