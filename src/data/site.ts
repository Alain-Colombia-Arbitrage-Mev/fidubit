// ============================================
// TRACKWISE - Site Data & Content
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
} from '@/types';

export const siteConfig = {
  name: 'TRACKWISE',
  legalName: 'Trackwise LLC',
  tagline: 'Banking-as-a-Service Infrastructure',
  description: 'Fintech BaaS platform powering card issuance, multi-currency accounts, cross-border payments, and embedded financial APIs. Wyoming-licensed Money Services Business.',
  url: 'https://trackwise.finance',
  whatsapp: '+1 307 200 0000',
  email: 'info@trackwise.finance',
  location: 'Wyoming, USA',
  year: new Date().getFullYear(),
};

export const companyInfo: CompanyInfo = {
  legalName: 'Trackwise LLC',
  jurisdiction: 'Wyoming, United States',
  licenseType: 'Money Services Business (MSB)',
  licenseNumber: '31000299058422',
  registeredAddress: 'Wyoming, USA',
};

export const navigation: NavItem[] = [
  { label: 'Cards', href: '/#section-cards', icon: 'solar:card-linear', accentColor: 'yellow' },
  { label: 'Software Dev', href: '/#section-infra', icon: 'solar:code-square-linear', accentColor: 'blue' },
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

export const cardProducts: CardData[] = [
  {
    title: 'Black Elite',
    description: 'Unlimited daily spend • 0% FX Fees • Priority Support 24/7',
    cardNumber: '4111 •••• •••• 8829',
    holderName: 'TRACKWISE ELITE',
    network: 'visa',
    variant: 'black',
  },
  {
    title: 'Platinum Business',
    description: 'Multi-currency IBAN • API Access • Expense Management',
    cardNumber: '5248 •••• •••• 1092',
    holderName: 'TRACKWISE PLATINUM',
    network: 'mastercard',
    variant: 'platinum',
  },
  {
    title: 'Corporate Metal',
    description: 'Team Cards • Real-time Controls • Accounting Integration',
    cardNumber: '4822 •••• •••• 5591',
    holderName: 'TRACKWISE CORP',
    network: 'visa',
    variant: 'gold',
  },
];

export const infrastructureServices: ServiceFeature[] = [
  {
    icon: 'solar:code-square-linear',
    title: 'Fintech BaaS APIs',
    description: 'Embedded banking infrastructure built for scale. White-label IBAN generation, Swift/SEPA integration, and high-performance transaction engines capable of processing millions of transactions per second.',
    tag: 'BAAS_CORE',
    accentColor: 'blue',
    features: [
      'White-label UI/UX Design',
      'API-First Architecture',
      'Real-time Ledger Systems',
      'Multi-tenant Infrastructure',
    ],
  },
  {
    icon: 'solar:link-circle-linear',
    title: 'Blockchain & Tokens',
    description: 'End-to-end Smart Contract development for the next generation of finance. Asset tokenization (RWA), Stablecoin issuance infrastructure, and secure custodial wallet integration with institutional-grade security.',
    tag: 'WEB3_LAYER',
    accentColor: 'purple',
    badges: ['Solidity', 'Rust', 'Move'],
    features: [
      'RWA Tokenization',
      'Stablecoin Infrastructure',
      'Multi-sig Custody',
    ],
  },
  {
    icon: 'solar:hand-money-linear',
    title: 'Institutional OTC',
    description: 'Deep liquidity pools for high-volume fiat/crypto ramps with T+0 settlement. Direct market access to tier-1 liquidity providers with competitive spreads and minimal slippage for enterprise-grade transactions.',
    tag: 'LIQUIDITY',
    accentColor: 'green',
    features: [
      'T+0 Settlement',
      'Deep Liquidity Access',
      'Competitive Spreads',
    ],
  },
];

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

export const corporateServices: CorporateService[] = [
  {
    icon: 'solar:globus-linear',
    title: 'US & Offshore Incorporation',
    description: 'Remote company setup with registered agent, EIN registration, and corporate compliance. Jurisdictions include Wyoming, Delaware, BVI, Cayman, and Singapore.',
  },
  {
    icon: 'solar:document-text-linear',
    title: 'MSB Licensing & Compliance',
    description: 'Money Services Business registration, AML/KYC framework setup, legal opinion letters, and ongoing FinCEN compliance monitoring. We handle the regulatory complexity so you can focus on growth.',
  },
  {
    icon: 'solar:bank-linear',
    title: 'Fintech Introductions',
    description: 'Warm introductions to tier-1 banks and EMIs across the US, Europe, and Asia. Multi-currency account setup with SWIFT/SEPA connectivity for seamless international operations.',
  },
  {
    icon: 'solar:shield-check-linear',
    title: 'Audit & Tax Advisory',
    description: 'Annual audit preparation, tax optimization strategies, and transfer pricing documentation for multi-jurisdictional operations. Compliant structures that minimize your tax burden.',
  },
];

export const contactOptions: ContactOption[] = [
  { value: 'card-issuance', label: 'Card Issuance Program' },
  { value: 'baas-api', label: 'BaaS / Embedded Finance APIs' },
  { value: 'ai-solutions', label: 'AI Solutions / Model Training' },
  { value: 'remittance', label: 'Remittance / Cross-Border Payments' },
  { value: 'staff-augmentation', label: 'Staff Augmentation' },
  { value: 'incorporation', label: 'Company Incorporation' },
  { value: 'blockchain', label: 'Blockchain / Tokenization' },
  { value: 'music-marketing', label: 'Music Marketing / Distribution' },
  { value: 'otc-liquidity', label: 'OTC Liquidity Services' },
  { value: 'other', label: 'Other Services' },
];

// ============================================
// Staff Augmentation Data
// ============================================

export const staffStats: StaffStat[] = [
  { value: '50+', label: 'Engineers in Network', icon: 'solar:users-group-rounded-linear' },
  { value: '12', label: 'Active Client Projects', icon: 'solar:layers-linear' },
  { value: '99.2%', label: 'Client Retention', icon: 'solar:graph-up-linear' },
  { value: '48h', label: 'Avg. Deploy Time', icon: 'solar:clock-circle-linear' },
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
    title: 'Senior Backend Engineers',
    description: 'We deploy experienced developers specialized in high-throughput financial systems, microservices architecture, and real-time data processing to your team.',
    icon: 'solar:server-linear',
    skills: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Kafka'],
    availability: 'immediate',
  },
  {
    title: 'Frontend Specialists',
    description: 'Our UI/UX focused engineers build responsive, accessible interfaces for fintech dashboards, trading platforms, and admin panels integrated with your workflow.',
    icon: 'solar:monitor-linear',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma'],
    availability: 'immediate',
  },
  {
    title: 'Blockchain Developers',
    description: 'We provide smart contract experts with deep experience in DeFi protocols, token standards, and cross-chain integrations for your Web3 projects.',
    icon: 'solar:link-circle-linear',
    skills: ['Solidity', 'Rust', 'Hardhat', 'Foundry', 'The Graph'],
    availability: 'within-week',
  },
  {
    title: 'DevOps & SRE',
    description: 'Our infrastructure specialists ensure 99.99% uptime, automated deployments, and compliant cloud architectures for your critical systems.',
    icon: 'solar:cloud-linear',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
    availability: 'immediate',
  },
  {
    title: 'QA & Security Engineers',
    description: 'We assign testing experts with fintech domain knowledge to your projects, specializing in automated testing, penetration testing, and compliance audits.',
    icon: 'solar:shield-check-linear',
    skills: ['Playwright', 'Jest', 'OWASP', 'SOC2', 'PCI-DSS'],
    availability: 'within-week',
  },
  {
    title: 'Technical Project Managers',
    description: 'Our bilingual PMs with fintech background integrate with your organization, managing cross-functional teams across multiple time zones.',
    icon: 'solar:clipboard-list-linear',
    skills: ['Agile', 'Jira', 'Risk Management', 'Stakeholder Communication'],
    availability: 'immediate',
  },
];

export const engagementModels: StaffEngagementModel[] = [
  {
    title: 'Team Extension',
    description: 'Embed our engineers directly into your existing team. They work your hours, use your tools, attend your standups.',
    icon: 'solar:users-group-two-rounded-linear',
    features: [
      'Seamless integration with your workflow',
      'Direct communication channels',
      'Flexible scaling up or down',
      'Knowledge transfer included',
    ],
    recommended: true,
  },
  {
    title: 'Dedicated Squad',
    description: 'A self-managed team with a tech lead, delivering complete features or modules end-to-end.',
    icon: 'solar:rocket-linear',
    features: [
      'Full ownership of deliverables',
      'Built-in QA and code review',
      'Sprint-based delivery',
      'Weekly progress reports',
    ],
  },
  {
    title: 'Project-Based',
    description: 'Fixed-scope engagements with clear milestones, ideal for specific features or MVPs.',
    icon: 'solar:flag-linear',
    features: [
      'Defined scope and timeline',
      'Milestone-based payments',
      'Complete documentation',
      'Post-launch support included',
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
    bio: 'Drives the technical vision of Trackwise: BaaS architecture, payment rails, and compliance-grade infrastructure powering the platform.',
    icon: 'solar:cpu-bolt-linear',
    skills: ['Fintech Architecture', 'BaaS', 'Cloud Infrastructure', 'Security'],
    accentColor: 'yellow',
    socials: {
      email: 'alain@trackwise.finance',
    },
  },
  {
    name: 'Dawin Ossa',
    role: 'Senior Developer',
    bio: 'Builds and ships the core platform — from card issuance flows to ledger and API layers — with a focus on performance and reliability.',
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
    bio: 'Owns the BSA/AML program, FinCEN reporting, sanctions screening and overall compliance posture for the Wyoming MSB.',
    icon: 'solar:shield-check-linear',
    skills: ['BSA/AML', 'FinCEN', 'KYC/KYB', 'OFAC', 'SAR/CTR'],
    accentColor: 'green',
    socials: {
      email: 'mauricio@trackwise.finance',
    },
  },
  {
    name: 'Jorge Quiroz',
    role: 'Head of Product',
    bio: 'Defines the BaaS product surface — accounts, cards, payments, and developer experience — translating regulatory and customer needs into shipped product.',
    icon: 'solar:widget-5-linear',
    skills: ['Product Strategy', 'BaaS', 'API Design', 'UX'],
    accentColor: 'purple',
    socials: {
      email: 'jorge@trackwise.finance',
    },
  },
  {
    name: 'Catalina Cartagena',
    role: 'Head of Operations & Risk',
    bio: 'Runs day-to-day operations, fraud and transaction monitoring, vendor risk and incident response across the platform.',
    icon: 'solar:graph-up-linear',
    skills: ['Operations', 'Fraud', 'Risk', 'Vendor Mgmt', 'Incident Response'],
    accentColor: 'blue',
    socials: {
      email: 'catalina@trackwise.finance',
    },
  },
];

export const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'API Docs', href: '/docs' },
  { label: 'Status', href: '/status' },
];
