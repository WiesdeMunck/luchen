import React from 'react';


export default function ContactInfo() {

	const contactInfo = [
		'Ambachtstraat 29',
		'1382 KH Weesp',
		'06 - 53500500',
		'info@luschenstukadoors.nl',
		'Maandag t/m vrijdag van 07.30 tot 17.30 uur',
		'K.V.K. 32056270',
	 ];

	 const locations = [
		'Almere',
		'het Gooi',
		'Amsterdam',
		'Utrecht',
	 ];

	return (
		<section className="grid-item --bg-clr-primary--300">
			<div className="contact-info">

			<div className="contact-info__iframe-wrapper">
					<iframe className="contact-info__iframe"  width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ambachtstraat%2029,%201382%20KH%20Weesp%20Weesp+(A.M.%20L%C3%BCschen%20stukadoors)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=a9e31d2d255dc0916270877ae2f8d3384e4e9677'></script>
				</div>

				<div className="contact-info__lists-wrapper">

					<ul className="contact-info__info-list">
						<h2 className="contact-info__info-title">A. M. Lüschen stukadoors</h2>
						{contactInfo.map((info, index) => (
							<li key={index} className="contact-info__info-item">{info}</li>
						))}
					</ul>

					<ul className="contact-info__locations-list">
						<h3 className="contact-info__locations-title">Lüschen stukadoors werkzaam in de regio's:</h3>
						{locations.map((location, index) => (
							<li key={index} className="contact-info__locations-item">{location}</li>
						))}
					</ul>
				</div>



			</div>
		</section>
	);
}

