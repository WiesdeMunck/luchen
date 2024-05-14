import React from 'react';
import MainBtn from '../buttons/MainBtn';

export default function CenteredText({title, text}) {
	return (
		<div className="centered-text">

			<h2 className='centered-text__title'>{title}</h2>
			<p className='centered-text__text'>{text}</p>

		</div>
	);
}
