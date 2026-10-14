export type Language = 'ru' | 'ky' | 'en';

export type PizzaSize = '25cm' | '30cm' | '35cm';
export type CrustType = 'traditional' | 'thin' | 'cheese_crust';

export type CategoryId = 'all' | 'signature' | 'meat' | 'cheese' | 'spicy' | 'combos' | 'drinks';

export interface ExtraTopping {
  id: string;
  name: Record<Language, string>;
  price: number;
}

export interface MenuItem {
  id: string;
  name: Record<Language, string>;
  category: CategoryId;
  description: Record<Language, string>;
  basePrice: number;
  image: string;
  weightGrams: {
    '25cm': number;
    '30cm': number;
    '35cm': number;
  };
  sizePrices: {
    '25cm': number;
    '30cm': number;
    '35cm': number;
  };
  badge?: Record<Language, string>;
  spiciness?: number; // 0, 1, 2
  isHalal?: boolean;
  ingredients: Record<Language, string[]>;
  popular?: boolean;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  size: PizzaSize;
  crust: CrustType;
  addedToppings: ExtraTopping[];
  removedIngredients: string[];
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderCustomer {
  name: string;
  phone: string;
  district: string;
  street: string;
  apartment?: string;
  entrance?: string;
  floor?: string;
  intercom?: string;
  comment?: string;
}
