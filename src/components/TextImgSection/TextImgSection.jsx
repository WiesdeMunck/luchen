import React from 'react';

export default function TextImgSection({classNames}) {
	return (

		<section className={`grid-item ${classNames && classNames} `}>
			<div className="text-img-section">
				<div className="text-img-section__content">
					<h2 className="text-img-section__title">
						Lorem ipsum dolor sit amet.
					</h2>
					<p className="text-img-section__text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
						odit, rem nobis voluptate quasi porro est earum, temporibus
						aliquam incidunt aliquid fugit magnam ipsa facere eius maxime,
						iusto animi voluptatum numquam cumque deleniti. Repellat eum
						fuga animi eligendi necessitatibus ullam eveniet, quo
						cupiditate esse sunt nam? Quae voluptates laborum repellat
						debitis. Deserunt illum, repellendus ipsa vitae incidunt
						recusandae ut nostrum hic, voluptate modi, fugiat in
						consequatur ab assumenda enim tempora eaque amet itaque
						repudiandae dolorem veritatis! Unde officia dolorem nobis
						illum ullam ea nemo sapiente optio voluptas aperiam tenetur
						molestiae voluptatibus iusto et expedita saepe quis
					</p>
				</div>
				<div className="text-img-section__img-wrapper">
					<img
						src="/img/home-being-plasterd.webp"
						alt=""
						className="text-img-section__img"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
