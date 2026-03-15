import React from 'react';
import { motion } from 'motion/react';

const Gallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc6f8a?auto=format&fit=crop&q=80&w=800', title: 'Ganga Aarti Haridwar' },
    { url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800', title: 'Kedarnath Temple' },
    { url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800', title: 'Badrinath Shrine' },
    { url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800', title: 'Himalayan Trek' },
    { url: 'https://images.unsplash.com/photo-1622643124903-87f58694060b?auto=format&fit=crop&q=80&w=800', title: 'Mussoorie Hills' },
    { url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800', title: 'Our Fleet' },
    { url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800', title: 'Mountain Drive' },
    { url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800', title: 'Comfortable Travel' },
    { url: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc6f8a?auto=format&fit=crop&q=80&w=800', title: 'Rishikesh Ghats' },
  ];

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
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-primary">Visual Journey</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-8 leading-[0.9]"
            >
              Our <br /> Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed"
            >
              Capturing the extraordinary beauty of India and our journey with travelers. Every picture tells a story of adventure, spirituality, and comfort.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative h-96 overflow-hidden rounded-[2.5rem] shadow-sm cursor-pointer border border-slate-100"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
