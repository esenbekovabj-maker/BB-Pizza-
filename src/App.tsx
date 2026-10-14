import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { PizzaModal } from './components/PizzaModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { DeliveryZonesModal } from './components/DeliveryZonesModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import {
  CartItem,
  MenuItem,
  OrderCustomer,
  PizzaSize,
  CrustType,
  ExtraTopping,
} from './types';
import { CheckCircle2 } from 'lucide-react';

function AppContent() {
  const { lang, t } = useLanguage();

  // Cart state with localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bb_pizza_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals visibility
  const [selectedPizza, setSelectedPizza] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isZonesOpen, setIsZonesOpen] = useState(false);

  // Discount & Toast
  const [discount, setDiscount] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('bb_pizza_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Cart calculations
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  // Add customized pizza to cart
  const handleAddToCart = (params: {
    menuItem: MenuItem;
    size: PizzaSize;
    crust: CrustType;
    addedToppings: ExtraTopping[];
    removedIngredients: string[];
    quantity: number;
    unitPrice: number;
  }) => {
    const cartItemId = `${params.menuItem.id}-${params.size}-${params.crust}-${params.addedToppings
      .map((tItem) => tItem.id)
      .join('-')}-${params.removedIngredients.join('-')}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId
            ? {
                ...item,
                quantity: item.quantity + params.quantity,
                totalPrice: (item.quantity + params.quantity) * item.unitPrice,
              }
            : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          menuItem: params.menuItem,
          size: params.size,
          crust: params.crust,
          addedToppings: params.addedToppings,
          removedIngredients: params.removedIngredients,
          quantity: params.quantity,
          unitPrice: params.unitPrice,
          totalPrice: params.unitPrice * params.quantity,
        },
      ];
    });

    const itemName = params.menuItem.name[lang] || params.menuItem.name['ru'];
    showToast(`«${itemName}» ${t.addedToCartToast}`);
  };

  // Quick 1-click add standard 30cm pizza
  const handleQuickAdd = (menuItem: MenuItem) => {
    handleAddToCart({
      menuItem,
      size: '30cm',
      crust: 'traditional',
      addedToppings: [],
      removedIngredients: [],
      quantity: 1,
      unitPrice: menuItem.sizePrices['30cm'],
    });
  };

  // Quick 1-click decrement item by menuItem.id
  const handleQuickRemove = (itemId: string) => {
    setCart((prev) => {
      const index = prev.findIndex((i) => i.menuItem.id === itemId);
      if (index === -1) return prev;
      const target = prev[index];
      if (target.quantity > 1) {
        return prev.map((item, idx) =>
          idx === index
            ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.unitPrice }
            : item
        );
      } else {
        return prev.filter((_, idx) => idx !== index);
      }
    });
  };

  const getItemQuantity = (itemId: string): number => {
    return cart
      .filter((i) => i.menuItem.id === itemId)
      .reduce((sum, i) => sum + i.quantity, 0);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId
          ? { ...i, quantity: newQty, totalPrice: newQty * i.unitPrice }
          : i
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const handleApplyPromo = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'BBPIZZA' || clean === 'BISHKEK' || clean === 'BB10') {
      const discountVal = Math.round(cartSubtotal * 0.1);
      setDiscount(discountVal);
      showToast(t.promoAppliedSuccess);
      return true;
    }
    return false;
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Order submission via WhatsApp
  const handleSubmitOrder = (_customer: OrderCustomer, _deliveryFee: number) => {
    setCart([]);
    setDiscount(0);
    showToast(t.orderSentToast);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-stone-900 text-white rounded-xl shadow-2xl border border-stone-800 text-xs font-bold flex items-center gap-2.5 animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar with Language Switcher */}
      <Header
        cartCount={cartCount}
        cartTotal={cartSubtotal}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateSection={handleNavigateSection}
        onOpenZones={() => setIsZonesOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToMenu={() => handleNavigateSection('menu')}
          onOpenZones={() => setIsZonesOpen(true)}
        />

        {/* Menu Catalog Section */}
        <MenuSection
          onSelectPizza={(pizza) => setSelectedPizza(pizza)}
          onQuickAdd={handleQuickAdd}
          onQuickRemove={handleQuickRemove}
          getItemQuantity={getItemQuantity}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenZones={() => setIsZonesOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Modals & Drawers */}
      <PizzaModal
        pizza={selectedPizza}
        isOpen={Boolean(selectedPizza)}
        onClose={() => setSelectedPizza(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
        subtotal={cartSubtotal}
        discount={discount}
        onApplyPromo={handleApplyPromo}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        subtotal={cartSubtotal}
        discount={discount}
        onSubmitOrder={handleSubmitOrder}
      />

      <DeliveryZonesModal
        isOpen={isZonesOpen}
        onClose={() => setIsZonesOpen(false)}
      />

      {/* Floating WhatsApp Quick Order Button */}
      <FloatingWhatsApp cart={cart} cartTotal={cartSubtotal} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
