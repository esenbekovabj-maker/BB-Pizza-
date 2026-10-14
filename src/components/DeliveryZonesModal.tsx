import React from 'react';
import { X, MapPin, Clock, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { BISHKEK_DISTRICTS, BB_KITCHEN_LOCATION } from '../data/bishkekDistricts';
import { WHATSAPP_PHONE_RAW, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { useLanguage } from '../context/LanguageContext';

interface DeliveryZonesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeliveryZonesModal: React.FC<DeliveryZonesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { lang, t } = useLanguage();
  useEscapeKey(onClose, isOpen);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-stone-900">
                {t.zonesModalTitle}
              </h2>
              <div className="text-xs text-stone-500">
                {t.kitchenLocation}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label={t.close}
            className="w-8 h-8 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-200/50 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6 space-y-5 flex-1">
          {/* Rules strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-xs font-bold text-emerald-800">{t.greenZoneTitle}</div>
              <div className="text-sm font-black text-emerald-900 mt-0.5">{t.greenZoneSub}</div>
              <div className="text-xs text-emerald-700 mt-1">{t.greenZoneTime}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
              <div className="text-xs font-bold text-amber-800">{t.yellowZoneTitle}</div>
              <div className="text-sm font-black text-amber-900 mt-0.5">{t.yellowZoneSub}</div>
              <div className="text-xs text-amber-700 mt-1">{t.yellowZoneTime}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
              <div className="text-xs font-bold text-orange-800">{t.orangeZoneTitle}</div>
              <div className="text-sm font-black text-orange-900 mt-0.5">{t.orangeZoneSub}</div>
              <div className="text-xs text-orange-700 mt-1">{t.orangeZoneTime}</div>
            </div>
          </div>

          {/* Delivery Rules */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2 text-stone-700">
            <div className="font-bold text-stone-900">{t.deliveryRulesTitle}</div>
            <ul className="space-y-1 list-disc list-inside text-stone-600">
              <li>{t.deliveryRule1}</li>
              <li>{t.deliveryRule2}</li>
              <li>{t.deliveryRule3}</li>
            </ul>
          </div>

          {/* District list */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Районы и условия / Аймактар / Districts:
            </h3>

            <div className="divide-y divide-stone-100 border border-stone-200 rounded-xl overflow-hidden bg-white">
              {BISHKEK_DISTRICTS.map((district) => (
                <div
                  key={district.id}
                  className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50 transition-colors"
                >
                  <div>
                    <div className="text-xs font-bold text-stone-900">
                      {district.name[lang] || district.name['ru']}
                    </div>
                    <div className="text-[11px] text-stone-500 mt-0.5">
                      {district.description[lang] || district.description['ru']}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs shrink-0">
                    <span className="flex items-center gap-1 text-stone-600">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{district.deliveryTimeMin} {t.min}</span>
                    </span>

                    <span
                      className={`px-2.5 py-1 rounded-md font-bold text-[11px] ${
                        district.deliveryCostSom === 0
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-stone-100 text-stone-800'
                      }`}
                    >
                      {district.deliveryCostSom === 0 ? t.free : `${district.deliveryCostSom} ${t.currency}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(
                lang === 'ky'
                  ? 'Саламатсызбы, BB Pizza! Менин дарегиме жеткирүүнү тактап бере аласызбы?'
                  : lang === 'en'
                  ? 'Hello, BB Pizza! Could you check delivery time to my address?'
                  : 'Здравствуйте, BB Pizza! Можете уточнить доставку на мой адрес?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>{t.orderWhatsApp} ({WHATSAPP_PHONE_FORMATTED})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
