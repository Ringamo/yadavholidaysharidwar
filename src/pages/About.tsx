import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, MapPin, Award, HeartHandshake, Compass } from 'lucide-react';

const About = () => {
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
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-primary">Our Story</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-8 leading-[0.9]"
            >
              About <br /> Yadav Holidays
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed"
            >
              Founded over 15 years ago in the holy city of Haridwar, we have evolved from a local pilgrimage specialist to a premier All India travel service provider.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-slate-900 tracking-tighter">Our Story</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Founded over 15 years ago in the holy city of Haridwar, Yadav Holidays has evolved from a local pilgrimage specialist to a premier All India travel service provider. 
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
              While our roots remain in the spiritual soil of Uttarakhand, our wings now span across the entire Indian subcontinent. From the desert sands of Rajasthan to the backwaters of Kerala, we bring the same level of trust, reliability, and local expertise to every corner of India.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-6">
              <div className="space-y-2">
                <h4 className="text-5xl font-bold text-primary tracking-tighter">10K+</h4>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Happy Travelers</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-5xl font-bold text-primary tracking-tighter">15+</h4>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Years Experience</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1590050752117-23a9d7fc6f8a?auto=format&fit=crop&q=80&w=800"
              alt="Haridwar"
              className="rounded-[3.5rem] shadow-2xl border border-slate-100"
            />
            <div className="absolute -bottom-10 -left-10 bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl">
              <p className="font-bold text-2xl italic tracking-tighter">"Trusted by Thousands"</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="bg-slate-50 rounded-[4rem] p-16 md:p-24 mb-32 border border-slate-100 shadow-inner">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tighter">Our Core Values</h2>
            <p className="text-slate-500 mt-4 text-lg">What makes us the preferred choice across India.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: HeartHandshake, title: 'Trust & Integrity', desc: 'Transparent pricing and honest advice for every traveler.' },
              { icon: ShieldCheck, title: 'Safety First', desc: 'Experienced drivers and well-maintained vehicles for all terrains.' },
              { icon: Award, title: 'Quality Service', desc: 'From luxury hotels to budget stays, we never compromise on quality.' },
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary mx-auto shadow-lg border border-slate-100">
                  <value.icon size={36} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
