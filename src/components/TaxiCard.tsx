import React from 'react';
import { motion } from 'motion/react';
import { Users, Car, ShieldCheck } from 'lucide-react';
import { TaxiService } from '../types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
  service: TaxiService;
}

const TaxiCard: React.FC<Props> = ({ service }) => {
  const { t } = useTranslation();

  // Map taxi service IDs to translation keys
  const taxiKeyMap: Record<string, string> = {
    'sedan': 'sedan',
    'suv': 'suv',
    'tempo': 'tempo',
  };

  const key = taxiKeyMap[service.id];
  const translatedType = key ? t(`taxi.${key}.type`) : service.type;
  const translatedDesc = key ? t(`taxi.${key}.desc`) : service.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row group"
    >
      <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
        <img
          src={service.image}
          alt={translatedType}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-10 md:w-2/3 space-y-6 flex flex-col justify-center">
        <div className="flex justify-between items-start">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter">{translatedType}</h3>
          <div className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm">
            <Users size={12} />
            {service.capacity}
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{translatedDesc}</p>
        <div className="flex flex-wrap gap-6 pt-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <ShieldCheck size={18} className="text-primary" />
            <span>Verified Drivers</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <Car size={18} className="text-primary" />
            <span>AC/Non-AC Options</span>
          </div>
        </div>
        <div className="pt-4">
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-2xl text-sm font-bold btn-modern shadow-lg"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TaxiCard;
