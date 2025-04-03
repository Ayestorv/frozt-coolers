"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navbar } from "../../../../components/Navbar";
import { Footer } from "../../../../components/Footer";
import { WhatsAppButton } from "../../../../components/WhatsAppButton";
import { useTranslation } from '../../../../i18n';
import { LanguageDetector } from "../../../../components/LanguageDetector";

export default function ThermosProductPage() {
  const { t } = useTranslation();
  const params = useParams();
  const productId = params.id as string;
  
  // This would typically come from a database or API
  // For demo purposes, we'll create a static product
  const product = {
    id: productId,
    model: "TITANIC ICE - 40oz",
    price: 29.99,
    colors: ["Azul Navy", "Celeste", "Negro"],
    sizes: ["40oz"],
    features: [
      "Superior insulation technology",
      "Keeps drinks hot for 12+ hours",
      "Keeps drinks cold for 24+ hours",
      "Stainless steel construction",
      "BPA-free materials",
      "Leak-proof lid",
      "Sweat-proof exterior"
    ],
    description: "The TITANIC ICE 40oz thermos is our premium flagship model, designed to keep your beverages at the perfect temperature for extended periods. Whether you're hiking, camping, or just need a reliable thermos for your daily commute, the TITANIC ICE delivers exceptional performance.",
    imageSrc: "/images/products/titanic-ice-40oz.jpg",
    relatedProducts: [1, 2, 3]
  };

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
            <div className="mb-6">
              <Link 
                href="/thermoses"
                className="inline-flex items-center text-gray-200 hover:text-white transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className="w-5 h-5 mr-1"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" 
                    clipRule="evenodd" 
                  />
                </svg>
                {t('products.backToThermoses')}
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="p-6">
                  <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
                    <Image
                      src={product.imageSrc}
                      alt={product.model}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/images/thermos.jpg";
                      }}
                    />
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-4">{product.model}</h1>
                  
                  <div className="flex items-center mb-6">
                    <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                    <span className="text-green-400 ml-2">In Stock</span>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Description</h2>
                    <p className="text-gray-200">{product.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Available Colors</h2>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <span 
                          key={color} 
                          className="px-3 py-1 bg-white/20 rounded-full text-sm"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Size</h2>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span 
                          key={size} 
                          className="px-3 py-1 bg-white/20 rounded-full text-sm"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-2">Features</h2>
                    <ul className="list-disc list-inside text-gray-200">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 inline-flex items-center justify-center py-3 px-6 bg-sky-600/80 hover:bg-sky-500/80 text-white font-medium rounded-lg transition-all backdrop-blur-sm border border-sky-400/20 shadow-sm">
                      {t('products.addToCart')}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor" 
                        className="w-5 h-5 ml-2"
                      >
                        <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </button>
                    
                    <Link 
                      href={`https://wa.me/15551234567?text=I'm%20interested%20in%20the%20${encodeURIComponent(product.model)}%20thermos`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center py-3 px-6 bg-green-600/80 hover:bg-green-500/80 text-white font-medium rounded-lg transition-all backdrop-blur-sm border border-green-400/20 shadow-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                        />
                      </svg>
                      {t('hero.whatsapp')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
        <WhatsAppButton phoneNumber="15551234567" />
      </main>
    </>
  );
} 