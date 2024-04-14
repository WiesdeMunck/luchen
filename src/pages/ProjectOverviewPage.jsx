
import React from "react";
import OverviewCardsSection from "../components/OverviewCardsSection/OverviewCardsSection";
import CtaSection from "../components/CtaSection/CtaSection";
import projectOverviewCards from "../data/projectOverviewCards.json";



export default function ProjectOverviewPage() {
	return (
		<article>
			<OverviewCardsSection jsonData={projectOverviewCards} />
			<CtaSection />
		</article>
	)
}
