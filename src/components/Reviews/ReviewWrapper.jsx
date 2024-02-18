import React from 'react';
import CenteredText from '../CenteredText/CenteredText';
import ReviewCard from './ReviewCard';
import SvgGoogleReviewScore from '../../assets/svg/SvgGoogleReviewScore';

const reviewData = [
	{
		img: '/img/home-being-plasterd.webp',
		name: 'lorem impsum One',
		company: 'company one',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit, rem nobis voluptate quasi porro est earum, temporibus aliquam incidunt aliquid fugit magnam ipsa facere eius maxime.',
	},
	{
		img: '/img/home-being-plasterd.webp',
		name: 'lorem impsum',
		company: 'company two',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit, rem nobis voluptate quasi porro est earum, temporibus aliquam incidunt aliquid fugit magnam ipsa facere eius maxime.',
	},
];

export default function ReviewWrapper() {
	return (
		<section className="grid-item">
			<div className="review-wrapper">
				<CenteredText />
				<div className="review-wrapper__cards">
					{reviewData.map((reviewData, index) => {
						return (
							<ReviewCard
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
