import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Award, HeartHandshake, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TOUR_PACKAGES, REVIEWS } from '../constants';
import TourCard from '../components/TourCard';
import ReviewCard from '../components/ReviewCard';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center m-4 md:m-6 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1920"
            alt="Himalayan Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 hero-gradient"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white space-y-10 pt-32 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{t('hero.badge')}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tighter">
              {t('hero.title1')} <br />
              <span className="text-white">{t('hero.title2')}</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-90">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 pt-10">
            <Link
              to="/contact"
              className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg btn-modern shadow-xl"
            >
              {t('hero.cta')}
            </Link>
            <a
              href="tel:+919412072727"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-3"
            >
              <Phone size={24} />
              {t('hero.call')}
            </a>
          </div>

          {/* Stats Floating Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-16">
            {[
              { label: t('stats.customers'), value: '10K+' },
              { label: t('stats.experience'), value: '15+' },
              { label: t('stats.destinations'), value: '100+' },
              { label: t('stats.rating'), value: '4.9' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-[2rem] p-6 text-slate-900 dark:text-white border border-white/20 dark:border-slate-800">
                <p className="text-3xl font-bold mb-1 tracking-tighter">{stat.value}</p>
                <p className="text-[10px] uppercase font-bold opacity-50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">{t('intro.badge')}</p>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">
                {t('intro.title')}
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-md text-lg">
              {t('intro.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOUR_PACKAGES.slice(0, 3).map((pkg) => (
              <TourCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Our Best Offers</p>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">
                Featured Tour Packages
              </h2>
            </div>
            <Link
              to="/packages"
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              View All Packages <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOUR_PACKAGES.slice(0, 3).map((pkg) => (
              <TourCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Grid Style */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">{t('whyChoose.title')}</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">{t('whyChoose.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3rem] space-y-6 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-700">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('whyChoose.expTitle')}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{t('whyChoose.expDesc')}</p>
            </div>
            <div className="bg-primary text-white p-12 rounded-[3.5rem] space-y-6 shadow-2xl relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-2xl font-bold">{t('whyChoose.custTitle')}</h3>
              <p className="text-white/80 leading-relaxed">{t('whyChoose.custDesc')}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3rem] space-y-6 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-700">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('whyChoose.taxiTitle')}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{t('whyChoose.taxiDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1 space-y-8 text-center lg:text-left">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{t('footer.aboutTitle')}</p>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">What Our Travelers Say</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg">Real stories from people who explored India with us.</p>
              <Link to="/reviews" className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold hover:gap-4 transition-all">
                Read all reviews <ArrowRight size={20} />
              </Link>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {REVIEWS.slice(0, 2).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry Form */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-16 md:p-24 text-white space-y-10">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Plan Your Dream <br /><span className="text-white opacity-40 italic">Indian Trip</span></h2>
              <p className="text-white/80 text-lg">Fill out the form and our travel experts will get back to you within 24 hours with a customized itinerary.</p>
              <ul className="space-y-6 pt-4">
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-primary">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold">Customized Itineraries</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-primary">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold">Best Price Guarantee</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-primary">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold">24/7 On-trip Support</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 bg-white dark:bg-slate-900 p-16 md:p-24 border-l border-slate-100 dark:border-slate-800">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 outline-none focus:border-primary font-medium text-slate-900 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Phone Number</label>
                    <input type="tel" placeholder="+91 94120 72727" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 outline-none focus:border-primary font-medium text-slate-900 dark:text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 outline-none focus:border-primary font-medium text-slate-900 dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Select Package</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 outline-none focus:border-primary font-bold text-slate-900 dark:text-white appearance-none">
                    <option>Char Dham Yatra</option>
                    <option>Taxi Service</option>
                    <option>Rajasthan Heritage</option>
                    <option>Kerala Backwaters</option>
                    <option>Customized Tour</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Your Message</label>
                  <textarea placeholder="Tell us about your travel plans..." rows={3} className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 outline-none focus:border-primary font-medium text-slate-900 dark:text-white"></textarea>
                </div>
                <button className="w-full bg-primary text-white btn-modern text-lg shadow-lg">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden m-4 md:m-6 rounded-[4rem]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1622643124903-87f58694060b?auto=format&fit=crop&q=80&w=1920"
            alt="Himalayan Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Ready to Start Your Journey?</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">Contact us today for a customized tour plan or taxi booking across India.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="bg-white text-primary px-12 py-5 rounded-2xl font-bold text-lg btn-modern shadow-xl"
            >
              Enquire Now
            </Link>
            <a
              href="tel:+919876543210"
              className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3"
            >
              <Phone size={24} />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
