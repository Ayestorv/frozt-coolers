"use client";

import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import { ProductCard } from './ProductCard';

export const ProductsSection = () => {
  const { t } = useTranslation();

  const products = [
    {
      title: t('products.coolers.title'),
      description: t('products.coolers.description'),
      ctaText: t('products.coolers.cta'),
      ctaUrl: '/coolers',
      imageSrc: '/images/cooler.jpg',
    },
    {
      title: t('products.thermoses.title'),
      description: t('products.thermoses.description'),
      ctaText: t('products.thermoses.cta'),
      ctaUrl: '/thermoses',
      imageSrc: '/images/thermos.jpg',
    },
  ];

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-gray-900 z-0"></div>
      
      {/* Radial gradient background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 bg-navy-600 rounded-full opacity-10 blur-3xl"></div>
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
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              ctaText={product.ctaText}
              ctaUrl={product.ctaUrl}
              imageSrc={product.imageSrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 