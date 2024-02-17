import React, { useEffect } from 'react';
import MainBtn from '../buttons/MainBtn';
import HeaderOne from '../Typography/HeaderOne';

export default function HeroHome() {
  useEffect(() => {
    const portraitImg = new Image();
    portraitImg.src = '/img/self-portrait.webp';

    const backgroundImg = new Image();
    backgroundImg.src = '/img/home-being-plasterd.webp';
  }, []);

  return (
    <section className="hero-home">
      <div className="hero-home__images-wrapper">
        <div className="hero-home__fg-image-wrapper">
          <img src="/img/self-portrait.webp" alt="" className="hero-home__fg-image" />
        </div>
        <div className="hero-home__bg-image-wrapper">
          <img src="/img/home-being-plasterd.webp" alt="" className="hero-home__bg-image" />
        </div>
      </div>
      <div className="hero-home__content">
        <HeaderOne classNames="hero-home__title" content="Expert plastering, exceptional results" />
        <div className="hero-home__button-wrapper">
          <MainBtn link="/two" content="Huur mij in!" />
          <MainBtn classNames={'btn--secondary'} link="/two" content="contact me" />
        </div>
      </div>
    </section>
  );
}
