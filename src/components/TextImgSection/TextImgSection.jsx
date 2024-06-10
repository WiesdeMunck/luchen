import React from 'react';

export default function TextImgSection({classNames, data}) {
	return (
		<section className={`grid-item ${classNames && classNames} `}>
			<div className="text-img-section">
				<div className="text-img-section__content">
					<h2 className="text-img-section__title">
						{data.title}
					</h2>
					{data.text && <p className="text-img-section__text">{data.text}</p>}
					{data.list && <ul className="text-img-section__list"> {data.list.map((text, index)  => <li className='text-img-section__list-item' key={index}>{text}</li>)} </ul> }
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
