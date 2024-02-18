import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './assets/fontAwesome/faLibrary';
import NumberTwo from './components/NumberTwo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Header/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';

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
		<Footer />
		</Router>
	);
}

export default App;
