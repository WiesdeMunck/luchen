
import React from "react";
import HeroHome from "../components/HeroHome/HeroHome";
import ViewProjects from "../components/ViewProjects/ViewProjects";
import PreviewColumns from "../components/PreviewColumns/PreviewColumns";

export default function HomePage() {
	return (
		<>
			<HeroHome />
			<ViewProjects />
			<PreviewColumns />
		</>
	)
}
