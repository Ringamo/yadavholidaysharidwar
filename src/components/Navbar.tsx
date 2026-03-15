import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Moon, Sun, Languages } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.packages'), path: '/packages' },
    { name: t('nav.taxi'), path: '/taxi' },
    { name: t('nav.charDham'), path: '/char-dham' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl p-1 shadow-lg overflow-hidden border border-slate-100 shrink-0">
               <img src="https://i.imgur.com/8Q9Z8yM.png" alt="Yadav Holidays Logo" className="w-full h-full object-contain" />
            </div>
            <div className={cn("flex flex-col", isScrolled ? "text-slate-900 dark:text-white" : "text-white")}>
              <span className="font-bold text-xl md:text-2xl tracking-tighter leading-none">Yadav Holidays</span>
              <span className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase font-bold opacity-60">All India Service</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-[10px] uppercase tracking-widest font-bold transition-all hover:opacity-100',
                  isScrolled ? 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white' : 'text-white/70 hover:text-white',
                  location.pathname === link.path ? (isScrolled ? 'text-slate-900 dark:text-white' : 'text-white') : ''
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <button
                onClick={toggleLanguage}
                className={cn(
                  "p-2 rounded-xl transition-all hover:bg-slate-100 dark:hover:bg-slate-800",
                  isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                )}
                title="Switch Language"
              >
                <Languages size={20} />
              </button>
              <button
                onClick={toggleTheme}
                className={cn(
                  "p-2 rounded-xl transition-all hover:bg-slate-100 dark:hover:bg-slate-800",
                  isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                )}
                title="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>

            <Link
              to="/contact"
              className={cn(
                "px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl",
                isScrolled ? "bg-primary text-white" : "bg-white text-slate-900"
              )}
            >
              {t('nav.planTrip')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={cn(isScrolled ? 'text-slate-900 dark:text-white' : 'text-white')}
            >
              <Languages size={24} />
            </button>
            <button
              onClick={toggleTheme}
              className={cn(isScrolled ? 'text-slate-900 dark:text-white' : 'text-white')}
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(isScrolled ? 'text-slate-900 dark:text-white' : 'text-white')}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 bg-white dark:bg-slate-950 z-[60] transition-all duration-500 ease-in-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl p-1 shadow-md overflow-hidden border border-slate-100 dark:border-slate-800">
               <img src="https://i.imgur.com/8Q9Z8yM.png" alt="Yadav Holidays Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tighter dark:text-white">Yadav Holidays</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-900 dark:text-white">
            <X size={32} />
          </button>
        </div>
        <div className="flex-1 px-8 py-12 space-y-6 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-4xl font-bold text-slate-900 dark:text-white tracking-tighter hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="p-8 border-t border-slate-100 dark:border-slate-800">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-primary text-white text-center py-6 rounded-2xl font-bold text-xl shadow-lg"
          >
            {t('nav.planTrip')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
