
import React from "react";
import OverviewCardsSection from "../components/OverviewCardsSection/OverviewCardsSection";
import CtaSection from "../components/CtaSection/CtaSection";
import ProjectsList from "../data/projectsList/projectsList.json";

export default function ProjectOverviewPage() {

	return (
		<article>
			<OverviewCardsSection jsonData={ProjectsList} />
			<CtaSection />
		</article>
	)
}
