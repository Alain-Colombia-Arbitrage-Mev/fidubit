/**
 * FIDUBIT - Internationalization Configuration
 * SEO-friendly static routes for each language
 */

export const languages = {
  en: { label: 'English', flag: 'us', locale: 'en-US' },
  es: { label: 'Español', flag: 'es', locale: 'es-ES' },
  pt: { label: 'Português', flag: 'br', locale: 'pt-BR' },
  zh: { label: '中文', flag: 'cn', locale: 'zh-CN' },
  ar: { label: 'العربية', flag: 'sa', locale: 'ar-SA' },
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const showDefaultLang = false;

/**
 * Get the language from URL path
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

/**
 * Get translated path for a different language
 */
export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash and any existing lang prefix
  let cleanPath = path.replace(/^\//, '');
  
  // Remove existing language prefix if present
  for (const l of Object.keys(languages)) {
    if (cleanPath.startsWith(`${l}/`) || cleanPath === l) {
      cleanPath = cleanPath.slice(l.length + 1) || '';
      break;
    }
  }
  
  // For default language, don't add prefix (better SEO for primary language)
  if (lang === defaultLang && !showDefaultLang) {
    return `/${cleanPath}`;
  }
  
  return `/${lang}${cleanPath ? `/${cleanPath}` : ''}`;
}

/**
 * Get alternate language links for SEO
 */
export function getAlternateLinks(currentPath: string): Array<{ lang: Language; href: string }> {
  return Object.keys(languages).map((lang) => ({
    lang: lang as Language,
    href: `https://fidubit.com${getLocalizedPath(currentPath, lang as Language)}`,
  }));
}
