"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type ContactFormProps = {
  telegramToken: string;
  telegramChatId: string;
};

export const ContactForm = ({ telegramToken, telegramChatId }: ContactFormProps) => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Phone validation - optional but if provided must be valid
    if (formData.phone.trim() && !/^\+?[\d\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus('submitting');

    try {
      const message = `
        New Message from Frozt Coolers Website:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        
        Message: ${formData.message}
      `;

      const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
      
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
      console.error('Error sending form data:', err);
    }
  };

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-sky-200 focus:border-sky-400'
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-sky-200 focus:border-sky-400'
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-sky-200 focus:border-sky-400'
            }`}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-sky-200 focus:border-sky-400'
            }`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <motion.button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors shadow-sm disabled:opacity-50"
          whileTap={{ scale: 0.97 }}
        >
          {formStatus === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            t('contact.form.submit')
          )}
        </motion.button>

        {formStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-green-100 text-green-700 rounded-lg text-center"
          >
            {t('contact.form.success')}
          </motion.div>
        )}

        {formStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-red-100 text-red-700 rounded-lg text-center"
          >
            {t('contact.form.error')}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}; 