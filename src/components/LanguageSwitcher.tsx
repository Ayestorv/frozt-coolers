"use client";

import { motion } from 'framer-motion';
import { Locale, locales, useTranslation } from '../i18n';

export const LanguageSwitcher = () => {
  const { locale, changeLocale } = useTranslation();
  
  const handleLanguageChange = (newLocale: Locale) => {
    if (locale !== newLocale) {
      changeLocale(newLocale);
    }
  };
  
  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {Object.entries(locales).map(([key, name]) => (
        <button
          key={key}
          onClick={() => handleLanguageChange(key as Locale)}
          className={`px-2 py-1 text-sm rounded-md transition-all backdrop-blur-sm ${
            locale === key 
              ? 'bg-sky-500/30 text-white font-medium border border-sky-400/30 shadow-lg' 
              : 'hover:bg-white/10 text-gray-300 hover:text-white border border-transparent hover:border-white/20'
          }`}
          aria-label={`Switch to ${name}`}
        >
          {name}
        </button>
      ))}
    </motion.div>
  );
}; 