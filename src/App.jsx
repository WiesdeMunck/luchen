import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './assets/fontAwesome/faLibrary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Header/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import DetailPage from './pages/DetailPage';
import ContactPage from './pages/ContactPage';
import ProjectOverviewPage from './pages/ProjectOverviewPage';
import BedrijvenPage from './pages/bedrijvenPage';
import ParticulierenPage from './pages/ParticulierenPage';

function App() {
	return (
		<Router>
			<Navigation />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/particulieren" element={<ParticulierenPage />} />
					<Route path="/bedrijven" element={<BedrijvenPage />} />
					<Route path="/projecten" element={<ProjectOverviewPage />} />
					<Route path="/detailPage" element={<DetailPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/project" element={<ProjectOverviewPage />} />
					<Route path="/project/:projectId" element={<DetailPage />} />
				</Routes>
			</main>
			<Analytics />
			<SpeedInsights />
			<Footer />
		</Router>
	);
}

export default App;
