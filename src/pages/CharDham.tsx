import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Calendar, Info, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CharDham = () => {
  const itinerary = [
    { day: 'Day 1', title: 'Haridwar to Barkot', desc: 'Drive to Barkot via Mussoorie. Overnight stay at Barkot.' },
    { day: 'Day 2', title: 'Barkot to Yamunotri & Back', desc: 'Trek to Yamunotri Temple, holy dip in Jamunabai Kund.' },
    { day: 'Day 3', title: 'Barkot to Uttarkashi', desc: 'Drive to Uttarkashi. Visit Kashi Vishwanath Temple.' },
    { day: 'Day 4', title: 'Uttarkashi to Gangotri & Back', desc: 'Drive to Gangotri, holy dip in Bhagirathi River.' },
    { day: 'Day 5', title: 'Uttarkashi to Guptkashi', desc: 'Drive to Guptkashi via Tehri Dam.' },
    { day: 'Day 6', title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag/Gaurikund and trek to Kedarnath.' },
    { day: 'Day 7', title: 'Kedarnath to Guptkashi', desc: 'Early morning Darshan and trek back to Gaurikund.' },
    { day: 'Day 8', title: 'Guptkashi to Badrinath', desc: 'Drive to Badrinath via Joshimath.' },
    { day: 'Day 9', title: 'Badrinath to Rudraprayag', desc: 'Morning Darshan and visit Mana Village. Drive to Rudraprayag.' },
    { day: 'Day 10', title: 'Rudraprayag to Haridwar', desc: 'Drive back to Haridwar via Rishikesh.' },
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
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-primary">Sacred Journey</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-8 leading-[0.9]"
            >
              Char Dham <br /> Yatra 2026
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed"
            >
              The most sacred pilgrimage in India. Experience the divine journey to Yamunotri, Gangotri, Kedarnath, and Badrinath with our expert guidance and comfortable services.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-20">
            <section>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8">Overview</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                The Char Dham Yatra is a spiritual journey to the four most sacred shrines in the Indian Himalayas. It is believed that every Hindu should perform this pilgrimage at least once in their lifetime to attain Moksha (salvation).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Yamunotri - Source of Yamuna River',
                  'Gangotri - Source of Ganga River',
                  'Kedarnath - Lord Shiva\'s Abode',
                  'Badrinath - Lord Vishnu\'s Abode',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-primary" />
                    <span className="font-bold text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tighter mb-12">Detailed Itinerary</h2>
              <div className="space-y-10">
                {itinerary.map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      {i !== itinerary.length - 1 && <div className="w-px h-full bg-slate-200 my-4"></div>}
                    </div>
                    <div className="pb-10">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.day}: {item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-10">
              {/* Booking Card */}
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 tracking-tighter mb-2">Book Your Yatra</h3>
                <p className="text-slate-400 text-sm mb-8">Starting from ₹28,500 per person</p>
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 text-slate-600">
                    <Calendar size={20} className="text-primary" />
                    <span className="font-medium">Best Time: May to Oct</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <MapPin size={20} className="text-primary" />
                    <span className="font-medium">Pickup: Haridwar / Dehradun</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <Info size={20} className="text-primary" />
                    <span className="font-medium">Includes: Hotel, Cab, Meals</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="block w-full bg-primary text-white text-center py-5 rounded-2xl font-bold btn-modern"
                >
                  Plan My Yatra
                </Link>
                <a
                  href="tel:+919876543210"
                  className="block w-full mt-4 border border-slate-200 text-slate-900 text-center py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={18} className="text-primary" />
                  Call for Inquiry
                </a>
              </div>

              {/* Tips */}
              <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Info className="text-primary" size={24} />
                  Travel Tips
                </h4>
                <ul className="space-y-4 text-slate-500 font-medium">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    Carry warm clothes even in summer.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    Get your medical fitness certificate.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    Biometric registration is mandatory.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    Carry basic medicines and rain gear.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharDham;
