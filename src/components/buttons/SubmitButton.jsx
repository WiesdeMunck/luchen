import React from 'react';

export default function SubmitButton({link, content, classNames}) {
	return (
		<button href={link} className={`btn ${classNames && classNames}`}>{content}</button>
	);
}
