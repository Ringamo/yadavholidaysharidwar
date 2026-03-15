import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl p-1 shadow-lg">
                <img src="https://i.imgur.com/8Q9Z8yM.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-2xl tracking-tighter">Yadav Holidays</h3>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">All India Service</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted travel partner for Pan-India tours. Specializing in Char Dham Yatra, All India taxi services, and customized heritage tours across the nation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-primary text-[10px]">Quick Links</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition-colors">Tour Packages</Link></li>
              <li><Link to="/taxi" className="hover:text-primary transition-colors">Taxi Services</Link></li>
              <li><Link to="/char-dham" className="hover:text-primary transition-colors">Char Dham Yatra</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-primary text-[10px]">Popular Tours</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li><Link to="/packages" className="hover:text-primary transition-colors">Kedarnath Yatra</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition-colors">Badrinath Special</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition-colors">Mussoorie Tour</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition-colors">Nainital Getaway</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition-colors">Rishikesh Adventure</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-primary text-[10px]">Contact Us</h4>
            <ul className="space-y-6 text-slate-300 text-sm font-medium">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={18} />
                </div>
                <span className="leading-relaxed">Jassa Ram Road, Near Har Ki Pauri, Haridwar, Uttarakhand - 249401</span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={18} />
                </div>
                <span>+91 94120 72727</span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <span>yadavholidaysharidwar@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Yadav Holidays Haridwar. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
