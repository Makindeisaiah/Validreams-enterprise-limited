import React from 'react';
import {
  Building2,
  Settings,
  Sparkles,
  ShieldCheck,
  BookOpen,
  MonitorCheck,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onViewAll?: () => void;
}

export default function ServicesSection({ onViewAll }: ServicesSectionProps) {
  const services = [
    {
      id: 'property-rent',
      icon: Building2,
      iconColor: 'text-[#1F3D2E]',
      title: 'Property & Rent Management',
      body: 'Leasing, tenant management, rent collection & property administration.',
    },
    {
      id: 'technical-maintenance',
      icon: Settings,
      iconColor: 'text-[#facc15]',
      title: 'Technical & Maintenance',
      body: 'Electrical, mechanical, HVAC, plumbing, generator, fire systems & water treatment',
    },
    {
      id: 'soft-services',
      icon: Sparkles,
      iconColor: 'text-[#1F3D2E]',
      title: 'Soft Services',
      body: 'Cleaning, landscaping, waste management, pest control, concierge & reception',
    },
    {
      id: 'security-management',
      icon: ShieldCheck,
      iconColor: 'text-[#facc15]',
      title: 'Security Management',
      body: '24/7 guarding, access control, CCTV, visitor screening & security liaison.',
    },
    {
      id: 'admin-financial',
      icon: BookOpen,
      iconColor: 'text-[#1F3D2E]',
      title: 'Administrative & Financial Management',
      body: 'Rent & utilities administration, resident relations, procurement & budgeting.',
    },
    {
      id: 'cafm-solutions',
      icon: MonitorCheck,
      iconColor: 'text-[#facc15]',
      title: 'CAFM Solutions',
      body: 'Real-time task monitoring, reporting & SLA performance tracking.',
    },
  ];

  return (
    <section
      id="services-section"
      className="w-full bg-white text-gray-900 py-20 sm:py-24 lg:py-28 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* 1. CENTERED SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 lg:mb-20">
          {/* Small amber/gold eyebrow label */}
          <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 sm:mb-4">
            OUR CORE SERVICES
          </p>

          {/* Large bold heading in dark green */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2E] tracking-tight leading-tight">
            Comprehensive Solutions for Every Property
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 2. 6-CARD GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
              >
                {/* Top / Icon Section */}
                <div className="flex flex-col items-center">
                  <div className="mb-6 flex items-center justify-center">
                    <IconComponent
                      className={`w-10 h-10 ${service.iconColor} stroke-[1.75] transition-transform duration-300 group-hover:scale-110`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Bold Title (two lines max) */}
                  <h3 className="text-base sm:text-[17px] font-bold text-gray-900 tracking-tight leading-snug mb-3 line-clamp-2 min-h-[44px] flex items-center justify-center">
                    {service.title}
                  </h3>

                  {/* Short gray description sentence */}
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal">
                    {service.body}
                  </p>
                </div>

                {/* Bottom / Small right-arrow icon */}
                <div className="mt-6 pt-2 text-gray-900 group-hover:text-[#1F3D2E] flex items-center justify-center transition-colors">
                  <ArrowRight
                    className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. CENTERED SOLID DARK GREEN BUTTON */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <a
            href="#all-services"
            id="btn-view-all-services"
            onClick={(e) => {
              if (onViewAll) {
                e.preventDefault();
                onViewAll();
              }
            }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1F3D2E] hover:bg-[#152a20] text-white font-medium text-sm sm:text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:ring-offset-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
