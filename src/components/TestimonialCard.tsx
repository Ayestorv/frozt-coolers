"use client";

import { motion } from 'framer-motion';

type TestimonialCardProps = {
  name: string;
  text: string;
  index: number;
};

export const TestimonialCard = ({ name, text, index }: TestimonialCardProps) => {
  return (
    <motion.div
      className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 * index }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="mb-4 text-sky-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="opacity-60"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-200 mb-4 flex-grow">{text}</p>
      <div className="mt-auto">
        <p className="font-medium text-white">— {name}</p>
      </div>
    </motion.div>
  );
}; 