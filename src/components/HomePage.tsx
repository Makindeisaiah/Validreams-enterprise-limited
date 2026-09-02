import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Headphones,
  Monitor,
  Users,
} from 'lucide-react';

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="w-full bg-white text-gray-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* ========================================================================= */}
      {/* 2. HERO SECTION */}
      {/* ========================================================================= */}
      <section
        id="home-hero"
        className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] flex flex-col justify-between overflow-hidden bg-[#14281F]"
      >
        {/* Full-bleed background photo: Modern luxury residential building at dusk with warm interior lighting */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
            alt="Modern luxury residential building at dusk with warm interior lighting"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dark Green Gradient Overlay (roughly #14281F) strongest on left, fading out toward the right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#14281F]/95 via-[#14281F]/80 md:via-[#14281F]/60 to-black/20"
          aria-hidden="true"
        />

        {/* Hero Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Small amber/gold eyebrow label */}
            <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-4 sm:mb-5">
              PROPERTY &amp; FACILITIES MANAGEMENT
            </p>

            {/* Large bold headline: Two lines */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-5 sm:mb-6 text-white">
              Built Around
              <span className="block text-[#facc15] mt-1">Excellence.</span>
            </h1>

            {/* Supporting paragraph in white/85% opacity */}
            <p className="text-white/85 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-xl sm:max-w-2xl mb-8 sm:mb-10">
              We provide end-to-end property and facilities management solutions that enhance asset value, ensure safety, and deliver premium experience for residents and clients.
            </p>

            {/* Two buttons side by side */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Solid amber/gold "Our Services" button (dark text) with arrow */}
              <a
                href="#services"
                id="btn-our-services"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#facc15] hover:bg-yellow-400 text-gray-950 font-bold text-sm sm:text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:ring-offset-2"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </a>

              {/* Outlined white "Contact Us" button with arrow */}
              <a
                href="#contact"
                id="btn-contact-us"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 bg-transparent hover:bg-white/15 text-white border border-white font-medium text-sm sm:text-base rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. STATS BANNER: Docked at bottom of Hero (matching screenshot) */}
        {/* ========================================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-8 sm:pb-10 lg:pb-12 mt-8 lg:mt-10">
          <div className="w-full bg-[#1F3D2E] rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-7 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/20 items-start">
              {/* Column 1: Trusted Expertise */}
              <div className="flex items-start space-x-4 lg:pr-6">
                <div className="shrink-0 mt-0.5">
                  <ShieldCheck
                    className="w-8 h-8 text-[#facc15] stroke-[1.75]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight">
                    Trusted Expertise
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    Years of experience in managing premium properties.
                  </p>
                </div>
              </div>

              {/* Column 2: 24/7 Support */}
              <div className="flex items-start space-x-4 lg:px-6">
                <div className="shrink-0 mt-0.5">
                  <Headphones
                    className="w-8 h-8 text-[#facc15] stroke-[1.75]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight">
                    24/7 Support
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    Round-the-clock operations and responsive help-desk always available.
                  </p>
                </div>
              </div>

              {/* Column 3: Technology Driven */}
              <div className="flex items-start space-x-4 lg:px-6">
                <div className="shrink-0 mt-0.5">
                  <Monitor
                    className="w-8 h-8 text-[#facc15] stroke-[1.75]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight">
                    Technology Driven
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    CAFM solutions for real-time monitoring, reporting and performance tracking.
                  </p>
                </div>
              </div>

              {/* Column 4: Client Focused */}
              <div className="flex items-start space-x-4 lg:pl-6">
                <div className="shrink-0 mt-0.5">
                  <Users
                    className="w-8 h-8 text-[#facc15] stroke-[1.75]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight">
                    Client Focused
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    We prioritize transparency, communication and resident satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
