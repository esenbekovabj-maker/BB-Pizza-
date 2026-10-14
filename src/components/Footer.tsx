import React from 'react';
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  MessageCircle,
  Globe,
} from 'lucide-react';
import { WHATSAPP_PHONE_RAW, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

interface FooterProps {
  onOpenZones?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenZones,
  onNavigateSection,
}) => {
  const { lang, setLang, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'Русский' },
    { code: 'ky', label: 'Кыргызча' },
    { code: 'en', label: 'English' },
  ];

  return (
    <footer id="about" className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-black text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-600 text-white font-black text-lg">
                BB
              </span>
              <span>PIZZA</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t.halalCert}</span>
            </div>
          </div>

          {/* Contacts */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {t.contactsTitle}
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{t.addressFull}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${WHATSAPP_PHONE_RAW}`} className="hover:text-white transition-colors font-mono">
                  {WHATSAPP_PHONE_FORMATTED}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20 shrink-0" />
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
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  WhatsApp: {WHATSAPP_PHONE_FORMATTED}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t.dailyHours}</span>
              </div>
            </div>
          </div>

          {/* Bishkek Delivery Info */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {t.deliveryBishkekTitle}
            </div>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>· Центр, Восток-5, Джал, Асанбай, 7-12 мкр</li>
              <li>· Экспресс-доставка за 30-40 минут</li>
              <li>· Бесплатно при заказе от 500 сом</li>
              <li>· Термосумки с постоянным подогревом 65°C</li>
            </ul>

            <button
              type="button"
              onClick={onOpenZones}
              className="mt-2 text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer flex items-center gap-1"
            >
              <span>{t.viewDeliveryMap}</span>
            </button>
          </div>

          {/* Language Selection & WhatsApp Direct Order */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>Тил / Язык / Language</span>
            </div>

            <div className="flex flex-col gap-1.5 text-xs">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`text-left px-3 py-2 rounded-lg border transition-all cursor-pointer font-bold ${
                    lang === l.code
                      ? 'bg-stone-800 text-amber-400 border-amber-500/50'
                      : 'bg-stone-900/60 text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
                  }`}
                >
                  {l.label} {lang === l.code && '✓'}
                </button>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(
                'Здравствуйте, BB Pizza! Хочу сделать заказ.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>{t.orderWhatsApp}</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>{t.copyright}</div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigateSection?.('menu')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.menu}
            </button>
            <button
              type="button"
              onClick={onOpenZones}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.deliveryZones}
            </button>
            <button
              type="button"
              onClick={() => onNavigateSection?.('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.aboutBakery}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
