"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { useTranslation } from '../../i18n';
import { LanguageDetector } from "../../components/LanguageDetector";

export default function CoolersPage() {
  const { t } = useTranslation();
  
  return (
    <>
      <LanguageDetector />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <Navbar />
        
        <section className="pt-24 pb-20 relative overflow-hidden">
          {/* Radial gradient background effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-cyan-400 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-indigo-500 rounded-full opacity-5 blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t('products.coolers.title')}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                {t('products.coolers.description')}
              </p>
            </motion.div>

            <div className="flex flex-col items-center justify-center py-12">
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center max-w-lg border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Coming Soon!
                </h2>
                <p className="text-gray-200 mb-6">
                  We're working hard to bring you our latest collection of premium coolers. 
                  Please check back soon!
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center py-3 px-6 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition-all backdrop-blur-sm border border-white/10 shadow-sm"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="w-5 h-5 mr-2"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  {t('products.backToHome')}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        <Footer />
        <WhatsAppButton phoneNumber="15551234567" />
      </main>
    </>
  );
} 