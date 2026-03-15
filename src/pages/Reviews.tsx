import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS } from '../constants';
import ReviewCard from '../components/ReviewCard';
import { Star, MessageSquare } from 'lucide-react';

const Reviews = () => {
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
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-primary">Testimonials</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-8 leading-[0.9]"
            >
              Customer <br /> Reviews
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed"
            >
              Read what our happy travelers have to say about their experience with Yadav Holidays. We take pride in delivering exceptional service across India.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {/* Add more mock reviews for full page feel */}
          <ReviewCard review={{ id: '4', name: 'Sanjay Gupta', rating: 5, comment: 'The best taxi service in Haridwar. Very punctual and the driver knew all the shortcuts to avoid traffic.', date: '2023-12-10' }} />
          <ReviewCard review={{ id: '5', name: 'Meera Das', rating: 5, comment: 'Booked a family tour for Nainital. The hotels provided were excellent and the itinerary was well-planned.', date: '2024-01-05' }} />
        </div>

        <div className="mt-24 bg-primary text-white p-16 md:p-24 rounded-[3.5rem] text-center space-y-8 shadow-2xl">
          <MessageSquare className="mx-auto text-white opacity-20" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Have you traveled with us?</h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg">We value your feedback. Share your experience and help us improve our services.</p>
          <button className="bg-white text-primary btn-modern shadow-xl">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
