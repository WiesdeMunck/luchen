
import React from "react";
import HeroDetail from "../components/HeroDetail/HeroDetail";
import TextImgSection from "../components/TextImgSection/TextImgSection";
import CtaSection from "../components/CtaSection/CtaSection";
import GalleryWithPopUp from "../components/GalleryWithPopUp/GalleryWithPopUp";
import { useParams } from 'react-router-dom';

export default function DetailPage() {
	// Your working on making uniueq url for each item to display
	const {id} = useParams();


	return (
		<article>
			<HeroDetail />
			<TextImgSection classNames={'--bg-clr-primary--300'} />
			<GalleryWithPopUp />
			<CtaSection />
		</article>
	)
}
