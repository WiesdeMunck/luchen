
import React from "react";
import HeroDetail from "../components/HeroDetail/HeroDetail";
import TextImgSection from "../components/TextImgSection/TextImgSection";
import CtaSection from "../components/CtaSection/CtaSection";
import GalleryWithPopUp from "../components/GalleryWithPopUp/GalleryWithPopUp";

export default function DetailPage() {
	return (
		<article>
			<HeroDetail />
			<TextImgSection classNames={'--bg-clr-primary--300'} />
			<GalleryWithPopUp />
			<CtaSection />
		</article>
	)
}
