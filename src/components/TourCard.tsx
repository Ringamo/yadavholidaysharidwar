import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { TourPackage } from '../types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
  pkg: TourPackage;
}

const TourCard: React.FC<Props> = ({ pkg }) => {
  const { t } = useTranslation();

  // Map package IDs to translation keys
  const pkgKeyMap: Record<string, string> = {
    'char-dham-yatra': 'charDham',
    'rajasthan-royal': 'rajasthan',
    'kerala-backwaters': 'kerala',
    'kedarnath-yatra': 'kedarnath',
    'goa-beach': 'goa',
  };

  const key = pkgKeyMap[pkg.id];
  const translatedTitle = key ? t(`packages.${key}.title`) : pkg.title;
  const translatedDuration = key ? t(`packages.${key}.duration`) : pkg.duration;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-modern group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={pkg.image}
          alt={translatedTitle}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
          {translatedDuration}
        </div>
      </div>
      <div className="p-8 space-y-6">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">{translatedTitle}</h3>
          {pkg.price && (
            <div className="text-right">
              <p className="text-[10px] uppercase font-bold text-slate-400">{t('packages.from')}</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{pkg.price}</p>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {pkg.highlights.slice(0, 3).map((item, idx) => (
            <span key={idx} className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <div className="pt-4">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center bg-primary text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg"
          >
            {t('packages.viewPackage')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
