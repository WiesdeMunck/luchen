import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<>
		{/* hamburger */}
		<img src="" alt="" />
			<ul>
				<li>
					<Link to="/">home page</Link>
					<Link to="/two">Secondary</Link>
				</li>
			</ul>
		</>
	);
}
