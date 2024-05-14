import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PreviewColumn({faIcon, title, text}) {
	return (
		<div className="preview-column">
			<h3 className="preview-column__title"><FontAwesomeIcon icon={faIcon} className='preview-column__icon'/> {title}</h3>
			<p className="preview-column__text">
				{text}
			</p>
		</div>
	);
}


