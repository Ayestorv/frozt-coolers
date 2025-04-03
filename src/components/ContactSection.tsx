"use client";

import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  const { t } = useTranslation();
  
  // These would typically come from environment variables
  // For the purposes of this demo, we'll use placeholder values
  const telegramToken = 'YOUR_TELEGRAM_BOT_TOKEN';
  const telegramChatId = 'YOUR_TELEGRAM_CHAT_ID';

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-gray-900 z-0"></div>
      
      {/* Radial gradient background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-navy-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm 
            telegramToken={telegramToken} 
            telegramChatId={telegramChatId} 
          />
        </motion.div>
      </div>
    </section>
  );
}; 