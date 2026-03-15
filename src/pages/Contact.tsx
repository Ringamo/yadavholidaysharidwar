import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

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
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-primary">Get in Touch</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-8 leading-[0.9]"
            >
              Contact <br /> Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed"
            >
              Have questions? We're here to help you plan your perfect trip across India. Reach out to us for tour bookings, taxi services, or any travel-related queries.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tighter mb-8">Get in Touch</h2>
              <p className="text-slate-500 text-lg mb-12">
                Reach out to us for tour bookings, taxi services, or any travel-related queries. Our team is available 24/7 to assist you from our base in Haridwar.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center text-primary shrink-0 border border-slate-100 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Phone Number</h4>
                    <p className="text-slate-500">+91 94120 72727</p>
                    <p className="text-slate-500">+91 98372 72727</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center text-primary shrink-0 border border-slate-100 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Email Address</h4>
                    <p className="text-slate-500">yadavholidaysharidwar@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center text-primary shrink-0 border border-slate-100 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Our Office</h4>
                    <p className="text-slate-500">Jassa Ram Road, Near Har Ki Pauri, Haridwar, Uttarakhand - 249401</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-80 bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 relative shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 text-primary opacity-50" size={40} />
                  <p className="text-xs uppercase font-bold tracking-widest">Google Maps Integration</p>
                </div>
              </div>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d78.16!3d29.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzAwLjAiTiA3OMKwMDknMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full border-0 grayscale opacity-40"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl border border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900 tracking-tighter mb-10">Send an Inquiry</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Full Name</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary outline-none transition-all font-medium"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-red-500">Name is required</span>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Phone Number</label>
                  <input
                    {...register('phone', { required: true })}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary outline-none transition-all font-medium"
                    placeholder="+91 00000 00000"
                  />
                  {errors.phone && <span className="text-xs text-red-500">Phone is required</span>}
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Email Address</label>
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary outline-none transition-all font-medium"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Interested In</label>
                <select
                  {...register('interest')}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary outline-none transition-all font-medium appearance-none"
                >
                  <option>Char Dham Yatra</option>
                  <option>Taxi Service</option>
                  <option>Rajasthan Heritage</option>
                  <option>Kerala Backwaters</option>
                  <option>Customized Plan</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Your Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary outline-none transition-all font-medium"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white btn-modern text-lg"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
