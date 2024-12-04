'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoMdFlame } from "react-icons/io";

export default function MenuCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md 
                 hover:shadow-lg"
    >
      <div className="relative h-32 md:h-48">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transform scale-90 group-hover:scale-95 transition-transform duration-300"
        />
        {item.tags && (
          <div className="absolute top-1 right-1 flex gap-1">
            {item.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-[#00BED6] text-white text-[10px] md:text-xs px-1.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-3 md:p-4">
        <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 dark:text-white">{item.name}</h3>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-[#00BED6] text-sm md:text-base font-bold">{item.price}</p>
          <div className="flex items-center gap-1 text-xs md:text-sm text-amber-500">
            <IoMdFlame className="w-4 h-4" />
            <span>{item.calories} cal</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}