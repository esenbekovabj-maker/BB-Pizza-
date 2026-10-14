import React, { useState } from 'react';
import {
  ShoppingBag,
  MessageCircle,
  MapPin,
  Menu as MenuIcon,
  X,
  Globe,
} from 'lucide-react';
import { WHATSAPP_PHONE_RAW, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenZones: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onNavigateSection,
  onOpenZones,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ru', label: 'РУ', flag: '🇷🇺' },
    { code: 'ky', label: 'КЫР', flag: '🇰🇬' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-3">
        {/* Zone 1: Mobile toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
            className="md:hidden w-9 h-9 rounded-lg text-stone-700 hover:bg-stone-100 flex items-center justify-center cursor-pointer transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-2xl font-black tracking-tight text-stone-900 whitespace-nowrap shrink-0 group"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-600 text-white font-black text-xl shadow-xs group-hover:bg-amber-500 transition-colors">
              BB
            </span>
            <span className="font-extrabold text-stone-900">PIZZA</span>
          </a>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold text-stone-600">
          <button
            type="button"
            onClick={() => onNavigateSection('menu')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer"
          >
            {t.menu}
          </button>

          <button
            type="button"
            onClick={onOpenZones}
            className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>{t.deliveryZones}</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateSection('about')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer"
          >
            {t.aboutBakery}
          </button>
        </nav>

        {/* Zone 3: Language Switcher, WhatsApp Direct & Cart */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher Desktop */}
          <div className="hidden sm:flex items-center bg-stone-100 p-1 rounded-lg border border-stone-200 text-xs font-bold">
            <Globe className="w-3.5 h-3.5 text-stone-500 mx-1.5" />
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 rounded transition-all cursor-pointer ${
                  lang === l.code
                    ? 'bg-white text-stone-950 shadow-xs font-black'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title={l.label}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Direct WhatsApp Callout */}
          <a
            href={`https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(
              lang === 'ky'
                ? 'Саламатсызбы, BB Pizza! Буйрутма берейин дедим эле.'
                : lang === 'en'
                ? 'Hello, BB Pizza! I would like to place an order.'
                : 'Здравствуйте, BB Pizza! Хочу сделать заказ.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
            <span>{WHATSAPP_PHONE_FORMATTED}</span>
          </a>

          {/* Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={t.cart}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-all shadow-xs active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>
              {cartCount > 0 ? (
                <>
                  {t.cart} · <span className="tabular-nums font-black">{cartTotal} {t.currency}</span>
                </>
              ) : (
                t.cart
              )}
            </span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-black bg-amber-500 text-stone-950 rounded-full tabular-nums">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3 animate-fade-in shadow-xl">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <span className="text-xs font-bold text-stone-500 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-stone-400" />
              Тил / Язык / Language:
            </span>
            <div className="flex gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer font-bold ${
                    lang === l.code
                      ? 'bg-white text-stone-950 shadow-xs font-black'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateSection('menu');
            }}
            className="w-full text-left py-2.5 px-3 text-sm font-bold text-stone-900 hover:bg-stone-50 rounded-lg cursor-pointer flex items-center justify-between"
          >
            <span>{t.menu}</span>
            <span className="text-xs text-amber-600">→</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenZones();
            }}
            className="w-full text-left py-2.5 px-3 text-sm font-semibold text-stone-700 hover:bg-stone-50 rounded-lg cursor-pointer flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>{t.deliveryZones}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateSection('about');
            }}
            className="w-full text-left py-2.5 px-3 text-sm font-semibold text-stone-700 hover:bg-stone-50 rounded-lg cursor-pointer flex items-center gap-2"
          >
            <span>{t.aboutBakery}</span>
          </button>

          <a
            href={`https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(
              lang === 'ky'
                ? 'Саламатсызбы, BB Pizza! Буйрутма берейин дедим эле.'
                : lang === 'en'
                ? 'Hello, BB Pizza! I would like to place an order.'
                : 'Здравствуйте, BB Pizza! Хочу сделать заказ.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 px-4 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>{t.orderWhatsApp} ({WHATSAPP_PHONE_FORMATTED})</span>
          </a>
        </div>
      )}
    </header>
  );
};
