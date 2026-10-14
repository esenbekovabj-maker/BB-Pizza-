import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Tag, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { createWhatsAppOrderUrl, WHATSAPP_PHONE_FORMATTED } from '../utils/whatsapp';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { useLanguage } from '../context/LanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
  subtotal: number;
  discount: number;
  onApplyPromo: (code: string) => boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  subtotal,
  discount,
  onApplyPromo,
}) => {
  const { lang, t } = useLanguage();
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  useEscapeKey(onClose, isOpen);

  if (!isOpen) return null;

  const deliveryThreshold = 500;
  const isFreeDelivery = subtotal >= deliveryThreshold;
  const deliveryCost = items.length === 0 ? 0 : isFreeDelivery ? 0 : 70;
  const finalTotal = Math.max(0, subtotal - discount + deliveryCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const success = onApplyPromo(promoInput.trim());
    if (success) {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError(t.promoInvalid);
    }
  };

  const directWhatsAppUrl = createWhatsAppOrderUrl(items, finalTotal, deliveryCost, null, lang, discount);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-stone-950/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-black text-stone-900">{t.yourCart}</h2>
            <span className="text-xs text-stone-500 font-semibold tabular-nums">
              ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label={t.close}
            className="w-8 h-8 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        {items.length > 0 && (
          <div className="px-5 py-2.5 bg-amber-50/70 border-b border-amber-100 text-xs">
            {isFreeDelivery ? (
              <span className="text-emerald-800 font-semibold">
                {t.freeDeliveryActive}
              </span>
            ) : (
              <span className="text-stone-700">
                {t.freeDeliveryRemaining}{' '}
                <strong className="text-amber-700 tabular-nums">
                  {deliveryThreshold - subtotal} {t.currency}
                </strong>
              </span>
            )}
          </div>
        )}

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <ShoppingBag className="w-12 h-12 stroke-[1.5] text-stone-300 mb-3" />
              <div className="text-base font-bold text-stone-800">{t.cartEmpty}</div>
              <p className="text-xs text-stone-500 mt-1 max-w-xs">
                {t.cartEmptySub}
              </p>
            </div>
          ) : (
            items.map((item) => {
              const itemName = item.menuItem.name[lang] || item.menuItem.name['ru'];
              const sizeLabel = t.size35;

              return (
                <div
                  key={item.cartItemId}
                  className="p-3.5 rounded-xl border border-stone-200 bg-white flex gap-3 shadow-2xs"
                >
                  <img
                    src={item.menuItem.image}
                    alt={itemName}
                    className="w-18 h-18 rounded-lg object-cover bg-stone-100 shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-bold text-stone-900 truncate">
                          {itemName}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.cartItemId)}
                          className="text-stone-400 hover:text-red-500 p-0.5 cursor-pointer transition-colors"
                          aria-label="Удалить"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-stone-500 mt-0.5">
                        {sizeLabel}
                        {item.crust === 'cheese_crust' && ` · ${t.crustCheese}`}
                      </div>

                      {item.addedToppings.length > 0 && (
                        <div className="text-[10px] text-amber-800 line-clamp-1 mt-0.5 font-medium">
                          +{item.addedToppings.map((tp) => tp.name[lang] || tp.name['ru']).join(', ')}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center bg-stone-100 rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-6 h-6 rounded hover:bg-stone-200 flex items-center justify-center cursor-pointer transition-colors"
                          aria-label="Уменьшить"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-6 h-6 rounded hover:bg-stone-200 flex items-center justify-center cursor-pointer transition-colors"
                          aria-label="Увеличить"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-sm font-black text-stone-900 tabular-nums">
                        {item.totalPrice} {t.currency}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Promo code & Footer summary */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder={t.promoPlaceholder}
                  value={promoInput}
                  onChange={(e) => {
                    setPromoInput(e.target.value.toUpperCase());
                    setPromoError('');
                  }}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-1 focus:ring-amber-500 uppercase font-semibold"
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 text-xs font-bold text-stone-800 bg-white border border-stone-300 hover:border-stone-400 rounded-lg cursor-pointer transition-colors"
              >
                {t.promoApplyBtn}
              </button>
            </form>
            {promoApplied && (
              <div className="text-xs text-emerald-700 font-semibold">
                {t.promoAppliedSuccess}
              </div>
            )}
            {promoError && (
              <div className="text-xs text-red-600">{promoError}</div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-1">
              <div className="flex justify-between">
                <span>{t.subtotalTitle}</span>
                <span className="tabular-nums font-semibold">{subtotal} {t.currency}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>{t.discountTitle}</span>
                  <span className="tabular-nums">-{discount} {t.currency}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>{t.deliveryTitle}</span>
                <span className="tabular-nums font-semibold">
                  {deliveryCost === 0 ? t.free : `${deliveryCost} ${t.currency}`}
                </span>
              </div>
              <div className="h-px bg-stone-200 my-1" />
              <div className="flex justify-between text-sm font-black text-stone-900">
                <span>{t.totalToPay}</span>
                <span className="tabular-nums text-base">{finalTotal} {t.currency}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>{t.proceedToCheckout}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 text-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>{t.orderDirectWhatsApp} ({WHATSAPP_PHONE_FORMATTED})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
