import React from 'react';
import MainBtn from '../buttons/MainBtn';

export default function CtaSection() {
	return (
		<section className='grid-item'>
			<div className="cta-section">
				<h2 className='cta-section__title'>Lorem ipsum dolor sit amet consectetur.</h2>
				<p className='cta-section__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis vitae maxime quo.</p>
				<MainBtn content='Neem contact op' classNames={'btn--inverted'} />
			</div>
		</section>
	);
}
