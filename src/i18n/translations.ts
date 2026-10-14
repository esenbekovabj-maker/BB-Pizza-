import { Language } from '../types';

export interface Translations {
  // Common
  currency: string;
  som: string;
  close: string;
  cancel: string;
  save: string;
  apply: string;
  pieces: string;
  cm: string;
  grams: string;
  free: string;
  min: string;

  // Header & Nav
  menu: string;
  deliveryZones: string;
  aboutBakery: string;
  cart: string;
  orderWhatsApp: string;
  phoneContact: string;

  // Hero
  cityBishkek: string;
  addressShort: string;
  fermentationBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  chooseInMenu: string;
  orderInWhatsApp: string;
  standardCardTitle: string;
  standardCardSubtitle: string;
  fromPrice: string;
  featureOvenTitle: string;
  featureOvenDesc: string;
  featureSpeedTitle: string;
  featureSpeedDesc: string;
  featureHalalTitle: string;
  featureHalalDesc: string;
  featureWhatsAppTitle: string;
  featureWhatsAppDesc: string;

  // Menu Section
  freshMasterpieces: string;
  menuTitle: string;
  menuSubtitle: string;
  filterHalal: string;
  onlyHalal: string;
  quickAdd: string;
  customizePizza: string;
  inCart: string;
  catAll: string;
  catSignature: string;
  catMeat: string;
  catCheese: string;
  catSpicy: string;
  catCombos: string;

  // Customization Modal
  size35: string;
  crustTitle: string;
  crustTraditional: string;
  crustThin: string;
  crustCheese: string;
  cheeseCrustBadge: string;
  extraToppingsTitle: string;
  removeIngredientsTitle: string;
  quantityTitle: string;
  addToCartBtn: string;

  // Cart Drawer
  yourCart: string;
  cartEmpty: string;
  cartEmptySub: string;
  freeDeliveryActive: string;
  freeDeliveryRemaining: string;
  promoPlaceholder: string;
  promoApplyBtn: string;
  promoAppliedSuccess: string;
  promoInvalid: string;
  subtotalTitle: string;
  discountTitle: string;
  deliveryTitle: string;
  totalToPay: string;
  proceedToCheckout: string;
  orderDirectWhatsApp: string;

  // Checkout Modal
  checkoutTitle: string;
  checkoutSubtitle: string;
  stepContacts: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  stepAddress: string;
  districtLabel: string;
  streetLabel: string;
  streetPlaceholder: string;
  aptLabel: string;
  aptPlaceholder: string;
  entranceLabel: string;
  floorLabel: string;
  intercomLabel: string;
  commentLabel: string;
  commentPlaceholder: string;
  sendWhatsAppOrderBtn: string;
  fillRequiredError: string;
  whatsAppHint: string;

  // Delivery Zones Modal
  zonesModalTitle: string;
  kitchenLocation: string;
  greenZoneTitle: string;
  greenZoneSub: string;
  greenZoneTime: string;
  yellowZoneTitle: string;
  yellowZoneSub: string;
  yellowZoneTime: string;
  orangeZoneTitle: string;
  orangeZoneSub: string;
  orangeZoneTime: string;
  deliveryRulesTitle: string;
  deliveryRule1: string;
  deliveryRule2: string;
  deliveryRule3: string;
  minOrderLabel: string;
  timeLabel: string;
  costLabel: string;

  // Footer
  footerDesc: string;
  halalCert: string;
  contactsTitle: string;
  addressFull: string;
  workingHours: string;
  dailyHours: string;
  deliveryBishkekTitle: string;
  viewDeliveryMap: string;
  copyright: string;

  // Toast
  addedToCartToast: string;
  orderSentToast: string;

  // Floating WhatsApp
  floatingLabel: string;
  floatingTooltipTitle: string;
  floatingTooltipSub: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ru: {
    currency: 'сом',
    som: 'сом',
    close: 'Закрыть',
    cancel: 'Отмена',
    save: 'Сохранить',
    apply: 'Применить',
    pieces: 'шт',
    cm: 'см',
    grams: 'г',
    free: 'Бесплатно',
    min: 'мин',

    menu: 'Меню',
    deliveryZones: 'Зоны доставки',
    aboutBakery: 'О пекарне',
    cart: 'Корзина',
    orderWhatsApp: 'Заказ в WhatsApp',
    phoneContact: '+996 (559) 444-996',

    cityBishkek: 'Бишкек',
    addressShort: 'пер. Геологический, 3',
    fermentationBadge: '48 часов ферментации',
    heroTitle: 'Горячая неаполитанская пицца в Бишкеке',
    heroSubtitle:
      'Выпекаем при 380°C по авторским итальянским рецептам. Тянущаяся фермерская моцарелла, хрустящий пышный бортик и моментальный приём заказов прямо в WhatsApp.',
    chooseInMenu: 'Выбрать в меню',
    orderInWhatsApp: 'Заказ в WhatsApp',
    standardCardTitle: 'Фирменный стандарт BB',
    standardCardSubtitle: 'Доставка в термосумке за 30-40 мин',
    fromPrice: 'от',
    featureOvenTitle: 'Горячая печь 380°C',
    featureOvenDesc: 'Выпекаем за 90 сек на живом огне',
    featureSpeedTitle: '30–40 мин доставка',
    featureSpeedDesc: 'Все районы Бишкека в термосумках',
    featureHalalTitle: 'Халяль стандарт',
    featureHalalDesc: '100% свежее местное мясо и сыры',
    featureWhatsAppTitle: 'Заказ в WhatsApp',
    featureWhatsAppDesc: 'Прямая связь с оператором без задержек',

    freshMasterpieces: 'Свежевыпеченные шедевры',
    menuTitle: 'Меню BB Pizza',
    menuSubtitle:
      'Выпекаем из муки мелкого помола Tipo 00. Выберите размер (25/30/35 см), добавьте сырный борт или любимые топпинги.',
    filterHalal: 'Фильтр: Халяль',
    onlyHalal: '✓ Только Халяль',
    quickAdd: 'В корзину',
    customizePizza: 'Настроить',
    inCart: 'в корзине',
    catAll: 'Все позиции',
    catSignature: 'Фирменные BB',
    catMeat: 'Мясные',
    catCheese: 'Сырные',
    catSpicy: 'Острые',
    catCombos: 'Комбо сеты',

    size35: '35 см',
    crustTitle: '1. Тип бортика',
    crustTraditional: 'Традиционный',
    crustThin: 'Тонкое тесто',
    crustCheese: 'Сырный бортик',
    cheeseCrustBadge: '+120 сом',
    extraToppingsTitle: '2. Добавить топпинги',
    removeIngredientsTitle: '3. Убрать ингредиенты',
    quantityTitle: 'Количество',
    addToCartBtn: 'Добавить в корзину',

    yourCart: 'Ваша корзина',
    cartEmpty: 'Корзина пуста',
    cartEmptySub: 'Выберите ароматную горячую пиццу из меню выше',
    freeDeliveryActive: '✓ Бесплатная доставка по Бишкеку активирована!',
    freeDeliveryRemaining: 'До бесплатной доставки не хватает',
    promoPlaceholder: 'Промокод (напр. BBPIZZA)',
    promoApplyBtn: 'Применить',
    promoAppliedSuccess: '✓ Скидка 10% успешно применена!',
    promoInvalid: 'Промокод недействителен (попробуйте BBPIZZA или BISHKEK)',
    subtotalTitle: 'Сумма заказа:',
    discountTitle: 'Скидка по промокоду:',
    deliveryTitle: 'Доставка по Бишкеку:',
    totalToPay: 'Итого к оплате:',
    proceedToCheckout: 'Оформить доставку в WhatsApp',
    orderDirectWhatsApp: 'Заказать в WhatsApp в 1 клик',

    checkoutTitle: 'Оформление доставки в Бишкеке',
    checkoutSubtitle: 'Заполните данные для быстрой доставки, и мы откроем WhatsApp с готовым заказом',
    stepContacts: '1. Контактные данные',
    nameLabel: 'Ваше имя *',
    namePlaceholder: 'Например: Азамат',
    phoneLabel: 'Номер телефона (Кыргызстан) *',
    phonePlaceholder: '+996 555 123 456',
    stepAddress: '2. Адрес доставки в Бишкеке',
    districtLabel: 'Район доставки *',
    streetLabel: 'Улица и номер дома *',
    streetPlaceholder: 'пр. Чуй, 114 или ул. Киевская, 45',
    aptLabel: 'Квартира / офис',
    aptPlaceholder: 'кв. 18',
    entranceLabel: 'Подъезд',
    floorLabel: 'Этаж',
    intercomLabel: 'Домофон',
    commentLabel: 'Примечание для курьера',
    commentPlaceholder: 'Оставить у двери / позвонить за 5 минут',
    sendWhatsAppOrderBtn: 'Отправить заказ в WhatsApp',
    fillRequiredError: 'Пожалуйста, заполните имя, телефон и улицу доставки',
    whatsAppHint: 'Заказ сформируется автоматически и откроется в чате с оператором BB Pizza (+996 559 444 996).',

    zonesModalTitle: 'Зоны доставки BB Pizza в Бишкеке',
    kitchenLocation: 'пер. Геологический, 3 (район Горького / Байтик Баатыра)',
    greenZoneTitle: 'Зеленая зона (Центр)',
    greenZoneSub: 'Бесплатно от 500 сом',
    greenZoneTime: '25-30 минут доставки',
    yellowZoneTitle: 'Желтая зона (Микрорайоны)',
    yellowZoneSub: 'Бесплатно от 600 сом',
    yellowZoneTime: '30-35 минут (Джал, Асанбай, 7-12 мкр)',
    orangeZoneTitle: 'Оранжевая зона (Периферия)',
    orangeZoneSub: 'Бесплатно от 800 сом',
    orangeZoneTime: '35-40 минут',
    deliveryRulesTitle: 'Правила и стандарты доставки:',
    deliveryRule1: 'Пицца доставляется в термосумках с постоянным подогревом 65°C.',
    deliveryRule2: 'Бесплатная доставка при заказе от 500 сом по основным районам.',
    deliveryRule3: 'Оплата наличными курьеру или переводом при получении.',
    minOrderLabel: 'Мин. заказ',
    timeLabel: 'Время',
    costLabel: 'Стоимость',

    footerDesc:
      'Пекарня горячей неаполитанской и авторской пиццы в сердце Бишкека. Итальянская мука Tipo 00, 48 часов созревания теста и фермерские ингредиенты Кыргызстана.',
    halalCert: 'Халяль сертификация · Стандарт качества',
    contactsTitle: 'Контакты пекарни',
    addressFull: 'г. Бишкек, пер. Геологический, 3',
    workingHours: 'Режим работы',
    dailyHours: 'Ежедневно 10:00 — 02:00',
    deliveryBishkekTitle: 'Доставка в Бишкеке',
    viewDeliveryMap: 'Посмотреть карту зон доставки →',
    copyright: '© 2026 BB Pizza Bishkek. Все права защищены.',

    addedToCartToast: 'добавлена в корзину',
    orderSentToast: 'Заказ сформирован и открыт в WhatsApp!',

    floatingLabel: 'Заказ в WhatsApp',
    floatingTooltipTitle: 'Прямой приём заказов',
    floatingTooltipSub: '+996 (559) 444-996 · оператор на связи',
  },

  ky: {
    currency: 'сом',
    som: 'сом',
    close: 'Жабуу',
    cancel: 'Жокко чыгаруу',
    save: 'Сактоо',
    apply: 'Колдонуу',
    pieces: 'даана',
    cm: 'см',
    grams: 'г',
    free: 'Акысыз',
    min: 'мүн',

    menu: 'Меню',
    deliveryZones: 'Жеткирүү аймактары',
    aboutBakery: 'Пиццерия жөнүндө',
    cart: 'Себет',
    orderWhatsApp: 'WhatsApp аркылуу буйрутма',
    phoneContact: '+996 (559) 444-996',

    cityBishkek: 'Бишкек',
    addressShort: 'Геологиялык тар көчө, 3',
    fermentationBadge: '48 сааттык ачытуу',
    heroTitle: 'Бишкектеги ысык неаполитан пиццасы',
    heroSubtitle:
      '380°C температурада автордук италиялык рецепт боюнча бышырабыз. Чоюлчаак фермердик моцарелла, кытырак калың чет жана WhatsApp аркылуу заматта буйрутма кабыл алуу.',
    chooseInMenu: 'Менюдан тандоо',
    orderInWhatsApp: 'WhatsApp аркылуу буйрутма',
    standardCardTitle: 'BB фирмалык стандарты',
    standardCardSubtitle: 'Термосумка менен 30-40 мүнөттө жеткирүү',
    fromPrice: 'баштап',
    featureOvenTitle: '380°C ысык меш',
    featureOvenDesc: 'Жандуу отто 90 секундда бышырабыз',
    featureSpeedTitle: '30–40 мүнөттө жеткирүү',
    featureSpeedDesc: 'Бишкектин бардык аймактарына термосумкада',
    featureHalalTitle: 'Халал стандарты',
    featureHalalDesc: '100% жаңы жергиликтүү эт жана сырлар',
    featureWhatsAppTitle: 'WhatsApp аркылуу буйрутма',
    featureWhatsAppDesc: 'Оператор менен түз байланыш',

    freshMasterpieces: 'Жаңы бышкан шедеврлер',
    menuTitle: 'BB Pizza Менюсу',
    menuSubtitle:
      'Tipo 00 майда тартылган унунан жасалат. Өлчөмүн тандаңыз (25/30/35 см), сырдуу чет же сүйүктүү кошулмаларды кошуңуз.',
    filterHalal: 'Чыпка: Халал',
    onlyHalal: '✓ Халал гана',
    quickAdd: 'Себетке кошуу',
    customizePizza: 'Өзгөртүү',
    inCart: 'себетте',
    catAll: 'Бардык позициялар',
    catSignature: 'Фирмалык BB',
    catMeat: 'Эттүү',
    catCheese: 'Сырдуу',
    catSpicy: 'Ачуу',
    catCombos: 'Комбо топтомдор',

    size35: '35 см',
    crustTitle: '1. Четинин түрү',
    crustTraditional: 'Салттуу',
    crustThin: 'Жука камыр',
    crustCheese: 'Сырдуу чет',
    cheeseCrustBadge: '+120 сом',
    extraToppingsTitle: '2. Кошумча кошуу',
    removeIngredientsTitle: '3. Ингредиенттерди алып салуу',
    quantityTitle: 'Саны',
    addToCartBtn: 'Себетке кошуу',

    yourCart: 'Сиздин себетиңиз',
    cartEmpty: 'Себет бош',
    cartEmptySub: 'Жогорудагы менюдан жыпар жыттуу ысык пиццаны тандаңыз',
    freeDeliveryActive: '✓ Бишкек боюнча акысыз жеткирүү иштетилди!',
    freeDeliveryRemaining: 'Акысыз жеткирүүгө чейин жетпейт:',
    promoPlaceholder: 'Промокод (мис. BBPIZZA)',
    promoApplyBtn: 'Колдонуу',
    promoAppliedSuccess: '✓ 10% арзандатуу ийгиликтүү колдонулду!',
    promoInvalid: 'Промокод туура эмес (BBPIZZA же BISHKEK колдонуп көрүңүз)',
    subtotalTitle: 'Буйрутма суммасы:',
    discountTitle: 'Промокод боюнча арзандатуу:',
    deliveryTitle: 'Бишкекке жеткирүү:',
    totalToPay: 'Төлөнүүчү сумма:',
    proceedToCheckout: 'WhatsApp аркылуу буйрутма берүү',
    orderDirectWhatsApp: 'WhatsApp аркылуу 1 басуу менен буйрутма',

    checkoutTitle: 'Бишкекте жеткирүүнү тариздөө',
    checkoutSubtitle: 'Тез жеткирүү үчүн маалыматтарды толтуруңуз, WhatsApp даяр буйрутма менен ачылат',
    stepContacts: '1. Байланыш маалыматтары',
    nameLabel: 'Атыңыз *',
    namePlaceholder: 'Мисалы: Азамат',
    phoneLabel: 'Телефон номери (Кыргызстан) *',
    phonePlaceholder: '+996 555 123 456',
    stepAddress: '2. Бишкектеги жеткирүү дареги',
    districtLabel: 'Жеткирүү району *',
    streetLabel: 'Көчө жана үй номери *',
    streetPlaceholder: 'Чүй проспектиси, 114 же Киев көчөсү, 45',
    aptLabel: 'Батир / офис',
    aptPlaceholder: '18-бат.',
    entranceLabel: 'Кире бериш',
    floorLabel: 'Кабат',
    intercomLabel: 'Домофон',
    commentLabel: 'Курьерге эскертүү',
    commentPlaceholder: 'Эшиктин алдына калтыруу / 5 мүнөт мурун чалуу',
    sendWhatsAppOrderBtn: 'WhatsApp аркылуу жөнөтүү',
    fillRequiredError: 'Сураныч, атыңызды, телефон номериңизди жана көчөнү толтуруңуз',
    whatsAppHint: 'Буйрутма автоматтык түрдө түзүлүп, BB Pizza оператору менен чатта ачылат (+996 559 444 996).',

    zonesModalTitle: 'Бишкекте BB Pizza жеткирүү аймактары',
    kitchenLocation: 'Геологиялык тар көчө, 3 (Горький / Байтик Баатыр аймагы)',
    greenZoneTitle: 'Жашыл аймак (Борбор)',
    greenZoneSub: '500 сомдон жогору акысыз',
    greenZoneTime: '25-30 мүнөттө жеткирүү',
    yellowZoneTitle: 'Сары аймак (Кичирайондор)',
    yellowZoneSub: '600 сомдон жогору акысыз',
    yellowZoneTime: '30-35 мүнөт (Жал, Асанбай, 7-12 кр)',
    orangeZoneTitle: 'Кызгылт сары аймак (Чет жакалар)',
    orangeZoneSub: '800 сомдон жогору акысыз',
    orangeZoneTime: '35-40 мүнөт',
    deliveryRulesTitle: 'Жеткирүү эрежелери жана стандарттары:',
    deliveryRule1: 'Пицца 65°C дайыма жылуу сактаган термосумкаларда жеткирилет.',
    deliveryRule2: 'Негизги райондорго 500 сомдон жогору буйрутмаларга акысыз жеткирүү.',
    deliveryRule3: 'Курьерге накталай акча же алгандан кийин которуу аркылуу төлөө.',
    minOrderLabel: 'Мин. буйрутма',
    timeLabel: 'Убактысы',
    costLabel: 'Баасы',

    footerDesc:
      'Бишкектин чок ортосундагы ысык неаполитан жана автордук пицца пекарнясы. Tipo 00 италиялык уну, 48 саат ачытылган камыр жана Кыргызстандын фермердик азыктары.',
    halalCert: 'Халал сертификаты · Сапат стандарты',
    contactsTitle: 'Пиццериянын байланыштары',
    addressFull: 'Бишкек ш., Геологиялык тар көчө, 3',
    workingHours: 'Иштөө тартиби',
    dailyHours: 'Күн сайын 10:00 — 02:00',
    deliveryBishkekTitle: 'Бишкекте жеткирүү',
    viewDeliveryMap: 'Жеткирүү картасын көрүү →',
    copyright: '© 2026 BB Pizza Bishkek. Бардык укуктар корголгон.',

    addedToCartToast: 'себетке кошулду',
    orderSentToast: 'Буйрутма түзүлүп, WhatsApp чатында ачылды!',

    floatingLabel: 'WhatsApp буйрутма',
    floatingTooltipTitle: 'Түз буйрутма кабыл алуу',
    floatingTooltipSub: '+996 (559) 444-996 · оператор байланышта',
  },

  en: {
    currency: 'KGS',
    som: 'som',
    close: 'Close',
    cancel: 'Cancel',
    save: 'Save',
    apply: 'Apply',
    pieces: 'pcs',
    cm: 'cm',
    grams: 'g',
    free: 'Free',
    min: 'min',

    menu: 'Menu',
    deliveryZones: 'Delivery Zones',
    aboutBakery: 'About Us',
    cart: 'Cart',
    orderWhatsApp: 'Order on WhatsApp',
    phoneContact: '+996 (559) 444-996',

    cityBishkek: 'Bishkek',
    addressShort: '3 Geologicheskiy lane',
    fermentationBadge: '48h slow fermentation',
    heroTitle: 'Hot Neapolitan Pizza in Bishkek',
    heroSubtitle:
      'Baked at 380°C from authentic Italian recipes. Stretchy local mozzarella, crispy airy crust, and instant direct orders straight to WhatsApp.',
    chooseInMenu: 'View Menu',
    orderInWhatsApp: 'Order on WhatsApp',
    standardCardTitle: 'BB Pizza Standard',
    standardCardSubtitle: 'Heated thermal bag delivery in 30-40 min',
    fromPrice: 'from',
    featureOvenTitle: '380°C Hot Oven',
    featureOvenDesc: 'Baked in 90 seconds on live flame',
    featureSpeedTitle: '30–40 min delivery',
    featureSpeedDesc: 'All Bishkek districts in heated bags',
    featureHalalTitle: 'Halal Certified',
    featureHalalDesc: '100% fresh local meat & dairy',
    featureWhatsAppTitle: 'WhatsApp Orders',
    featureWhatsAppDesc: 'Direct line with kitchen & operators',

    freshMasterpieces: 'Freshly Baked Masterpieces',
    menuTitle: 'BB Pizza Menu',
    menuSubtitle:
      'Crafted with fine Tipo 00 flour. Select size (25/30/35 cm), add cheese-stuffed crust or extra gourmet toppings.',
    filterHalal: 'Filter: Halal',
    onlyHalal: '✓ Halal Only',
    quickAdd: 'Add to Cart',
    customizePizza: 'Customize',
    inCart: 'in cart',
    catAll: 'All Items',
    catSignature: 'Signature BB',
    catMeat: 'Meat',
    catCheese: 'Cheese',
    catSpicy: 'Spicy',
    catCombos: 'Combo Sets',

    size35: '35 cm',
    crustTitle: '1. Crust Type',
    crustTraditional: 'Traditional',
    crustThin: 'Thin Crust',
    crustCheese: 'Cheese Stuffed Crust',
    cheeseCrustBadge: '+120 som',
    extraToppingsTitle: '2. Add Extra Toppings',
    removeIngredientsTitle: '3. Remove Ingredients',
    quantityTitle: 'Quantity',
    addToCartBtn: 'Add to Cart',

    yourCart: 'Your Cart',
    cartEmpty: 'Cart is empty',
    cartEmptySub: 'Select delicious hot pizza from our menu above',
    freeDeliveryActive: '✓ Free Bishkek delivery unlocked!',
    freeDeliveryRemaining: 'Add more for free delivery:',
    promoPlaceholder: 'Promo code (e.g. BBPIZZA)',
    promoApplyBtn: 'Apply',
    promoAppliedSuccess: '✓ 10% discount applied!',
    promoInvalid: 'Invalid promo code (try BBPIZZA or BISHKEK)',
    subtotalTitle: 'Order subtotal:',
    discountTitle: 'Promo discount:',
    deliveryTitle: 'Bishkek delivery:',
    totalToPay: 'Total to pay:',
    proceedToCheckout: 'Proceed to WhatsApp Checkout',
    orderDirectWhatsApp: 'Instant 1-Click WhatsApp Order',

    checkoutTitle: 'Bishkek Delivery Checkout',
    checkoutSubtitle: 'Enter delivery details and we will open WhatsApp with your formatted order',
    stepContacts: '1. Contact Details',
    nameLabel: 'Your name *',
    namePlaceholder: 'e.g. Alex',
    phoneLabel: 'Phone number (Kyrgyzstan) *',
    phonePlaceholder: '+996 555 123 456',
    stepAddress: '2. Delivery Address in Bishkek',
    districtLabel: 'Delivery District *',
    streetLabel: 'Street & House Number *',
    streetPlaceholder: '114 Chuy Ave or 45 Kievskaya St',
    aptLabel: 'Apt / Office',
    aptPlaceholder: 'Apt 18',
    entranceLabel: 'Entrance',
    floorLabel: 'Floor',
    intercomLabel: 'Intercom',
    commentLabel: 'Courier note',
    commentPlaceholder: 'Leave at door / call 5 min before',
    sendWhatsAppOrderBtn: 'Send Order to WhatsApp',
    fillRequiredError: 'Please provide your name, phone number, and street address',
    whatsAppHint: 'Your order is automatically formatted and opened directly in chat with the BB Pizza operator (+996 559 444 996).',

    zonesModalTitle: 'BB Pizza Delivery Zones in Bishkek',
    kitchenLocation: '3 Geologicheskiy lane (Gorkiy / Baytik Baatyr area)',
    greenZoneTitle: 'Green Zone (City Center)',
    greenZoneSub: 'Free from 500 som',
    greenZoneTime: '25-30 min delivery',
    yellowZoneTitle: 'Yellow Zone (Districts)',
    yellowZoneSub: 'Free from 600 som',
    yellowZoneTime: '30-35 min (Djal, Asanbay, 7-12 mkr)',
    orangeZoneTitle: 'Orange Zone (Suburbs)',
    orangeZoneSub: 'Free from 800 som',
    orangeZoneTime: '35-40 min',
    deliveryRulesTitle: 'Delivery standards & terms:',
    deliveryRule1: 'All pizzas are transported in 65°C constantly heated thermal bags.',
    deliveryRule2: 'Free delivery on orders from 500 som across key districts.',
    deliveryRule3: 'Payment in cash to courier or via mobile transfer upon arrival.',
    minOrderLabel: 'Min. Order',
    timeLabel: 'Est. Time',
    costLabel: 'Fee',

    footerDesc:
      'Hot Neapolitan and craft pizza bakery in the heart of Bishkek. Tipo 00 Italian flour, 48 hours cold dough fermentation, and local Kyrgyz farm ingredients.',
    halalCert: 'Halal Certified · High Quality Standard',
    contactsTitle: 'Bakery Contacts',
    addressFull: 'Bishkek, 3 Geologicheskiy lane',
    workingHours: 'Working Hours',
    dailyHours: 'Every day 10:00 — 02:00',
    deliveryBishkekTitle: 'Bishkek Delivery',
    viewDeliveryMap: 'View Delivery Zones Map →',
    copyright: '© 2026 BB Pizza Bishkek. All rights reserved.',

    addedToCartToast: 'added to cart',
    orderSentToast: 'Order prepared and opened in WhatsApp!',

    floatingLabel: 'WhatsApp Order',
    floatingTooltipTitle: 'Direct WhatsApp Orders',
    floatingTooltipSub: '+996 (559) 444-996 · Operator online',
  },
};
