import { CartItem, OrderCustomer, Language } from '../types';

export const WHATSAPP_PHONE_RAW = '996559444996';
export const WHATSAPP_PHONE_FORMATTED = '+996 (559) 444-996';

export const createWhatsAppOrderUrl = (
  items: CartItem[],
  total: number,
  deliveryFee: number,
  customer?: Partial<OrderCustomer> | null,
  lang: Language = 'ru',
  discount = 0
): string => {
  if (items.length === 0) {
    let defaultText = `Здравствуйте, BB Pizza! 🍕 Хочу сделать заказ пиццы с доставкой по Бишкеку.`;
    if (lang === 'ky') {
      defaultText = `Саламатсызбы, BB Pizza! 🍕 Бишкек боюнча жеткирүү менен пиццага буйрутма берейин дедим эле.`;
    } else if (lang === 'en') {
      defaultText = `Hello, BB Pizza! 🍕 I would like to order pizza with delivery in Bishkek.`;
    }
    return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(defaultText)}`;
  }

  let greeting = `Здравствуйте, BB Pizza! 🍕\nХочу сделать заказ:\n\n`;
  if (lang === 'ky') {
    greeting = `Саламатсызбы, BB Pizza! 🍕\nБуйрутма берейин дедим эле:\n\n`;
  } else if (lang === 'en') {
    greeting = `Hello, BB Pizza! 🍕\nI would like to place an order:\n\n`;
  }

  let message = greeting;

  items.forEach((item, index) => {
    const itemName = item.menuItem.name[lang] || item.menuItem.name['ru'];
    const sizeLabel = lang === 'en' ? '35 cm' : '35 см';

    const crustLabel =
      item.crust === 'cheese_crust'
        ? lang === 'ky'
          ? ' + Сырдуу чет'
          : lang === 'en'
          ? ' + Cheese Crust'
          : ' + Сырный борт'
        : '';

    message += `${index + 1}. *${itemName}* (${sizeLabel}${crustLabel})\n`;
    message += `   ${lang === 'ky' ? 'Саны' : lang === 'en' ? 'Qty' : 'Количество'}: ${item.quantity} ${
      lang === 'ky' ? 'даана' : lang === 'en' ? 'pcs' : 'шт'
    } · ${item.totalPrice} сом\n`;

    if (item.addedToppings.length > 0) {
      const toppingsList = item.addedToppings.map((t) => t.name[lang] || t.name['ru']).join(', ');
      message += `   + ${lang === 'ky' ? 'Кошумча' : lang === 'en' ? 'Extra' : 'Доп'}: ${toppingsList}\n`;
    }
    if (item.removedIngredients.length > 0) {
      message += `   - ${lang === 'ky' ? 'Алып салуу' : lang === 'en' ? 'Without' : 'Без'}: ${item.removedIngredients.join(', ')}\n`;
    }
    message += `\n`;
  });

  message += `━━━━━━━━━━━━━━━\n`;
  if (discount > 0) {
    message += `🏷 *${
      lang === 'ky' ? 'Промокод боюнча арзандатуу' : lang === 'en' ? 'Promo discount' : 'Скидка по промокоду'
    }:* -${discount} сом\n`;
  }
  message += `💰 *${lang === 'ky' ? 'Жалпы суммасы' : lang === 'en' ? 'Total to pay' : 'Сумма к оплате'}:* ${total} сом\n`;
  message += `🚚 *${lang === 'ky' ? 'Жеткирүү' : lang === 'en' ? 'Delivery' : 'Доставка'}:* ${
    deliveryFee === 0 ? (lang === 'ky' ? 'Акысыз' : lang === 'en' ? 'Free' : 'Бесплатно') : `${deliveryFee} сом`
  }\n`;

  if (customer && (customer.name || customer.street || customer.district)) {
    message += `\n📍 *${
      lang === 'ky'
        ? 'Бишкектеги жеткирүү дареги:'
        : lang === 'en'
        ? 'Bishkek delivery details:'
        : 'Данные для доставки в Бишкеке:'
    }*\n`;
    if (customer.name) message += `• ${lang === 'ky' ? 'Аты' : lang === 'en' ? 'Name' : 'Имя'}: ${customer.name}\n`;
    if (customer.phone) message += `• ${lang === 'ky' ? 'Телефон' : lang === 'en' ? 'Phone' : 'Телефон'}: ${customer.phone}\n`;
    if (customer.district) message += `• ${lang === 'ky' ? 'Район' : lang === 'en' ? 'District' : 'Район'}: ${customer.district}\n`;
    if (customer.street) message += `• ${lang === 'ky' ? 'Көчө, үй' : lang === 'en' ? 'Street, house' : 'Улица, дом'}: ${customer.street}\n`;
    if (customer.apartment) message += `• ${lang === 'ky' ? 'Батир/офис' : lang === 'en' ? 'Apt/office' : 'Кв/офис'}: ${customer.apartment}\n`;
    if (customer.entrance) message += `• ${lang === 'ky' ? 'Кире бериш' : lang === 'en' ? 'Entrance' : 'Подъезд'}: ${customer.entrance}\n`;
    if (customer.floor) message += `• ${lang === 'ky' ? 'Кабат' : lang === 'en' ? 'Floor' : 'Этаж'}: ${customer.floor}\n`;
    if (customer.intercom) message += `• ${lang === 'ky' ? 'Домофон' : lang === 'en' ? 'Intercom' : 'Домофон'}: ${customer.intercom}\n`;
    if (customer.comment) message += `• ${lang === 'ky' ? 'Эскертүү' : lang === 'en' ? 'Note' : 'Примечание'}: ${customer.comment}\n`;
  }

  message += `\n${
    lang === 'ky'
      ? 'Буйрутманы тастыктап бериңизчи! 🙏'
      : lang === 'en'
      ? 'Please confirm the order! 🙏'
      : 'Пожалуйста, подтвердите заказ! 🙏'
  }`;

  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(message)}`;
};
