import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeroDetail from '../components/HeroDetail/HeroDetail';
import TextImgSection from '../components/TextImgSection/TextImgSection';
import CtaSection from '../components/CtaSection/CtaSection';
import GalleryWithPopUp from '../components/GalleryWithPopUp/GalleryWithPopUp';
// Make sure to add all component options to the componentMapping

// Make sure to add all component options to the map
const componentMapping = {
    HeroDetail,
    TextImgSection,
    CtaSection,
    GalleryWithPopUp
};

export default function DetailPage() {
	// The id is the name of the json file so dont forget to add it
    const { projectId } = useParams();

    const [detailData, setDetailData] = useState();



	 useEffect(() => {
		//
		import(`../data/projectsDetail/${projectId}.json`)
			 .then((data) => {
				  setDetailData(data.default);
				  console.log(';succes');
			 })
			 .catch((error) => {
				  console.log(error);
			 });
  }, [projectId]);

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
