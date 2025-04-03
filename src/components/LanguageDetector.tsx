"use client";

import { useEffect } from 'react';
import { Locale, locales } from '../i18n';

export const LanguageDetector = () => {
  useEffect(() => {
    // Try to get the language from localStorage first
    const savedLocale = localStorage.getItem('preferredLocale');
    
    if (savedLocale && Object.keys(locales).includes(savedLocale)) {
      // If we have a valid saved locale, set the URL param
      const url = new URL(window.location.href);
      if (url.searchParams.get('locale') !== savedLocale) {
        url.searchParams.set('locale', savedLocale);
        window.history.replaceState({}, '', url.toString());
      }
      return;
    }
    
    // Otherwise detect from browser
    const browserLang = navigator.language.split('-')[0];
    if (browserLang && Object.keys(locales).includes(browserLang)) {
      localStorage.setItem('preferredLocale', browserLang);
      
      // Set URL param
      const url = new URL(window.location.href);
      if (url.searchParams.get('locale') !== browserLang) {
        url.searchParams.set('locale', browserLang);
        window.history.replaceState({}, '', url.toString());
      }
    } else {
      // Default to English if browser language not supported
      localStorage.setItem('preferredLocale', 'en');
    }
  }, []);
  
  // This is a utility component with no UI
  return null;
}; 