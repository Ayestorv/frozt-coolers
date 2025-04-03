"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { useTranslation } from '../../i18n';
import { LanguageDetector } from "../../components/LanguageDetector";

export default function ThermosesPage() {
  const { t } = useTranslation();
  
  // Sample thermos products data based on the screenshots
  const thermosProducts = [
    {
      id: 1,
      model: "FREEZER - 30oz",
      price: 17.99,
      colors: ["Azul Navy", "Blanco", "Negro"],
      imageSrc: "/images/products/freezer-30oz.jpg"
    },
    {
      id: 2,
      model: "BLIZZARD - 20oz",
      price: 14.99,
      colors: ["Azul Navy", "Blanco", "Negro"],
      imageSrc: "/images/products/blizzard-20oz.jpg"
    },
    {
      id: 3,
      model: "TITANIC ICE - 40oz",
      price: 29.99,
      colors: ["Azul Navy", "Celeste", "Negro"],
      imageSrc: "/images/products/titanic-ice-40oz.jpg"
    },
    {
      id: 4,
      model: "POLAR BEAR - 32oz",
      price: 21.99,
      colors: ["Azul Navy", "Blanco", "Negro"],
      imageSrc: "/images/products/polar-bear-32oz.jpg"
    },
    {
      id: 5,
      model: "ICY WIND - 18oz",
      price: 17.99,
      colors: ["Azul Navy", "Blanco", "Negro"],
      imageSrc: "/images/products/icy-wind-18oz.jpg"
    },
    {
      id: 6,
      model: "SNOWBALL - 12oz",
      price: 14.99,
      colors: ["Azul Navy", "Blanco", "Negro"],
      imageSrc: "/images/products/snowball-12oz.jpg"
    },
    {
      id: 7,
      model: "GEISER - 14oz",
      price: 17.99,
      colors: ["Negro", "Blanco", "Azul"],
      imageSrc: "/images/products/geiser-14oz.jpg"
    },
    {
      id: 8,
      model: "DOG BOWL 32oz",
      price: 24.99,
      colors: ["Rojo", "Rosado"],
      imageSrc: "/images/products/dog-bowl-32oz.jpg"
    },
    {
      id: 9,
      model: "ICEBERG 40oz",
      price: 24.99,
      colors: ["Negro", "Azul", "Navy", "Rojo"],
      imageSrc: "/images/products/iceberg-40oz.jpg"
    },
    {
      id: 10,
      model: "Titanic Ice v2 (40oz) antiderrame",
      price: 24.99,
      colors: ["Crema", "Lila", "Blanco"],
      imageSrc: "/images/products/titanic-ice-v2-40oz.jpg"
    },
    {
      id: 11,
      model: "Icicle (24oz)",
      price: 19.99,
      colors: ["Azul", "Navy", "Blanco", "Negro"],
      imageSrc: "/images/products/icicle-24oz.jpg"
    },
    {
      id: 12,
      model: "Beer Tank",
      price: 11.99,
      colors: ["Azul Navy"],
      imageSrc: "/images/products/beer-tank.jpg"
    },
    {
      id: 13,
      model: "KIDS - 14oz",
      price: 14.99,
      designs: ["Dinosaurios", "Unicornio"],
      imageSrc: "/images/products/kids-14oz.jpg"
    }
  ];

  // Accessories
  const accessories = [
    {
      id: 101,
      model: "Tapa con Imán (18oz, 32oz, 24oz, 40oz)",
      price: 7.49,
      description: "Con la compra de cualquier modelo",
      imageSrc: "/images/accessories/tapa-con-iman.jpg"
    },
    {
      id: 102,
      model: "Tapa enganchable (18oz, 32oz)",
      price: 3.49,
      description: "Reemplazo de tapa para modelos",
      imageSrc: "/images/accessories/tapa-enganchable.jpg"
    },
    {
      id: 103,
      model: "Tapa de rosca (18oz, 32oz)",
      price: 3.49,
      description: "Reemplazo de tapa para modelos",
      imageSrc: "/images/accessories/tapa-de-rosca.jpg"
    },
    {
      id: 104,
      model: "Tapa con carrizo (18oz, 32oz)",
      price: 3.49,
      description: "Reemplazo de tapa para modelos",
      imageSrc: "/images/accessories/tapa-con-carrizo.jpg"
    },
    {
      id: 105,
      model: "Tapa VIP magnética (12oz, 20oz, 30oz)",
      price: 3.99,
      description: "Tapa VIP para modelos: Snow...",
      imageSrc: "/images/accessories/tapa-vip-magnetica.jpg"
    },
    {
      id: 106,
      model: "Tapa transparente sellada (12oz, 20oz, 30oz)",
      price: 1.99,
      description: "Reemplazo de tapa para modelos",
      imageSrc: "/images/accessories/tapa-transparente-sellada.jpg"
    },
    {
      id: 107,
      model: "Tapa transparente (12oz, 20oz, 30oz)",
      price: 1.99,
      description: "Reemplazo de tapa para los modelos",
      imageSrc: "/images/accessories/tapa-transparente.jpg"
    },
    {
      id: 108,
      model: "Mochila con strap y bolsillos (modelos)",
      price: 9.99,
      colors: ["Lila", "Celeste", "Rosado", "Negro"],
      imageSrc: "/images/accessories/mochila-con-strap.jpg"
    },
    {
      id: 109,
      model: "Personalizados a láser",
      price: 4.00,
      description: "Valor 1 cara: $4.00 Valor 2 caras: $7.00",
      imageSrc: "/images/accessories/personalizados-laser.jpg"
    }
  ];

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
                {t('products.thermoses.title')}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                {t('products.thermoses.description')}
              </p>
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-6">
              {t('products.thermosesPage.thermosModels')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {thermosProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 bg-white overflow-hidden">
                    <Image
                      src={product.imageSrc}
                      alt={product.model}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/images/thermos.jpg";
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">Modelo: {product.model}</h3>
                    <p className="text-sm mb-2">Valor: ${product.price.toFixed(2)}</p>
                    {product.colors && (
                      <p className="text-sm text-gray-200">
                        Colores: {product.colors.join(' ')}
                      </p>
                    )}
                    {product.designs && (
                      <p className="text-sm text-gray-200">
                        Diseños: {product.designs.join(' ')}
                      </p>
                    )}
                    
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      <Link 
                        href={`/products/thermos/${product.id}`}
                        className="flex-1 inline-flex items-center justify-center py-2 px-4 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition-all backdrop-blur-sm border border-white/10 shadow-sm"
                      >
                        {t('products.viewProduct')}
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
                      </Link>
                      
                      <button className="flex-1 inline-flex items-center justify-center py-2 px-4 bg-sky-600/80 hover:bg-sky-500/80 text-white font-medium rounded-lg transition-all backdrop-blur-sm border border-sky-400/20 shadow-sm">
                        {t('products.addToCart')}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor" 
                          className="w-5 h-5 ml-1"
                        >
                          <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {t('products.thermosesPage.accessories')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {accessories.map((accessory, index) => (
                <motion.div
                  key={accessory.id}
                  className="flex flex-col overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 bg-white overflow-hidden">
                    <Image
                      src={accessory.imageSrc}
                      alt={accessory.model}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/images/accessory-placeholder.jpg";
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{accessory.model}</h3>
                    <p className="text-sm mb-1">Valor: ${accessory.price.toFixed(2)}</p>
                    {accessory.description && (
                      <p className="text-sm text-gray-200 mb-2">
                        {accessory.description}
                      </p>
                    )}
                    {accessory.colors && (
                      <p className="text-sm text-gray-200">
                        Colores: {accessory.colors.join(' ')}
                      </p>
                    )}
                    
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      <Link 
                        href={`/products/accessories/${accessory.id}`}
                        className="flex-1 inline-flex items-center justify-center py-2 px-4 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition-all backdrop-blur-sm border border-white/10 shadow-sm"
                      >
                        {t('products.viewProduct')}
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
                      </Link>
                      
                      <button className="flex-1 inline-flex items-center justify-center py-2 px-4 bg-sky-600/80 hover:bg-sky-500/80 text-white font-medium rounded-lg transition-all backdrop-blur-sm border border-sky-400/20 shadow-sm">
                        {t('products.addToCart')}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor" 
                          className="w-5 h-5 ml-1"
                        >
                          <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
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
            </div>
          </div>
        </section>
        
        <Footer />
        <WhatsAppButton phoneNumber="15551234567" />
      </main>
    </>
  );
} 