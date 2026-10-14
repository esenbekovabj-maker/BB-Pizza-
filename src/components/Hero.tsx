import React from 'react';
import {
  ArrowDown,
  ShieldCheck,
  Clock,
  Flame,
  MessageCircle,
  MapPin,
  Sparkles,
} from 'lucide-react';
import heroPizzaImg from '../assets/images/hero_bb_crispy_pizza_1791722246313.jpg';
import { WHATSAPP_PHONE_RAW, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onScrollToMenu: () => void;
  onOpenZones: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToMenu, onOpenZones }) => {
  const { lang, t } = useLanguage();

  const whatsAppDirectUrl = `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(
    lang === 'ky'
      ? 'Саламатсызбы, BB Pizza! Ысык пиццага буйрутма берейин дедим эле.'
      : lang === 'en'
      ? 'Hello, BB Pizza! I would like to order fresh hot pizza.'
      : 'Здравствуйте, BB Pizza! Хочу заказать свежую горячую пиццу.'
  )}`;

  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100 pt-8 pb-14 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-amber-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>{t.cityBishkek}</span>
              <span aria-hidden="true">·</span>
              <span>{t.addressShort}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {t.fermentationBadge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight lg:leading-tight">
              {t.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-xl font-normal leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* CTAs - Clean, focused on Menu and WhatsApp ordering */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onScrollToMenu}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                <span>{t.chooseInMenu}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={whatsAppDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>{t.orderInWhatsApp}</span>
              </a>

              <button
                type="button"
                onClick={onOpenZones}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-xl transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{t.deliveryZones}</span>
              </button>
            </div>

            {/* Trust and contact banner */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>{t.featureHalalTitle}</span>
              </div>
              <span className="text-stone-600">·</span>
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <Clock className="w-4 h-4" />
                <span>30-40 {t.min}</span>
              </div>
              <span className="text-stone-600">·</span>
              <span className="text-stone-300 font-mono">WhatsApp: {WHATSAPP_PHONE_FORMATTED}</span>
            </div>
          </div>

          {/* Right Column: Hero Media Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square border border-stone-800 shadow-2xl bg-stone-950">
              <img
                src={heroPizzaImg}
                alt="BB Pizza Bishkek"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Highlight Card */}
              <button
                type="button"
                onClick={onScrollToMenu}
                className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/90 hover:bg-stone-900 backdrop-blur-md border border-stone-800 hover:border-amber-500/40 flex items-center justify-between text-left transition-all active:scale-98 cursor-pointer shadow-lg"
              >
                <div>
                  <div className="text-xs text-amber-400 font-bold">{t.standardCardTitle}</div>
                  <div className="text-sm font-bold text-white">{t.standardCardSubtitle}</div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400">{t.fromPrice}</span>
                  <div className="text-lg font-extrabold text-amber-400 tabular-nums">740 {t.currency}</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Feature Strip - All clickable */}
        <div className="mt-14 pt-8 border-t border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onScrollToMenu}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/40 hover:bg-stone-800/80 border border-stone-800 hover:border-stone-700 transition-all text-left cursor-pointer active:scale-98"
          >
            <div className="p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-amber-400 shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{t.featureOvenTitle}</div>
              <div className="text-xs text-stone-400 mt-0.5">{t.featureOvenDesc}</div>
            </div>
          </button>

          <button
            type="button"
            onClick={onOpenZones}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/40 hover:bg-stone-800/80 border border-stone-800 hover:border-stone-700 transition-all text-left cursor-pointer active:scale-98"
          >
            <div className="p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-amber-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{t.featureSpeedTitle}</div>
              <div className="text-xs text-stone-400 mt-0.5">{t.featureSpeedDesc}</div>
            </div>
          </button>

          <button
            type="button"
            onClick={onScrollToMenu}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/40 hover:bg-stone-800/80 border border-stone-800 hover:border-stone-700 transition-all text-left cursor-pointer active:scale-98"
          >
            <div className="p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{t.featureHalalTitle}</div>
              <div className="text-xs text-stone-400 mt-0.5">{t.featureHalalDesc}</div>
            </div>
          </button>

          <a
            href={whatsAppDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-900/50 hover:border-emerald-700/60 transition-all text-left cursor-pointer active:scale-98"
          >
            <div className="p-2.5 rounded-lg bg-emerald-900/60 border border-emerald-800 text-emerald-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{t.featureWhatsAppTitle}</div>
              <div className="text-xs text-emerald-300 mt-0.5">{t.featureWhatsAppDesc}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
