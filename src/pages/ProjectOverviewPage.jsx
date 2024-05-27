
import React from "react";
import OverviewCardsSection from "../components/OverviewCardsSection/OverviewCardsSection";
import CtaSection from "../components/CtaSection/CtaSection";
import ProjectsList from "../data/projecten/projectsList.json";
import ctaSection from "../data/projecten/ctaSection.json";


export default function ProjectOverviewPage() {

	return (
		<article>
			<OverviewCardsSection jsonData={ProjectsList} />
			<CtaSection data={ctaSection}/>
		</article>
	)
}
