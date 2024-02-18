import React from 'react';

export default function ReviewCard({img, name, company, content}) {
	return (
		<div className="review-card">
			<p className="review-card__text">{content}</p>
			<div className="review-card__client">
				<div className="review-card__img-wrapper">
					<img src={img} alt="" className="review-card__img" />
				</div>
				<div className="review-card__client-info">
					<span className="review-card__client-name">{name}</span>
					<span className="review-card__client-company"> {company}</span>
				</div>
			</div>
		</div>
	);
}
