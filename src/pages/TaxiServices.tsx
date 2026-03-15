import React from 'react';
import { motion } from 'motion/react';
import { TAXI_SERVICES } from '../constants';
import TaxiCard from '../components/TaxiCard';
import { ShieldCheck, Clock, MapPin, Award } from 'lucide-react';

const TaxiServices = () => {
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
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-primary">Premium Fleet</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-8 leading-[0.9]"
            >
              All India <br /> Taxi Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed"
            >
              Reliable, safe, and comfortable transportation from Haridwar to any destination in India. Our experienced drivers ensure a smooth journey across all terrains.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
          {[
            { icon: ShieldCheck, title: 'Safe Drivers', desc: 'Experienced in mountains' },
            { icon: Clock, title: '24/7 Support', desc: 'Always here for you' },
            { icon: MapPin, title: 'Local Knowledge', desc: 'Best routes guaranteed' },
            { icon: Award, title: 'Clean Vehicles', desc: 'Sanitized and comfortable' },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary mx-auto shadow-sm">
                <item.icon size={28} />
              </div>
              <h4 className="font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Vehicle List */}
        <div className="space-y-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tighter text-center mb-16">Our Fleet</h2>
          <div className="grid grid-cols-1 gap-12">
            {TAXI_SERVICES.map((service) => (
              <TaxiCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Airport Transfers</h3>
            <p className="text-slate-500 leading-relaxed">Reliable pickup and drop services from Dehradun (Jolly Grant) Airport to Haridwar, Rishikesh, and beyond.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Local Sightseeing</h3>
            <p className="text-slate-500 leading-relaxed">Explore Har Ki Pauri, Mansa Devi, Chandi Devi, and Rishikesh with our knowledgeable local drivers.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Char Dham Taxi</h3>
            <p className="text-slate-500 leading-relaxed">Specialized taxi services for the complete Char Dham circuit with drivers experienced in high-altitude driving.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiServices;
