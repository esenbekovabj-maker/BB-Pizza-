import React, { useState } from 'react';
import { Plus, Minus, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { MenuItem, CategoryId } from '../types';
import { MENU_ITEMS } from '../data/menu';
import { useLanguage } from '../context/LanguageContext';

interface MenuSectionProps {
  onSelectPizza: (pizza: MenuItem) => void;
  onQuickAdd: (pizza: MenuItem) => void;
  onQuickRemove: (itemId: string) => void;
  getItemQuantity: (itemId: string) => number;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectPizza,
  onQuickAdd,
  onQuickRemove,
  getItemQuantity,
}) => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [halalOnly, setHalalOnly] = useState(false);

  const categories: { id: CategoryId; label: string }[] = [
    { id: 'all', label: t.catAll },
    { id: 'signature', label: t.catSignature },
    { id: 'meat', label: t.catMeat },
    { id: 'cheese', label: t.catCheese },
    { id: 'spicy', label: t.catSpicy },
    { id: 'combos', label: t.catCombos },
    { id: 'drinks', label: t.catDrinks },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesHalal = halalOnly ? item.isHalal : true;
    return matchesCategory && matchesHalal;
  });

  return (
    <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
            {t.freshMasterpieces}
          </div>
          <h2 className="text-3xl font-black text-stone-900 tracking-tight">
            {t.menuTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-lg">
            {t.menuSubtitle}
          </p>
        </div>

        {/* Halal Filter Switch */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setHalalOnly(!halalOnly)}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
              halalOnly
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{halalOnly ? t.onlyHalal : t.filterHalal}</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 border-b border-stone-200 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-sm font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          const qty = getItemQuantity(item.id);
          const name = item.name[lang] || item.name['ru'];
          const description = item.description[lang] || item.description['ru'];
          const badgeText = item.badge ? item.badge[lang] || item.badge['ru'] : null;

          return (
            <article
              key={item.id}
              className={`group flex flex-col bg-white rounded-2xl border transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-lg ${
                qty > 0 ? 'border-amber-400 ring-1 ring-amber-400/50 shadow-sm' : 'border-stone-200'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onSelectPizza(item)}>
                <img
                  src={item.image}
                  alt={name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                  {badgeText && (
                    <span className="px-2.5 py-1 text-xs font-black uppercase tracking-wider bg-stone-900/90 backdrop-blur-xs text-amber-400 rounded-md shadow-xs">
                      {badgeText}
                    </span>
                  )}
                  {item.isHalal && (
                    <span className="px-2 py-0.5 text-xs font-bold bg-emerald-600/90 text-white rounded-md shadow-xs flex items-center gap-1">
                      Халяль
                    </span>
                  )}
                </div>

                {/* Spiciness Level */}
                {item.spiciness && item.spiciness > 0 && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 text-xs font-bold bg-red-600 text-white rounded-md shadow-xs">
                    {'🌶️'.repeat(item.spiciness)}
                  </div>
                )}
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      onClick={() => onSelectPizza(item)}
                      className="text-lg font-bold text-stone-900 group-hover:text-amber-600 transition-colors cursor-pointer leading-snug"
                    >
                      {name}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Ingredients tag cloud preview */}
                <div className="text-[11px] text-stone-500 line-clamp-1">
                  {(item.ingredients[lang] || item.ingredients['ru']).slice(0, 4).join(' · ')}
                </div>

                {/* Bottom Bar: Price & Controls */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-stone-400 font-medium">{t.fromPrice}</span>
                    <div className="text-xl font-black text-stone-900 tabular-nums">
                      {item.sizePrices['35cm']} <span className="text-xs font-bold text-stone-500">{t.currency}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Customize Modal Trigger Button */}
                    <button
                      type="button"
                      onClick={() => onSelectPizza(item)}
                      className="p-2.5 rounded-xl border border-stone-200 hover:border-stone-400 hover:bg-stone-50 text-stone-700 transition-colors cursor-pointer"
                      title={t.customizePizza}
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                    </button>

                    {/* Quick Add or Quantity Modifier */}
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => onQuickAdd(item)}
                        className="py-2.5 px-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                        <span>{t.quickAdd}</span>
                      </button>
                    ) : (
                      <div className="flex items-center bg-stone-900 text-white rounded-xl p-1 shadow-sm">
                        <button
                          type="button"
                          onClick={() => onQuickRemove(item.id)}
                          className="w-7 h-7 rounded-lg hover:bg-stone-800 flex items-center justify-center cursor-pointer transition-colors"
                          aria-label="Уменьшить"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-black tabular-nums text-amber-400">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onQuickAdd(item)}
                          className="w-7 h-7 rounded-lg hover:bg-stone-800 flex items-center justify-center cursor-pointer transition-colors"
                          aria-label="Увеличить"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
