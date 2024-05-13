
import React, { useState, useEffect } from 'react';
import HeroHome from "../components/HeroHome/HeroHome";
import ViewProjects from "../components/ViewProjects/ViewProjects";
import PreviewColumns from "../components/PreviewColumns/PreviewColumns";
import TextImgSection from "../components/TextImgSection/TextImgSection";
import TextOnlySection from "../components/TextOnlySection/TextOnlySection";
import ReviewWrapper from "../components/Reviews/ReviewWrapper";
import CtaSection from "../components/CtaSection/CtaSection";

export default function HomePage() {
	const [detailData, setDetailData] = useState();


	useEffect(() => {
		//
		import(`../data/home/home.json`)
			 .then((data) => {

				  setDetailData(data);
			 })
			 .catch((error) => {
				console.log(error)
			 });
  }, []);

	return (
		<>
			<HeroHome key="1" data={detailData}/>
			<ViewProjects key="2"/>
			<PreviewColumns key="3"/>
			<TextImgSection key="4"/>
			<ReviewWrapper key="5"/>
			<TextOnlySection key="6"/>
			<CtaSection key="7"/>
		</>
	)
}
