import React from 'react';


export default function Footer() {
	return (
		<footer className="grid-item">
			<div className='footer' >
				<h2  className='footer__title'> Feel free to give me a call</h2>
				<div className="footer__nav">
					<ul className='footer__nav-list'>
						<li className="footer__nav-item"><h3>Contact</h3></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>06-00000000</a></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>lorem@ipsum.nl</a></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>j.loremIpsum 11</a></li>


					</ul>
					<ul className='footer__nav-list'>
						<li className="footer__nav-item"><h3>Projects</h3></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>Project one</a></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>Project two</a></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>Project three</a></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>Project four</a></li>

					</ul>
					<ul className='footer__nav-list'>
						<li className="footer__nav-item"><h3>lorem ipsum</h3></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>Link one</a></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>Link two</a></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>Link three</a></li>
						<li className='footer__nav-item'><a href="/" className='footer__nav-link'>Link four</a></li>
					</ul>
					</div>
			</div>


		</footer>
	);
}
