import React from 'react';

export default function MainBtn({link, content, classNames}) {
	return (
		<a href={link} className={`btn ${classNames && classNames}`}>{content}</a>
	);
}
