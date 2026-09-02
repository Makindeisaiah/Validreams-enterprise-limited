import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Building2,
  MessageSquare,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesList } from '../data/servicesData';
import Footer from './Footer';

interface ContactPageProps {
  onNavigate: (page: string, subId?: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Property Management',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const randomRef = `VD-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setReferenceCode(randomRef);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'Property Management',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* ========================================================================= */}
      {/* 1. HERO WITH BREADCRUMB */}
      {/* ========================================================================= */}
      <section
        id="contact-hero"
        className="relative w-full min-h-[380px] sm:min-h-[440px] flex flex-col justify-center overflow-hidden bg-[#14281F]"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
            alt="Validreams corporate contact and headquarters"
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
              <span className="text-[#facc15] font-medium">Contact Us</span>
            </motion.nav>

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 block"
            >
              GET IN TOUCH
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-tight"
            >
              Connect with Our Management Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal max-w-2xl"
            >
              Whether you are an estate executive committee, institutional investor, commercial landlord, or residential owner, our technical specialists are ready to discuss your asset.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CONTACT DETAILS & ENQUIRY FORM */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Authoritative Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
                HEADQUARTERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3D2E] tracking-tight mb-4">
                Validreams Enterprises Limited
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Registered in Nigeria. Providing integrated property and facilities management solutions across Lagos Mainland, Island, and the Lekki corridor.
              </p>
            </div>

            <div className="space-y-5">
              {/* Office Address */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#1F3D2E] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Corporate Office Address
                  </h3>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">
                    141 Moshood Abiola Way, Lagos Mainland, Lagos State, Nigeria
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Central mainland hub providing rapid technical dispatch to all Lagos zones.
                  </p>
                </div>
              </div>

              {/* Authoritative Telephone */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Primary Phone &amp; Emergency Dispatch
                  </h3>
                  <a
                    href="tel:+2348026868355"
                    className="text-lg font-bold text-gray-900 hover:text-[#1F3D2E] transition-colors block tracking-wide"
                  >
                    +234 802 686 8355
                  </a>
                  <p className="text-xs text-emerald-700 font-medium mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active Helpdesk &amp; Technical Line (24/7 Dispatch)
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                    <a
                      href="tel:+2348026868355"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F3D2E] text-white text-xs font-semibold hover:bg-[#152a20] transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/2348026868355?text=Hello%20Validreams%2C%20I%20would%20like%20to%20inquire%20about%20your%20property%20and%20facilities%20management%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Dual Email Addresses */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#1F3D2E] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Official Email Inquiries
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="mailto:info@validreamspfmgts.com"
                      className="text-sm font-semibold text-gray-900 hover:text-emerald-700 block transition-colors"
                    >
                      info@validreamspfmgts.com
                    </a>
                    <a
                      href="mailto:validreamsenterprise@gmail.com"
                      className="text-sm font-semibold text-gray-600 hover:text-emerald-700 block transition-colors"
                    >
                      validreamsenterprise@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Operational Hours
                  </h3>
                  <p className="text-sm font-semibold text-gray-900">
                    Monday – Friday: 8:00 AM – 5:00 PM
                  </p>
                  <p className="text-xs text-amber-800 mt-1">
                    24/7 Rapid Incident Response active 365 days for managed contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1F3D2E] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Enquiry Received Successfully
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                    Thank you for reaching out to Validreams Enterprises Limited. Our technical facilities team has registered your request under reference:
                  </p>
                  <div className="inline-block p-4 rounded-xl bg-emerald-50 border border-emerald-200 mb-8 font-mono text-sm font-bold text-[#1F3D2E]">
                    Reference ID: {referenceCode}
                  </div>
                  <div className="flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('home')}
                      className="px-6 py-2.5 rounded-lg bg-[#1F3D2E] text-white text-sm font-semibold hover:bg-[#14281F] transition-colors cursor-pointer"
                    >
                      Return to Home
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#facc15] uppercase tracking-wider block mb-1">
                      DIRECT TRANSMISSION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1F3D2E] tracking-tight">
                      Send a Management Enquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Fill out the details below. We typically respond within 2 to 4 business hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Babatunde Adeyemi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Company / Estate */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                      >
                        Company / Estate Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="e.g. Palmview Estate R/A"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="e.g. +234 802 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                    >
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="General Property & Facilities Enquiry">
                        General Property &amp; Facilities Enquiry
                      </option>
                      {servicesList.map((srv) => (
                        <option key={srv.slug} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="On-Site Property Audit Request">
                        On-Site Facility &amp; Asset Audit Request
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                    >
                      Message / Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Please share details about your property (location, unit count, existing challenges or upcoming requirements)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3D2E] focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-[#1F3D2E] hover:bg-[#152a20] text-white font-bold text-sm sm:text-base rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Transmitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Management Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    Your details are protected under Nigerian Data Protection Regulation (NDPR) and used solely for facility consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FOOTER */}
      {/* ========================================================================= */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
