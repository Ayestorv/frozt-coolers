"use client";

import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('testimonials.list.0.name'),
      text: t('testimonials.list.0.text'),
    },
    {
      name: t('testimonials.list.1.name'),
      text: t('testimonials.list.1.text'),
    },
    {
      name: t('testimonials.list.2.name'),
      text: t('testimonials.list.2.text'),
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-navy-900 z-0"></div>
      
      {/* Radial gradient background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-navy-700 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-sky-400 rounded-full opacity-10 blur-3xl"></div>
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
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 