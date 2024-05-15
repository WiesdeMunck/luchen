import React from 'react';
import CenteredText from '../CenteredText/CenteredText';
import ReviewCard from './ReviewCard';
import SvgGoogleReviewScore from '../../assets/svg/SvgGoogleReviewScore';



export default function ReviewWrapper({data}) {



	return (
		<section className="grid-item">
			<div className="review-wrapper">
				<CenteredText title={data.title} text={data.text} />
				<div className="review-wrapper__cards">
					{data.items.map((reviewData, index) => {
						return (
							<ReviewCard
								key={index}
								img={reviewData.img}
								name={reviewData.name}
								company={reviewData.company}
								content={reviewData.text}
							/>
						);
					})}
				</div>

				<div className="review-wrapper__svg-wrapper">
					<SvgGoogleReviewScore />
				</div>
			</div>
		</section>
	);
}
