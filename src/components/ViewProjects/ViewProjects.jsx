import React from 'react';
import CenteredText from '../CenteredText/CenteredText';
import PictureGallary from '../PictureGallary/PictureGallary';
import MainBtn from '../buttons/MainBtn';

export default function ViewProjects({data}) {
	return (
		<section className="grid-item ">
			<div className="view-projects">
			<CenteredText title={data.title} text={data.text} />
			<PictureGallary images={data.images} />
			<MainBtn link={data.primaryBtnLink} content={data.primaryBtnContent} classNames="btn--primary" />
			</div>

		</section>
	);
}
