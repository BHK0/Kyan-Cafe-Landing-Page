'use client';

import { motion } from 'framer-motion';
import { Coffee, CupSoda, Apple, Cake } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: "Coffee",
    description: "We care about the details and select the best types of coffee beans to serve the best coffee"
  },
  {
    icon: CupSoda,
    title: "Refreshing Drinks",
    description: "Innovative carbonated drinks with distinctive flavors"
  },
  {
    icon: Apple,
    title: "Juice Blends",
    description: "Natural fruits are always a healthy choice, that's why they are included in Kyan's menu"
  },
  {
    icon: Cake,
    title: "Desserts",
    description: "We have multiple options of prepared desserts and ready-made items in the refrigerator"
  }
];

export default function Features() {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-4 md:p-6 rounded-xl
                          bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                          border border-gray-100 dark:border-gray-700
                          shadow-none dark:shadow-gray-900/30"
              >
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-lg" />
                    <div className="relative p-2 md:p-3 rounded-full bg-gradient-to-br from-cyan-50 to-white 
                                  dark:from-gray-800 dark:to-gray-700">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-cyan-600 dark:text-cyan-400" 
                           strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}