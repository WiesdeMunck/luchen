import React from 'react';
// This component is never needed we handle styling in the global css or typography css
export default function HeaderOne({content, classNames}) {
	return (
		<h1 id="mainContent" className={classNames && classNames} >{content}</h1>
	);
}
