import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

interface Props {
  review: Review;
}

const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 relative"
    >
      <Quote className="absolute top-10 right-10 text-primary/5 dark:text-white/5" size={80} />
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < review.rating ? "fill-primary text-primary" : "text-slate-200 dark:text-slate-700"}
          />
        ))}
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-lg italic mb-8 leading-relaxed relative z-10">"{review.comment}"</p>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{review.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
