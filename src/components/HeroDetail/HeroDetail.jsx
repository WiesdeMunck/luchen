import React from 'react';
import MainBtn from '../buttons/MainBtn';

export default function HeroDetail({data}) {



  return (
    <section className="grid-item --no-full-height">
		<div className='hero-detail'>
		<div className="hero-detail__content">
			{data.title && <h1 className="hero-detail__title">{data.title ? data.title  : 'Lorem, ipsum dolor.' }</h1>}
			<p className="hero-detail__text">{data.text}</p>
			<div className="hero-detail__button-wrapper">
				{data.primaryBtnContent && <MainBtn link={data.primaryBtnLink} content={data.primaryBtnContent} />}
				{data.secondaryBtnContent && <MainBtn classNames={'btn--secondary'} link={data.secondaryBtnLink} content={data.secondaryBtnContent} />}
			</div>
		</div>
		<div className="hero-detail__images-wrapper">
			<img src={data.img} alt="" className="hero-detail__img" />
		</div>
		</div>
    </section>
  );
}
