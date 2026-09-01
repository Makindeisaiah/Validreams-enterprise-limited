import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Headphones,
  Monitor,
  Users,
  Menu,
  X,
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#', active: false },
    { name: 'Services', href: '#', active: false },
    { name: 'Property & Facilities', href: '#', active: false },
    { name: 'Projects', href: '#', active: false },
    { name: 'Insights', href: '#', active: false },
    { name: 'Contact Us', href: '#', active: false },
  ];

  const statsItems = [
    {
      id: 'stat-expertise',
      title: 'Trusted Expertise',
      description: 'Years of experience in managing premium properties.',
      icon: (
        <ShieldCheck
          className="w-10 h-10 text-amber-400 shrink-0 stroke-[1.75]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'stat-support',
      title: '24/7 Support',
      description: 'Round-the-clock operations and responsive help-desk always available.',
      icon: (
        <Headphones
          className="w-10 h-10 text-amber-400 shrink-0 stroke-[1.75]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'stat-technology',
      title: 'Technology Driven',
      description: 'CAFM solutions for real-time monitoring, reporting and performance tracking.',
      icon: (
        <div className="relative shrink-0 flex items-center justify-center">
          <Monitor
            className="w-10 h-10 text-amber-400 stroke-[1.75]"
            aria-hidden="true"
          />
          <div className="absolute top-[7px] left-[7px] grid grid-cols-3 gap-0.5 pointer-events-none">
            <span className="w-1 h-1 bg-amber-400 rounded-[0.5px]"></span>
            <span className="w-1 h-1 bg-amber-400 rounded-[0.5px]"></span>
            <span className="w-1 h-1 bg-amber-400 rounded-[0.5px]"></span>
            <span className="w-1 h-1 bg-amber-400 rounded-[0.5px]"></span>
            <span className="w-1 h-1 bg-amber-400 rounded-[0.5px]"></span>
            <span className="w-1 h-1 bg-amber-400 rounded-[0.5px]"></span>
          </div>
        </div>
      ),
    },
    {
      id: 'stat-client',
      title: 'Client Focused',
      description: 'We prioritize transparency, communication and resident satisfaction.',
      icon: (
        <Users
          className="w-10 h-10 text-amber-400 shrink-0 stroke-[1.75]"
          aria-hidden="true"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#14281F] flex flex-col font-sans text-gray-900 antialiased selection:bg-amber-400 selection:text-gray-950">
      {/* 1. TOP NAVIGATION BAR */}
      <header
        id="navbar"
        className="w-full bg-white border-b border-gray-100 z-50 sticky top-0 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Mark + Wordmark */}
            <a
              href="#"
              id="brand-logo"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 rounded"
              aria-label="Validreams Enterprises Limited"
            >
              <div className="flex flex-col items-center">
                {/* Architectural Building / Roofline Emblem */}
                <svg
                  className="w-8 h-8 text-gray-900 mb-1 group-hover:text-amber-600 transition-colors"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {/* Central Tower */}
                  <path d="M20 4L14 12V34H26V12L20 4Z" />
                  {/* Central vertical divider line */}
                  <path d="M20 4V34" />
                  {/* Left Roof & Wing */}
                  <path d="M14 15L7 21V34H14" />
                  {/* Right Roof & Wing */}
                  <path d="M26 15L33 21V34H26" />
                  {/* Architectural crosslines */}
                  <path d="M17 18H23" />
                  <path d="M17 24H23" />
                  <path d="M10 27H14" />
                  <path d="M26 27H30" />
                </svg>

                {/* Wordmark */}
                <div className="flex items-baseline tracking-tight font-serif text-gray-900 text-xl sm:text-2xl leading-none">
                  <span className="font-light tracking-wide text-gray-800 text-[1.15rem]">VALI</span>
                  <span className="font-bold tracking-tight text-gray-950 text-[1.4rem] ml-0.5">
                    DR
                  </span>
                  <span className="font-light tracking-wide text-gray-800 text-[1.15rem]">EAMS</span>
                </div>

                {/* Subtitle Line: ENTERPRISES LIMITED */}
                <div className="w-full flex items-center justify-center gap-1.5 mt-1">
                  <span className="h-[0.75px] bg-gray-300 w-2.5 grow"></span>
                  <span className="text-[7.5px] sm:text-[8px] tracking-[0.22em] font-semibold text-gray-700 uppercase whitespace-nowrap">
                    ENTERPRISES LIMITED
                  </span>
                  <span className="h-[0.75px] bg-gray-300 w-2.5 grow"></span>
                </div>

                {/* Sub-label: REAL ESTATE • PROPERTY & FACILITY MANAGEMENT */}
                <p className="text-[6px] sm:text-[6.5px] tracking-wider text-gray-400 font-medium uppercase mt-0.5 whitespace-nowrap">
                  REAL ESTATE • PROPERTY &amp; FACILITY MANAGEMENT
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              id="desktop-nav"
              aria-label="Main Navigation"
              className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`transition-colors py-2 relative whitespace-nowrap ${
                    link.active
                      ? 'text-amber-500 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {link.active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  link.active
                    ? 'text-amber-600 bg-amber-50 font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <main className="relative flex-1 flex flex-col justify-between">
        <section
          id="hero-section"
          className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-start overflow-hidden"
        >
          {/* Background Image: Modern luxury residential building at dusk */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85')`,
            }}
          />

          {/* Dark Green Gradient Overlay: Strongest on left (#14281F), fading toward right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, #14281F 0%, rgba(20, 40, 31, 0.96) 28%, rgba(20, 40, 31, 0.85) 45%, rgba(20, 40, 31, 0.45) 70%, rgba(20, 40, 31, 0.15) 100%)',
            }}
          />

          {/* Additional subtle vertical gradient to anchor the top & bottom gracefully */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#14281F] via-transparent to-black/30 pointer-events-none" />

          {/* Hero Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              {/* Amber/Gold Eyebrow */}
              <div id="hero-eyebrow" className="mb-4">
                <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-[0.18em] uppercase inline-block">
                  PROPERTY &amp; FACILITIES MANAGEMENT
                </span>
              </div>

              {/* Large Bold Headline */}
              <h1
                id="hero-headline"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
              >
                Built Around <br />
                <span className="text-amber-400">Excellence.</span>
              </h1>

              {/* Supporting Paragraph */}
              <p
                id="hero-description"
                className="text-white/85 text-base sm:text-lg leading-relaxed mt-6 max-w-xl font-normal"
              >
                We provide end-to-end property and facilities management solutions
                that enhance asset value, ensure safety, and deliver premium
                experience for residents and clients.
              </p>

              {/* Action Buttons */}
              <div
                id="hero-cta-buttons"
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
              >
                {/* Solid Amber/Gold Button */}
                <a
                  href="#services"
                  id="btn-our-services"
                  className="inline-flex items-center justify-center gap-2 bg-[#facc15] hover:bg-[#eab308] text-gray-950 font-semibold px-6 sm:px-7 py-3.5 rounded text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#14281F]"
                >
                  <span>Our Services</span>
                  <ArrowRight
                    className="w-4 h-4 text-gray-950 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>

                {/* Outlined White Button */}
                <a
                  href="#contact"
                  id="btn-contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-medium px-6 sm:px-7 py-3.5 rounded border border-white/80 hover:border-white text-sm sm:text-base transition-all duration-200 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#14281F]"
                >
                  <span>Contact Us</span>
                  <ArrowRight
                    className="w-4 h-4 text-white stroke-[2] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STATS BANNER */}
        <section
          id="stats-banner-section"
          className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 -mt-6 sm:-mt-10 lg:-mt-12"
        >
          <div
            id="stats-container"
            className="bg-[#1F3D2E] rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {statsItems.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="p-6 sm:p-7 flex items-start gap-4 hover:bg-white/5 transition-colors duration-200"
                >
                  {/* Left: Gold Line Icon */}
                  <div className="pt-0.5">{item.icon}</div>

                  {/* Right: Title & Description */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base sm:text-lg tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed mt-1.5 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
