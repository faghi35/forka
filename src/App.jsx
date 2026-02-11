import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Founder from './pages/Founder';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import BecomeVolunteerPage from './pages/BecomeVolunteer';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <div className="page-wrapper custom-cursor">
        <Preloader />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate-now" element={<Donate />} />
            <Route path="/become-volunteer" element={<BecomeVolunteerPage />} />
            <Route path="/qui-sommes-nous" element={<AboutPage />} />
            <Route path="/la-fondatrice" element={<Founder />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
