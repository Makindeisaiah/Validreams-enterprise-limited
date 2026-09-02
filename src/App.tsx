import React, { useState } from 'react';
import {
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Building2,
  Users,
  Settings,
  ShieldCheck,
  Award,
  UserCheck,
  Handshake,
  Lightbulb,
  Leaf,
} from 'lucide-react';

export default function AboutUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: false },
    { name: 'About', href: '#', active: true },
    { name: 'Services', href: '#services', active: false },
    { name: 'Property & Facilities', href: '#facilities', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'Insights', href: '#insights', active: false },
    { name: 'Contact Us', href: '#contact', active: false },
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
              href="#"
              id="brand-logo"
              className="flex items-center py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 rounded"
              aria-label="Validreams Enterprises Limited"
            >
              <img
                src="./assets/logo.png"
                onError={(e) => {
                  // Fallback attempt to /logo.png if needed
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
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] transition-colors py-1.5 focus:outline-none focus:text-amber-500 ${
                    link.active
                      ? 'text-[#facc15] font-semibold'
                      : 'text-gray-600 hover:text-gray-900 font-medium'
                  }`}
                >
                  {link.name}
                </a>
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
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base transition-colors ${
                  link.active
                    ? 'text-amber-500 font-bold bg-amber-50/70'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO / BANNER SECTION (ABOUT US) */}
      {/* ========================================================================= */}
      <section
        id="about-hero-banner"
        className="relative w-full min-h-[550px] sm:min-h-[580px] lg:min-h-[600px] flex items-center overflow-hidden bg-[#1F2C2A]"
      >
        {/* Full-Bleed Background Photo: Modern Luxury Residential Building at Dusk */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
            alt="Modern luxury residential building at dusk with warm interior lighting"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dark Gradient Overlay: slate/green-gray (#1F2C2A) ~75-80% on the left, fading to transparent on the right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1F2C2A]/90 via-[#1F2C2A]/75 md:via-[#1F2C2A]/60 to-transparent"
          aria-hidden="true"
        />

        {/* Secondary subtle vertical overlay for mobile readability */}
        <div
          className="absolute inset-0 bg-black/20 md:hidden"
          aria-hidden="true"
        />

        {/* Content over the left side of the image, vertically centered-low */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Breadcrumb Row */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-sm sm:text-base text-white mb-4 sm:mb-5"
            >
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-150 focus:outline-none focus:underline"
              >
                Home
              </a>
              <ChevronRight
                className="w-4 h-4 text-white/70 stroke-[2] shrink-0"
                aria-hidden="true"
              />
              <span className="font-semibold text-white tracking-wide" aria-current="page">
                About Us
              </span>
            </nav>

            {/* Large Bold White Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-4 sm:mb-5">
              About Us
            </h1>

            {/* Two-line Subheading in Amber/Gold */}
            <h2 className="text-[#facc15] font-bold text-base sm:text-lg lg:text-xl leading-snug tracking-normal mb-4 sm:mb-5">
              Built on integrity. Driven by Excellence.
              <span className="block mt-0.5 sm:mt-1">
                Committed to Your Property&apos;s Success.
              </span>
            </h2>

            {/* White Body Paragraph (85% opacity) */}
            <p className="text-white/85 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal max-w-xl">
              Validreams Enterprise Limited is a professional Property and Facilities Management company dedicated to delivering reliable, technology-driven, and premium service solutions that enhance asset value and improve the living and working experience.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHO WE ARE SECTION (PHASE 2) */}
      {/* ========================================================================= */}
      <section
        id="who-we-are"
        className="w-full bg-white text-gray-900 py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT HALF (Desktop Left / Mobile Bottom) */}
            <div
              id="who-we-are-content"
              className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center"
            >
              {/* Eyebrow Label */}
              <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 sm:mb-4">
                WHO WE ARE
              </p>

              {/* Large Bold Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2E] tracking-tight leading-[1.18] mb-6">
                Professional. Reliable.
                <span className="block mt-1 sm:mt-2">Results-Driven.</span>
              </h2>

              {/* Body Paragraph */}
              <p className="text-gray-800 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-xl mb-8">
                Validreams Enterprise Limited is a professional Property and Facilities Management company dedicated to delivering reliable, technology-driven, and premium service solutions that enhance asset value and improve the living and working experience.
              </p>

              {/* Action Button */}
              <div>
                <a
                  href="#approach"
                  id="our-approach-btn"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1F3D2E] hover:bg-[#152a20] text-white font-medium text-sm sm:text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md group focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:ring-offset-2"
                >
                  <span>Our Approach</span>
                  <ArrowRight
                    className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT HALF (Desktop Right / Mobile Top) */}
            <div
              id="who-we-are-visual"
              className="order-1 lg:order-2 lg:col-span-6"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
                {/* Reception Lobby Image */}
                <img
                  src="/assets/reception_lobby.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('/assets/reception_lobby.png')) {
                      target.src = '/assets/reception_lobby.jpg';
                    }
                  }}
                  alt="Validreams modern reception lobby"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STATS BANNER SECTION */}
      {/* ========================================================================= */}
      <section
        id="stats-banner"
        className="relative w-full min-h-[320px] sm:min-h-[340px] lg:min-h-[360px] flex items-center justify-center overflow-hidden bg-slate-950 py-12 sm:py-16"
      >
        {/* Full-bleed night-time cityscape / luxury building photo background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
            alt="Night architectural luxury building skyline"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dark overlay (roughly 55-65% opacity) */}
        <div
          className="absolute inset-0 bg-slate-950/60 backdrop-brightness-75"
          aria-hidden="true"
        />

        {/* 4-Column Stat Items Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 text-center items-center justify-between">
            {/* Stat 1: Properties Managed */}
            <div id="stat-properties" className="flex flex-col items-center group">
              <div className="mb-3 text-white transition-transform duration-200 group-hover:scale-110">
                <Building2 className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" aria-hidden="true" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2">
                15+
              </p>
              <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">
                Properties Managed
              </p>
            </div>

            {/* Stat 2: Expert Professionals */}
            <div id="stat-professionals" className="flex flex-col items-center group">
              <div className="mb-3 text-white transition-transform duration-200 group-hover:scale-110">
                <Users className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" aria-hidden="true" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2">
                100+
              </p>
              <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">
                Expert Professionals
              </p>
            </div>

            {/* Stat 3: Operational Support */}
            <div id="stat-support" className="flex flex-col items-center group">
              <div className="mb-3 text-white transition-transform duration-200 group-hover:scale-110">
                <Settings className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" aria-hidden="true" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2">
                24/7
              </p>
              <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">
                Operational Support
              </p>
            </div>

            {/* Stat 4: Client Satisfaction */}
            <div id="stat-satisfaction" className="flex flex-col items-center group">
              <div className="mb-3 text-white transition-transform duration-200 group-hover:scale-110">
                <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" aria-hidden="true" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2">
                98%
              </p>
              <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR VALUES SECTION (PHASE 4) */}
      {/* ========================================================================= */}
      <section
        id="our-values"
        className="w-full bg-white text-gray-900 py-20 sm:py-24 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Centered Eyebrow Label on its own */}
          <div className="text-center mb-14 sm:mb-18 lg:mb-20">
            <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase">
              OUR VALUES
            </p>
          </div>

          {/* 6 Value Items in a single row on desktop with gold border-left dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 sm:gap-y-14 lg:gap-y-0">
            {[
              {
                icon: ShieldCheck,
                title: 'Integrity',
                description: 'We do what is right always',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for the highest standards',
              },
              {
                icon: UserCheck,
                title: 'Accountability',
                description: 'We take ownership of every responsibility.',
              },
              {
                icon: Handshake,
                title: 'Professionalism',
                description: 'We deliver with skill and respect.',
              },
              {
                icon: Lightbulb,
                title: 'Sustainability',
                description: 'We protect resources for the future.',
              },
              {
                icon: Leaf,
                title: 'Innovation',
                description: 'We embrace technology to drive better outcomes.',
              },
            ].map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  id={`value-${value.title.toLowerCase()}`}
                  className={`flex flex-col items-center text-center justify-start ${
                    idx > 0
                      ? 'lg:border-l lg:border-[#facc15] lg:pl-5 xl:lg:pl-6'
                      : ''
                  } ${idx < 5 ? 'lg:pr-5 xl:lg:pr-6' : ''}`}
                >
                  {/* Line Icon */}
                  <div className="flex items-center justify-center mb-5 sm:mb-6">
                    <IconComponent
                      className="w-9 h-9 sm:w-10 sm:h-10 text-[#1F3D2E] stroke-[1.75]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Bold Dark Green Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1F3D2E] mb-2 sm:mb-2.5 tracking-tight">
                    {value.title}
                  </h3>

                  {/* Gray Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[190px] sm:max-w-[210px]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR MANAGEMENT STRUCTURE SECTION (PHASE 5) */}
      {/* ========================================================================= */}
      <section
        id="management-structure"
        className="w-full bg-[#F1F1F0] text-gray-900 py-20 sm:py-24 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Centered Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
            {/* Amber/Gold Eyebrow Label */}
            <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 sm:mb-4">
              OUR MANAGEMENT STRUCTURE
            </p>

            {/* Large Bold Heading in Dark Green */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2E] tracking-tight leading-tight mb-4 sm:mb-5">
              Experienced People. Exceptional Service.
            </h2>

            {/* Gray Body Paragraph */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our leadership team brings together deep industry knowledge, diverse expertise, and a shared commitment to delivering excellence in every projects we undertake.
            </p>
          </div>

          {/* Row of 5 Team Member Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7 lg:gap-6 items-start">
            {[
              {
                image: '/assets/team_manager.jpg',
                fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
                title: 'Facilities Manager',
                subtitle: 'Overall site management',
              },
              {
                image: '/assets/team_technician.jpg',
                fallback: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
                title: 'Technicians',
                subtitle: 'Maintenance support',
              },
              {
                image: '/assets/team_soft_services.jpg',
                fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
                title: 'Soft Services Supervisor',
                subtitle: 'Maintenance support',
              },
              {
                image: '/assets/team_security.jpg',
                fallback: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
                title: 'Security Supervisor',
                subtitle: 'Guard operations',
              },
              {
                image: '/assets/team_helpdesk.jpg',
                fallback: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
                title: 'Helpdesk Officer',
                subtitle: 'Resident support & Complaints',
              },
            ].map((member, index) => (
              <div
                key={member.title}
                id={`team-member-${index + 1}`}
                className="flex flex-col items-center text-center group"
              >
                {/* Rounded-corner Portrait Photo (4:5 aspect ratio) */}
                <div className="w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200/70 mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src={member.image}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== member.fallback) {
                        target.src = member.fallback;
                      }
                    }}
                    alt={member.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bold Dark Title */}
                <h3 className="text-base sm:text-[17px] font-bold text-[#1F3D2E] tracking-tight mb-1">
                  {member.title}
                </h3>

                {/* Smaller Gray Subtitle */}
                <p className="text-xs sm:text-sm text-gray-500 font-normal">
                  {member.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
