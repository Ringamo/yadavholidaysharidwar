import React from 'react';
import { motion } from 'motion/react';
import { TOUR_PACKAGES } from '../constants';
import TourCard from '../components/TourCard';

const Packages = () => {
  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <div className="bg-white py-32 mb-20 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-primary">Explore India</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-8 leading-[0.9]"
            >
              Tour <br /> Packages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed"
            >
              Handpicked travel experiences across the majestic landscapes of India. From the spiritual peaks of the Himalayas to the serene backwaters of the South.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Categories / Filter (Simple) */}
        <div className="flex flex-wrap gap-3 mb-20">
          {['All Tours', 'Char Dham', 'Rajasthan', 'Kerala', 'Goa', 'Himachal'].map((cat) => (
            <button
              key={cat}
              className="px-10 py-4 rounded-full bg-white border border-slate-100 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOUR_PACKAGES.map((pkg) => (
            <TourCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
