"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '../i18n';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundPosition: 'center',
          filter: 'brightness(0.85)',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-sky-900/70 to-transparent z-10"
      />
      
      {/* Radial gradient background effects */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-cyan-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            className="mt-6 text-xl sm:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#products"
              className="group px-8 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white font-semibold text-center hover:bg-white/30 transition-all shadow-lg hover:shadow-xl border border-white/20 relative overflow-hidden"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            
            <Link
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 rounded-lg bg-green-600/60 backdrop-blur-md text-white font-semibold text-center hover:bg-green-500/70 transition-all shadow-lg hover:shadow-xl border border-green-400/30 flex items-center justify-center relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2 relative z-10"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                />
              </svg>
              <span className="relative z-10">{t('hero.whatsapp')}</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 md:h-32"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="rgba(255, 255, 255, 0.2)"
            className="backdrop-blur-sm"
          />
        </svg>
      </div>
    </div>
  );
}; 