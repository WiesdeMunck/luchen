import React from 'react';
import {Link} from 'react-router-dom';

export default function OverviewCard({title, image, alt, id, link}) {
	return (

			<article key={id} className="overview-card">
					<Link className='overview-card__wrapper' to={`/project/${link}`}>
						<div className="overview-card__img-wrapper"><img src={image} alt={alt} className="overview-card__img" /></div>
						<div className="overview-card__content">
							{<h2 className="overview-card__title">{title}</h2>}
							<span className='overview-card__cta' >Lees meer</span>
						</div>

					</Link>
			</article>

	);
}
