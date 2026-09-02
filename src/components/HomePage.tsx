import React from 'react';
import {
  ArrowRight,
  Building2,
  Users,
  Settings,
  ShieldCheck,
  Wrench,
  Sparkles,
  Shield,
  FileSpreadsheet,
  Cpu,
  Home,
  CheckCircle2,
} from 'lucide-react';
import CtaCard from './CtaCard';
import Footer from './Footer';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Home,
      title: 'Property & Rent Management',
      desc: 'Comprehensive tenant screening, lease administration, rent collection, and property condition monitoring.',
    },
    {
      icon: Wrench,
      title: 'Technical & Maintenance',
      desc: 'Proactive mechanical, electrical, plumbing (MEP), HVAC systems maintenance, and 24/7 rapid emergency repair.',
    },
    {
      icon: Sparkles,
      title: 'Soft Services',
      desc: 'Janitorial care, hygiene management, landscaping, waste management, and premium corporate front desk support.',
    },
    {
      icon: Shield,
      title: 'Security Management',
      desc: 'Trained security personnel, CCTV surveillance operations, automated access control, and incident prevention protocols.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Administrative & Financial',
      desc: 'Transparent budget forecasting, service charge reconciliation, regulatory compliance, and vendor oversight.',
    },
    {
      icon: Cpu,
      title: 'CAFM & Smart Tech',
      desc: 'Integrated Computer-Aided Facility Management software with real-time maintenance ticketing and transparent reporting.',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* ========================================================================= */}
      {/* 1. HOME HERO SECTION */}
      {/* ========================================================================= */}
      <section
        id="home-hero"
        className="relative w-full min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#1F2C2A]"
      >
        {/* Full-bleed dusk architecture background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
            alt="Modern luxury building at dusk"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1F2C2A]/95 via-[#1F2C2A]/80 md:via-[#1F2C2A]/65 to-black/40"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-24">
          <div className="max-w-2xl">
            {/* Amber Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#facc15]/15 border border-[#facc15]/40 text-[#facc15] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Property &amp; Facilities Management</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-5">
              Elevating Property Value.
              <span className="block text-[#facc15] mt-1">Exceptional Living Experience.</span>
            </h1>

            {/* Description */}
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Validreams Enterprise Limited provides reliable, technology-driven, and premium property and facilities management solutions tailored for residential estates, corporate facilities, and commercial assets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#facc15] hover:bg-yellow-400 text-gray-950 font-bold text-sm sm:text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:ring-offset-2"
              >
                <span>About Our Company</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-white border border-white/20 font-medium text-sm sm:text-base rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS BANNER */}
      {/* ========================================================================= */}
      <section
        id="stats-banner"
        className="relative w-full min-h-[320px] sm:min-h-[340px] lg:min-h-[360px] flex items-center justify-center overflow-hidden bg-slate-950 py-12 sm:py-16"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
            alt="Night architectural luxury building skyline"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-slate-950/60 backdrop-brightness-75" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 text-center items-center justify-between">
            <div className="flex flex-col items-center group">
              <div className="mb-3 text-white transition-transform duration-200 group-hover:scale-110">
                <Building2 className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2">15+</p>
              <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">Properties Managed</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="mb-3 text-white transition-transform duration-200 group-hover:scale-110">
                <Users className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2">100+</p>
              <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">Expert Professionals</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="mb-3 text-white transition-transform duration-200 group-hover:scale-110">
                <Settings className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2">24/7</p>
              <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">Operational Support</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="mb-3 text-white transition-transform duration-200 group-hover:scale-110">
                <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2">98%</p>
              <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE SERVICES GRID */}
      {/* ========================================================================= */}
      <section id="services" className="w-full bg-[#F1F1F0] py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3">
              WHAT WE DO
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2E] tracking-tight mb-4">
              Comprehensive Management Solutions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide an integrated suite of property, facility, and consulting services designed to maximize asset longevity and tenant satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl border border-gray-200/70 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1F3D2E]/5 text-[#1F3D2E] flex items-center justify-center mb-5 group-hover:bg-[#1F3D2E] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F3D2E] mb-2.5 tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT VALIDREAMS HIGHLIGHT / WHO WE ARE */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3">
                ABOUT VALIDREAMS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2E] tracking-tight leading-[1.18] mb-6">
                Professional. Reliable. Results-Driven.
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                Validreams Enterprise Limited brings together deep technical expertise, stringent quality standards, and modern technology to deliver seamless facilities and property management solutions.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Over 15+ high-value properties actively managed with zero downtime.',
                  'Integrated Computer-Aided Facilities Management (CAFM) workflow.',
                  'Strict adherence to environmental sustainability & safety protocols.',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-[15px] text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1F3D2E] hover:bg-[#152a20] text-white font-medium text-sm sm:text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1F3D2E]"
                >
                  <span>Read Full About Us</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100 aspect-[4/3] group">
                <img
                  src="/assets/reception_lobby.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/assets/reception_lobby.jpg';
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
      {/* 5. CTA CARD */}
      {/* ========================================================================= */}
      <CtaCard />

      {/* ========================================================================= */}
      {/* 6. FOOTER */}
      {/* ========================================================================= */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
