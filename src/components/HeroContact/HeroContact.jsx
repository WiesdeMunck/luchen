import React from 'react';
import ContactForm from '../Forms/ContactForm';


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
								<a href="mailto:info@luschenstukadoors.nl">info@luschenstukadoors.nl</a>
							</li>
							<li className="hero-contact__content-list-item">
								<a href="tel:0653500500">06-53-500-500</a>
							</li>
						</ul>
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
}
