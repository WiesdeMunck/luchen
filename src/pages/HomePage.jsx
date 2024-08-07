import React, { useState, useEffect } from 'react';
import HeroHome from '../components/HeroHome/HeroHome';
import ViewProjects from '../components/ViewProjects/ViewProjects';
import PreviewColumns from '../components/PreviewColumns/PreviewColumns';
import TextImgSection from '../components/TextImgSection/TextImgSection';
import TextOnlySection from '../components/TextOnlySection/TextOnlySection';
import ReviewWrapper from '../components/Reviews/ReviewWrapper';
import CtaSection from '../components/CtaSection/CtaSection';
// Import data
import HomeData from '../data/home/home.json';

export default function HomePage() {
	// Set data

	return (
		<>
			<HeroHome key="1" data={HomeData.HeroHome} />
			<ViewProjects key="2" data={HomeData.ViewProjects} />
			{/* <PreviewColumns key="3" data={HomeData.PreviewColumns} /> */}
			<ReviewWrapper key="5" data={HomeData.ReviewWrapper} />
			<TextImgSection key="4" data={HomeData.TextImgSection} />
			<CtaSection key="7" data={HomeData.CtaSection} />
			{/* <TextOnlySection key="6" data={HomeData.TextOnlySection} /> */}

		</>
	);
}
