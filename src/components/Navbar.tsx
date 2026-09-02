import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Building2,
  Settings,
  Sparkles,
  ShieldCheck,
  BookOpen,
  MonitorCheck,
  Lightbulb,
  Award,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesList } from '../data/servicesData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, subId?: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesAccordionOpen, setMobileServicesAccordionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const handleNavClick = (pageId: string, subId?: string) => {
    onNavigate(pageId, subId);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesAccordionOpen(false);
  };

  const getDropdownIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-4 h-4 text-[#1F3D2E]" />;
      case 'Settings':
        return <Settings className="w-4 h-4 text-[#facc15]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#1F3D2E]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#facc15]" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-[#1F3D2E]" />;
      case 'MonitorCheck':
        return <MonitorCheck className="w-4 h-4 text-[#facc15]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-4 h-4 text-[#1F3D2E]" />;
      case 'Award':
      default:
        return <Award className="w-4 h-4 text-[#facc15]" />;
    }
  };

  const isServicesActive =
    currentPage === 'services' || currentPage.startsWith('service-');

  return (
    <motion.header
      id="navbar"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-white/98 backdrop-blur-md border-b border-gray-100 z-50 sticky top-0 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded cursor-pointer"
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
              className="h-14 sm:h-18 lg:h-20 w-auto max-w-[220px] sm:max-w-[260px] lg:max-w-[300px] object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav"
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            aria-label="Main Navigation"
          >
            {/* 1. Home */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`text-[14px] xl:text-[15px] transition-colors py-1.5 focus:outline-none cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#facc15] font-bold'
                  : 'text-gray-700 hover:text-gray-950 font-medium'
              }`}
            >
              Home
            </button>

            {/* 2. About Us */}
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`text-[14px] xl:text-[15px] transition-colors py-1.5 focus:outline-none cursor-pointer ${
                currentPage === 'about'
                  ? 'text-[#facc15] font-bold'
                  : 'text-gray-700 hover:text-gray-950 font-medium'
              }`}
            >
              About Us
            </button>

            {/* 3. Services with Dropdown */}
            <div
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative py-2"
            >
              <button
                type="button"
                onClick={() => handleNavClick('services')}
                className={`inline-flex items-center gap-1 text-[14px] xl:text-[15px] transition-colors py-1.5 focus:outline-none cursor-pointer ${
                  isServicesActive
                    ? 'text-[#facc15] font-bold'
                    : 'text-gray-700 hover:text-gray-950 font-medium'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-amber-500' : 'text-gray-400'
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[540px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50"
                  >
                    {/* All Services Overview Row */}
                    <div
                      onClick={() => handleNavClick('services')}
                      className="p-3 mb-2 rounded-xl bg-gray-50 hover:bg-emerald-50/70 border border-gray-100 flex items-center justify-between transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1F3D2E] text-[#facc15] flex items-center justify-center">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#1F3D2E]">
                            All Services Overview
                          </h4>
                          <p className="text-[11px] text-gray-500">
                            Explore full 8-category management solutions
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F3D2E] group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* 2-Column Grid of 8 Services */}
                    <div className="grid grid-cols-2 gap-1.5">
                      {servicesList.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleNavClick(`service-${service.slug}`, service.slug)}
                          className="flex items-start space-x-2.5 p-2.5 rounded-lg hover:bg-amber-50/60 transition-colors text-left group cursor-pointer"
                        >
                          <div className="p-1.5 rounded-md bg-gray-50 group-hover:bg-amber-100/60 transition-colors shrink-0 mt-0.5">
                            {getDropdownIcon(service.icon)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-900 group-hover:text-[#1F3D2E] leading-tight line-clamp-1">
                              {service.shortTitle || service.title}
                            </p>
                            <p className="text-[10px] text-gray-500 leading-tight mt-0.5 line-clamp-1">
                              {service.shortDesc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Property & Facilities */}
            <button
              type="button"
              onClick={() => handleNavClick('property-facilities')}
              className={`text-[14px] xl:text-[15px] transition-colors py-1.5 focus:outline-none cursor-pointer ${
                currentPage === 'property-facilities'
                  ? 'text-[#facc15] font-bold'
                  : 'text-gray-700 hover:text-gray-950 font-medium'
              }`}
            >
              Property &amp; Facilities
            </button>

            {/* 5. Projects */}
            <button
              type="button"
              onClick={() => handleNavClick('projects')}
              className={`text-[14px] xl:text-[15px] transition-colors py-1.5 focus:outline-none cursor-pointer ${
                currentPage === 'projects'
                  ? 'text-[#facc15] font-bold'
                  : 'text-gray-700 hover:text-gray-950 font-medium'
              }`}
            >
              Projects
            </button>

            {/* 6. Insights */}
            <button
              type="button"
              onClick={() => handleNavClick('insights')}
              className={`text-[14px] xl:text-[15px] transition-colors py-1.5 focus:outline-none cursor-pointer ${
                currentPage === 'insights'
                  ? 'text-[#facc15] font-bold'
                  : 'text-gray-700 hover:text-gray-950 font-medium'
              }`}
            >
              Insights
            </button>

            {/* 7. Contact Us */}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`text-[14px] xl:text-[15px] transition-colors py-1.5 focus:outline-none cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-[#facc15] font-bold'
                  : 'text-gray-700 hover:text-gray-950 font-medium'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Nav CTA: Standardized "Get in Touch" Button */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              id="nav-btn-get-in-touch"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#facc15] hover:bg-yellow-400 text-slate-950 font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:ring-offset-2 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

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

      {/* Mobile Navigation Drawer with Accordion for Services */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-1 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            {/* Home */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Home
            </button>

            {/* About Us */}
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              About Us
            </button>

            {/* Services Accordion */}
            <div className="border border-gray-100 rounded-lg overflow-hidden my-1">
              <button
                type="button"
                onClick={() => setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)}
                className={`w-full text-left px-3 py-2.5 text-sm font-semibold flex items-center justify-between cursor-pointer ${
                  isServicesActive
                    ? 'text-amber-600 bg-amber-50/80'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    mobileServicesAccordionOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileServicesAccordionOpen && (
                <div className="bg-gray-50/80 px-3 py-2 space-y-1 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-2.5 py-1.5 text-xs font-bold text-[#1F3D2E] hover:text-amber-600 cursor-pointer flex items-center justify-between"
                  >
                    <span>All Services Overview</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  {servicesList.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleNavClick(`service-${service.slug}`, service.slug)}
                      className="w-full text-left px-2.5 py-1.5 text-xs text-gray-700 hover:text-amber-600 cursor-pointer flex items-center space-x-2"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
                      <span className="line-clamp-1">{service.shortTitle || service.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property & Facilities */}
            <button
              type="button"
              onClick={() => handleNavClick('property-facilities')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'property-facilities'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Property &amp; Facilities
            </button>

            {/* Projects */}
            <button
              type="button"
              onClick={() => handleNavClick('projects')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'projects'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Projects
            </button>

            {/* Insights */}
            <button
              type="button"
              onClick={() => handleNavClick('insights')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'insights'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Insights
            </button>

            {/* Contact Us */}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Contact Us
            </button>

            {/* Mobile CTA */}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 bg-[#facc15] hover:bg-yellow-400 text-slate-950 font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
