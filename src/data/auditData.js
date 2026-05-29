export const navItems = [
  ["executive-summary", "Executive Summary"],
  ["strategic-diagnosis", "Strategic Diagnosis"],
  ["final-scorecard", "Scorecard"],
  ["top-findings", "Top 10 Findings"],
  ["business-model", "Business Model"],
  ["user-journey", "Journey Audit"],
  ["trust-credibility", "Trust Matrix"],
  ["premium-positioning", "Premium Positioning"],
  ["vehicle-listing", "Vehicle Quality"],
  ["seo-local", "SEO & Local"],
  ["technical-health", "Technical Health"],
  ["competitors", "Competitors"],
  ["roadmap", "Roadmap"],
  ["site-structure", "Website Structure"],
  ["homepage-message", "Homepage Message"],
  ["vehicle-template", "Vehicle Page"],
  ["action-plan", "Action Plan"],
  ["final-recommendation", "Recommendation"],
];

export const navGroups = [
  {
    title: "Executive Context",
    items: [
      ["executive-summary", "Executive Summary"],
      ["strategic-diagnosis", "Strategic Diagnosis"],
      ["final-scorecard", "Scorecard"],
    ],
  },
  {
    title: "Trust & Conversion",
    items: [
      ["top-findings", "Top 10 Findings"],
      ["business-model", "Business Model"],
      ["user-journey", "Journey Audit"],
      ["trust-credibility", "Trust Matrix"],
    ],
  },
  {
    title: "Vehicle & Brand",
    items: [
      ["premium-positioning", "Premium Positioning"],
      ["vehicle-listing", "Vehicle Quality"],
      ["vehicle-template", "Vehicle Page"],
    ],
  },
  {
    title: "Search Health",
    items: [
      ["seo-local", "SEO & Local"],
      ["technical-health", "Technical Health"],
    ],
  },
  {
    title: "Market & Structure",
    items: [
      ["competitors", "Competitors"],
      ["roadmap", "Roadmap"],
      ["site-structure", "Website Structure"],
      ["homepage-message", "Homepage Message"],
    ],
  },
  {
    title: "Priorities",
    items: [
      ["action-plan", "Action Plan"],
      ["final-recommendation", "Recommendation"],
    ],
  },
];

export const positiveAssets = [
  "Visible Limassol address and contact points",
  "Named team and listing-level contacts",
  "Social channels and Bazaraki presence",
  "Premium-looking vehicle images in some listings",
  "Fresh Cyprus automotive content",
  "Listing actions such as Call, Write, and Sign up for viewing",
];

export const executiveRisks = [
  "Unclear distinction between in-stock, in-Cyprus, in-transit, sourceable, and partner-listed vehicles",
  "Real-estate portal language appears inside the automotive experience",
  "NAP and phone consistency need tightening",
  "Registration prompts can add browsing friction before trust is established",
  "Public trust architecture needs stronger inspection, warranty, payment, source, and handover clarity",
  "Technical SEO risk from indexed parameter URLs, print views, AMP variants, and pagination/filter pages",
];

export const topFindings = [
  {
    number: "01",
    title: "Business model is implied, not explained.",
    impact:
      "Buyers cannot clearly tell what is physically in Cyprus, what is sourced to order, and what DOMCar itself owns.",
    theme: "Clarity gap",
  },
  {
    number: "02",
    title: "Real-estate portal language leaks into the auto journey.",
    impact:
      "Terms such as “Add property”, “private projects”, or “Dom Real Estate” weaken automotive authority and premium trust.",
    theme: "Brand consistency issue",
  },
  {
    number: "03",
    title: "NAP and contact consistency need tightening.",
    impact:
      "Different phone numbers across public surfaces can reduce trust and local SEO consistency unless clearly explained.",
    theme: "Local trust",
  },
  {
    number: "04",
    title: "Listing pages already contain useful sales CTAs.",
    impact:
      "Named agents, Call, Write, and viewing CTAs are a real strength and should be expanded.",
    theme: "Underused asset",
  },
  {
    number: "05",
    title: "Registration prompts create unnecessary friction.",
    impact:
      "First-time buyers should not feel gated before they trust the business.",
    theme: "Conversion friction",
  },
  {
    number: "06",
    title: "Generic SEO visibility appears weaker than competitors.",
    impact:
      "Marketplaces and clearer competitors dominate many broad automotive searches.",
    theme: "SEO opportunity",
  },
  {
    number: "07",
    title: "Index governance needs attention.",
    impact:
      "Indexed parameter pages, print pages, AMP variants, and low-value URLs can dilute SEO quality.",
    theme: "Technical SEO risk",
  },
  {
    number: "08",
    title: "Visual vehicle presentation is a strong asset.",
    impact:
      "Premium-looking vehicle images give DOMCar a useful base to build from.",
    theme: "Premium asset",
  },
  {
    number: "09",
    title: "Social presence exists, but proof depth needs strengthening.",
    impact:
      "For high-value car purchases, likes and posts are not enough. Reviews, handovers, and buyer stories matter.",
    theme: "Buyer confidence",
  },
  {
    number: "10",
    title: "The biggest opportunity is trust architecture.",
    impact:
      "DOMCar needs a clearer system for explaining inventory status, sourcing, inspection, warranty, payment safety, and handover.",
    theme: "Commercial readiness",
  },
];

export const scorecardItems = [
  {
    area: "Business clarity",
    score: 4,
    reason:
      "DOMCar clearly signals stock, catalogue and sourcing activity, but users still have to infer the business model rather than receiving a clear explanation.",
  },
  {
    area: "UX",
    score: 5,
    reason:
      "The site has useful listing-level actions and broad content, but the user journey is cluttered by portal language, account prompts, and unclear next steps.",
  },
  {
    area: "Conversion",
    score: 4,
    reason:
      "Vehicle pages can generate enquiries, but the top of the funnel does not build enough certainty before asking the user to contact.",
  },
  {
    area: "Trust",
    score: 3,
    reason:
      "The address, contacts, and team signals are useful, but buyer protection, inspection, source clarity, company details, and transaction reassurance need stronger presentation.",
  },
  {
    area: "Premium feel",
    score: 5,
    reason:
      "Vehicle imagery can feel premium, but the surrounding copy, templates, and brand architecture reduce the luxury perception.",
  },
  {
    area: "Listing quality",
    score: 6,
    reason:
      "Listings appear to contain useful vehicle information and contacts, but need standardised trust blocks for source, status, inspection, history, price inclusions, and availability.",
  },
  {
    area: "SEO",
    score: 3,
    reason:
      "The site has indexable inventory and content breadth, but broad organic visibility appears limited and index governance needs work.",
  },
  {
    area: "Local SEO",
    score: 3,
    reason:
      "DOMCar has a visible Limassol footprint and social citations, but review depth, Google Business Profile status, and phone consistency need strengthening.",
  },
  {
    area: "Technical health",
    score: 3,
    reason:
      "Indexed parameter URLs, print views, pagination/filter pages, AMP variants, and routing inconsistencies are SEO and trust risks.",
  },
  {
    area: "Social proof",
    score: 4,
    reason:
      "Facebook, Instagram, and Bazaraki presence exist, but high-ticket purchases require deeper public proof such as reviews, handovers, and case studies.",
  },
  {
    area: "Overall commercial readiness",
    score: 4,
    reason:
      "DOMCar has enough assets to become credible quickly, but clarity, trust, SEO governance, and conversion structure need substantial improvement.",
  },
];

export const modelSignals = [
  "Cars in stock",
  "Cars available in Cyprus",
  "Motorcycles / secondary catalogue category",
  "Source-to-order / import support",
  "Possible partner or marketplace-style inventory",
  "Wider DOM ecosystem connection",
];

export const statusLabels = [
  "In stock now",
  "In Cyprus now",
  "In transit",
  "Source to order",
  "Partner listing",
  "Reserved",
  "Sold",
];

export const journeyRows = [
  {
    stage: "First visit / homepage",
    wants: "What exactly does DOMCar do and why should I trust them?",
    issue: "Core offer is mixed with portal/UI noise.",
    recommendation:
      "Rewrite hero, navigation and homepage around stock, sourcing, process, and trust.",
  },
  {
    stage: "Catalogue / filter pages",
    wants: "Can I find a relevant car quickly?",
    issue: "Inventory appears broad, but status is not clear enough.",
    recommendation: "Add status-led filters before make/model filters.",
  },
  {
    stage: "Vehicle detail page",
    wants: "Is this car real, available, inspected, and worth contacting DOMCar about?",
    issue:
      "Specs and contacts are useful, but source/history/inspection clarity is not standardised.",
    recommendation: "Add a fixed trust block to every vehicle page.",
  },
  {
    stage: "Contact / company pages",
    wants: "Who am I dealing with?",
    issue:
      "Contact information exists, but automotive trust positioning should be stronger.",
    recommendation:
      "Rebuild About and Contact around sales advisors, sourcing process, delivery support, and buyer reassurance.",
  },
  {
    stage: "Language/account layer",
    wants: "Can I browse without friction?",
    issue: "Registration prompts may appear too early.",
    recommendation: "Reduce gating before enquiry intent is established.",
  },
];

export const trustMatrix = [
  ["Company identity", "Partial", "Company signals exist, but registration and operating role should be clearer."],
  ["Address", "Visible", "Limassol address is a useful trust anchor."],
  ["Team", "Visible", "Named people and listing contacts are a positive sales asset."],
  ["Reviews", "Needs strengthening", "Public proof depth should better match the transaction value."],
  ["Google Business Profile", "Not verified", "Not verified in the current audit."],
  ["Inspection process", "Needs strengthening", "Create a standard vehicle inspection explanation and checklist."],
  ["Vehicle history", "Needs strengthening", "Explain history, VIN, auction sheet, dealer history, and service record availability."],
  ["Warranty", "Partial", "Some listing-level warranty signals may exist, but the policy should be standardised."],
  ["Payment safety", "Not verified", "Not verified in the current audit."],
  ["Reservation/refund policy", "Not verified", "Not verified in the current audit."],
  ["Delivery/import process", "Partial", "Delivery and sourcing are signalled, but the buyer process needs a step-by-step page."],
  ["Partner/source clarity", "Needs strengthening", "Each vehicle should state whether it is DOMCar stock, partner stock, external source, or auction-sourced."],
  ["Handover proof", "Needs strengthening", "Add buyer stories, handover examples, and case studies where permission exists."],
];

export const trustAdditions = [
  "Trust & Safety page",
  "Source/status labels",
  "Inspection checklist",
  "Vehicle history explanation",
  "Reservation process",
  "Payment safety process",
  "Warranty explanation",
  "Import timeline",
  "Handover examples",
  "Review/testimonial system",
  "Google Business Profile strengthening",
];

export const premiumImprovements = [
  "Remove real-estate wording from automotive paths",
  "Unify automotive navigation",
  "Improve typography and spacing",
  "Create luxury-grade vehicle page templates",
  "Add stronger trust proof",
  "Standardise image galleries",
  "Present advisors professionally",
  "Replace generic UI copy with automotive-specific copy",
];

export const vehicleTemplateBlocks = [
  {
    title: "Vehicle title",
    detail:
      "Make, model, variant, registration date, year, mileage, fuel, and transmission.",
  },
  {
    title: "Price block",
    detail: "Exact price and what it includes.",
  },
  {
    title: "Availability badge",
    detail: "In Cyprus now / In transit / Source to order / Reserved / Sold.",
  },
  {
    title: "Source badge",
    detail: "DOMCar stock / Partner stock / External source / Auction-sourced.",
  },
  {
    title: "Photo gallery",
    detail:
      "20-30 images for premium cars: front, rear, side angles, interior, dashboard, seats, wheels, tyres, boot, engine bay, odometer, service records, keys, and imperfections.",
  },
  {
    title: "Trust badges",
    detail:
      "Inspection completed, mileage verified, service history available, warranty status, and finance available if true.",
  },
  {
    title: "Inspection & history section",
    detail:
      "What was checked, what documents exist, and whether VIN check, auction sheet, or dealer history is available.",
  },
  {
    title: "Commercial terms",
    detail:
      "Reservation amount, refund rules, what price includes, and delivery/handover timeline.",
  },
  {
    title: "Assigned advisor",
    detail:
      "Name, role, phone, email, and WhatsApp/Telegram only if actively used.",
  },
  {
    title: "Primary CTAs",
    detail:
      "Call advisor, Message advisor, Book viewing, and Request full history pack.",
  },
  {
    title: "Similar vehicles",
    detail: "Recommended alternatives.",
  },
  {
    title: "FAQ",
    detail:
      "Is it on the island? Has it been inspected? What is included in the price? Can I reserve it? Can DOMCar deliver to another city?",
  },
];

export const technicalIssues = [
  "Indexed parameter/spam-style URLs can dilute brand quality in search.",
  "Print pages should not compete with main vehicle pages.",
  "AMP variants should be controlled if not strategically needed.",
  "Pagination and filter pages need indexation rules.",
  "Crawler/rendering inconsistencies need investigation.",
  "Canonical tags, hreflang, schema, robots.txt and sitemap setup should be audited directly.",
  "Phone number consistency matters for local SEO.",
  "“Dom Real Estate” wording should not appear on DOMCar-indexed templates.",
];

export const technicalFixes = [
  "Noindex or block low-value parameter URLs",
  "Canonicalize print pages to main vehicle pages",
  "Noindex print pages",
  "Review AMP usage",
  "Clean paginated/filter indexation strategy",
  "Audit robots.txt and XML sitemap",
  "Implement Organization, LocalBusiness, AutoDealer, Vehicle, Product, Offer, BreadcrumbList, and FAQPage schema",
  "Add hreflang for English/Russian pages if multilingual pages are active",
  "Fix indexed template titles that reference real estate",
  "Run a full crawl with Screaming Frog, Sitebulb, or equivalent",
];

export const competitors = [
  {
    name: "Bazaraki Motors",
    type: "Marketplace",
    strength: "Large inventory and generic search visibility",
    lesson:
      "DOMCar should not try to beat marketplaces only on volume. It should compete on trust, sourcing support, and premium buyer guidance.",
  },
  {
    name: "E-Cars Cyprus",
    type: "Premium multi-brand dealer",
    strength: "Showroom credibility, premium positioning, visible contact structure",
    lesson:
      "DOMCar needs stronger premium dealership-style trust presentation.",
  },
  {
    name: "DriveClick.cy",
    type: "Import / sourcing specialist",
    strength:
      "Clear UK/Japan sourcing process, end-to-end delivery, visible communication channels",
    lesson:
      "DOMCar should make its sourcing process as clear and step-based.",
  },
  {
    name: "Democars",
    type: "Used-car dealer",
    strength:
      "Clear reassurance language around checked/approved/guaranteed cars, warranty, test drives, delivery",
    lesson: "Package buyer reassurance directly into the offer.",
  },
  {
    name: "Andys Motors",
    type: "Established Limassol dealer",
    strength: "Longevity, local credibility, visible operational details",
    lesson:
      "DOMCar should strengthen local proof and operational identity.",
  },
  {
    name: "Protocars",
    type: "Premium sales/import operator",
    strength:
      "Clear import and ready-on-island positioning, FAQ, serviced/registered status",
    lesson:
      "Clarify exactly which cars are ready, which are imported, and what has already been handled.",
  },
];

export const roadmap = [
  {
    horizon: "Fast wins",
    timing: "1-7 days",
    items: [
      "Rewrite homepage hero and navigation",
      "Remove real-estate wording",
      "Unify contact/phone information",
      "Add clear CTAs",
      "Reduce early registration prompts",
      "Add temporary trust block to vehicle pages",
      "Create “How DOMCar works” section",
    ],
  },
  {
    horizon: "Medium-term",
    timing: "2-6 weeks",
    items: [
      "Rebuild vehicle page template",
      "Create Trust & Safety page",
      "Build Source a Car landing page and form",
      "Strengthen Google Business Profile and review acquisition",
      "Add review / handover / case study content",
      "Clean indexed technical issues",
      "Rewrite English/Russian commercial copy",
    ],
  },
  {
    horizon: "Strategic",
    timing: "2-3 months",
    items: [
      "Create local SEO landing pages",
      "Implement structured data",
      "Build import-cost / sourcing tools",
      "Create CRM follow-up for enquiries",
      "Create content clusters around buying, importing, registration, taxes, and premium vehicles in Cyprus",
      "Build a premium brand system for photos, listings and handovers",
    ],
  },
];

export const recommendedStructure = [
  ["Homepage", "Explain cars already in Cyprus, source-to-order support, trust, and next action."],
  ["Cars in Cyprus", "Vehicles physically available on the island with location and viewing CTAs."],
  ["Source a Car", "Dedicated sourcing funnel with brief, budget, channels, timeline, and inclusions."],
  ["How DOMCar Works", "Step-by-step path from brief to shortlist, inspection, delivery, registration, and handover."],
  ["Trust & Safety", "Company identity, team, inspection policy, mileage/history checks, payment safety, reservation/refund rules, and warranty handling."],
  ["About DOMCar", "Explain DOMCar’s role inside the wider DOM ecosystem and its Cyprus automotive focus."],
  ["Reviews & Handovers", "Buyer stories, handover photos, imported-car case studies, and public review proof."],
  ["Sell Your Car", "If DOMCar accepts listings or buys stock, separate that flow from the buyer journey."],
  ["FAQ", "Stock vs order, price inclusions, import timings, Cyprus registration, inspection, warranty, exchange, and reservation."],
  ["Contact / Book a Viewing", "Centralised NAP, hours, map, advisor channels, and a clean enquiry form."],
  ["Insights / DOM LiVE", "Keep content, but move it lower in navigation priority than inventory and trust pages."],
];

export const homepageMessaging = {
  headline: "Premium cars in Cyprus, plus tailored sourcing from the UK and Japan",
  subheadline:
    "Choose from vehicles already in Cyprus or ask DOMCar to source a specific car through trusted dealer and auction channels. DOMCar should explain selection support, delivery, registration and handover in Cyprus.",
  primaryCta: "View cars in Cyprus",
  secondaryCta: "Request a sourced car",
  trustLines: [
    "Based in Limassol.",
    "Named advisor on every enquiry.",
    "Stock and sourced vehicles clearly labelled.",
    "Documented timelines and handover process.",
  ],
  steps: [
    "Tell us what you want.",
    "We confirm whether it is already in Cyprus, in transit, or sourced to order.",
    "We verify the car, agree the commercial terms, and manage delivery and registration through handover.",
  ],
  faq: [
    "Is this car already in Cyprus?",
    "What is included in the listed price?",
    "How long does sourcing take?",
    "Do you provide history and inspection information before payment?",
    "Who will handle my purchase from first enquiry to handover?",
  ],
};

export const actionPlan = [
  {
    priority: "Priority 1",
    action: "Rewrite homepage and navigation around the real business model.",
    why: "Buyers must understand stock, sourcing, and process within seconds.",
    where: "Homepage, header, hero, footer",
    impact: "Higher trust and better enquiry quality",
    difficulty: "Medium",
    time: "2-4 days",
    effect: "Trust, conversion, brand clarity",
  },
  {
    priority: "Priority 1",
    action: "Remove real-estate/template leakage.",
    why: "Automotive buyers need a focused car-buying experience.",
    where: "Header, favourites, sitemap, template text, page titles",
    impact: "Stronger perceived seriousness",
    difficulty: "Medium",
    time: "2-5 days",
    effect: "Trust, premium perception",
  },
  {
    priority: "Priority 1",
    action: "Unify phone numbers and contact rules.",
    why: "Contact inconsistency weakens trust and local SEO.",
    where: "Global header/footer, contact page, listings, metadata",
    impact: "Cleaner NAP and fewer lost leads",
    difficulty: "Low",
    time: "1-2 days",
    effect: "Trust, local SEO, conversion",
  },
  {
    priority: "Priority 1",
    action: "Clean index pollution and duplicate pages.",
    why: "Search results should show valuable pages, not low-quality parameters or print pages.",
    where: "Server rules, CMS templates, Search Console controls",
    impact: "Better SEO hygiene and stronger branded search results",
    difficulty: "High",
    time: "3-10 days",
    effect: "SEO, technical health",
  },
  {
    priority: "Priority 1",
    action: "Build a Trust & Safety page.",
    why: "High-ticket buyers need reassurance before enquiry.",
    where: "New trust page linked from header, footer, and vehicle pages",
    impact: "More confident enquiries and fewer objections",
    difficulty: "Medium",
    time: "3-5 days",
    effect: "Trust, conversion",
  },
  {
    priority: "Priority 2",
    action: "Rebuild vehicle page template with source/status/trust labels.",
    why: "The vehicle page is the real sales page.",
    where: "All vehicle detail pages",
    impact: "Higher buyer confidence and stronger enquiry quality",
    difficulty: "High",
    time: "1-2 weeks",
    effect: "Conversion, buyer confidence",
  },
  {
    priority: "Priority 2",
    action: "Create a Source a Car funnel.",
    why: "Sourcing appears to be part of the business but is not sold clearly enough.",
    where: "New landing page, form, homepage and listing CTAs",
    impact: "Better qualified sourcing leads",
    difficulty: "Medium",
    time: "4-7 days",
    effect: "Lead quality, conversion",
  },
  {
    priority: "Priority 2",
    action: "Add reviews, handovers and case studies.",
    why: "Social proof must match the value of the transaction.",
    where: "Homepage, Trust page, Reviews page, listing pages",
    impact: "Higher trust and premium perception",
    difficulty: "Medium",
    time: "1-2 weeks",
    effect: "Trust, premium perception",
  },
  {
    priority: "Priority 2",
    action: "Strengthen Google Business Profile and review acquisition.",
    why: "Local trust and map visibility matter for Cyprus buyers.",
    where: "GBP, CRM follow-up, handover workflow",
    impact: "More calls, stronger map visibility",
    difficulty: "Medium",
    time: "1-3 weeks",
    effect: "Local SEO, calls, trust",
  },
  {
    priority: "Priority 3",
    action: "Separate editorial DOM LiVE content from the commercial buying path.",
    why: "Content can support SEO, but should not distract from conversion.",
    where: "Information architecture, navigation, breadcrumbs",
    impact: "Better focus for high-intent buyers",
    difficulty: "High",
    time: "2-4 weeks",
    effect: "UX, SEO, brand clarity",
  },
  {
    priority: "Priority 3",
    action: "Create local SEO landing pages.",
    why: "DOMCar needs stronger pages for Cyprus car-buying intent.",
    where: "SEO landing pages and internal linking",
    impact: "Better non-branded search reach",
    difficulty: "Medium",
    time: "2-4 weeks",
    effect: "SEO",
  },
  {
    priority: "Priority 3",
    action: "Implement structured data and internal linking governance.",
    why: "Search engines need clearer entity, vehicle, offer and location signals.",
    where: "Vehicle pages, categories, contact/about pages",
    impact: "Better SERP understanding and site structure",
    difficulty: "High",
    time: "1-3 weeks",
    effect: "SEO, technical health",
  },
];

export const englishUi = {
  language: {
    label: "Report language",
    english: "EN",
    russian: "RU",
  },
  brand: {
    name: "DOMCar Cyprus",
    reportType: "Digital Audit",
    topLabel: "DOMCar audit top",
  },
  hero: {
    meta: ["Management-ready digital audit", "Reviewed May 2026"],
    title: "DOMCar Cyprus Digital Audit",
    statement:
      "DOMCar already has the raw assets to look credible. The next step is to make the buying model, sourcing process, trust signals, and vehicle-page experience clear enough for serious buyers to act with confidence.",
    scorecardCta: "View scorecard",
    actionPlanCta: "See action plan",
    snapshotLabel: "Audit snapshot",
    readinessLabel: "Commercial readiness",
    readinessScore: "4/10",
    readinessText:
      "Trust, clarity, and conversion structure need priority attention.",
    signals: [
      "Trust architecture is the highest-impact improvement.",
      "Limassol footprint is useful, but local proof needs depth.",
      "Index governance and template leakage create technical SEO risk.",
    ],
  },
  common: {
    evidenceNote: "Evidence note",
    whyItMatters: "Why it matters",
    notVerified: "Not verified in the current audit.",
    jumpTo: "Jump to",
    navigationLabel: "Audit chapter navigation",
  },
  chapterBands: [
    {
      number: "01",
      title: "Executive Context",
      text: "The management-level diagnosis, commercial readiness score, and core priorities.",
    },
    {
      number: "02",
      title: "Trust & Conversion",
      text: "The buyer confidence issues that most directly affect enquiry quality and conversion.",
    },
    {
      number: "03",
      title: "Vehicle & Brand Experience",
      text: "The premium positioning and listing-page improvements needed for high-value vehicle buyers.",
    },
    {
      number: "04",
      title: "Search Health",
      text: "Local SEO, index governance, structured data, and crawler-facing technical controls.",
    },
    {
      number: "05",
      title: "Market & Structure",
      text: "Competitive lessons, growth roadmap, and the recommended public site architecture.",
    },
    {
      number: "06",
      title: "Implementation Priorities",
      text: "The prioritized action plan and the strategic recommendation that should guide the rebuild.",
    },
  ],
  sections: {
    executiveSummary: {
      eyebrow: "01",
      title: "Executive Summary",
      lead: "DOMCar appears to operate as a hybrid automotive business rather than a simple single-lot dealership.",
      coreIssue: "Core issue",
      coreTitle: "Commercial clarity is the main constraint.",
      coreBody:
        "Public audit findings suggest a small group of cars marked as in stock, a larger cars-in-Cyprus catalogue, motorcycles as a secondary category, a source-to-order/import offer, and a wider connection to the DOM / DOM LiVE / DOM.COM.CY ecosystem.",
      coreEvidence:
        "Whether all non-stock vehicles are DOMCar-owned, partner inventory, brokered, or sourceable listings was not verified in the current audit.",
      strategicMessage: "Strategic message",
      strategicTitle: "More traffic alone will not solve the trust gap.",
      strategicBody:
        "DOMCar is not far from looking credible, but the current site does not yet make the buying process feel safe, clear, and premium enough for serious high-value buyers.",
      assetsTitle: "Positive assets",
      weaknessesTitle: "Main weaknesses",
    },
    diagnosis: {
      eyebrow: "02",
      title: "Strategic Diagnosis",
      lead: "The site’s biggest problem is not lack of product. It is lack of commercial clarity and trust architecture.",
      cards: [
        {
          title: "Trust gap",
          copy: "High-ticket buyers need source clarity, inspection standards, payment safety, warranty handling, and handover proof before they enquire.",
        },
        {
          title: "Clarity gap",
          copy: "The business model is visible through scattered signals, but it is not explained in a single confident buying path.",
        },
        {
          title: "Conversion friction",
          copy: "Listing-level CTAs are useful, but account prompts and unclear next steps reduce momentum earlier in the journey.",
        },
      ],
      statement:
        "DOMCar already has the raw assets to look credible. The next step is to make the buying model, sourcing process, trust signals, and vehicle-page experience clear enough for serious buyers to act with confidence.",
    },
    scorecard: {
      eyebrow: "03",
      title: "Final Scorecard",
      lead: "The scores are intentionally commercial: they assess whether the current website gives serious buyers enough clarity, proof, and confidence to act.",
      scoreLabel: "score",
      outOf: "out of 10",
    },
    topFindings: {
      eyebrow: "04",
      title: "Top 10 Findings",
      lead: "These are the highest-impact findings that affect buyer confidence, premium positioning, and lead quality.",
    },
    businessModel: {
      eyebrow: "05",
      title: "Business Model Clarity",
      lead: "DOMCar appears to be a hybrid model. That can be commercially strong, but only if the site explains the model clearly.",
      signalsTitle: "Likely model signals",
      explanationTitle: "Recommended homepage explanation",
      explanation:
        "“Choose from vehicles already in Cyprus, or ask DOMCar to source a specific car through trusted dealer and auction channels.”",
      evidence:
        "Not verified: whether the full catalogue is DOMCar-owned inventory, partner inventory, or brokered supply.",
    },
    journey: {
      eyebrow: "06",
      title: "User Journey & Conversion Audit",
      lead: "DOMCar has useful listing-level actions, but the path into those actions needs clearer commercial sequencing.",
      tableHeaders: ["Stage", "User wants", "Current issue", "Recommended change"],
    },
    trust: {
      eyebrow: "07",
      title: "Trust & Credibility Audit",
      lead: "The current site shows useful trust anchors, but high-ticket automotive transactions need a more complete trust system.",
      matrixTitle: "Trust Gap Matrix",
      tableHeaders: ["Trust signal", "Status", "Commercial interpretation"],
    },
    premium: {
      eyebrow: "08",
      title: "Premium Positioning Audit",
      lead: "DOMCar’s vehicle imagery is one of its strongest assets, but premium perception is weakened when the surrounding site feels like a reused general portal.",
      body: "Premium buyers judge the whole frame: page language, template quality, contact confidence, proof depth, and how clearly each vehicle’s status is explained. DOMCar should build around its best visual asset: the vehicles themselves.",
    },
    vehicleListing: {
      eyebrow: "09",
      title: "Vehicle Listing Quality Audit",
      lead: "The vehicle page is the real sales page. It should answer the buyer’s silent questions before the buyer has to call.",
      previewLabel: "Photo gallery",
      previewTitle: "Availability and source must be explicit.",
      previewBody:
        "Every listing should state whether the car is in Cyprus now, in transit, sourced to order, partner stock, reserved, or sold.",
      previewBadges: ["In Cyprus now", "DOMCar stock", "Inspection completed"],
    },
    seo: {
      eyebrow: "10",
      title: "SEO & Local SEO Audit",
      lead: "DOMCar has indexable inventory and content breadth, but search quality depends on clean index governance, local consistency, and clearer entity signals.",
      risksTitle: "Business-language SEO risks",
      localTitle: "Local SEO focus",
      localBody:
        "DOMCar has a visible Limassol footprint and social citations, but phone consistency, review depth, and Google Business Profile strength need direct attention.",
      evidence:
        "Google Business Profile status and live review depth were not fully verified in the current audit.",
    },
    technical: {
      eyebrow: "11",
      title: "Technical Health Audit",
      lead: "The technical priority is to make search engines see the same high-quality commercial pages that buyers should see.",
      investigationTitle: "What should be investigated",
      fixesTitle: "Recommended technical fixes",
      evidence:
        "Canonical tags, hreflang, schema, robots.txt, XML sitemap quality, page-speed scores, and exact mobile render fidelity require a direct crawl and were not verified in the current audit.",
    },
    competitors: {
      eyebrow: "12",
      title: "Competitor Benchmark",
      lead: "DOMCar should not compete only on volume. The stronger opportunity is trust, sourcing support, premium guidance, and clearer availability.",
      tableHeaders: ["Competitor", "Type", "Strength", "DOMCar lesson"],
    },
    roadmap: {
      eyebrow: "13",
      title: "Opportunity Roadmap",
      lead: "The roadmap starts with clarity and trust fixes, then moves into deeper page templates, proof systems, and SEO infrastructure.",
    },
    siteStructure: {
      eyebrow: "14",
      title: "Recommended Website Structure",
      lead: "The public architecture should separate the buyer journey, sourcing journey, trust proof, and editorial content.",
    },
    homepage: {
      eyebrow: "15",
      title: "Recommended Homepage Messaging",
      lead: "The homepage should state the commercial model directly and move the buyer into either available inventory or a source-a-car brief.",
      trustTitle: "Trust section",
      worksTitle: "How it works",
      faqTitle: "FAQ prompts",
    },
    vehicleTemplate: {
      eyebrow: "15",
      title: "Ideal Vehicle Page Template",
      lead: "A premium vehicle template should combine merchandising, source clarity, trust evidence, commercial terms, and direct advisor contact.",
    },
    actionPlan: {
      eyebrow: "16",
      title: "Prioritized Action Plan",
      lead: "The first workstream should make the buying model, trust system, and indexed templates commercially coherent.",
      tableHeaders: [
        "Priority",
        "Action",
        "Why it matters",
        "Where it applies",
        "Expected business impact",
        "Difficulty",
        "Estimated time",
        "Main effect",
      ],
    },
    final: {
      eyebrow: "18",
      title: "Final Strategic Recommendation",
      lead: "Start with the commercial truth, then redesign around it.",
      body: "DOMCar should not begin with cosmetic redesign alone. The first priority is to make the commercial truth clear: which vehicles are in Cyprus, which are sourced, how the buyer is protected, who handles the transaction, and what happens from enquiry to handover. Once this trust architecture is in place, the existing inventory, imagery, content, and social presence can become much more effective at generating qualified leads.",
    },
  },
};

export const englishAuditData = {
  navItems,
  navGroups,
  positiveAssets,
  executiveRisks,
  topFindings,
  scorecardItems,
  modelSignals,
  statusLabels,
  journeyRows,
  trustMatrix,
  trustAdditions,
  premiumImprovements,
  vehicleTemplateBlocks,
  technicalIssues,
  technicalFixes,
  competitors,
  roadmap,
  recommendedStructure,
  homepageMessaging,
  actionPlan,
  ui: englishUi,
};
