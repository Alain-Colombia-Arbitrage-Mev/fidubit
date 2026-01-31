// ============================================
// FIDUBIT - Type Definitions
// ============================================

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  accentColor?: 'yellow' | 'fuchsia' | 'purple' | 'blue' | 'green';
}

export interface CardData {
  title: string;
  description: string;
  cardNumber: string;
  holderName: string;
  network: 'visa' | 'mastercard';
  variant: 'black' | 'platinum' | 'gold';
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
  tag: string;
  accentColor: 'blue' | 'purple' | 'green' | 'yellow' | 'fuchsia';
  features?: string[];
  badges?: string[];
}

export interface VideoItem {
  title: string;
  artist: string;
  youtubeId: string;
  status: 'live' | 'trending' | 'new';
}

export interface CorporateService {
  icon: string;
  title: string;
  description: string;
}

export interface ContactOption {
  value: string;
  label: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  author?: string;
  twitterHandle?: string;
}

export interface SystemStatus {
  name: string;
  icon: string;
  status: 'active' | 'synced' | 'pending' | 'offline';
  accentColor: string;
}

export interface TechStack {
  name: string;
  icon: string;
}

export interface StaffRole {
  title: string;
  description: string;
  icon: string;
  skills: string[];
  availability: 'immediate' | 'within-week' | 'within-month';
}

export interface StaffStat {
  value: string;
  label: string;
  icon: string;
}

export interface StaffEngagementModel {
  title: string;
  description: string;
  icon: string;
  features: string[];
  recommended?: boolean;
}
