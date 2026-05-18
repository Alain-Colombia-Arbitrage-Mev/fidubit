// ============================================
// TRACKWISE - Site Data & Content
// Original layout preserved. Copy cleaned of unverifiable claims
// (no "millions of TPS", "T+0", "unlimited daily spend", "0% FX",
// "99.2% retention", "50+ engineers", "tax optimization", "offshore").
// Address, MSB disclaimer, and legal nav added for compliance.
// ============================================

import type {
  NavItem,
  CardData,
  ServiceFeature,
  VideoItem,
  CorporateService,
  ContactOption,
  SystemStatus,
  TechStack,
  StaffRole,
  StaffStat,
  StaffEngagementModel,
  TeamMember,
  CompanyInfo,
  AppShowcase,
} from '@/types';

export const siteConfig = {
  name: 'TRACKWISE',
  legalName: 'Trackwise LLC',
  tagline: 'Banking-as-a-Service Infrastructure',
  description:
    'Fintech BaaS platform building card issuance, multi-currency accounts, and cross-border payment infrastructure through licensed banking partners. Wyoming-registered Money Services Business.',
  url: 'https://trackwise.finance',
  whatsapp: '+1 515 506 8239',
  phone: '+1 515 506 8239',
  email: 'hello@trackwise.finance',
  compliance: 'compliance@trackwise.finance',
  privacy: 'privacy@trackwise.finance',
  security: 'security@trackwise.finance',
  abuse: 'abuse@trackwise.finance',
  support: 'support@trackwise.finance',
  location: 'Sheridan, Wyoming, USA',
  addressLine1: '30 N. Gould St., Ste R',
  addressLine2: 'Sheridan, WY 82801',
  country: 'United States',
  year: new Date().getFullYear(),
};

export const companyInfo: CompanyInfo = {
  legalName: 'Trackwise LLC',
  jurisdiction: 'Wyoming, United States',
  licenseType: 'FinCEN Money Services Business (MSB) Registration',
  licenseNumber: '31000299058422',
  registeredAddress: '30 N. Gould St., Ste R, Sheridan, WY 82801, USA',
};

/**
 * MSB scope disclaimer required by FinCEN guidance.
 * Registration ≠ state money-transmission license.
 * Used in the footer and on the /compliance, /terms, /aml pages.
 */
export const msbDisclaimer =
  'Trackwise LLC is registered as a Money Services Business with the U.S. Financial Crimes Enforcement Network (FinCEN). FinCEN registration is not a license to transmit money in any U.S. state. Money transmission services, where required, are provided through licensed banking and payment partners. Trackwise does not provide deposit-taking, investment, or brokerage services.';

// Original navigation preserved (+ Apps)
export const navigation: NavItem[] = [
  { label: 'Cards', href: '/#section-cards', icon: 'solar:card-linear', accentColor: 'yellow' },
  { label: 'Software Dev', href: '/#section-infra', icon: 'solar:code-square-linear', accentColor: 'blue' },
  { label: 'Apps', href: '/apps', icon: 'solar:smartphone-linear', accentColor: 'blue' },
  { label: 'AI Solutions', href: '/ai', icon: 'solar:cpu-bolt-linear', accentColor: 'purple' },
  { label: 'Remittance', href: '/remittance', icon: 'solar:hand-money-linear', accentColor: 'yellow' },
  { label: 'Staff', href: '/staff', icon: 'solar:users-group-rounded-linear', accentColor: 'blue' },
  { label: 'Team', href: '/#section-team', icon: 'solar:user-id-linear', accentColor: 'green' },
  { label: 'Media', href: '/#section-music', icon: 'solar:music-note-linear', accentColor: 'fuchsia' },
];

export const systemModules: SystemStatus[] = [
  { name: 'Issuance', icon: 'solar:card-linear', status: 'active', accentColor: 'yellow' },
  { name: 'BaaS API', icon: 'solar:code-square-linear', status: 'active', accentColor: 'blue' },
  { name: 'Blockchain', icon: 'solar:link-circle-linear', status: 'synced', accentColor: 'purple' },
  { name: 'KYC/AML', icon: 'solar:shield-check-linear', status: 'active', accentColor: 'green' },
];

/**
 * Card mockups - illustrative only.
 * All card numbers are deliberately invalid (fail Luhn) and use
 * the universal Visa test BIN prefix 4111. They do NOT represent
 * real issued cards. Card programs are subject to BIN sponsorship
 * and underwriting by Trackwise's partner issuers.
 *
 * Descriptions describe capabilities at the partner level, not
 * Trackwise-issued guarantees ("unlimited", "0% FX", etc.).
 */
export const cardProducts: CardData[] = [
  {
    title: 'Consumer Debit',
    description: 'Virtual and physical debit cards for the end users of fintech apps built on Trackwise.',
    cardNumber: '4111 0000 0000 0000',
    holderName: 'CARDHOLDER NAME',
    network: 'visa',
    variant: 'black',
  },
  {
    title: 'Business Expense',
    description: 'Team and expense cards with spend controls, categories, and accounting export.',
    cardNumber: '4111 0000 0000 0000',
    holderName: 'CARDHOLDER NAME',
    network: 'mastercard',
    variant: 'platinum',
  },
  {
    title: 'Prepaid / Payout',
    description: 'Prepaid cards for disbursements, contractor payouts, and reimbursements with funding controls.',
    cardNumber: '4111 0000 0000 0000',
    holderName: 'CARDHOLDER NAME',
    network: 'visa',
    variant: 'gold',
  },
];

/**
 * Three platform pillars rendered in InfrastructureSection.
 * Tag mapping is preserved: INFRA_DEV → fintech, WEB3_LAYER → blockchain,
 * LIQUIDITY → otc. The actual displayed text lives in the section's
 * inline serviceTranslations and has been cleaned of unverifiable
 * claims (no "millions of TPS", "T+0 settlement", "deep liquidity",
 * "tier-1 LPs").
 */
export const infrastructureServices: ServiceFeature[] = [
  {
    icon: 'solar:code-square-linear',
    title: 'Fintech BaaS APIs',
    description:
      'Embedded banking infrastructure: white-label IBAN/account generation, ACH/SEPA integration through partners, and a real-time ledger built for fintech operators.',
    tag: 'INFRA_DEV',
    accentColor: 'blue',
    features: [
      'White-label UI/UX',
      'API-first architecture',
      'Real-time ledger primitives',
      'Multi-tenant infrastructure',
    ],
  },
  {
    icon: 'solar:link-circle-linear',
    title: 'Blockchain Engineering',
    description:
      'Smart-contract engineering services: asset tokenization, stablecoin integration, and custodial wallet integration through partner custodians. Trackwise does not custody customer assets.',
    tag: 'WEB3_LAYER',
    accentColor: 'purple',
    badges: ['Solidity', 'Rust', 'Move'],
    features: [
      'Tokenization engineering',
      'Stablecoin integration',
      'Partner custodian integration',
    ],
  },
  {
    icon: 'solar:hand-money-linear',
    title: 'Crypto OTC (via partners)',
    description:
      'Fiat/crypto on- and off-ramp connectivity through licensed exchange and OTC partners. Pricing and settlement depend on the partner. Trackwise does not act as a counterparty.',
    tag: 'LIQUIDITY',
    accentColor: 'green',
    features: [
      'Partner-routed liquidity',
      'Compliance pre-screening',
      'Settlement via partner banks',
    ],
  },
];

/**
 * Artist marketing operated as a non-financial service by the
 * same team. Surfaced on the homepage and on /labs with the
 * understanding that it is not a regulated Trackwise service.
 */
export const musicVideos: VideoItem[] = [
  {
    title: 'Believe',
    artist: 'Obie P',
    youtubeId: 'l2jiffzt5-I',
    status: 'live',
  },
  {
    title: 'Remate',
    artist: 'Pipe Calderon',
    youtubeId: '6ZB2A0050O0',
    status: 'trending',
  },
  {
    title: 'Claro Ocoyaje',
    artist: 'Claro Ocoyaje',
    youtubeId: 'AqL4GP9FoXk',
    status: 'new',
  },
];

/**
 * Corporate services: introductions only. Trackwise does not provide
 * legal, tax, fiduciary advice, or operate as a nominee director.
 * Copy carefully cleaned of "tax optimization", "offshore",
 * "Cayman/BVI", and "minimize your tax burden" language.
 */
export const corporateServices: CorporateService[] = [
  {
    icon: 'solar:globus-linear',
    title: 'U.S. Company Formation',
    description:
      'Introductions to providers that handle Wyoming and Delaware LLC formation, registered agent service, and EIN registration.',
  },
  {
    icon: 'solar:document-text-linear',
    title: 'MSB / EMI Introductions',
    description:
      'Introductions to law firms and consultants who advise on FinCEN MSB registration, state money-transmitter strategy, and EU EMI licensing.',
  },
  {
    icon: 'solar:bank-linear',
    title: 'Banking Introductions',
    description:
      'Warm introductions to U.S. and EU banks and EMIs that run banking-for-fintech programs. Trackwise does not guarantee account approval.',
  },
  {
    icon: 'solar:shield-check-linear',
    title: 'Audit & Tax Compliance',
    description:
      'Introductions to audit firms and tax advisors for annual audit preparation, tax compliance, and transfer-pricing documentation. Trackwise does not provide tax advice.',
  },
];

export const contactOptions: ContactOption[] = [
  { value: 'card-issuance', label: 'Card issuance program' },
  { value: 'baas-api', label: 'BaaS / embedded finance APIs' },
  { value: 'ai-solutions', label: 'AI engineering / fintech ML' },
  { value: 'remittance', label: 'Cross-border payments / remittance' },
  { value: 'staff-augmentation', label: 'Engineering services' },
  { value: 'incorporation', label: 'Company-formation introductions' },
  { value: 'blockchain', label: 'Blockchain / tokenization engineering' },
  { value: 'music-marketing', label: 'Artist distribution (non-financial)' },
  { value: 'otc-liquidity', label: 'Crypto OTC introductions (via partners)' },
  { value: 'other', label: 'Other inquiry' },
];

// ============================================
// Staff Augmentation
// Stats cleaned: no "50+ engineers", "12 active projects",
// "99.2% retention", "48h deploy time". All unverifiable.
// ============================================

export const staffStats: StaffStat[] = [
  { value: 'Senior', label: 'Engineering seniority bar', icon: 'solar:users-group-rounded-linear' },
  { value: 'Fintech', label: 'Domain focus', icon: 'solar:wallet-money-linear' },
  { value: 'LATAM + US', label: 'Time-zone alignment', icon: 'solar:global-linear' },
  { value: 'Bilingual', label: 'EN / ES communication', icon: 'solar:chat-round-line-linear' },
];

export const techStacks: TechStack[] = [
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'React', icon: 'logos:react' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Go', icon: 'logos:go' },
  { name: 'Rust', icon: 'logos:rust' },
  { name: 'Solidity', icon: 'logos:solidity' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'Kubernetes', icon: 'logos:kubernetes' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
];

export const staffRoles: StaffRole[] = [
  {
    title: 'Backend Engineers',
    description:
      'Engineers experienced in transaction processing, ledger systems, and high-availability services for regulated fintech workloads.',
    icon: 'solar:server-linear',
    skills: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Kafka'],
    availability: 'immediate',
  },
  {
    title: 'Frontend Engineers',
    description:
      'Engineers who build dashboards, customer onboarding flows, and operations consoles for fintech products.',
    icon: 'solar:monitor-linear',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma'],
    availability: 'immediate',
  },
  {
    title: 'Blockchain Engineers',
    description:
      'Smart-contract engineers with experience in token standards, DeFi protocols, and cross-chain integrations.',
    icon: 'solar:link-circle-linear',
    skills: ['Solidity', 'Rust', 'Hardhat', 'Foundry', 'The Graph'],
    availability: 'within-week',
  },
  {
    title: 'DevOps & SRE',
    description:
      'Infrastructure engineers focused on automated deployment, observability, and the auditability required for fintech infrastructure.',
    icon: 'solar:cloud-linear',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
    availability: 'immediate',
  },
  {
    title: 'Security & QA',
    description:
      'Engineers focused on test automation, application security, and the controls required for SOC 2 and PCI-DSS-scoped systems.',
    icon: 'solar:shield-check-linear',
    skills: ['Playwright', 'Jest', 'OWASP', 'IAM', 'Pen testing'],
    availability: 'within-week',
  },
  {
    title: 'Technical Project Managers',
    description:
      'Bilingual project managers who integrate with your team, manage delivery, and coordinate vendors across time zones.',
    icon: 'solar:clipboard-list-linear',
    skills: ['Agile', 'Jira', 'Vendor mgmt', 'Stakeholder comms'],
    availability: 'immediate',
  },
];

export const engagementModels: StaffEngagementModel[] = [
  {
    title: 'Team Extension',
    description:
      'Engineers embedded into your existing team, working your hours and using your tools.',
    icon: 'solar:users-group-two-rounded-linear',
    features: [
      'Integration with your workflow',
      'Direct communication',
      'Flexible scaling',
      'Knowledge transfer included',
    ],
    recommended: true,
  },
  {
    title: 'Dedicated Squad',
    description:
      'A self-managed team with a tech lead delivering complete features end-to-end.',
    icon: 'solar:rocket-linear',
    features: [
      'Ownership of deliverables',
      'Built-in QA and code review',
      'Sprint-based delivery',
      'Weekly progress reports',
    ],
  },
  {
    title: 'Project-Based',
    description:
      'Fixed-scope engagements with clear milestones, ideal for specific features or MVPs.',
    icon: 'solar:flag-linear',
    features: [
      'Defined scope and timeline',
      'Milestone-based payments',
      'Complete documentation',
      'Post-launch support',
    ],
  },
];

// ============================================
// Team
// ============================================

export const teamMembers: TeamMember[] = [
  {
    name: 'Alain Herrera',
    role: 'Chief Technology Officer',
    bio: 'Drives the technical direction of Trackwise: platform architecture, payment rails, and the production controls required of a regulated MSB.',
    icon: 'solar:cpu-bolt-linear',
    skills: ['Fintech architecture', 'Banking infrastructure', 'Cloud security', 'API design'],
    accentColor: 'yellow',
    socials: {
      email: 'alain@trackwise.finance',
    },
  },
  {
    name: 'Dawin Ossa',
    role: 'Senior Engineer',
    bio: 'Builds and operates the core platform — card issuance flows, ledger services, and APIs — with a focus on reliability and observability.',
    icon: 'solar:code-square-linear',
    skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'APIs'],
    accentColor: 'blue',
    socials: {
      email: 'dawin@trackwise.finance',
    },
  },
  {
    name: 'Mauricio Jaramillo',
    role: 'Chief Compliance Officer / BSA Officer',
    bio: 'Owns the BSA / AML program, FinCEN reporting, sanctions screening, and the overall compliance posture of the Wyoming MSB.',
    icon: 'solar:shield-check-linear',
    skills: ['BSA / AML', 'FinCEN', 'KYC / KYB', 'OFAC', 'SAR / CTR'],
    accentColor: 'green',
    socials: {
      email: 'compliance@trackwise.finance',
    },
  },
  {
    name: 'Jorge Quiroz',
    role: 'Head of Product',
    bio: 'Defines the product surface — accounts, cards, payments, and developer experience — translating regulatory and customer requirements into shipped product.',
    icon: 'solar:widget-5-linear',
    skills: ['Product strategy', 'BaaS', 'API design', 'UX'],
    accentColor: 'purple',
    socials: {
      email: 'jorge@trackwise.finance',
    },
  },
  {
    name: 'Catalina Cartagena',
    role: 'Head of Operations & Risk',
    bio: 'Runs day-to-day operations, fraud and transaction monitoring, vendor risk, and incident response across the platform.',
    icon: 'solar:graph-up-linear',
    skills: ['Operations', 'Fraud', 'Risk', 'Vendor mgmt', 'Incident response'],
    accentColor: 'blue',
    socials: {
      email: 'catalina@trackwise.finance',
    },
  },
];

// ============================================
// Apps & Case Studies
// Products built and operated by the Trackwise team.
// Some apps are non-financial products outside the
// scope of the Trackwise MSB registration.
// ============================================

export const apps: AppShowcase[] = [
  {
    slug: 'bmp',
    name: 'BeMind Power',
    tagline: 'Secure messenger + multi-currency wallet + corporate card',
    description:
      'BeMind Power (BMP) is a multi-modular mobile super-app combining end-to-end encrypted messaging with a multi-currency virtual bank, crypto wallet, remittance, and a corporate debit card. Built for secure business-to-business and business-to-person communication and payments. Card and account features are operated through licensed banking partners; limits depend on partner program and customer due diligence.',
    screenshot: '/apps/bmp.png',
    status: 'live',
    category: 'Secure messenger + virtual bank',
    capabilities: [
      'End-to-end encrypted messaging (1:1 and group)',
      'Multi-currency virtual bank (5 currencies)',
      'Crypto wallet with custody via partner',
      'Cross-border remittance through partner rails',
      'Corporate debit card (up to USD 1M/month, subject to KYB tier)',
      'B2B and B2P secure communication',
      'Multi-modular architecture (chat / wallet / cards / transfers)',
    ],
    stack: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'WebSockets', 'E2E encryption'],
    links: {
      website: 'https://be-mindpower.net/chat',
      googlePlay:
        'https://play.google.com/store/apps/details?id=chat.bemindepower.bmpchat&hl=es_US',
    },
    accentColor: 'blue',
  },
];

// ============================================
// Footer / Legal Nav
// ============================================

export const footerProductLinks = [
  { label: 'Cards', href: '/#section-cards' },
  { label: 'Software Dev', href: '/#section-infra' },
  { label: 'AI Solutions', href: '/ai' },
  { label: 'Remittance', href: '/remittance' },
  { label: 'Staff', href: '/staff' },
];

export const footerCompanyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/#section-team' },
  { label: 'Apps', href: '/apps' },
  { label: 'Contact', href: '/contact' },
  { label: 'Labs (non-financial)', href: '/labs' },
];

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'AML / BSA Policy', href: '/aml' },
  { label: 'KYC Policy', href: '/kyc' },
  { label: 'SMS Policy', href: '/sms-policy' },
  { label: 'Responsible Use', href: '/responsible-use' },
  { label: 'Jurisdictions', href: '/jurisdictions' },
];

export const footerDeveloperLinks = [
  { label: 'API Docs', href: '/developers' },
  { label: 'Status', href: '/status' },
  { label: 'Security', href: '/security' },
  { label: 'Compliance', href: '/compliance' },
];

// Legal links shown in the original Footer bottom bar.
export const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'SMS Policy', href: '/sms-policy' },
];
