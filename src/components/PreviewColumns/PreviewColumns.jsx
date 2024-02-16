import React from 'react';
import CenteredText from '../CenteredText/CenteredText';
import PreviewColumn from './PreviewColumn';

export default function PreviewColumns() {
	return (
		<section className="grid-item ">
			<div className="preview-column-wrapper">
				<CenteredText />
				<PreviewColumn />
			</div>

		</section>
	);
}
