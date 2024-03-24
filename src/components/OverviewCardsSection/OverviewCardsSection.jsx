import React from 'react';
import OverviewCard from './OverviewCard';

export default function OverviewCardsSection() {
	return (
		<section className="grid-item --no-full-height --bg-clr-primary--300">
			<div className="overview-cards-section">
				<div className="overview-cards-section__content-wrapper">
				<h2 className="overview-cards-section__title">Projecten</h2>
				</div>
				<div className='overview-cards-section__cards-wrapper' >
					{[...Array(8)].map(() => {
						return <OverviewCard />;
					})}
				</div>
				{/* Maybe some seo text */}
				{/* <p className="overview-cards-section__text">lorem 60</p> */}

			</div>
		</section>
	);
}
