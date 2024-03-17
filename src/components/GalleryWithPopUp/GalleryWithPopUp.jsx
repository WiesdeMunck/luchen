import React, { useState } from 'react';

export default function TextImgSection({ classNames }) {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
	 {
		src: '/img/home-being-plasterd.webp',
		alt: 'Home being plastered'
	 },
	 {
		src: '/img/video-banner.webp',
		alt: 'Home being plastered'
	 },
	 {
		src: '/img/home-being-plasterd.webp',
		alt: 'Home being plastered'
	 },
	 {
		src: '/img/video-banner.webp',
		alt: 'Home being plastered'
	 },
	 {
		src: '/img/home-being-plasterd.webp',
		alt: 'Home being plastered'
	 }
  ];

  const handleClick = (index) => {
    setActiveImage(index);
  }

  return (
    <section className={`grid-item ${classNames && classNames} `}>
      <div className="gallery-with-pop-up">
        <h2 className="gallery-with-pop-up__title">Gallery</h2>
        <div className='gallery-with-pop-up__wrapper'>
          {images.map((images, index) => (
           <div
			  key={index}
			  className={`gallery-with-pop-up__img-wrapper ${activeImage === index && 'gallery-with-pop-up__img-wrapper--active'}`}
			  onClick={() => {
				console.log(activeImage, index)
				return (handleClick(index))
			}}
			>
			  <img src={images.src} alt={images.alt} className="gallery-with-pop-up__img" />
			</div>
          ))}
        </div>
      </div>
    </section>
  );
}
