import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bestsellers from './components/Bestsellers';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'about-full') {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header onNavigate={setCurrentPage} />
        <AboutPage />
        <Footer onNavigate={setCurrentPage} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPage === 'menu-full') {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header onNavigate={setCurrentPage} />
        <MenuPage />
        <Footer onNavigate={setCurrentPage} />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header onNavigate={setCurrentPage} />
      <Hero />
      <Bestsellers />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
