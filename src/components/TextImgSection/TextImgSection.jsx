import React from 'react';

export default function TextImgSection({classNames, data}) {
	return (
		<section className={`grid-item ${classNames && classNames} `}>
			<div className="text-img-section">
				<div className="text-img-section__content">
					<h2 className="text-img-section__title">
						{data.title}
					</h2>
					<p className="text-img-section__text">
						{data.text}
					</p>
				</div>
				<div className="text-img-section__img-wrapper">
					<img
						src={data.img}
						alt={data.alt}
						className="text-img-section__img"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
