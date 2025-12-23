import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../mock';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className={`bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ${isScrolled ? '' : 'drop-shadow-lg'}`}>Data Lineage</span>
              <span className={`${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`}> Consulting</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
                    : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
