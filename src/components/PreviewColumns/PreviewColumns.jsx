import React from 'react';
import CenteredText from '../CenteredText/CenteredText';
import PreviewColumn from './PreviewColumn';


export default function PreviewColumns() {
	return (
		<section className="grid-item ">
			<CenteredText />
			<div className="preview-column-wrapper">



				{[...Array(3)].map((_, index) => {
					return (
						<PreviewColumn key={index}/>
					)
				})}
			{/* Todo Components pictured centered */}
			</div>

		</section>
	);
}
