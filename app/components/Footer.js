'use client';

import { motion } from 'framer-motion';
import { LocationIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Franchise Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#00BED6] mb-4">Franchise Requests</h3>
            <div>
              <p className="font-semibold mb-2">Within KSA and GCC Countries</p>
              <p className="text-gray-300">0501436577</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Rest of the World</p>
              <p className="text-gray-300">971562033553+</p>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#00BED6] mb-4">Working Hours</h3>
            <div>
              <p className="font-semibold mb-2">Kyan Branches</p>
              <p className="text-gray-300">24 hours all week</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Management Office Qassim - Unaizah</p>
              <p className="text-gray-300">Sunday to Thursday</p>
              <p className="text-gray-300">9 AM to 5 PM</p>
              <p className="text-gray-300">Saturday 12 PM to 5 PM</p>
              <a
                href="https://maps.app.goo.gl/Sh18p5Pm6HRnzbXq7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-[#00BED6] hover:text-[#00a8bd] transition-colors"
              >
                <LocationIcon />
                <span>Management Location</span>
              </a>
            </div>
          </motion.div>

          {/* Company Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#00BED6] mb-4">Kyan Power Trading Company</h3>
            <div className="space-y-2 text-gray-300">
              <p>Registration Number: 1128183956</p>
              <p>Tax Number: 310874375800003</p>
              <p>Address: Unaizah - City Center - King Abdulaziz</p>
              <p>Postal Code: 56219</p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#00BED6] mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Complaints or Suggestions</p>
                <p className="text-gray-300">920011100</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Customer Service</p>
                <p className="text-gray-300">cs@kyancafe.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="dir-rtl mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Kyan Cafe. All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  );
}