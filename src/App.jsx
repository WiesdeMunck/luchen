import { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import NumberOne from './components/NumberOne';
import NumberTwo from './components/NumberTwo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

	return (
		<Router>
			<>
				<h1>Home</h1>
				<Routes>
					<Route path="/" element={<NumberOne />} />
					<Route path="/two" element={<NumberTwo />} />
				</Routes>
				<Analytics />
				<SpeedInsights />
			</>
		</Router>
	);
}

export default App;
