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
  Clock,
  ArrowLeft,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceItem, servicesList } from '../data/servicesData';
import CtaCard from './CtaCard';
import Footer from './Footer';

interface ServiceDetailPageProps {
  serviceSlug: string;
  onNavigate: (page: string, subId?: string) => void;
}

export default function ServiceDetailPage({ serviceSlug, onNavigate }: ServiceDetailPageProps) {
  // Find the selected service or fallback to first
  const currentService: ServiceItem =
    servicesList.find((s) => s.slug === serviceSlug) || servicesList[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-10 h-10 text-[#facc15] stroke-[1.75]" />;
      case 'Settings':
        return <Settings className="w-10 h-10 text-[#facc15] stroke-[1.75]" />;
      case 'Sparkles':
        return <Sparkles className="w-10 h-10 text-[#facc15] stroke-[1.75]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-10 h-10 text-[#facc15] stroke-[1.75]" />;
      case 'BookOpen':
        return <BookOpen className="w-10 h-10 text-[#facc15] stroke-[1.75]" />;
      case 'MonitorCheck':
        return <MonitorCheck className="w-10 h-10 text-[#facc15] stroke-[1.75]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-10 h-10 text-[#facc15] stroke-[1.75]" />;
      case 'Award':
      default:
        return <Award className="w-10 h-10 text-[#facc15] stroke-[1.75]" />;
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* ========================================================================= */}
      {/* 1. HERO WITH BREADCRUMB */}
      {/* ========================================================================= */}
      <section
        id="service-hero"
        className="relative w-full min-h-[400px] sm:min-h-[460px] flex flex-col justify-center overflow-hidden bg-[#14281F]"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src={currentService.image}
            alt={currentService.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#14281F]/95 via-[#14281F]/90 to-[#14281F]/75"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/70 mb-4"
            >
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="hover:text-[#facc15] transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="hover:text-[#facc15] transition-colors cursor-pointer"
              >
                Services
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-[#facc15] font-medium">{currentService.title}</span>
            </motion.nav>

            {/* Icon & Title */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shrink-0">
                {getIcon(currentService.icon)}
              </div>
              {currentService.isSuggestedCopy && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-400 text-slate-950 uppercase tracking-wider">
                  [SUGGESTED COPY — client to refine]
                </span>
              )}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight"
            >
              {currentService.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal max-w-2xl mb-8"
            >
              {currentService.heroLead}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-[#facc15] hover:bg-yellow-400 text-slate-950 font-bold text-sm sm:text-base rounded-lg transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base rounded-lg border border-white/30 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Services</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW SECTION */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              SERVICE OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3D2E] tracking-tight mb-5">
              Disciplined Management Engineered for Asset Performance
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              {currentService.shortDesc} At Validreams Enterprises Limited, we combine experienced on-site managers, technical specialists, and automated CAFM systems to ensure seamless execution, continuous compliance, and tangible cost savings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-3 p-3.5 rounded-lg bg-gray-50 border border-gray-100">
                <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">Guaranteed Compliance Standards</span>
              </div>
              <div className="flex items-center space-x-3 p-3.5 rounded-lg bg-gray-50 border border-gray-100">
                <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">24/7 Rapid Incident Escalation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3] bg-gray-100">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT WE DO (DETAILED SCOPE) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              SCOPE OF CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3D2E] tracking-tight">
              What We Do
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Comprehensive task execution and operational oversight delivered across every phase of service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentService.whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-xl border border-gray-200/90 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-7 h-7 rounded-full bg-emerald-50 text-[#1F3D2E] text-xs font-bold flex items-center justify-center shrink-0 border border-emerald-100">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. KEY BENEFITS */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              MEASURABLE VALUE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3D2E] tracking-tight">
              Key Benefits
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Why partnering with Validreams delivers superior operational stability and returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentService.keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-amber-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-[#1F3D2E] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR APPROACH */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 bg-[#1F3D2E] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Our 4-Phase Delivery Approach
            </h2>
            <p className="text-sm sm:text-base text-white/80 mt-2">
              A structured lifecycle approach ensuring predictability, quality, and complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentService.ourApproach.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors"
              >
                <span className="text-3xl font-black text-[#facc15]/40 mb-3 block">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOW WE DELIVER & WHY VALIDREAMS */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* How We Deliver */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              EXECUTION FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3D2E] tracking-tight mb-6">
              How We Deliver
            </h2>
            <div className="space-y-4">
              {currentService.howWeDeliver.map((item, index) => (
                <div key={index} className="p-5 rounded-xl border border-gray-200 bg-gray-50/50">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Validreams */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              THE VALIDREAMS ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3D2E] tracking-tight mb-6">
              Why Validreams for {currentService.shortTitle || currentService.title}
            </h2>
            <div className="space-y-3">
              {currentService.whyValidreams.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-emerald-50/60 border border-emerald-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1F3D2E] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Switch to other services */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Other Capabilities
              </h4>
              <div className="flex flex-wrap gap-2">
                {servicesList
                  .filter((s) => s.slug !== currentService.slug)
                  .map((s) => (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => onNavigate(`service-${s.slug}`, s.slug)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 hover:bg-[#1F3D2E] hover:text-white transition-colors cursor-pointer"
                    >
                      {s.shortTitle || s.title}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CTA & FOOTER */}
      {/* ========================================================================= */}
      <CtaCard onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
