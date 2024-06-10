import React, { useEffect } from 'react';
import MainBtn from '../buttons/MainBtn';

export default function HeroHome({data}) {

	// Why was I Doing this?
  useEffect(() => {
    const portraitImg = new Image();
    portraitImg.src = data.imgPerson;

    const backgroundImg = new Image();
    backgroundImg.src = data.imgBackground;
  }, []);

  return (
    <section className="hero-home">
      <div className="hero-home__images-wrapper">
        <div className="hero-home__fg-image-wrapper">
          <img src={data.imgPerson} alt="" className="hero-home__fg-image" />
        </div>
        <div className="hero-home__bg-image-wrapper">
          <img src={data.imgBackground} alt="" className="hero-home__bg-image" />
        </div>
      </div>
      <div className="hero-home__content">
        <h1 className="hero-home__title">{data.title}</h1>
		  <p className='hero-home__mobile-content'>• 25 jaar ervaring, • Werkzaam in Flevoland 't Gooi, Amsterdam en Utrecht e.o</p>
		  <ul className="hero-home__list">
			<li className="hero-home__list-item">Gegarandeerde kwaliteit met 25 jaar ervaring</li>
			<li className="hero-home__list-item">Werkzaam in regio Flevoland, 't Gooi, Amsterdam en Utrecht e.o</li>
		  </ul>
        <div className="hero-home__button-wrapper">
          <MainBtn link={data.primaryBtnLink} content={data.primaryBtnContent} />
          <MainBtn link={data.secondaryBtnLink} classNames={'btn--secondary'} content={data.secondaryBtnContent} />
        </div>
      </div>
    </section>
  );
}
