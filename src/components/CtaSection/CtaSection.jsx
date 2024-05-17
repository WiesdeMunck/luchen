import React from 'react';
import MainBtn from '../buttons/MainBtn';
import { Link } from 'react-router-dom';


export default function CtaSection({data}) {
	return (
		<section className='grid-item'>
			<div className="cta-section">
				<h2 className='cta-section__title'>{data.title}</h2>
				{data.text.map((item, i) => <p key={i} className='cta-section__text'>{item}</p>) }

				<MainBtn link={data.primaryBtnLink} content={data.primaryBtnContent} classNames={'btn--inverted'} />
			</div>
		</section>
	);
}
