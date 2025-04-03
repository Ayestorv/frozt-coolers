"use client";

import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';

type WhatsAppButtonProps = {
  phoneNumber: string;
};

export const WhatsAppButton = ({ phoneNumber }: WhatsAppButtonProps) => {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20, 
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-16 h-16 rounded-full bg-green-500/60 backdrop-blur-md shadow-lg hover:bg-green-600/70 transition-all border border-green-400/30"
        aria-label={t('whatsapp.tooltip')}
      >
        <span className="absolute bottom-full mb-2 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          {t('whatsapp.tooltip')}
        </span>
        
        {/* Simple WhatsApp Icon with Opacity */}
        <span className="text-white text-2xl">
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md opacity-90"
          >
            <path 
              d="M20.4539 3.55624C18.2606 1.34531 15.3489 0.134218 12.2439 0.130624C5.85642 0.130624 0.647952 5.33906 0.644358 11.7266C0.642561 13.8172 1.16493 15.8594 2.15874 17.6719L0.564358 24L7.03905 22.4359C8.78343 23.3359 10.7465 23.8094 12.7356 23.8109H12.7403C19.127 23.8109 24.3356 18.6016 24.3395 12.2141C24.3434 9.11719 23.1278 6.20624 20.9539 3.99844M12.7403 21.7969H12.7364C10.9559 21.7953 9.21095 21.3422 7.67608 20.4906L7.29983 20.2656L3.515 21.1406L4.40641 17.4547L4.15797 17.0641C3.22139 15.4703 2.7278 13.6219 2.72959 11.7281C2.73226 6.44843 7.01642 2.14687 12.2528 2.14687C14.834 2.14687 17.2512 3.14374 19.0489 4.95781C20.8489 6.77188 21.8348 9.19843 21.8317 11.8125C21.8278 17.0938 17.545 21.7969 12.7403 21.7969Z" 
              fill="rgba(255, 255, 255, 0.9)"
            />
            <path 
              d="M17.9669 14.3953C17.6747 14.2484 16.2044 13.5266 15.9387 13.4281C15.673 13.3297 15.4825 13.2797 15.2919 13.5719C15.1013 13.8641 14.5247 14.5359 14.3575 14.7266C14.1902 14.9172 14.0247 14.9422 13.7326 14.7953C13.4403 14.6484 12.4903 14.3547 11.3762 13.3609C10.5106 12.5922 9.94064 11.6469 9.77345 11.3547C9.6044 11.0625 9.75283 10.9078 9.89533 10.7641C10.0239 10.6344 10.1825 10.4219 10.3262 10.2547C10.4699 10.0875 10.52 9.96875 10.6184 9.77813C10.7169 9.5875 10.6669 9.42031 10.5919 9.27344C10.5169 9.12656 9.94957 7.65625 9.70997 7.07187C9.47252 6.5 9.23293 6.58281 9.05689 6.57187C8.88783 6.5625 8.69719 6.5625 8.50654 6.5625C8.3159 6.5625 8.00186 6.6375 7.73618 6.92969C7.4705 7.22188 6.70214 7.94375 6.70214 9.41406C6.70214 10.8844 7.76424 12.3063 7.90781 12.4969C8.05127 12.6875 9.9372 15.5906 12.8138 16.8828C13.5075 17.1797 14.0497 17.3594 14.4731 17.4953C15.1634 17.7219 15.7966 17.6891 16.2978 17.6125C16.8528 17.5266 18.0528 16.8969 18.2925 16.2141C18.5301 15.5312 18.5301 14.9469 18.455 14.7984C18.38 14.65 18.1894 14.5531 17.9669 14.4062Z" 
              fill="rgba(255, 255, 255, 0.9)"
            />
          </svg>
        </span>
      </a>
    </motion.div>
  );
};