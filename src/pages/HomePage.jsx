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
			<PreviewColumns key="3" data={HomeData.PreviewColumns} />
			<TextImgSection key="4" />
			<ReviewWrapper key="5" />
			<TextOnlySection key="6" />
			<CtaSection key="7" />
		</>
	);
}
