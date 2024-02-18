
import React from "react";
import HeroHome from "../components/HeroHome/HeroHome";
import ViewProjects from "../components/ViewProjects/ViewProjects";
import PreviewColumns from "../components/PreviewColumns/PreviewColumns";
import TextImgSection from "../components/TextImgSection/TextImgSection";
import TextOnlySection from "../components/TextOnlySection/TextOnlySection";

export default function HomePage() {
	return (
		<>
			<HeroHome />
			<ViewProjects />
			<PreviewColumns />
			<TextImgSection />
			<TextOnlySection />


		</>
	)
}
