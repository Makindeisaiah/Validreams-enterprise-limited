export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  shortDesc: string;
  heroLead: string;
  isSuggestedCopy?: boolean;
  image: string;
  icon: string;
  whatWeDo: {
    title: string;
    description: string;
  }[];
  keyBenefits: {
    title: string;
    description: string;
  }[];
  ourApproach: {
    step: string;
    title: string;
    description: string;
  }[];
  howWeDeliver: {
    title: string;
    description: string;
  }[];
  whyValidreams: string[];
}

export const servicesList: ServiceItem[] = [
  {
    id: 'property-rent-management',
    slug: 'property-rent-management',
    title: 'Property & Rent Management',
    shortTitle: 'Property & Rent',
    shortDesc: 'Leasing, tenant screening, automated rent collection, compliance & end-to-end tenancy administration.',
    heroLead: 'Maximizing property yields while safeguarding asset value through disciplined tenancy governance, proactive rent collection, and transparent accounting.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
    icon: 'Building2',
    whatWeDo: [
      {
        title: 'Rigorous Tenant Screening & Onboarding',
        description: 'Comprehensive financial, identity, and background vetting to ensure reliable, high-integrity occupants for your property.',
      },
      {
        title: 'Lease Agreement Preparation & Enforcement',
        description: 'Drafting compliant, enforceable lease contracts with strict covenants on maintenance, sub-letting, and usage rules.',
      },
      {
        title: 'Automated Rent Invoicing & Collections',
        description: 'Structured invoicing, electronic payment reconciliation, and prompt remittance to property owners with 0% reconciliation discrepancy.',
      },
      {
        title: 'Routine Inspections & Inventory Records',
        description: 'Scheduled quarterly and move-in/move-out digital photographic inventory documentation to protect asset condition.',
      },
      {
        title: 'Conflict Resolution & Compliance Oversight',
        description: 'Professional dispute mediation, prompt notice management, and legal liaison in strict adherence with Lagos State tenancy laws.',
      },
      {
        title: 'Service Charge Administration',
        description: 'Apportionment, billing, collection, and transparent reconciliation of communal estate service charges.',
      },
    ],
    keyBenefits: [
      {
        title: 'Consistent Cash Flow & Zero Arrears',
        description: 'Structured follow-ups and automated reminders eliminate default risk and ensure timely yield remittance.',
      },
      {
        title: 'Asset Value Preservation',
        description: 'Continuous oversight prevents premature dilapidation and maintains competitive market valuations.',
      },
      {
        title: 'Stress-Free Ownership',
        description: 'Landlords and developers receive regular financial and operational reports without dealing with tenant friction.',
      },
      {
        title: 'High Tenant Retention',
        description: 'Professional, courteous tenant support fosters long-term residencies and lowers vacancy turnover costs.',
      },
    ],
    ourApproach: [
      {
        step: '01',
        title: 'Asset Audit & Market Valuation',
        description: 'We evaluate property condition, market rental value, and establish optimal leasing terms.',
      },
      {
        step: '02',
        title: 'Vetted Placement',
        description: 'Multi-stage tenant verification ensures only qualified occupants enter the premises.',
      },
      {
        step: '03',
        title: 'Lifecycle Tenancy Governance',
        description: 'Continuous rent monitoring, routine inspections, and rapid response to maintenance requests.',
      },
      {
        step: '04',
        title: 'Transparent Reporting & Reconciliation',
        description: 'Monthly and quarterly financial statements delivered directly to asset owners.',
      },
    ],
    howWeDeliver: [
      {
        title: 'Digital Tenancy Portal',
        description: 'Tenants access payment records, submit maintenance work orders, and receive official notices seamlessly.',
      },
      {
        title: 'Strict SLA Response Metrics',
        description: 'Routine tenant queries responded to within 4 hours; urgent maintenance dispatched within 60 minutes.',
      },
      {
        title: 'Escrow Account Discipline',
        description: 'Strict segregation of rent, security deposits, and maintenance funds for total fiduciary security.',
      },
    ],
    whyValidreams: [
      'Proven track record across Lagos residential estates and commercial assets',
      'Zero-tolerance policy on rent arrears and unauthorized property modifications',
      'Full legal compliance with Lagos State Real Estate Regulatory Authority (LASRERA)',
      'Direct owner access to monthly income statements and operational audits',
    ],
  },
  {
    id: 'technical-maintenance',
    slug: 'technical-maintenance',
    title: 'Technical & Maintenance Services',
    shortTitle: 'Technical & Maintenance',
    shortDesc: 'Preventative and corrective engineering for electrical, HVAC, plumbing, generator & fire protection systems.',
    heroLead: 'Delivering proactive engineering maintenance that prevents critical failures, minimizes downtime, and extends equipment operational lifespan.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    icon: 'Settings',
    whatWeDo: [
      {
        title: 'Power Generation & Distribution Systems',
        description: 'Preventative servicing, load balancing, diesel fuel quality checks, and synchronized automatic transfer switches (ATS).',
      },
      {
        title: 'HVAC & Climate Control Engineering',
        description: 'Routine coil servicing, refrigerant monitoring, thermostat calibration, and indoor air quality maintenance.',
      },
      {
        title: 'Plumbing & Water Treatment Plants (WTP)',
        description: 'Borehole servicing, water filtration analysis, booster pump testing, sewage evacuation, and leak detection.',
      },
      {
        title: 'Fire Prevention & Life Safety Infrastructure',
        description: 'Quarterly maintenance of smoke detectors, fire alarm control panels, hydrants, hose reels, and portable extinguishers.',
      },
      {
        title: 'Electrical Safety Audits & Remediation',
        description: 'Thermal imaging of distribution boards, surge protection maintenance, and rewiring inspections.',
      },
      {
        title: 'Civil & Structural Maintenance',
        description: 'Roof leak remediation, crack repairs, damp treatment, and structural expansion joint integrity monitoring.',
      },
    ],
    keyBenefits: [
      {
        title: 'Zero Unplanned Downtime',
        description: 'Predictive schedules stop costly breakdowns before they disrupt daily residential or commercial operations.',
      },
      {
        title: 'Extended Capital Asset Longevity',
        description: 'Routine engineering maintenance adds years to generator, chiller, pump, and electrical infrastructure lifespans.',
      },
      {
        title: 'Lower Energy & Fuel Consumption',
        description: 'Optimal equipment tuning directly cuts diesel expenditure and utility bills by up to 20%.',
      },
      {
        title: 'Life Safety Compliance',
        description: 'Certified fire and safety readiness protects human life and complies with municipal building regulations.',
      },
    ],
    ourApproach: [
      {
        step: '01',
        title: 'Technical Asset Baseline Audit',
        description: 'Complete tagging and health evaluation of all mechanical and electrical installations.',
      },
      {
        step: '02',
        title: 'PPM Schedule Customization',
        description: 'Establishing a computerized Planned Preventative Maintenance (PPM) calendar tailored to equipment run-hours.',
      },
      {
        step: '03',
        title: '24/7 Rapid Incident Dispatch',
        description: 'Stationed technical personnel and mobile flying squads available around the clock.',
      },
      {
        step: '04',
        title: 'Quarterly Life-Cycle Audits',
        description: 'Ongoing efficiency reviews with CapEx forecasting for planned component replacements.',
      },
    ],
    howWeDeliver: [
      {
        title: 'Certified Technical Personnel',
        description: 'Licensed electrical engineers, HVAC specialists, and certified mechanics on site and on call.',
      },
      {
        title: 'Genuine OEM Spare Parts Guarantee',
        description: 'Direct procurement partnerships with reputable manufacturers avoid counterfeit component failures.',
      },
      {
        title: 'Digital Logbooks & IoT Monitoring',
        description: 'Running hours, oil pressure, and power factor logged daily for transparent diagnostic auditing.',
      },
    ],
    whyValidreams: [
      'Multi-discipline in-house engineering team minimizing costly subcontractor markups',
      'Rapid emergency response time under 30 minutes for critical power or water outages',
      'Stringent Quality Assurance protocols adhering to Nigerian and international engineering standards',
      'Complete equipment maintenance logbooks accessible to facility owners at any time',
    ],
  },
  {
    id: 'soft-services',
    slug: 'soft-services',
    title: 'Soft Services',
    shortTitle: 'Soft Services',
    shortDesc: 'Cleaning, hygiene, landscaping, waste management, pest control, concierge & hospitality services.',
    heroLead: 'Curating immaculate, healthy, and welcoming environments that elevate resident prestige and employee productivity every day.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80',
    icon: 'Sparkles',
    whatWeDo: [
      {
        title: 'Commercial & Residential Janitorial Cleaning',
        description: 'Daily sanitization of common lobbies, corridors, stairwells, glass facades, and high-touch communal surfaces.',
      },
      {
        title: 'Professional Landscaping & Grounds Maintenance',
        description: 'Lawn manicuring, ornamental horticulture, hedge trimming, seasonal planting, and automated irrigation management.',
      },
      {
        title: 'Integrated Waste Management & Recycling',
        description: 'Sorted waste collection, sanitary bin maintenance, odor-controlled refuse bays, and licensed municipal disposal.',
      },
      {
        title: 'Pest Control & Environmental Fumigation',
        description: 'Scheduled bio-friendly vector control targeting rodents, insects, and reptiles with non-hazardous formulations.',
      },
      {
        title: 'Concierge, Help Desk & Front-of-House',
        description: 'Trained, courteous reception personnel providing warm resident assistance, package logging, and guest reception.',
      },
      {
        title: 'Specialized Surface Restoration',
        description: 'Marble polishing, terrazzo rejuvenation, high-pressure interlocking paving washing, and facade cleaning.',
      },
    ],
    keyBenefits: [
      {
        title: 'Pristine First Impressions',
        description: 'Flawless aesthetic upkeep boosts the prestigious standing and perceived market value of your property.',
      },
      {
        title: 'Healthier Living & Working Spaces',
        description: 'Medical-grade sanitization protocols reduce airborne contaminants, allergens, and sick-building syndrome.',
      },
      {
        title: 'Uniform Service Quality',
        description: 'Standard Operating Procedures (SOPs) guarantee that standards never drop regardless of season.',
      },
      {
        title: 'Environmental Stewardship',
        description: 'Eco-conscious cleaning agents and water-efficient landscaping reduce ecological footprints.',
      },
    ],
    ourApproach: [
      {
        step: '01',
        title: 'Premises Zoning & Footfall Analysis',
        description: 'Mapping high-traffic zones, surface materials, and scheduling shift rotations for zero disruption.',
      },
      {
        step: '02',
        title: 'Deployment of Eco-Certified Materials',
        description: 'Utilizing commercial-grade equipment (scrubbers, pressure washers) and non-toxic chemicals.',
      },
      {
        step: '03',
        title: 'Daily Supervisor Checklists',
        description: 'Multi-point inspection checklists signed off twice daily by on-site facility supervisors.',
      },
      {
        step: '04',
        title: 'Monthly Resident Feedback Loops',
        description: 'Direct satisfaction scoring to continually tune cleanliness, landscaping, and concierge delivery.',
      },
    ],
    howWeDeliver: [
      {
        title: 'Uniformed, Vetted Staff',
        description: 'Rigorous background checks, medical clearances, and etiquette training for all hospitality personnel.',
      },
      {
        title: 'Industrial Grade Machinery',
        description: 'Modern scrubbers, polishers, and power tools maximize surface cleanliness with minimal water consumption.',
      },
      {
        title: 'Hospitality-Trained Leadership',
        description: 'Facility supervisors trained in international hospitality standards oversee all soft service delivery.',
      },
    ],
    whyValidreams: [
      'Strict quality audit protocols with instant remediation for any inspection non-conformance',
      'Use of biodegradable, hospital-grade cleaning and fumigation chemicals',
      'Consistent, presentable personnel with professional customer service orientation',
      'Seamless coordination between cleaning teams and technical maintenance staff',
    ],
  },
  {
    id: 'security-management',
    slug: 'security-management',
    title: 'Security Management Services',
    shortTitle: 'Security Management',
    shortDesc: '24/7 physical guarding, biometric access control, CCTV surveillance, visitor screening & emergency protocols.',
    heroLead: 'Securing assets, residents, and visitors through integrated intelligence, trained personnel, and modern surveillance systems.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80',
    icon: 'ShieldCheck',
    whatWeDo: [
      {
        title: '24/7 Manned Static & Perimeter Guarding',
        description: 'Vetted, disciplined security personnel stationed at gates, perimeters, and sensitive building entry points.',
      },
      {
        title: 'Electronic Access Control & Visitor Screening',
        description: 'Digital visitor registration, license plate recognition, biometric turnstiles, and automated gate barriers.',
      },
      {
        title: 'High-Definition CCTV Surveillance & Monitoring',
        description: 'Centralized control room monitoring, blind-spot elimination, night-vision perimeter cameras, and cloud-backed footage archival.',
      },
      {
        title: 'Emergency Response & Evacuation Drill Planning',
        description: 'Structured fire, medical, and intruder response protocols with regular drills conducted for building occupants.',
      },
      {
        title: 'Patrol Management Systems',
        description: 'RFID wand and GPS-tracked guard tours ensuring consistent perimeter patrols throughout day and night shifts.',
      },
      {
        title: 'Law Enforcement & Community Liaison',
        description: 'Close coordination with local police divisions, emergency services, and community vigilante networks.',
      },
    ],
    keyBenefits: [
      {
        title: 'Peace of Mind for Residents & Tenants',
        description: 'Visible, dependable security presence deters unauthorized entry and creates a safe sanctuary.',
      },
      {
        title: 'Zero Unauthorized Incursions',
        description: 'Rigid access verification eliminates trespassers, loitering, and illicit activity across the estate.',
      },
      {
        title: 'Instant Crisis Escalation',
        description: 'Trained quick-response protocols contain incidents within moments before danger can spread.',
      },
      {
        title: 'Uncompromised Audit Trails',
        description: 'Digital vehicle, visitor, and camera logs provide irrefutable evidence in the event of any query.',
      },
    ],
    ourApproach: [
      {
        step: '01',
        title: 'Security Vulnerability Assessment',
        description: 'Physical perimeter audits, lighting reviews, and access point threat modeling.',
      },
      {
        step: '02',
        title: 'Layered Defense Architecture',
        description: 'Combining perimeter barriers, electronic surveillance, and trained physical sentries.',
      },
      {
        step: '03',
        title: 'Active Surveillance & Guard Verification',
        description: 'Strict hourly patrol logging verified by electronic check-in points.',
      },
      {
        step: '04',
        title: 'Intelligence Liaison',
        description: 'Continuous threat intelligence sharing with regional security authorities.',
      },
    ],
    howWeDeliver: [
      {
        title: 'Pre-Screened Security Operatives',
        description: 'Stringent criminal background checks, psychological evaluations, and continuous martial training.',
      },
      {
        title: 'Integrated Command Console',
        description: 'Unified dashboard combining camera feeds, barrier sensors, and alarm indicators.',
      },
      {
        title: 'Incident Logging Protocol',
        description: 'Immediate electronic incident filing sent directly to the asset manager within 30 minutes.',
      },
    ],
    whyValidreams: [
      'Comprehensive security integration combining human vigilance with modern digital tech',
      'Disciplined, customer-courteous security staff that respect residents while enforcing security rules',
      'Direct emergency hotline link with rapid tactical support partnerships',
      'Rigid audit records maintained for all visitors, deliveries, and contractors',
    ],
  },
  {
    id: 'administrative-financial-management',
    slug: 'administrative-financial-management',
    title: 'Administrative & Financial Management',
    shortTitle: 'Admin & Financial',
    shortDesc: 'Transparent service charge budgeting, utility management, vendor procurement, compliance & reporting.',
    heroLead: 'Protecting your bottom line through meticulous financial governance, prudent service charge accounting, and transparent reporting.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    icon: 'BookOpen',
    whatWeDo: [
      {
        title: 'Service Charge Budgeting & Apportionment',
        description: 'Formulaic, transparent operational budgeting accounting for inflation, fuel hedging, and fair tenant sharing.',
      },
      {
        title: 'Utility Consumption Auditing & Billing',
        description: 'Metering, automated sub-billing, and reconciliation for electricity (EKEDC/IKEDC), generator diesel, and water.',
      },
      {
        title: 'Competitive Vendor Procurement',
        description: 'Tendering processes, vendor vetting, negotiation of bulk rates, and rigorous service contract management.',
      },
      {
        title: 'Comprehensive Financial Audits & Statements',
        description: 'Monthly cash-flow statements, balance sheets, variance analysis, and annual audit preparation.',
      },
      {
        title: 'Resident Communication & Community Meetings',
        description: 'Structured AGMs, financial disclosure briefings, circulars, and quarterly stakeholder townhalls.',
      },
      {
        title: 'Statutory Compliance & Permitting',
        description: 'Management of municipal levies, land use charges, environmental protection compliance, and insurance policies.',
      },
    ],
    keyBenefits: [
      {
        title: '100% Financial Transparency',
        description: 'Every naira of collected service charge is documented with invoices, purchase orders, and bank records.',
      },
      {
        title: 'Reduced Operational Overheads',
        description: 'Bulk procurement and vendor renegotiation typically reduce estate operating costs by 12–18%.',
      },
      {
        title: 'Healthy Sinking Fund Reserves',
        description: 'Structured long-term capital replacement funds prevent sudden emergency levies on property owners.',
      },
      {
        title: 'Harmonious Community Relations',
        description: 'Transparent disclosure eliminates tenant suspicion and fosters a cohesive, cooperative community.',
      },
    ],
    ourApproach: [
      {
        step: '01',
        title: 'Zero-Base Budget Formulation',
        description: 'Building operational budgets from line-item verified historical consumption, not arbitrary estimates.',
      },
      {
        step: '02',
        title: 'Separated Escrow Bank Accounts',
        description: 'Dedicated estate accounts where owners have view-only access to balance statements.',
      },
      {
        step: '03',
        title: 'Three-Quote Vendor Rule',
        description: 'Major procurement contracts require at least three independent bids to guarantee value.',
      },
      {
        step: '04',
        title: 'Monthly Financial Disclosures',
        description: 'Detailed revenue, expenditure, and variance reports issued to stakeholders without delay.',
      },
    ],
    howWeDeliver: [
      {
        title: 'Chartered Accounting Standards',
        description: 'Financial controls managed by certified financial managers in accordance with IFRS standards.',
      },
      {
        title: 'Digital Invoicing Engine',
        description: 'Automatic email and SMS alerts for upcoming dues, payment receipts, and statement downloads.',
      },
      {
        title: 'Rigorous Sinking Fund Governance',
        description: 'Ring-fenced reserves specifically earmarked for future roof, generator, or elevator overhauls.',
      },
    ],
    whyValidreams: [
      'Uncompromising fiscal integrity with zero hidden management margins or kickbacks',
      'Proven track record of optimizing estate utility expenditures through smart metering',
      'Timely, audited financial reporting delivered on the 5th working day of each new month',
      'Professional dispute-free service charge reconciliation recognized by property owners',
    ],
  },
  {
    id: 'cafm',
    slug: 'cafm',
    title: 'Computer-Aided Facility Management (CAFM)',
    shortTitle: 'CAFM Solutions',
    shortDesc: 'Digital ticketing, predictive maintenance scheduling, asset tracking, SLA monitoring & executive analytics.',
    heroLead: 'Empowering smart property operations through cutting-edge CAFM technology that turns facility data into actionable asset intelligence.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
    icon: 'MonitorCheck',
    whatWeDo: [
      {
        title: 'Digital Resident Request & Helpdesk Portal',
        description: 'Mobile and web app enabling residents to log maintenance requests with photos, tracking status in real time.',
      },
      {
        title: 'Automated Planned Maintenance (PPM) Triggers',
        description: 'Algorithmic scheduling of generator services, elevator audits, and pump calibrations based on run-hours.',
      },
      {
        title: 'QR Code Asset Tagging & History Tracking',
        description: 'Every motor, pump, panel, and appliance receives a scannable QR tag linking to its complete repair history.',
      },
      {
        title: 'Real-Time Vendor SLA Compliance Tracking',
        description: 'Measuring contractor arrival time, mean-time-to-repair (MTTR), and resident satisfaction ratings.',
      },
      {
        title: 'Inventory & Spare Parts Management',
        description: 'Real-time tracking of critical spare parts in stock with automated reorder notifications.',
      },
      {
        title: 'Executive Analytics & Yield Dashboards',
        description: 'Live performance dashboards displaying uptime percentages, energy usage, and cost per square meter.',
      },
    ],
    keyBenefits: [
      {
        title: 'Total Operational Visibility',
        description: 'Property owners see the status of every repair and facility system in real time from any device.',
      },
      {
        title: 'Rapid Issue Resolution',
        description: 'Automated technician dispatch cuts repair turnaround times by up to 50% compared to paper workflows.',
      },
      {
        title: 'Actionable Predictive Insights',
        description: 'Historical performance data reveals recurring faults before they turn into catastrophic failures.',
      },
      {
        title: 'Superior Tenant Satisfaction',
        description: 'Residents appreciate live progress notifications and transparent communication on their requests.',
      },
    ],
    ourApproach: [
      {
        step: '01',
        title: 'Facility Digital Twin Onboarding',
        description: 'Cataloging and digitalizing every equipment piece, floorplan, and service access point.',
      },
      {
        step: '02',
        title: 'Asset QR Tagging & Calibration',
        description: 'Physical deployment of weather-resistant QR codes on all mechanical and electrical machinery.',
      },
      {
        step: '03',
        title: 'Resident & Staff App Deployment',
        description: 'User-friendly onboarding sessions and direct digital portal access for all estate occupants.',
      },
      {
        step: '04',
        title: 'Real-Time SLA Governance',
        description: 'Automated escalation of any ticket that exceeds the stipulated SLA resolution window.',
      },
    ],
    howWeDeliver: [
      {
        title: 'Cloud-Based Scalable Architecture',
        description: '99.9% uptime cloud system accessible securely via iOS, Android, and web browsers.',
      },
      {
        title: 'SMS & Email Notification Hooks',
        description: 'Instant status alerts sent to residents and facility engineers when work orders progress.',
      },
      {
        title: 'Granular Access Permission Tiers',
        description: 'Distinct security roles for landlords, tenants, facility managers, and external vendors.',
      },
    ],
    whyValidreams: [
      'Pioneers in bringing modern CAFM technology to Lagos residential and commercial assets',
      'No more paper logs or forgotten repair requests — 100% digital accountability',
      'Data-driven CapEx forecasts based on actual asset run-hours and maintenance expenditure',
      'Measurable SLA performance tracking that holds all contractors accountable',
    ],
  },
  {
    id: 'consulting',
    slug: 'consulting',
    title: 'Facilities & Real Estate Consulting',
    shortTitle: 'Consulting Services',
    shortDesc: 'Operational feasibility, design-for-maintenance advisory, service charge modeling & life-cycle auditing.',
    heroLead: 'Strategic advisory that bridges the gap between architectural vision, construction delivery, and long-term operational efficiency.',
    isSuggestedCopy: true,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    icon: 'Lightbulb',
    whatWeDo: [
      {
        title: 'Design-for-Maintenance Advisory [SUGGESTED COPY]',
        description: 'Reviewing architectural and MEP drawings pre-construction to eliminate costly operational bottlenecks and access issues.',
      },
      {
        title: 'Service Charge Modeling & Forecasting [SUGGESTED COPY]',
        description: 'Designing realistic, defensible service charge models for upcoming developments to attract early buyers and tenants.',
      },
      {
        title: 'Facilities Operational Audits [SUGGESTED COPY]',
        description: 'Evaluating current facility performance, identifying energy leaks, vendor overcharges, and operational inefficiencies.',
      },
      {
        title: 'Handover & Defects Liability Management [SUGGESTED COPY]',
        description: 'Snagging audits and representing client interests during project transition from main contractor to facility management.',
      },
      {
        title: 'Energy & Sustainability Strategies [SUGGESTED COPY]',
        description: 'Assessing solar hybrid integration, energy storage viability, and waste-reduction frameworks for commercial assets.',
      },
      {
        title: 'Procurement & Vendor Benchmarking [SUGGESTED COPY]',
        description: 'Independent evaluation of external facility contracts, service levels, and cost-competitiveness.',
      },
    ],
    keyBenefits: [
      {
        title: 'Lower Lifetime Operating Expenses',
        description: 'Preventing design mistakes before concrete is poured saves millions in remedial maintenance down the road.',
      },
      {
        title: 'Smooth Developer-to-Resident Handover',
        description: 'Thorough snagging and clear rules eliminate contentious disputes during early estate occupation.',
      },
      {
        title: 'Market-Leading Green Credentials',
        description: 'Practical sustainability roadmaps attract high-tier institutional and multinational tenants.',
      },
      {
        title: 'Data-Backed Strategic Decisions',
        description: 'Independent audits provide clear ROI calculations for capital improvement decisions.',
      },
    ],
    ourApproach: [
      {
        step: '01',
        title: 'Stakeholder Diagnostic Review',
        description: 'Engaging developer objectives, tenant expectations, and building specifications.',
      },
      {
        step: '02',
        title: 'Technical & Financial Modeling',
        description: 'Rigorous simulation of operational costs, utility demand, and lifecycle maintenance curves.',
      },
      {
        step: '03',
        title: 'Actionable Implementation Blueprint',
        description: 'Delivering clear, phased recommendations with prioritized timelines and cost estimates.',
      },
      {
        step: '04',
        title: 'Executive Briefing & Handover',
        description: 'Guiding corporate leadership through execution and setting up internal governance checks.',
      },
    ],
    howWeDeliver: [
      {
        title: 'Senior Facility Consultants',
        description: 'Seasoned professionals with extensive background across Nigerian and international real estate.',
      },
      {
        title: 'Comprehensive Feasibility Reports',
        description: 'Well-structured, boardroom-ready documentation with financial models and technical appendices.',
      },
      {
        title: 'Unbiased Fiduciary Focus',
        description: 'Independent advice completely aligned with the asset owner’s long-term financial yield.',
      },
    ],
    whyValidreams: [
      'Deep practical knowledge gained from real, day-to-day facilities management in Lagos',
      'Strategic insights that prevent costly architectural and MEP maintenance blunders',
      'Proven methodologies for service charge structuring that balance affordability and quality',
      'Rigorous snagging and handover governance safeguarding developer reputations',
    ],
  },
  {
    id: 'real-estate-services',
    slug: 'real-estate-services',
    title: 'Real Estate & Advisory Services',
    shortTitle: 'Real Estate Services',
    shortDesc: 'Commercial & residential leasing advisory, asset repositioning, tenant representation & portfolio strategy.',
    heroLead: 'Delivering strategic real estate advisory that unlocks hidden equity, accelerates absorption, and maximizes long-term capital appreciation.',
    isSuggestedCopy: true,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    icon: 'Award',
    whatWeDo: [
      {
        title: 'Commercial & Prime Residential Leasing [SUGGESTED COPY]',
        description: 'Targeted marketing, tenant qualification, and negotiation for high-demand residential estates and commercial buildings.',
      },
      {
        title: 'Asset Repositioning & Value Optimization [SUGGESTED COPY]',
        description: 'Advising on cosmetic, functional, and technological upgrades that immediately boost rental income and occupancy rates.',
      },
      {
        title: 'Tenant Representation & Space Planning [SUGGESTED COPY]',
        description: 'Assisting corporate clients and high-net-worth individuals in sourcing, evaluating, and securing ideal commercial space.',
      },
      {
        title: 'Portfolio Review & Yield Strategy [SUGGESTED COPY]',
        description: 'Evaluating real estate portfolios across Lagos to optimize yields, divest non-performing assets, and reallocate capital.',
      },
      {
        title: 'Operational Due Diligence [SUGGESTED COPY]',
        description: 'Conducting physical, technical, and regulatory due diligence for property acquisitions and joint-venture developments.',
      },
      {
        title: 'Developer Advisory & Product Fit [SUGGESTED COPY]',
        description: 'Consulting developers on unit mix, amenity selection, and pricing strategies that match real market demand.',
      },
    ],
    keyBenefits: [
      {
        title: 'Accelerated Occupancy & Minimal Vacancy',
        description: 'Targeted market positioning and high-quality tenant networks fill available spaces quickly.',
      },
      {
        title: 'Premium Rental Yields',
        description: 'Strategic repositioning justifies higher rental rates without compromising long-term tenant stability.',
      },
      {
        title: 'Protection from Bad Real Estate Deals',
        description: 'Rigorous technical and legal due diligence uncovers hidden property defects and title risks early.',
      },
      {
        title: 'Clear Portfolio Growth Roadmap',
        description: 'Data-driven yield strategies guide smart reinvestment and sustainable wealth generation.',
      },
    ],
    ourApproach: [
      {
        step: '01',
        title: 'Market & Demographic Mapping',
        description: 'Analyzing micro-market absorption rates, rental benchmarks, and competing developments in Lagos.',
      },
      {
        step: '02',
        title: 'Targeted Value Creation Strategy',
        description: 'Formulating specific asset upgrade plans and competitive pricing models to capture ideal tenants.',
      },
      {
        step: '03',
        title: 'Structured Execution & Negotiation',
        description: 'Managing tenant negotiations, lease structuring, and closing with strict adherence to legal standards.',
      },
      {
        step: '04',
        title: 'Ongoing Yield Monitoring',
        description: 'Reviewing performance annually to capitalize on market appreciation and rent reviews.',
      },
    ],
    howWeDeliver: [
      {
        title: 'Active High-Net-Worth Network',
        description: 'Direct relationships with corporate tenants, expatriate networks, and established property investors.',
      },
      {
        title: 'Holistic Management Alignment',
        description: 'Leasing strategies supported by our in-house facilities management team for flawless tenant experience.',
      },
      {
        title: 'Strict Regulatory Compliance',
        description: 'Full adherence to LASRERA and Lagos State tenancy regulations to guarantee transaction security.',
      },
    ],
    whyValidreams: [
      'Unique synergy between real estate advisory and hands-on facility management',
      'Realistic, unvarnished market advice that protects investor capital',
      'End-to-end client support from acquisition and leasing to day-to-day property governance',
      'Dedicated commitment to maximizing asset value and tenant satisfaction across Lagos',
    ],
  },
];
