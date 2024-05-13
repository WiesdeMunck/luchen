import React from 'react';
import CenteredText from '../CenteredText/CenteredText';
import PictureGallary from '../PictureGallary/PictureGallary';
import MainBtn from '../buttons/MainBtn';

export default function ViewProjects() {
	return (
		<section className="grid-item ">
			<div className="view-projects">
			<CenteredText />
			<PictureGallary />
			<MainBtn link={'/projecten'} content="Bekijk mijn projecten" classNames="btn--primary" />
			{/* Todo Components pictured centered */}
			</div>

		</section>
	);
}
