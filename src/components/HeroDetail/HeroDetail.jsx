import React from 'react';
import MainBtn from '../buttons/MainBtn';

export default function HeroDetail({data}) {

	console.log(data.title);

  return (
    <section className="grid-item --no-full-height">
		<div className='hero-detail'>
		<div className="hero-detail__content">
			{data.title && <h1 className="hero-detail__title">{data.title ? data.title  : 'Lorem, ipsum dolor.' }</h1>}
			<p className="hero-detail__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nisi velit quod labore doloribus ipsa, laudantium libero sequi obcaecati vero qui tempora neque, deleniti voluptatem. Repudiandae, esse inventore obcaecati non eum cum distinctio eveniet quos, soluta modi laborum quod neque.</p>
			<div className="hero-detail__button-wrapper">
				<MainBtn link="/two" content="Huur mij in!" />
				<MainBtn classNames={'btn--secondary'} link="/two" content="contact me" />
			</div>
		</div>
		<div className="hero-detail__images-wrapper">
			<img src="/img/home-being-plasterd.webp" alt="" className="hero-detail__img" />
		</div>
		</div>
    </section>
  );
}
