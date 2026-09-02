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
} from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesList } from '../data/servicesData';

interface ServicesSectionProps {
  onNavigate?: (page: string, subId?: string) => void;
  onViewAll?: () => void;
}

export default function ServicesSection({ onNavigate, onViewAll }: ServicesSectionProps) {
  // Map icons to the 8 services
  const getIcon = (iconName: string, isAlternate: boolean) => {
    const colorClass = isAlternate ? 'text-[#facc15]' : 'text-[#1F3D2E]';
    switch (iconName) {
      case 'Building2':
        return <Building2 className={`w-9 h-9 ${colorClass} stroke-[1.75]`} />;
      case 'Settings':
        return <Settings className={`w-9 h-9 ${colorClass} stroke-[1.75]`} />;
      case 'Sparkles':
        return <Sparkles className={`w-9 h-9 ${colorClass} stroke-[1.75]`} />;
      case 'ShieldCheck':
        return <ShieldCheck className={`w-9 h-9 ${colorClass} stroke-[1.75]`} />;
      case 'BookOpen':
        return <BookOpen className={`w-9 h-9 ${colorClass} stroke-[1.75]`} />;
      case 'MonitorCheck':
        return <MonitorCheck className={`w-9 h-9 ${colorClass} stroke-[1.75]`} />;
      case 'Lightbulb':
        return <Lightbulb className={`w-9 h-9 ${colorClass} stroke-[1.75]`} />;
      case 'Award':
      default:
        return <Award className={`w-9 h-9 ${colorClass} stroke-[1.75]`} />;
    }
  };

  const handleServiceClick = (slug: string) => {
    if (onNavigate) {
      onNavigate(`service-${slug}`, slug);
    }
  };

  return (
    <section
      id="services-section"
      className="w-full bg-white text-gray-900 py-20 sm:py-24 lg:py-28 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* 1. CENTERED SECTION HEADER */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 lg:mb-20"
        >
          {/* Small amber/gold eyebrow label */}
          <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 sm:mb-4">
            OUR CORE SERVICES
          </p>

          {/* Large bold heading in dark green */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2E] tracking-tight leading-tight mb-4">
            Comprehensive Solutions for Every Property
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            From technical engineering and CAFM automation to tenancy administration and real estate advisory, Validreams delivers integrated asset protection.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. 8-CARD RESPONSIVE GRID */}
        {/* ========================================================================= */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {servicesList.map((service, index) => {
            const isAlternate = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: 'easeOut' },
                  },
                }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 20px 25px -5px rgba(31, 61, 46, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
                }}
                onClick={() => handleServiceClick(service.slug)}
                className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#1F3D2E]/30 group cursor-pointer relative"
              >
                {/* Top / Icon and Tag */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-amber-50/50 transition-colors">
                      {getIcon(service.icon, isAlternate)}
                    </div>
                    {service.isSuggestedCopy && (
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                        Strategic
                      </span>
                    )}
                  </div>

                  {/* Bold Title */}
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug mb-2.5 group-hover:text-[#1F3D2E] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description sentence */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom / Learn More with arrow */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1F3D2E] group-hover:text-amber-600 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight
                    className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. SECONDARY STANDARDIZED CTA: "Explore Our Services" */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="mt-14 sm:mt-16 flex justify-center"
        >
          <motion.button
            type="button"
            id="btn-explore-our-services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (onNavigate) {
                onNavigate('services');
              } else if (onViewAll) {
                onViewAll();
              }
            }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1F3D2E] hover:bg-[#152a20] text-white font-medium text-sm sm:text-base rounded-lg transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:ring-offset-2 cursor-pointer"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
