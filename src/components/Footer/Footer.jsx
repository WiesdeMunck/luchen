import React from 'react';
// Import data
import FooterData from '../../data/footer/footer.json';

console.log(FooterData);


export default function Footer() {

	return (
		<footer className="grid-item">
			<div className='footer' >
				<h2  className='footer__title'>{FooterData.title}</h2>
				<div className="footer__nav">
					<ul className='footer__nav-list'>
						<li className="footer__nav-item"><h3>{FooterData.contact.title}</h3></li>
						{FooterData.contact.contactLinks.map((item, index) => {
							return (
								<li key={index} className='footer__nav-item'><a href={item.link} className='footer__nav-link'>{item.linkText}</a></li>
							)
						})
					}
					</ul>

					<ul className='footer__nav-list'>
						<li className="footer__nav-item"><h3>{FooterData.linkLists.projects.title}</h3></li>
						{FooterData.linkLists.projects.links.map((item, index) => {
						return (
							<li key={index} className='footer__nav-item'><a href={item.link} className='footer__nav-link'>{item.linkText}</a></li>
						)
						})}
					</ul>

					<ul className='footer__nav-list'>
						<li className="footer__nav-item"><h3>{FooterData.linkLists.blog.title}</h3></li>
						{FooterData.linkLists.blog.links.map((item, index) => {
						return (
							<li key={index} className='footer__nav-item'><a href={item.link} className='footer__nav-link'>{item.linkText}</a></li>
						)
						})}
					</ul>

					</div>
			</div>


		</footer>
	);
}
