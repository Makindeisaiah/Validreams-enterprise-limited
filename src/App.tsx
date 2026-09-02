import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Synchronize navigation with URL hash (e.g. #home or #about)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'about' || hash === 'about-us') {
        setCurrentPage('about');
      } else if (hash === 'home' || hash === '') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    if (pageId === 'home') {
      setCurrentPage('home');
      window.location.hash = 'home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pageId === 'about' || pageId === 'about-us') {
      setCurrentPage('about');
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If navigating to an in-page anchor section (e.g., #services or #contact)
      const element = document.getElementById(pageId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home', active: currentPage === 'home' },
    { name: 'About', id: 'about', active: currentPage === 'about' },
    { name: 'Services', id: 'services', active: false },
    { name: 'Property & Facilities', id: 'facilities', active: false },
    { name: 'Projects', id: 'projects', active: false },
    { name: 'Insights', id: 'insights', active: false },
    { name: 'Contact Us', id: 'contact', active: false },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* ========================================================================= */}
      {/* 1. TOP NAVIGATION BAR */}
      {/* ========================================================================= */}
      <header
        id="navbar"
        className="w-full bg-white border-b border-gray-100 z-50 sticky top-0 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 sm:h-28">
            {/* Logo Image */}
            <a
              href="#home"
              id="brand-logo"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('home');
              }}
              className="flex items-center py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 rounded"
              aria-label="Validreams Enterprises Limited"
            >
              <img
                src="./assets/logo.png"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith('/assets/logo.png')) {
                    target.src = '/logo.png';
                  }
                }}
                alt="Validreams Enterprises Limited"
                className="h-16 sm:h-20 lg:h-22 w-auto max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] object-contain"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav
              id="desktop-nav"
              className="hidden lg:flex items-center space-x-7 xl:space-x-9"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavigate(link.id)}
                  className={`text-[15px] transition-colors py-1.5 focus:outline-none focus:text-amber-500 cursor-pointer ${
                    link.active
                      ? 'text-[#facc15] font-semibold'
                      : 'text-gray-600 hover:text-gray-900 font-medium'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavigate(link.id)}
                className={`w-full text-left block px-3 py-2.5 rounded-md text-base transition-colors cursor-pointer ${
                  link.active
                    ? 'text-amber-500 font-bold bg-amber-50/70'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* PAGE VIEW ROUTING */}
      {currentPage === 'home' ? (
        <HomePage onNavigate={handleNavigate} />
      ) : (
        <AboutPage onNavigate={handleNavigate} />
      )}
    </div>
  );
}
