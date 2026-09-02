import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 bg-[#14281F] text-white flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-white/10 text-[#facc15]">
                {type === 'privacy' ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                  {type === 'privacy' ? 'Privacy Policy & NDPR Compliance' : 'Terms & Conditions of Service'}
                </h3>
                <p className="text-xs text-white/70">
                  Validreams Enterprises Limited • RC Registered Lagos, Nigeria
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-700 leading-relaxed">
            {type === 'privacy' ? (
              <>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">1. Regulatory Framework &amp; Scope</h4>
                  <p>
                    Validreams Enterprises Limited (&quot;Validreams&quot;, &quot;we&quot;, &quot;us&quot;) operates in full compliance with the Nigeria Data Protection Act (NDPA) and Nigeria Data Protection Regulation (NDPR). This policy governs the collection, processing, and safeguarding of personal and corporate data collected through our digital interfaces and on-site property management operations.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">2. Information We Collect</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Contact Information: Full names, corporate titles, telephone numbers, and email addresses.</li>
                    <li>Property &amp; Tenancy Records: Unit numbers, estate location data, service charge invoicing details, and CAFM maintenance work order logs.</li>
                    <li>Visitor &amp; Access Control Logs: Gate management records and security sign-ins captured at client estates.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">3. Purpose of Data Processing</h4>
                  <p>
                    All personal data is processed strictly for:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-2">
                    <li>Executing facility maintenance and property management agreements.</li>
                    <li>Processing service charge levies, utility billing, and audit reporting.</li>
                    <li>Emergency incident escalation and rapid engineering dispatches.</li>
                    <li>Fulfilling legal mandates under Lagos State tenancy and municipal laws.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">4. Data Security &amp; Retention</h4>
                  <p>
                    We employ industry-grade encryption, role-based access restrictions, and secure server backups. Your data is never sold, leased, or distributed to third-party marketing entities.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">1. Operating Agreement &amp; Acceptance</h4>
                  <p>
                    By engaging the facilities, property management, or advisory services of Validreams Enterprises Limited, or by accessing this portal, clients and occupants agree to be bound by standard professional service level agreements (SLAs) and these operating conditions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">2. Service Provision &amp; SLAs</h4>
                  <p>
                    All technical maintenance, MEP servicing, janitorial, and security operations are delivered in accordance with agreed Service Level Agreements. Emergency dispatch targets (30-minute rapid escalation) apply to contracted properties in Lagos.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">3. Service Charges &amp; Fiscal Fiduciary</h4>
                  <p>
                    Service charge levies are held in designated, ring-fenced operational accounts. Detailed expenditure reconciliations, utility statements, and diesel consumption audits are published on a routine schedule to estate boards and property owners.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">4. Jurisdiction &amp; Dispute Resolution</h4>
                  <p>
                    These terms are governed by the laws of the Federal Republic of Nigeria and the state regulations of Lagos State. Any disputes arising shall first be submitted to good-faith mediation prior to formal legal proceedings.
                  </p>
                </div>
              </>
            )}

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                For compliance questions or data access requests, contact our Data Protection Officer at <strong>info@validreamspfmgts.com</strong>.
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-[#1F3D2E] text-white text-xs font-semibold hover:bg-[#14281F] transition-colors cursor-pointer"
            >
              Acknowledge &amp; Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
