import React from 'react';

export default function PictureGallary({images}) {
	return (
		<div className="picture-gallery">
			{images.map((img) => {
				return (
					<div className="picture-gallery__img-wrapper">
					<img
						src={img.src}
						alt={img.alt}
						className="picture-gallery__img"
					/>
				</div>
				)
			})}
		</div>
	);
}
