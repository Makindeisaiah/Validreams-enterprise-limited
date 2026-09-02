import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Property & Facilities', id: 'facilities' },
    { name: 'Projects', id: 'projects' },
    { name: 'Insights', id: 'insights' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    pageId: string
  ) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Property & Rent Management',
    'Technical & Maintenance',
    'Soft Services',
    'Security Management',
    'Administrative & Financial Management',
    'CAFM',
    'Consulting',
    'Real Estate Services',
  ];

  return (
    <footer
      id="footer"
      className="w-full bg-[#3D6B57] text-white pt-16 sm:pt-20 pb-10 sm:pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* 4-Column Grid with thin vertical dividers on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0 lg:divide-x lg:divide-white/15">
          {/* COLUMN 1: Brand Logo, Tagline & Social Icons */}
          <div className="lg:col-span-4 lg:pr-10 flex flex-col justify-between">
            <div>
              {/* Validreams Logo with transparent background (no white box) */}
              <div className="mb-6">
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, 'home')}
                  className="inline-block focus:outline-none focus:ring-2 focus:ring-[#facc15] rounded"
                  aria-label="Validreams Home"
                >
                  <img
                    src="/assets/logo_white.png"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.endsWith('/assets/logo_white.png')) {
                        target.src = '/assets/logo_transparent.png';
                      } else if (target.src.endsWith('/assets/logo_transparent.png')) {
                        target.src = '/assets/logo.png';
                      }
                    }}
                    alt="Validreams Enterprises Limited"
                    className="h-16 sm:h-20 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>

              {/* Tagline */}
              <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed max-w-sm mb-8">
                We deliver reliable, technology-driven and premium property and facilities management solutions that create value and peace of mind.
              </p>
            </div>

            {/* Circular Social Icons */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-[#facc15] hover:text-[#facc15] hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-4 h-4 stroke-[2]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-[#facc15] hover:text-[#facc15] hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4 stroke-[2]" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-[#facc15] hover:text-[#facc15] hover:bg-white/10 transition-colors"
              >
                {/* Custom Crisp X Icon matching circular border aesthetic */}
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:col-span-2 lg:px-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-5 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-white/80 hover:text-white hover:underline text-sm sm:text-[14.5px] transition-colors block py-0.5 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Services */}
          <div className="lg:col-span-3 lg:px-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-5 tracking-tight">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-white hover:underline text-sm sm:text-[14.5px] transition-colors block py-0.5"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Us */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-5 tracking-tight">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm sm:text-[14.5px] text-white/90">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5 stroke-[1.8]" />
                <span className="leading-snug">
                  141 Moshood Abiola Way, Lagos Mainland, Lagos
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white shrink-0 stroke-[1.8]" />
                <a
                  href="tel:+2348026668355"
                  className="hover:underline transition-colors"
                >
                  +234 802 666 8355
                </a>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-white shrink-0 mt-1 stroke-[1.8]" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="mailto:validreamsenterprise@gmail.com"
                    className="hover:underline transition-colors"
                  >
                    validreamsenterprise@gmail.com
                  </a>
                  <a
                    href="mailto:info@validreamspfmgts.com"
                    className="hover:underline transition-colors"
                  >
                    info@validreamspfmgts.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-3 pt-1">
                <Globe className="w-4 h-4 text-white shrink-0 stroke-[1.8]" />
                <a
                  href="https://www.validreamspfmgts.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline transition-colors"
                >
                  www.validreamspfmgts.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-14 sm:mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/75">
          <p>
            2026 Validreams Enterprise Limited. All Right Reserved.
          </p>
          <div className="flex items-center space-x-2">
            <a href="#privacy" className="hover:text-white transition-colors hover:underline">
              Privacy Policy
            </a>
            <span className="text-white/40">|</span>
            <a href="#terms" className="hover:text-white transition-colors hover:underline">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
