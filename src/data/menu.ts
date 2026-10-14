import { MenuItem, ExtraTopping } from '../types';

import heroPizzaImg from '../assets/images/hero_bb_crispy_pizza_1791722246313.jpg';
import signaturePizzaImg from '../assets/images/pizza_bb_signature_toasted_1791722258504.jpg';
import pepperoniHalalImg from '../assets/images/pizza_pepperoni_toasted_1791722274103.jpg';
import fourCheeseImg from '../assets/images/pizza_four_cheese_toasted_1791722289569.jpg';
import pizzaChickenPineappleImg from '../assets/images/pizza_chicken_pineapple_toasted_1791722302863.jpg';
import pizzaChickenMushroomsImg from '../assets/images/pizza_chicken_mushrooms_toasted_1791722319036.jpg';

export const EXTRA_TOPPINGS: ExtraTopping[] = [
  {
    id: 'top-mozzarella',
    name: {
      ru: 'Двойная моцарелла',
      ky: 'Эки эсе моцарелла',
      en: 'Double Mozzarella',
    },
    price: 90,
  },
  {
    id: 'top-jalapeno',
    name: {
      ru: 'Острый халапеньо',
      ky: 'Ачуу халапеньо',
      en: 'Spicy Jalapeño',
    },
    price: 60,
  },
  {
    id: 'top-beef',
    name: {
      ru: 'Копченая говядина',
      ky: 'Ышталган уй эти',
      en: 'Smoked Beef',
    },
    price: 120,
  },
  {
    id: 'top-chicken',
    name: {
      ru: 'Куриное филе',
      ky: 'Тоок филеси',
      en: 'Chicken Fillet',
    },
    price: 85,
  },
  {
    id: 'top-pineapple',
    name: {
      ru: 'Сочный ананас',
      ky: 'Ширелүү ананас',
      en: 'Juicy Pineapple',
    },
    price: 65,
  },
  {
    id: 'top-mushrooms',
    name: {
      ru: 'Шампиньоны на гриле',
      ky: 'Грильде бышкан шампиньон',
      en: 'Grilled Mushrooms',
    },
    price: 70,
  },
  {
    id: 'top-olives',
    name: {
      ru: 'Оливки Каламата',
      ky: 'Каламата зайтундору',
      en: 'Kalamata Olives',
    },
    price: 65,
  },
  {
    id: 'top-tomatoes',
    name: {
      ru: 'Вяленые томаты',
      ky: 'Күн кургатылган томаттар',
      en: 'Sun-dried Tomatoes',
    },
    price: 75,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'bb-signature',
    name: {
      ru: 'Фирменная «BB Бишкек»',
      ky: 'Фирмалык «BB Бишкек»',
      en: 'Signature «BB Bishkek»',
    },
    category: 'signature',
    description: {
      ru: 'Флагманское творение: ломтики нежнейшей подкопченной говядины, томаты черри, свежая руккола, фермерская моцарелла и аппетитная поджаристая корочка теста длительной ферментации.',
      ky: 'Башкы шедевр: назик ышталган уй этинин тилимдери, черри помидорлору, жаңы руккола, фермердик моцарелла жана узак ачытылган кытырак камыр.',
      en: 'Our flagship creation: tender smoked beef slices, cherry tomatoes, fresh arugula, farm mozzarella and crispy artisanal crust.',
    },
    basePrice: 860,
    image: signaturePizzaImg,
    weightGrams: { '35cm': 890 },
    sizePrices: { '35cm': 860 },
    badge: {
      ru: 'Шеф-выбор',
      ky: 'Шеф-тандоосу',
      en: 'Chef Pick',
    },
    isHalal: true,
    popular: true,
    ingredients: {
      ru: ['Подкопченная говядина', 'Сыр моцарелла', 'Томаты черри', 'Свежая руккола', 'Пармезан', 'Томатный соус'],
      ky: ['Ышталган уй эти', 'Моцарелла сыры', 'Черри помидорлору', 'Жаңы руккола', 'Пармезан', 'Томат соусу'],
      en: ['Smoked beef', 'Mozzarella cheese', 'Cherry tomatoes', 'Fresh arugula', 'Parmesan', 'Tomato sauce'],
    },
  },
  {
    id: 'chicken-mushrooms',
    name: {
      ru: 'Шампиньоны с Курицей',
      ky: 'Тоок жана Шампиньон',
      en: 'Chicken & Mushroom',
    },
    category: 'meat',
    description: {
      ru: 'Ароматное сочетание поджаристого куриного филе, свежих шампиньонов, сливочно-чесночного соуса, тянущейся моцареллы и хрустящего золотистого бортика.',
      ky: 'Куурулган тоок филеси, жаңы шампиньон козу карындары, каймак-сарымсак соусу жана чоюлчаак моцарелланын жыпар жыттуу айкалышы.',
      en: 'Juicy roasted chicken breast, fresh sliced mushrooms, creamy garlic sauce, stretchy mozzarella, and a golden blistered crust.',
    },
    basePrice: 770,
    image: pizzaChickenMushroomsImg,
    weightGrams: { '35cm': 850 },
    sizePrices: { '35cm': 770 },
    badge: {
      ru: 'Хит',
      ky: 'Хит',
      en: 'Best Seller',
    },
    isHalal: true,
    popular: true,
    ingredients: {
      ru: ['Куриное филе', 'Свежие шампиньоны', 'Сыр моцарелла', 'Сливочный соус', 'Прованские травы'],
      ky: ['Тоок филеси', 'Жаңы шампиньондор', 'Моцарелла сыры', 'Каймак соусу', 'Прованс чөптөрү'],
      en: ['Chicken breast', 'Fresh mushrooms', 'Mozzarella', 'Cream sauce', 'Herbs de Provence'],
    },
  },
  {
    id: 'chicken-pineapple',
    name: {
      ru: 'Курица с Ананасом (Гавайская)',
      ky: 'Тоок жана Ананас (Гавайча)',
      en: 'Hawaiian Chicken Pineapple',
    },
    category: 'meat',
    description: {
      ru: 'Сочное куриное филе, карамелизированные сладкие кусочки ананаса, поджаристая моцарелла и фирменный соус. Идеальный баланс нежности и сладости.',
      ky: 'Ширелүү тоок филеси, таттуу ананас тилимдери, бышкан моцарелла жана фирмалык соус. Назиктик менен таттуулуктун идеалдуу балансы.',
      en: 'Tender chicken breast chunks, caramelized golden pineapple, rich mozzarella and secret tomato sauce. Sweet & savory perfection.',
    },
    basePrice: 740,
    image: pizzaChickenPineappleImg,
    weightGrams: { '35cm': 830 },
    sizePrices: { '35cm': 740 },
    badge: {
      ru: 'Любимая',
      ky: 'Сүйүктүү',
      en: 'Popular',
    },
    isHalal: true,
    popular: true,
    ingredients: {
      ru: ['Филе цыпленка', 'Сладкий ананас', 'Сыр моцарелла', 'Томатный соус', 'Свежая зелень'],
      ky: ['Тоок филеси', 'Таттуу ананас', 'Моцарелла сыры', 'Томат соусу', 'Жашылча'],
      en: ['Chicken fillet', 'Sweet pineapple', 'Mozzarella', 'Tomato sauce', 'Fresh herbs'],
    },
  },
  {
    id: 'pepperoni-halal',
    name: {
      ru: 'Пепперони Халяль Премиум',
      ky: 'Пепперони Халал Премиум',
      en: 'Pepperoni Halal Premium',
    },
    category: 'spicy',
    description: {
      ru: 'Аппетитная пикантная пепперони из отборной говядины халяль, изобилие поджаристой тянущейся моцареллы, щепотка орегано и итальянский томатный соус.',
      ky: 'Тандалган халал уй этинен жасалган пиканттуу пепперони, чоюлчаак моцарелла, орегано жана италиялык томат соусу.',
      en: 'Crispy savory pepperoni made from halal beef, generous stretchy mozzarella, fragrant oregano and rustic tomato sauce.',
    },
    basePrice: 750,
    image: pepperoniHalalImg,
    weightGrams: { '35cm': 820 },
    sizePrices: { '35cm': 750 },
    badge: {
      ru: 'Хит продаж',
      ky: 'Эң көп сатылган',
      en: 'Top Pick',
    },
    spiciness: 1,
    isHalal: true,
    popular: true,
    ingredients: {
      ru: ['Говяжья пепперони Халяль', 'Сыр моцарелла', 'Пряный томатный соус', 'Орегано'],
      ky: ['Халал уй пепперониси', 'Моцарелла сыры', 'Ачуу томат соусу', 'Орегано'],
      en: ['Halal beef pepperoni', 'Mozzarella', 'Zesty tomato sauce', 'Oregano'],
    },
  },
  {
    id: 'four-cheese-dorblu',
    name: {
      ru: 'Кватро Формаджи (4 Сыра)',
      ky: 'Кватро Формаджи (4 Сыр)',
      en: 'Quattro Formaggi (4 Cheeses)',
    },
    category: 'cheese',
    description: {
      ru: 'Изысканный купаж четырех благородных сыров: сливочная моцарелла, пикантный дорблю, выдержанный пармезан и тягучий чеддер.',
      ky: 'Төрт сырдын эң сонун айкалышы: каймак моцарелла, дорблю, пармезан жана чеддер.',
      en: 'A blend of four cheeses: creamy mozzarella, tangy blue cheese (Dorblu), aged parmesan and sharp cheddar.',
    },
    basePrice: 790,
    image: fourCheeseImg,
    weightGrams: { '35cm': 840 },
    sizePrices: { '35cm': 790 },
    popular: true,
    ingredients: {
      ru: ['Сыр дорблю', 'Сыр моцарелла', 'Сыр пармезан', 'Сливочный соус', 'Сыр чеддер', 'Свежий базилик'],
      ky: ['Дорблю сыры', 'Моцарелла сыры', 'Пармезан сыры', 'Каймак соусу', 'Чеддер сыры', 'Жаңы базилик'],
      en: ['Dorblu blue cheese', 'Mozzarella', 'Parmesan', 'Cream base', 'Cheddar', 'Fresh basil'],
    },
  },
  {
    id: 'bbq-meat-feast',
    name: {
      ru: 'Мясной Пир «Ала-Тоо» BBQ',
      ky: '«Ала-Тоо» Эттүү Пири BBQ',
      en: 'Meat Feast «Ala-Too» BBQ',
    },
    category: 'meat',
    description: {
      ru: 'Сытная мясная пицца: сочное филе цыпленка, маринованная говядина, хрустящий лук, сладкий перец и дымный соус BBQ.',
      ky: 'Тоюмдуу эттүү пицца: ширелүү тоок филеси, маринаддалган уй эти, пияз, таттуу калемпир жана BBQ соусу.',
      en: 'Hearty meat feast: tender chicken breast, marinated beef strips, red onion, bell peppers and smoky BBQ sauce.',
    },
    basePrice: 840,
    image: signaturePizzaImg,
    weightGrams: { '35cm': 920 },
    sizePrices: { '35cm': 840 },
    isHalal: true,
    popular: true,
    ingredients: {
      ru: ['Филе цыпленка', 'Маринованная говядина', 'Соус BBQ', 'Моцарелла', 'Красный лук', 'Сладкий перец'],
      ky: ['Тоок филеси', 'Маринаддалган уй эти', 'BBQ соусу', 'Моцарелла', 'Кызыл пияз', 'Таттуу калемпир'],
      en: ['Chicken fillet', 'Marinated beef', 'BBQ sauce', 'Mozzarella', 'Red onion', 'Sweet peppers'],
    },
  },
  {
    id: 'spicy-diablo-bishkek',
    name: {
      ru: 'Огненная Диабло 3.0',
      ky: 'Жалындуу Диабло 3.0',
      en: 'Fiery Diablo 3.0',
    },
    category: 'spicy',
    description: {
      ru: 'Для любителей настоящей остроты: жгучий перец халапеньо, острая салями, болгарский перец, моцарелла и острый соус чили-шрирача.',
      ky: 'Ачууну сүйүүчүлөр үчүн: ачуу халапеньо, салями, болгар калемпири, моцарелла жана чили-шрирача соусу.',
      en: 'For true spice lovers: hot jalapeño slices, spicy salami, bell peppers, mozzarella and sriracha chili sauce.',
    },
    basePrice: 770,
    image: pepperoniHalalImg,
    weightGrams: { '35cm': 810 },
    sizePrices: { '35cm': 770 },
    spiciness: 2,
    badge: {
      ru: 'Остро 🌶️🌶️',
      ky: 'Ачуу 🌶️🌶️',
      en: 'Spicy 🌶️🌶️',
    },
    isHalal: true,
    ingredients: {
      ru: ['Острая салями', 'Перец халапеньо', 'Моцарелла', 'Чили-шрирача соус', 'Болгарский перец'],
      ky: ['Ачуу салями', 'Халапеньо калемпири', 'Моцарелла', 'Чили-шрирача соусу', 'Болгар калемпири'],
      en: ['Spicy salami', 'Jalapeño peppers', 'Mozzarella', 'Sriracha chili sauce', 'Bell peppers'],
    },
  },
  {
    id: 'combo-bishkek-duo',
    name: {
      ru: 'Комбо «Дуэт Бишкек»',
      ky: '«Дуэт Бишкек» Комбосу',
      en: 'Combo «Bishkek Duo»',
    },
    category: 'combos',
    description: {
      ru: 'Две любимые пиццы 35 см (Пепперони Халяль + Шампиньоны с Курицей) + фирменный сырный соус. Выгода 30 сом!',
      ky: 'Эки сүйүктүү 35 см пицца (Халал Пепперони + Тоок жана Шампиньон) + сыр соусу. 30 сом үнөмдөө!',
      en: 'Two 35cm pizzas (Halal Pepperoni + Chicken & Mushroom) + special cheese dip. Save 30 som!',
    },
    basePrice: 1490,
    image: heroPizzaImg,
    weightGrams: { '35cm': 1660 },
    sizePrices: { '35cm': 1490 },
    badge: {
      ru: 'Комбо',
      ky: 'Комбо',
      en: 'Combo',
    },
    popular: true,
    ingredients: {
      ru: ['Пицца Пепперони 35см', 'Пицца Шампиньоны с Курицей 35см', 'Фирменный сырный соус'],
      ky: ['Пепперони пиццасы 35см', 'Тоок жана Шампиньон 35см', 'Сыр соусу'],
      en: ['Pepperoni pizza 35cm', 'Chicken & Mushroom 35cm', 'Special cheese dip'],
    },
  },
];
