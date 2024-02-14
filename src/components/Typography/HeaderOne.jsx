import React from 'react';

export default function HeaderOne({content, classNames}) {
	return (
		<h1 id="mainContent" className={classNames && classNames} >{content}</h1>
	);
}
