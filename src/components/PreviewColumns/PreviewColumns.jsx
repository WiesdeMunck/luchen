import React from 'react';
import CenteredText from '../CenteredText/CenteredText';
import PreviewColumn from './PreviewColumn';


export default function PreviewColumns({data}) {
	return (
		<section className="grid-item ">
			<div>
			<CenteredText title={data.title} text={data.text}/>
			<div className="preview-column-wrapper">
				{data.items.map((item, index) => {
					return (
						<PreviewColumn faIcon={item.faIcon} title={item.title} text={item.text} key={index}/>
					)
				})}
			{/* Todo Components pictured centered */}
			</div>
			</div>
		</section>
	);
}
