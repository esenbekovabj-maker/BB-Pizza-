import React, { useState } from 'react';
import {
  X,
  MapPin,
  Phone,
  User,
  MessageCircle,
  AlertCircle,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { OrderCustomer, CartItem } from '../types';
import { BISHKEK_DISTRICTS } from '../data/bishkekDistricts';
import { createWhatsAppOrderUrl, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount: number;
  onSubmitOrder: (customer: OrderCustomer, deliveryFee: number) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount,
  onSubmitOrder,
}) => {
  const { lang, t } = useLanguage();

  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+996 ');
  const [districtId, setDistrictId] = useState(BISHKEK_DISTRICTS[0].id);
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState('');
  const [entrance, setEntrance] = useState('');
  const [floor, setFloor] = useState('');
  const [intercom, setIntercom] = useState('');
  const [comment, setComment] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const selectedDistrict =
    BISHKEK_DISTRICTS.find((d) => d.id === districtId) || BISHKEK_DISTRICTS[0];
  const deliveryFee = subtotal >= 500 ? 0 : selectedDistrict.deliveryCostSom;
  const totalAmount = Math.max(0, subtotal - discount + deliveryFee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg(t.fillRequiredError);
      return;
    }
    if (phone.trim().length < 10) {
      setErrorMsg(t.fillRequiredError);
      return;
    }
    if (!street.trim()) {
      setErrorMsg(t.fillRequiredError);
      return;
    }

    setErrorMsg('');
    const customer: OrderCustomer = {
      name: name.trim(),
      phone: phone.trim(),
      district: selectedDistrict.name[lang] || selectedDistrict.name['ru'],
      street: street.trim(),
      apartment: apartment.trim(),
      entrance: entrance.trim(),
      floor: floor.trim(),
      intercom: intercom.trim(),
      comment: comment.trim(),
    };

    // Generate WhatsApp URL with all items and customer delivery details
    const targetUrl = createWhatsAppOrderUrl(items, totalAmount, deliveryFee, customer, lang);

    // Open WhatsApp
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    // Notify App
    onSubmitOrder(customer, deliveryFee);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
              <MessageCircle className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-stone-900">
                {t.checkoutTitle}
              </h2>
              <div className="text-xs text-stone-500">
                {t.checkoutSubtitle}
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">
          {/* Order Summary Strip */}
          <div className="p-3.5 bg-amber-500/10 rounded-xl border border-amber-200/60 flex items-center justify-between text-xs">
            <div>
              <span className="text-stone-600">{t.totalToPay}:</span>
              <div className="text-base font-black text-stone-900 tabular-nums">
                {totalAmount} {t.currency}
              </div>
            </div>
            <div className="text-right">
              <span className="text-stone-500">{t.deliveryTitle}</span>
              <div className="font-bold text-emerald-800">
                {deliveryFee === 0 ? t.free : `${deliveryFee} ${t.currency}`}
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{t.stepContacts}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-stone-700 mb-1 block">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2.5 px-3.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 mb-1 block">
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full py-2.5 px-3.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.stepAddress}</span>
            </h3>

            <div>
              <label className="text-xs font-bold text-stone-700 mb-1 block">
                {t.districtLabel}
              </label>
              <select
                value={districtId}
                onChange={(e) => setDistrictId(e.target.value)}
                className="w-full py-2.5 px-3 text-sm rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              >
                {BISHKEK_DISTRICTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name[lang] || d.name['ru']} — {d.deliveryTimeMin} {t.min} (
                    {d.deliveryCostSom === 0 ? t.free : `${d.deliveryCostSom} ${t.currency}`})
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-stone-500 mt-1">
                {selectedDistrict.description[lang] || selectedDistrict.description['ru']}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-8">
                <label className="text-xs font-bold text-stone-700 mb-1 block">
                  {t.streetLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.streetPlaceholder}
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full py-2.5 px-3.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="text-xs font-bold text-stone-700 mb-1 block">
                  {t.aptLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.aptPlaceholder}
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  className="w-full py-2.5 px-3.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-bold text-stone-700 mb-1 block">
                  {t.entranceLabel}
                </label>
                <input
                  type="text"
                  placeholder="1"
                  value={entrance}
                  onChange={(e) => setEntrance(e.target.value)}
                  className="w-full py-2 px-3 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-center"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-stone-700 mb-1 block">
                  {t.floorLabel}
                </label>
                <input
                  type="text"
                  placeholder="4"
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                  className="w-full py-2 px-3 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-center"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-stone-700 mb-1 block">
                  {t.intercomLabel}
                </label>
                <input
                  type="text"
                  placeholder="18B"
                  value={intercom}
                  onChange={(e) => setIntercom(e.target.value)}
                  className="w-full py-2 px-3 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-center"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 mb-1 block">
                {t.commentLabel}
              </label>
              <input
                type="text"
                placeholder={t.commentPlaceholder}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full py-2.5 px-3.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{t.whatsAppHint}</span>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-between cursor-pointer text-sm"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>{t.sendWhatsAppOrderBtn}</span>
              </span>
              <span className="tabular-nums text-lg font-black">{totalAmount} {t.currency}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
