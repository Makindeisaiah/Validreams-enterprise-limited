import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CtaCardProps {
  onNavigate?: (page: string) => void;
}

export default function CtaCard({ onNavigate }: CtaCardProps) {
  return (
    <section
      id="cta-section"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100/80 p-6 sm:p-8 lg:p-10 xl:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* LEFT COLUMN: Heading & Subtext */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3D2E] tracking-tight leading-[1.2] mb-4">
                Let&apos;s Take Better Care
                <span className="block mt-1">of Your Property</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-sm">
                Partner with Validreams for reliable, innovative and result-driven property and facilities management
              </p>
            </div>

            {/* CENTER COLUMN: Property Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-gray-100 border border-gray-100 group">
                <img
                  src="/assets/property_cta.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src =
                      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80';
                  }}
                  alt="Modern luxury property with lush greenery and hillside views"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Badge, Text & Button */}
            <div className="lg:col-span-3 flex flex-col justify-center items-start lg:pl-4 space-y-5">
              {/* Phone Badge & Text */}
              <div className="flex items-center space-x-3.5">
                <a
                  href="tel:+2348026868355"
                  className="w-11 h-11 rounded-full bg-[#facc15] hover:bg-yellow-400 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105"
                  aria-label="Call +234 802 686 8355"
                >
                  <Phone className="w-5 h-5 text-gray-950 stroke-[2.2]" />
                </a>
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-gray-900 leading-tight">
                    Ready to Get Started?
                  </h3>
                  <a
                    href="tel:+2348026868355"
                    className="text-xs sm:text-sm font-semibold text-[#1F3D2E] hover:text-amber-600 transition-colors block mt-0.5"
                  >
                    +234 802 686 8355
                  </a>
                </div>
              </div>

              {/* Solid Dark Green Rounded Button */}
              <motion.button
                type="button"
                id="cta-get-in-touch-btn"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('contact');
                  } else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 12px 24px -6px rgba(31, 61, 46, 0.35)',
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1F3D2E] hover:bg-[#152a20] text-white font-medium text-sm sm:text-base rounded-lg transition-colors duration-200 shadow-sm group focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:ring-offset-2 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight
                  className="w-4 h-4 stroke-[2.5]"
                  aria-hidden="true"
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
