/**
 * FIDUBIT - i18n System
 * SEO-friendly internationalization with static routes
 */

export * from './config';

import en from './translations/en';
import es from './translations/es';
import pt from './translations/pt';
import zh from './translations/zh';
import ar from './translations/ar';
import { type Language, defaultLang } from './config';

export const translations = {
  en,
  es,
  pt,
  zh,
  ar,
} as const;

export type Translations = typeof en;

/**
 * Get translations for a specific language
 */
export function useTranslations(lang: Language): Translations {
  return translations[lang] ?? translations[defaultLang];
}

/**
 * Get a nested translation value by key path
 */
export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[lang] ?? translations[defaultLang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}
