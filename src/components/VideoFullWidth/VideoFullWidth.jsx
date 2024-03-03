import React, { useState } from 'react';

export default function VideoFullWidth() {
	const [removeBanner , setRemoveBanner]  = useState(true)

	return (

		<section className="grid-item"  >
			<div className='video-full-width'  >
				{removeBanner &&  <img className='video-full-width__img' src="./img/video-banner.webp" alt=""  onClick={() => {setRemoveBanner(false)}} />}
				<div className='video-full-width__iframe-wrapper'>
					<iframe   className='video-full-width__iframe' src="https://www.youtube.com/embed/ivQgt3gnRSk?si=TDfGG9-JInEKVIKK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
			</div>

		</section>
	);
}
