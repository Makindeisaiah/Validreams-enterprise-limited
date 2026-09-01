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

export default function App() {
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
      iconColor: 'green',
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
      iconColor: 'amber',
    },
    {
      id: 'service-soft-services',
      title: 'Soft Services',
      description:
        'Cleaning, landscaping, waste management, pest control, concierge & reception',
      icon: (
        <div className="relative flex items-center justify-center">
          {/* Custom refined broom & sparkle icon matching architectural line style */}
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
      iconColor: 'green',
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
      iconColor: 'amber',
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
      iconColor: 'green',
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
      iconColor: 'amber',
    },
  ];

  return (
    <section
      id="services-section"
      className="min-h-screen bg-white py-20 sm:py-24 px-6 sm:px-10 lg:px-12 flex flex-col justify-center selection:bg-amber-400 selection:text-gray-950 font-sans"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* 1. Centered Section Header */}
        <div id="services-header" className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
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

        {/* 2. 6-Card Responsive Grid */}
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

              {/* Middle: Bold Title (max 2 lines) & Short Description */}
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

        {/* 3. Centered Action Button */}
        <div id="services-cta-wrapper" className="mt-14 sm:mt-16 flex justify-center">
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
  );
}
