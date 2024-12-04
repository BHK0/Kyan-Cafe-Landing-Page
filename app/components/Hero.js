'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden 
                      bg-gray-900">
      <div className="container mx-auto px-4 z-10 h-[100svh] md:h-auto 
                      flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center w-full safe-area-inset-padding"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 md:mb-8 flex justify-center"
          >
            <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] relative">
              <Image
                src="/logo.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Kyan Logo"
                className="animate-float object-contain"
                priority
              />
            </div>
          </motion.div>

          <div className="max-h-[60vh] md:max-h-none overflow-hidden">
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              The Right Destination to Create
              <span className="text-[#00BED6] block mt-2 md:mt-8">The Perfect Experience</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto"
            >
              We offer you a unique coffee experience with a diverse selection of distinctive beverages
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 
                        px-4 pb-safe"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full md:w-auto bg-[#00BED6] text-white px-6 py-3 md:py-4 rounded-lg 
                         text-lg md:text-xl font-bold transition-all hover:bg-[#00a8bd]"
              >
                View Menu
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#locations"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#locations')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full md:w-auto border-2 border-[#00BED6] text-[#00BED6] 
                         dark:text-white px-6 py-3 md:py-4 rounded-lg text-lg md:text-xl font-bold 
                         transition-all hover:bg-[#00BED6] hover:text-white"
              >
                Our Locations
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Coffee background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-5 h-5 md:w-6 md:h-6 text-gray-400 dark:text-gray-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
}