'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from './Link';
import { IoMdFlame } from "react-icons/io";

const menuItems = [
  {
    name: "Kyan Latte",
    description: "Special coffee with whipped milk",
    price: "18 SAR",
    calories: "120",
    image: "/coffe-cub-kyan.webp",
    tags: ["Best Seller", "Special"]
  },
  {
    name: "Caramel Mocha",
    description: "Rich coffee with chocolate and caramel",
    price: "20 SAR", 
    calories: "180",
    image: "/coffe-cub-kyan.webp"
  },
  {
    name: "Spanish Latte",
    description: "Unique blend of Spanish coffee",
    price: "22 SAR",
    calories: "150",
    image: "/coffe-cub-kyan.webp"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <Image
            src="/logo.png"
            alt="Kyan Logo"
            width={80}
            height={80}
            className="mx-auto mb-4 md:mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 dark:text-white">Special Drinks Menu</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Discover a variety of unique drinks</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="relative h-32 md:h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transform scale-90 group-hover:scale-95 transition-transform duration-300"
                />
                <div className="absolute top-1 right-1 md:top-2 md:right-2 flex gap-1 md:gap-2">
                  {item.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#00BED6] text-white text-[10px] md:text-sm px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3 md:p-6">
                <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 dark:text-white">{item.name}</h3>
                <p className="text-xs md:text-base text-gray-600 dark:text-gray-400 mb-2 md:mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-[#00BED6] text-sm md:text-base font-bold">{item.price}</p>
                  <div className="flex items-center gap-1 text-xs md:text-sm text-amber-500">
                    <IoMdFlame className="w-4 h-4" />
                    <span>{item.calories} calories</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-6 md:mt-12"
        >
          <Link
            href="/menu"
            prefetch={true}
            className="inline-block bg-[#00BED6] text-white px-5 md:px-8 py-2 md:py-4 rounded-lg 
                     text-base md:text-xl font-bold hover:bg-[#00a8bd] hover:shadow-lg"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}