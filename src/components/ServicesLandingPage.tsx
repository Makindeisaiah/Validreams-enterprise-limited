import React from 'react';
import {
  Building2,
  Settings,
  Sparkles,
  ShieldCheck,
  BookOpen,
  MonitorCheck,
  Lightbulb,
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Shield,
  Layers,
  Wrench,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesList } from '../data/servicesData';
import CtaCard from './CtaCard';
import Footer from './Footer';

interface ServicesLandingPageProps {
  onNavigate: (page: string, subId?: string) => void;
}

export default function ServicesLandingPage({ onNavigate }: ServicesLandingPageProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-8 h-8 text-[#1F3D2E] stroke-[1.75]" />;
      case 'Settings':
        return <Settings className="w-8 h-8 text-[#facc15] stroke-[1.75]" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#1F3D2E] stroke-[1.75]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#facc15] stroke-[1.75]" />;
      case 'BookOpen':
        return <BookOpen className="w-8 h-8 text-[#1F3D2E] stroke-[1.75]" />;
      case 'MonitorCheck':
        return <MonitorCheck className="w-8 h-8 text-[#facc15] stroke-[1.75]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-8 h-8 text-[#1F3D2E] stroke-[1.75]" />;
      case 'Award':
      default:
        return <Award className="w-8 h-8 text-[#facc15] stroke-[1.75]" />;
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* ========================================================================= */}
      {/* 1. HEADER & BREADCRUMB HERO */}
      {/* ========================================================================= */}
      <section
        id="services-hero"
        className="relative w-full min-h-[360px] sm:min-h-[400px] flex flex-col justify-center overflow-hidden bg-[#14281F]"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
            alt="Modern architectural glass building in Lagos"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#14281F]/95 via-[#14281F]/85 to-[#14281F]/70"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-xs sm:text-sm text-white/70 mb-4"
            >
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="hover:text-[#facc15] transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-[#facc15] font-medium">Services</span>
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
            >
              Our Core Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed font-normal max-w-2xl"
            >
              Comprehensive, technology-enabled property and facilities management solutions designed to safeguard asset value, enhance tenant experience, and optimize operating costs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW INTRO STRIP */}
      {/* ========================================================================= */}
      <section className="w-full bg-gray-50 border-b border-gray-200 py-10 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-[#1F3D2E]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">8 Integrated Categories</h3>
              <p className="text-xs text-gray-500">End-to-end estate, technical, and advisory services</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Digital CAFM Tracking</h3>
              <p className="text-xs text-gray-500">Live work order ticketing, SLA metrics &amp; asset logs</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6 text-[#1F3D2E]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">24/7 Rapid Incident Dispatch</h3>
              <p className="text-xs text-gray-500">Round-the-clock emergency support across Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DETAILED 8-CATEGORY GRID */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 block">
              FULL SERVICE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3D2E] tracking-tight">
              Tailored Capabilities for Landlords, Developers &amp; Residents
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3">
              Explore our full range of property and facilities management solutions. Click any service to view comprehensive scope details, key benefits, and delivery frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(31, 61, 46, 0.1)' }}
                onClick={() => onNavigate(`service-${service.slug}`, service.slug)}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:border-[#1F3D2E]/40 transition-all flex flex-col justify-between group cursor-pointer"
              >
                {/* Image Banner */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                      {getIcon(service.icon)}
                    </div>
                    {service.isSuggestedCopy && (
                      <span className="text-[10px] font-semibold tracking-wider text-amber-900 bg-amber-200/90 px-2 py-0.5 rounded shadow-sm">
                        Strategic
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1F3D2E] transition-colors mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Quick highlights list (2 items) */}
                    <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-500">
                      {service.whatWeDo.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1F3D2E] group-hover:text-amber-600 transition-colors">
                    <span>View Service Scope</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CTA & FOOTER */}
      {/* ========================================================================= */}
      <CtaCard onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
