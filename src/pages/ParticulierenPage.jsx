import React, { useState, useEffect } from 'react';
import HeroDetail from '../components/HeroDetail/HeroDetail';
import TextImgSection from '../components/TextImgSection/TextImgSection';
import CtaSection from '../components/CtaSection/CtaSection';
import GalleryWithPopUp from '../components/GalleryWithPopUp/GalleryWithPopUp';
import TextOnlySection from '../components/TextOnlySection/TextOnlySection';
import SectionSpacing from '../components/SectionSpacing/SectionSpacing';
import ReviewWrapper from '../components/Reviews/ReviewWrapper';
// import SectionSpacing from '../components/SectionSpacing/SectionSpacing';
// Make sure to add all component options to the componentMapping

// Make sure to add all component options to the map
const componentMapping = {
    HeroDetail,
    TextImgSection,
    CtaSection,
    GalleryWithPopUp,
	 TextOnlySection,
	 SectionSpacing,
	 ReviewWrapper,
};

export default function ParticulierenPage() {
	// The id is the name of the json file so dont forget to add it

    const [detailData, setDetailData] = useState();



	 useEffect(() => {
		//
		import(`../data/particulieren/particulieren.json`)
			 .then((data) => {
				  setDetailData(data.default);
				  console.log('succes');
			 })
			 .catch((error) => {
				  console.log(error);
			 });
  }, []);

    if (!detailData) {
        return <div>Loading...</div>;
    }

    return (
        <article>
            {detailData.map(({ componentName, props }) => {
                const Component = componentMapping[componentName];
                return <Component data={props} key={componentName} />;
            })}
        </article>
    );
}
