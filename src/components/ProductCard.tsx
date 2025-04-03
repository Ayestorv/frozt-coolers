"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  imageSrc: string;
  index: number;
};

export const ProductCard = ({ 
  title, 
  description, 
  ctaText, 
  ctaUrl, 
  imageSrc, 
  index 
}: ProductCardProps) => {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col p-6 flex-grow text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 flex-grow mb-4">{description}</p>
        
        <Link 
          href={ctaUrl}
          className="group inline-flex items-center justify-center py-2 px-4 bg-sky-600/60 hover:bg-sky-500/70 text-white font-medium rounded-lg transition-all backdrop-blur-sm border border-sky-400/30 shadow-md hover:shadow-lg mt-auto self-start relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-sky-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 flex items-center">
            {ctaText}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="w-5 h-5 ml-1"
            >
              <path 
                fillRule="evenodd" 
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                clipRule="evenodd" 
              />
            </svg>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}; 