import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './assets/fontAwesome/faLibrary';
import NumberTwo from './components/NumberTwo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';

function App() {
	return (
		<Router>
			<Navigation />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/two" element={<NumberTwo />} />
				</Routes>
			</main>
			<Analytics />
			<SpeedInsights />
		</Router>
	);
}

export default App;
