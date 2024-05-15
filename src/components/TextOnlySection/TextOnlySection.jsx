import React from 'react';

export default function TextOnlySection({data}) {
	return (
		<section className="grid-item">
			<div className='text-only-section'>
			<h2 className='text-only-section__title'>{data.title}</h2>
			{/* Compant way of writing a return map function */}
			{data.text.map((item, i) => <p key={i} className='text-only-section__text'>{item}</p> )}
			</div>
		</section>
	);
}
