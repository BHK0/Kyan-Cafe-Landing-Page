'use client';

import { motion } from 'framer-motion';
import { FaTiktok, FaSnapchatGhost, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@kyancafe',
    icon: <FaTiktok className="w-8 h-8" />
  },
  {
    name: 'Snapchat',
    url: 'https://www.snapchat.com/add/kyancafe',
    icon: <FaSnapchatGhost className="w-8 h-8" />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kyancafe/',
    icon: <FaInstagram className="w-8 h-8" />
  },
  {
    name: 'X',
    url: 'https://x.com/KYANcafe',
    icon: <FaTwitter className="w-8 h-8" />
  }
];

export default function SocialMedia() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Follow Us On Social Media</h2>
          <p className="text-gray-600 dark:text-gray-300">Stay updated with our latest offers and new products</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl 
                       shadow-md hover:shadow-xl hover:-translate-y-1 
                       text-gray-600 dark:text-gray-300 hover:text-[#00BED6] dark:hover:text-[#00BED6]"
            >
              {social.icon}
              <span className="mt-3 font-medium">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 