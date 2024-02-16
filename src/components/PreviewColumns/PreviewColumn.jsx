import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PreviewColumn() {
	return (
		<article className="preview-column">
			<h3 className="preview-column__title"><FontAwesomeIcon icon={['fas', 'home']} className='preview-column__icon'/> Lorem, ipsum dolor.</h3>
			<p className="preview-column__text">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Aspernatur, expedita.
			</p>
		</article>
	);
}
