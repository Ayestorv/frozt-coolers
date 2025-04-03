"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import en from './en.json';
import es from './es.json';

export type Locale = 'en' | 'es';

export const locales: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

export const translations = {
  en,
  es,
};

export type TranslationKeys = typeof en;

export const useTranslation = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [locale, setLocale] = useState<Locale>('en');
  
  useEffect(() => {
    // First check URL params
    const urlLocale = searchParams.get('locale');
    if (urlLocale && Object.keys(locales).includes(urlLocale)) {
      setLocale(urlLocale as Locale);
      localStorage.setItem('preferredLocale', urlLocale);
      return;
    }
    
    // Then check localStorage
    const savedLocale = localStorage.getItem('preferredLocale');
    if (savedLocale && Object.keys(locales).includes(savedLocale)) {
      setLocale(savedLocale as Locale);
      
      // Update URL
      const url = new URL(window.location.href);
      url.searchParams.set('locale', savedLocale);
      window.history.replaceState({}, '', url.toString());
      return;
    }
    
    // Default to English
    setLocale('en');
  }, [searchParams]);
  
  const t = (keyPath: string) => {
    const keys = keyPath.split('.');
    let value: any = translations[locale];
    
    for (const key of keys) {
      if (value === undefined) return keyPath;
      value = value[key];
    }
    
    return value || keyPath;
  };
  
  const changeLocale = (newLocale: Locale) => {
    localStorage.setItem('preferredLocale', newLocale);
    
    // Update URL and reload to update UI
    const url = new URL(window.location.href);
    url.searchParams.set('locale', newLocale);
    window.location.href = url.toString();
  };
  
  return {
    t,
    locale,
    changeLocale,
    locales,
  };
}; 