import { Menu, Phone, MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleAboutClick = () => {
    if (onNavigate) {
      onNavigate('about-full');
    } else {
      scrollToSection('about');
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      scrollToSection('home');
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleHomeClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-amber-600">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M12 7v5l4 2" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-amber-900">
                Sharma Bakers
              </h1>
              <p className="text-xs text-amber-700 -mt-1">Since 2020</p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('custom-cakes')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Custom Cakes
            </button>
            <button
              onClick={handleAboutClick}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+918950345254"
              className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">Call Us</span>
            </a>
            <a
              href="https://wa.me/918950345254"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-amber-600"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('custom-cakes')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Custom Cakes
              </button>
              <button
                onClick={handleAboutClick}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href="tel:+918950345254"
                  className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">Call Us</span>
                </a>
                <a
                  href="https://wa.me/918950345254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
