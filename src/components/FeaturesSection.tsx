"use client";

import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import { FeatureCard, FeatureIcons } from './FeatureCard';

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('features.list.0.title'),
      description: t('features.list.0.description'),
      icon: FeatureIcons.IceRetention,
    },
    {
      title: t('features.list.1.title'),
      description: t('features.list.1.description'),
      icon: FeatureIcons.Durability,
    },
    {
      title: t('features.list.2.title'),
      description: t('features.list.2.description'),
      icon: FeatureIcons.BpaFree,
    },
    {
      title: t('features.list.3.title'),
      description: t('features.list.3.description'),
      icon: FeatureIcons.PremiumFinish,
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-navy-800 z-0"></div>
      
      {/* Radial gradient background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-navy-600 rounded-full opacity-10 blur-3xl"></div>
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
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 