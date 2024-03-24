import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './assets/fontAwesome/faLibrary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Header/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import DetailPage from './pages/DetailPage';
import ContactPage from './pages/ContactPage';

function App() {
	return (
		<Router>
			<Navigation />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					{/* <Route path="/" element={<HomePage />} /> */}
					{/* TODO: Give the correct name for each project */}
					<Route path="/detialPage" element={<DetailPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</main>
			<Analytics />
			<SpeedInsights />
		<Footer />
		</Router>
	);
}

export default App;
