import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className='header grid-item'>
			<img src="" alt="" />
			<ul>
				<li>
					<Link to="/">home page</Link>
					<Link to="/two">Secondary</Link>
				</li>
			</ul>
			<button>hey</button>
		</header>
	);
}
