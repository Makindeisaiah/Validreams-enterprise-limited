import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Headphones,
  Monitor,
  Users,
  Menu,
  X,
  Building2,
  Settings,
  BookOpen,
  MonitorCheck,
  UserCheck,
  MonitorSmartphone,
  Award,
  Leaf,
  Phone,
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#why-choose-us', active: false },
    { name: 'Services', href: '#services', active: false },
    { name: 'Property & Facilities', href: '#facilities', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'Insights', href: '#insights', active: false },
    { name: 'Contact Us', href: '#contact', active: false },
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
      description:
        'Round-the-clock operations and responsive help-desk always available.',
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
      description:
        'CAFM solutions for real-time monitoring, reporting and performance tracking.',
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
      description:
        'We prioritize transparency, communication and resident satisfaction.',
      icon: (
        <Users
          className="w-10 h-10 text-amber-400 shrink-0 stroke-[1.75]"
          aria-hidden="true"
        />
      ),
    },
  ];

  const services = [
    {
      id: 'service-property-rent',
      title: 'Property & Rent Management',
      description:
        'Leasing, tenant management, rent collection & property administration.',
      icon: (
        <Building2
          className="w-9 h-9 text-[#1F3D2E] stroke-[1.65]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'service-technical-maintenance',
      title: 'Technical & Maintenance',
      description:
        'Electrical, mechanical, HVAC, plumbing, generator, fire systems & water treatment',
      icon: (
        <Settings
          className="w-9 h-9 text-amber-500 stroke-[1.65]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'service-soft-services',
      title: 'Soft Services',
      description:
        'Cleaning, landscaping, waste management, pest control, concierge & reception',
      icon: (
        <div className="relative flex items-center justify-center">
          <svg
            className="w-9 h-9 text-[#1F3D2E]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 4L11 12" />
            <path d="M13 10L6 17C5 18 4 20 4 20C4 20 6 20 7 19L14 12" />
            <path d="M7 19L11 15" />
            <path d="M9 21L13 17" />
          </svg>
        </div>
      ),
    },
    {
      id: 'service-security-management',
      title: 'Security Management',
      description:
        '24/7 guarding, access control, CCTV, visitor screening & security liaison.',
      icon: (
        <ShieldCheck
          className="w-9 h-9 text-amber-500 stroke-[1.65]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'service-admin-financial',
      title: 'Administrative & Financial Management',
      description:
        'Rent & utilities administration, resident relations, procurement & budgeting.',
      icon: (
        <BookOpen
          className="w-9 h-9 text-[#1F3D2E] stroke-[1.65]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'service-cafm-solutions',
      title: 'CAFM Solutions',
      description:
        'Real-time task monitoring, reporting & SLA performance tracking.',
      icon: (
        <MonitorCheck
          className="w-9 h-9 text-amber-500 stroke-[1.65]"
          aria-hidden="true"
        />
      ),
    },
  ];

  const whyChooseUsItems = [
    {
      id: 'why-professionalism',
      line1: 'Professionalism',
      line2: '& Expert',
      icon: (
        <UserCheck
          size={32}
          className="text-[#1F3D2E] stroke-[1.6]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'why-technology',
      line1: 'Efficiency via',
      line2: 'Technology',
      icon: (
        <MonitorSmartphone
          size={32}
          className="text-[#1F3D2E] stroke-[1.6]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'why-transparency',
      line1: 'Transparency &',
      line2: 'Accountability',
      icon: (
        <ShieldCheck
          size={32}
          className="text-[#1F3D2E] stroke-[1.6]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'why-standards',
      line1: 'Premium',
      line2: 'Service Standards',
      icon: (
        <Award
          size={32}
          className="text-[#1F3D2E] stroke-[1.6]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'why-sustainability',
      line1: 'Sustainability',
      line2: 'Focused',
      icon: (
        <Leaf
          size={32}
          className="text-[#1F3D2E] stroke-[1.6]"
          aria-hidden="true"
        />
      ),
    },
  ];

  const approachSteps = [
    {
      id: 'approach-01',
      number: '01',
      title: 'Assess',
      description: 'Asset Register & Condition Assessment',
    },
    {
      id: 'approach-02',
      number: '02',
      title: 'Plan',
      description: 'Planned Preventive Maintenance',
    },
    {
      id: 'approach-03',
      number: '03',
      title: 'Support',
      description: '24/7 Helpdesk Operations',
    },
    {
      id: 'approach-04',
      number: '04',
      title: 'Monitor',
      description: 'Performance Monitoring',
    },
    {
      id: 'approach-05',
      number: '05',
      title: 'Engage',
      description: 'Resident Engagement & Quarterly Reviews',
    },
  ];

  const bannerStats = [
    {
      id: 'banner-stat-properties',
      number: '15+',
      label: 'Properties Managed',
      icon: (
        <Building2
          size={34}
          className="text-white stroke-[1.75]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'banner-stat-experts',
      number: '100+',
      label: 'Expert Professionals',
      icon: (
        <Users
          size={34}
          className="text-white stroke-[1.75]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'banner-stat-support',
      number: '24/7',
      label: 'Operational Support',
      icon: (
        <Settings
          size={34}
          className="text-white stroke-[1.75]"
          aria-hidden="true"
        />
      ),
    },
    {
      id: 'banner-stat-satisfaction',
      number: '98%',
      label: 'Client Satisfaction',
      icon: (
        <ShieldCheck
          size={34}
          className="text-white stroke-[1.75]"
          aria-hidden="true"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 antialiased selection:bg-amber-400 selection:text-gray-950">
      {/* ========================================================================= */}
      {/* PHASE 1: TOP NAVIGATION BAR */}
      {/* ========================================================================= */}
      <header
        id="navbar"
        className="w-full bg-white border-b border-gray-100 z-50 sticky top-0 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Image */}
            <a
              href="#"
              id="brand-logo"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 rounded"
              aria-label="Validreams Enterprises Limited"
            >
              <img
                src="/assets/logo.png"
                onError={(e) => {
                  // Fallback attempt to ./assets/logo.png or /logo.png if root-placed
                  const target = e.currentTarget;
                  if (target.src.endsWith('/assets/logo.png')) {
                    target.src = '/logo.png';
                  }
                }}
                alt="Validreams Enterprises Limited"
                className="h-12 sm:h-14 w-auto object-contain"
              />
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

      {/* ========================================================================= */}
      {/* PHASE 1: HERO SECTION & STATS BANNER */}
      {/* ========================================================================= */}
      <div className="bg-[#14281F]">
        <section
          id="hero-section"
          className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-start overflow-hidden"
        >
          {/* Background Image: Modern luxury residential building at dusk */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85')`,
            }}
          />

          {/* Dark Green Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, #14281F 0%, rgba(20, 40, 31, 0.96) 28%, rgba(20, 40, 31, 0.85) 45%, rgba(20, 40, 31, 0.45) 70%, rgba(20, 40, 31, 0.15) 100%)',
            }}
          />

          {/* Vertical gradient to ground edges */}
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
                We provide end-to-end property and facilities management
                solutions that enhance asset value, ensure safety, and deliver
                premium experience for residents and clients.
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

        {/* Stats Banner */}
        <section
          id="stats-banner-section"
          className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 -mt-6 sm:-mt-10 lg:-mt-12"
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
                  <div className="pt-0.5">{item.icon}</div>
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
      </div>

      {/* ========================================================================= */}
      {/* PHASE 2: SERVICES SECTION */}
      {/* ========================================================================= */}
      <section
        id="services"
        className="w-full bg-white py-20 sm:py-24 px-6 sm:px-10 lg:px-12 flex flex-col justify-center selection:bg-amber-400 selection:text-gray-950 font-sans border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Centered Section Header */}
          <div
            id="services-header"
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
          >
            <span
              id="services-eyebrow"
              className="text-amber-400 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase inline-block mb-3"
            >
              OUR CORE SERVICES
            </span>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#1F3D2E] tracking-tight leading-tight"
            >
              Comprehensive Solutions for Every Property
            </h2>
          </div>

          {/* 6-Card Responsive Grid */}
          <div
            id="services-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-4 xl:gap-5 items-stretch"
          >
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group min-h-[300px]"
              >
                {/* Top: Alternating Line-Style Icon */}
                <div
                  className="mb-5 p-2 rounded-xl transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                {/* Middle: Bold Title & Short Description */}
                <div className="w-full flex-1 flex flex-col items-center justify-start">
                  <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-snug tracking-tight mb-2.5 min-h-[42px] flex items-center justify-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Small Right-Arrow Icon */}
                <div className="pt-5 mt-auto flex items-center justify-center">
                  <ArrowRight
                    className="w-4 h-4 text-gray-800 stroke-[2.25] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Centered Action Button */}
          <div
            id="services-cta-wrapper"
            className="mt-14 sm:mt-16 flex justify-center"
          >
            <a
              href="#all-services"
              id="btn-view-all-services"
              className="inline-flex items-center justify-center gap-2.5 bg-[#1F3D2E] hover:bg-[#162d22] text-white font-semibold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:ring-offset-2"
            >
              <span>View All Services</span>
              <ArrowRight
                className="w-4 h-4 text-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 3: WHY CHOOSE US SECTION */}
      {/* ========================================================================= */}
      <section
        id="why-choose-us"
        className="w-full bg-[#F1F1F0] py-20 sm:py-24 px-6 sm:px-10 lg:px-12 flex flex-col justify-center selection:bg-amber-400 selection:text-gray-950 font-sans"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT HALF */}
            <div
              id="why-choose-us-left"
              className="lg:col-span-5 flex flex-col justify-center"
            >
              {/* Amber/Gold Eyebrow */}
              <div id="why-eyebrow" className="mb-3.5">
                <span className="text-amber-500 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase inline-block">
                  WHY CHOOSE VALIDREAMS
                </span>
              </div>

              {/* Large Bold Heading in Dark Green */}
              <h2
                id="why-heading"
                className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#1F3D2E] tracking-tight leading-[1.18] mb-5"
              >
                Adding Value. Delivering <br className="hidden sm:inline" />
                Peace of Mind.
              </h2>

              {/* Supporting Paragraph in dark gray/black */}
              <p
                id="why-description"
                className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-lg font-normal"
              >
                We combine professionalism, technology and integrity to deliver
                outstanding management services that protect your investment and
                enhance the living and working experience.
              </p>
            </div>

            {/* RIGHT HALF: 5-Item Value-Props Row with clean border-left dividers */}
            <div
              id="why-choose-us-right"
              className="lg:col-span-7 w-full flex items-center justify-center"
            >
              <div
                id="why-props-container"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full items-start gap-y-8 sm:gap-y-10 lg:gap-y-0"
              >
                {whyChooseUsItems.map((item, index) => (
                  <div
                    key={item.id}
                    id={item.id}
                    className={`flex flex-col items-center justify-start text-center h-full px-2 sm:px-3 lg:px-2 xl:px-3 ${
                      index > 0
                        ? 'lg:border-l lg:border-[#facc15]'
                        : ''
                    }`}
                  >
                    {/* Icon container with fixed height for perfect baseline alignment */}
                    <div className="h-10 flex items-center justify-center mb-3 shrink-0">
                      {item.icon}
                    </div>

                    {/* Label container with aligned baseline */}
                    <div className="w-full text-xs sm:text-[13px] font-semibold text-[#1F3D2E] leading-snug tracking-tight text-center">
                      <span className="block">{item.line1}</span>
                      <span className="block">{item.line2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 4: OUR APPROACH SECTION */}
      {/* ========================================================================= */}
      <section
        id="our-approach"
        className="w-full bg-white py-20 sm:py-24 px-6 sm:px-10 lg:px-12 flex flex-col justify-center selection:bg-amber-400 selection:text-gray-950 font-sans border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Centered Section Header */}
          <div
            id="approach-header"
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          >
            <span
              id="approach-eyebrow"
              className="text-amber-500 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase inline-block mb-3"
            >
              OUR APPROACH
            </span>
            <h2
              id="approach-heading"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#1F3D2E] tracking-tight leading-tight"
            >
              Preventive Today. Peace of Mind Always
            </h2>
          </div>

          {/* 5-Step Process Timeline */}
          <div
            id="approach-timeline-container"
            className="relative w-full max-w-6xl mx-auto"
          >
            {/* Connecting dotted gold line across all 5 circles on desktop */}
            <div
              className="hidden md:block absolute top-[48px] left-[10%] right-[10%] border-t-2 border-dotted border-[#facc15] pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* Steps Container */}
            <div
              id="approach-steps"
              className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-4 lg:gap-6"
            >
              {approachSteps.map((step) => (
                <div
                  key={step.id}
                  id={step.id}
                  className="flex-1 flex flex-col items-center text-center w-full max-w-[220px]"
                >
                  {/* Circular Node (solid dark green #1F3D2E, 96px diameter, white Building2 icon) */}
                  <div
                    className="w-24 h-24 rounded-full bg-[#1F3D2E] flex items-center justify-center shadow-md mb-6 relative z-10 shrink-0 transition-transform duration-200 hover:scale-105"
                    aria-hidden="true"
                  >
                    <Building2 className="w-10 h-10 text-white stroke-[1.5]" />
                  </div>

                  {/* Step Number */}
                  <span className="text-lg sm:text-xl font-bold text-gray-950 mb-1 leading-none">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {step.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-[13px] text-gray-600 font-normal leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* STATS BANNER SECTION */}
      {/* ========================================================================= */}
      <section
        id="stats-banner"
        className="relative w-full min-h-[360px] sm:min-h-[380px] lg:min-h-[400px] flex items-start justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-32 sm:pb-36 lg:pb-44 px-6 sm:px-10 lg:px-16 xl:px-20 font-sans selection:bg-amber-400 selection:text-gray-950"
      >
        {/* Background Image: Night-time luxury residential architecture with warm lit windows & city backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85')`,
          }}
          aria-hidden="true"
        />

        {/* Dark Overlay (roughly 60% opacity) */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-brightness-90 pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Container: 4 Stats Items */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div
            id="stats-banner-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 items-center justify-items-center text-center"
          >
            {bannerStats.map((stat) => (
              <div
                key={stat.id}
                id={stat.id}
                className="flex flex-col items-center justify-center text-center w-full max-w-[260px] group"
              >
                {/* 1. White outline icon */}
                <div
                  className="mb-3.5 h-11 flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>

                {/* 2. Large bold number in amber/gold (#facc15) */}
                <div className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#facc15] tracking-tight leading-none mb-2.5">
                  {stat.number}
                </div>

                {/* 3. White label text below with generous letter spacing */}
                <p className="text-white text-sm sm:text-base font-medium tracking-wider whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 5: CTA CARD OVERLAPPING STATS BANNER */}
      {/* ========================================================================= */}
      <section
        id="cta-overlap-section"
        className="relative w-full bg-white pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 xl:px-12 font-sans selection:bg-amber-400 selection:text-gray-950"
      >
        <div className="max-w-7xl mx-auto -mt-20 sm:-mt-24 lg:-mt-28 relative z-20">
          {/* Overlapping White Rounded Card */}
          <div
            id="cta-overlap-card"
            className="bg-white rounded-3xl shadow-2xl border border-gray-100/90 p-7 sm:p-9 lg:p-12 xl:p-14"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
              {/* LEFT COLUMN: Heading & Subtext */}
              <div
                id="cta-card-left"
                className="lg:col-span-5 flex flex-col justify-center text-left"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-[#1F3D2E] leading-[1.2] tracking-tight mb-3 sm:mb-4">
                  Let&apos;s Take Better Care <br className="hidden sm:inline" />
                  of Your Property
                </h3>
                <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-md">
                  Partner with Validreams for reliable, innovative and result-driven property and facilities management
                </p>
              </div>

              {/* CENTER COLUMN: Modern Luxury Villa Photo */}
              <div
                id="cta-card-center"
                className="lg:col-span-4 w-full flex items-center justify-center"
              >
                <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-sm relative group bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                    alt="Modern luxury architectural property with pool and greenery"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: Badge, Text & Action Button */}
              <div
                id="cta-card-right"
                className="lg:col-span-3 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  {/* Small Circular Gold Badge with White Phone Icon */}
                  <div
                    className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center shrink-0 shadow-sm"
                    aria-hidden="true"
                  >
                    <Phone className="w-5 h-5 text-white stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-[17px] font-bold text-gray-950 leading-tight">
                      Ready to Get Started?
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Speak with our team today.
                    </p>
                  </div>
                </div>

                {/* Solid Dark Green Rounded Button */}
                <a
                  id="cta-talk-team-btn"
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#1F3D2E] hover:bg-[#162d22] text-white font-semibold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4 text-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
