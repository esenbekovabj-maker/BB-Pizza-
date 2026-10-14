import React, { useState } from 'react';
import { X, Plus, Minus, Check, Sparkles } from 'lucide-react';
import { MenuItem, PizzaSize, CrustType, ExtraTopping } from '../types';
import { EXTRA_TOPPINGS } from '../data/menu';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { useLanguage } from '../context/LanguageContext';

interface PizzaModalProps {
  pizza: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (params: {
    menuItem: MenuItem;
    size: PizzaSize;
    crust: CrustType;
    addedToppings: ExtraTopping[];
    removedIngredients: string[];
    quantity: number;
    unitPrice: number;
  }) => void;
}

export const PizzaModal: React.FC<PizzaModalProps> = ({
  pizza,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const { lang, t } = useLanguage();
  useEscapeKey(onClose, isOpen);

  const selectedSize: PizzaSize = '35cm';
  const [selectedCrust, setSelectedCrust] = useState<CrustType>('traditional');
  const [selectedToppings, setSelectedToppings] = useState<ExtraTopping[]>([]);
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !pizza) return null;

  // Price calculations
  const crustPrice = selectedCrust === 'cheese_crust' ? 120 : 0;
  const toppingsPrice = selectedToppings.reduce((acc, top) => acc + top.price, 0);
  const sizePrice = pizza.sizePrices[selectedSize];
  const unitPrice = sizePrice + crustPrice + toppingsPrice;
  const totalPrice = unitPrice * quantity;

  const pizzaName = pizza.name[lang] || pizza.name['ru'];
  const pizzaDesc = pizza.description[lang] || pizza.description['ru'];
  const ingredientsList = pizza.ingredients[lang] || pizza.ingredients['ru'];

  const toggleTopping = (topping: ExtraTopping) => {
    if (selectedToppings.some((tItem) => tItem.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter((tItem) => tItem.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const toggleRemoveIngredient = (ingredient: string) => {
    if (removedIngredients.includes(ingredient)) {
      setRemovedIngredients(removedIngredients.filter((i) => i !== ingredient));
    } else {
      setRemovedIngredients([...removedIngredients, ingredient]);
    }
  };

  const handleAdd = () => {
    onAddToCart({
      menuItem: pizza,
      size: selectedSize,
      crust: selectedCrust,
      addedToppings: selectedToppings,
      removedIngredients,
      quantity,
      unitPrice,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.close}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-stone-900 border border-stone-200 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Header & Image */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
              <img
                src={pizza.image}
                alt={pizzaName}
                className="w-full h-full object-cover"
              />
              {pizza.isHalal && (
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold bg-emerald-600 text-white rounded">
                  Халяль
                </span>
              )}
            </div>

            <div className="sm:col-span-7 space-y-2">
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">
                {pizzaName}
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                {pizzaDesc}
              </p>
              <div className="text-xs text-stone-400">
                {pizza.weightGrams[selectedSize]} {t.grams} · {t.size35}
              </div>
            </div>
          </div>

          {/* Crust Type Selection */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              {t.crustTitle}
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedCrust('traditional')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedCrust === 'traditional'
                    ? 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-500'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-bold text-stone-900">{t.crustTraditional}</div>
                <div className="text-[10px] text-stone-500 mt-0.5">0 {t.currency}</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCrust('thin')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedCrust === 'thin'
                    ? 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-500'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-bold text-stone-900">{t.crustThin}</div>
                <div className="text-[10px] text-stone-500 mt-0.5">0 {t.currency}</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCrust('cheese_crust')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  selectedCrust === 'cheese_crust'
                    ? 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-500'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-bold text-stone-900 flex items-center gap-1">
                  <span>{t.crustCheese}</span>
                  <Sparkles className="w-3 h-3 text-amber-500" />
                </div>
                <div className="text-[10px] text-amber-700 font-bold mt-0.5">
                  {t.cheeseCrustBadge}
                </div>
              </button>
            </div>
          </div>

          {/* Extra Toppings */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              {t.extraToppingsTitle}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {EXTRA_TOPPINGS.map((topping) => {
                const isSelected = selectedToppings.some((tItem) => tItem.id === topping.id);
                const toppingName = topping.name[lang] || topping.name['ru'];

                return (
                  <button
                    key={topping.id}
                    type="button"
                    onClick={() => toggleTopping(topping)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer text-xs flex flex-col justify-between ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/80 font-bold text-stone-900'
                        : 'border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <span>{toppingName}</span>
                    <span className="text-[11px] text-amber-700 font-bold mt-1 tabular-nums">
                      +{topping.price} {t.currency}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Remove Ingredients */}
          {ingredientsList.length > 0 && (
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                {t.removeIngredientsTitle}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {ingredientsList.map((ing) => {
                  const isRemoved = removedIngredients.includes(ing);
                  return (
                    <button
                      key={ing}
                      type="button"
                      onClick={() => toggleRemoveIngredient(ing)}
                      className={`px-3 py-1 text-xs rounded-lg border transition-colors cursor-pointer ${
                        isRemoved
                          ? 'bg-red-50 border-red-300 text-red-700 line-through'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {ing}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-500 hidden sm:inline">{t.quantityTitle}:</span>
            <div className="flex items-center bg-white border border-stone-200 rounded-lg p-0.5">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded hover:bg-stone-100 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Уменьшить"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-black tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded hover:bg-stone-100 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Увеличить"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 max-w-xs py-3 px-5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-between cursor-pointer"
          >
            <span>{t.addToCartBtn}</span>
            <span className="tabular-nums font-black">{totalPrice} {t.currency}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
