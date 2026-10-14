import { Language } from '../types';

export interface BishkekDistrict {
  id: string;
  name: Record<Language, string>;
  zone: 'green' | 'yellow' | 'orange';
  minOrderSom: number;
  deliveryTimeMin: number;
  deliveryCostSom: number;
  description: Record<Language, string>;
  coords: { x: number; y: number };
}

export const BISHKEK_DISTRICTS: BishkekDistrict[] = [
  {
    id: 'center-alat-too',
    name: {
      ru: 'Центр (пл. Ала-Тоо, Чуй / Раззакова / Панфилова)',
      ky: 'Борбор (Ала-Тоо аянты, Чүй / Раззаков / Панфилов)',
      en: 'Center (Ala-Too Sq, Chuy / Razzakov / Panfilov)',
    },
    zone: 'green',
    minOrderSom: 500,
    deliveryTimeMin: 25,
    deliveryCostSom: 0,
    description: {
      ru: 'Зона экспресс-доставки — до 30 минут',
      ky: 'Экспресс жеткирүү аймагы — 30 мүнөткө чейин',
      en: 'Express delivery zone — up to 30 mins',
    },
    coords: { x: 50, y: 46 },
  },
  {
    id: 'vostok-5',
    name: {
      ru: 'мкр. Восток-5 / пр. Чуй восток',
      ky: 'Чыгыш-5 кр. / Чүй пр. чыгыш',
      en: 'Vostok-5 district / East Chuy Ave',
    },
    zone: 'green',
    minOrderSom: 500,
    deliveryTimeMin: 30,
    deliveryCostSom: 0,
    description: {
      ru: 'Бесплатная доставка от 500 сом',
      ky: '500 сомдон жогору акысыз жеткирүү',
      en: 'Free delivery from 500 som',
    },
    coords: { x: 74, y: 43 },
  },
  {
    id: 'djal',
    name: {
      ru: 'мкр. Джал (Верхний / Нижний, Тыналиева)',
      ky: 'Жал кр. (Жогорку / Төмөнкү, Тыналиев)',
      en: 'Djal district (Upper / Lower, Tynaliev St)',
    },
    zone: 'yellow',
    minOrderSom: 600,
    deliveryTimeMin: 35,
    deliveryCostSom: 70,
    description: {
      ru: 'Доставка 35-40 минут',
      ky: 'Жеткирүү 35-40 мүнөт',
      en: 'Delivery in 35-40 mins',
    },
    coords: { x: 30, y: 72 },
  },
  {
    id: 'asanbay',
    name: {
      ru: 'мкр. Асанбай / 11, 12 мкр (Южная Магистраль)',
      ky: 'Асанбай кр. / 11, 12 кр. (Түштүк Магистраль)',
      en: 'Asanbay district / 11, 12 mkr (South Highway)',
    },
    zone: 'yellow',
    minOrderSom: 600,
    deliveryTimeMin: 35,
    deliveryCostSom: 70,
    description: {
      ru: 'Южная зона города, термосумки с подогревом',
      ky: 'Шаардын түштүк аймагы, жылытуучу термосумкалар',
      en: 'South city zone, heated thermal bags',
    },
    coords: { x: 68, y: 80 },
  },
  {
    id: '7-8-9-mkr',
    name: {
      ru: 'мкр. 7, 8, 9, 10 (Юнусалиева / Донецкая)',
      ky: '7, 8, 9, 10 кр. (Юнусалиев / Донецк)',
      en: 'Districts 7, 8, 9, 10 (Yunusaliev / Donetskaya)',
    },
    zone: 'yellow',
    minOrderSom: 600,
    deliveryTimeMin: 32,
    deliveryCostSom: 50,
    description: {
      ru: 'Быстрая доставка по ул. Юнусалиева',
      ky: 'Юнусалиев көчөсү боюнча тез жеткирүү',
      en: 'Fast delivery along Yunusaliev street',
    },
    coords: { x: 64, y: 68 },
  },
  {
    id: 'polytech-manas',
    name: {
      ru: 'Политех / пр. Ч. Айтматова (Мира) / Ахунбаева',
      ky: 'Политех / Ч. Айтматов пр. (Тынчтык) / Ахунбаев',
      en: 'Polytech / Ch. Aitmatov Ave / Akhunbaev St',
    },
    zone: 'green',
    minOrderSom: 500,
    deliveryTimeMin: 28,
    deliveryCostSom: 0,
    description: {
      ru: 'Центрально-южный сектор',
      ky: 'Борбордук-түштүк сектор',
      en: 'Central-south sector',
    },
    coords: { x: 42, y: 62 },
  },
  {
    id: 'kyzyl-asker',
    name: {
      ru: 'Кызыл-Аскер / Западный автовокзал',
      ky: 'Кызыл-Аскер / Батыш автобекети',
      en: 'Kyzyl-Asker / West Bus Station',
    },
    zone: 'orange',
    minOrderSom: 700,
    deliveryTimeMin: 40,
    deliveryCostSom: 100,
    description: {
      ru: 'Западный сектор города',
      ky: 'Шаардын батыш сектору',
      en: 'West city sector',
    },
    coords: { x: 20, y: 38 },
  },
  {
    id: 'karagachevaya',
    name: {
      ru: 'Север (Жибек Жолу / Карагачевая роща)',
      ky: 'Түндүк (Жибек Жолу / Карагач токою)',
      en: 'North (Jibek Jolu / Karagachevaya grove)',
    },
    zone: 'orange',
    minOrderSom: 700,
    deliveryTimeMin: 40,
    deliveryCostSom: 90,
    description: {
      ru: 'Северная часть города',
      ky: 'Шаардын түндүк бөлүгү',
      en: 'North city section',
    },
    coords: { x: 55, y: 22 },
  },
];

export const BB_KITCHEN_LOCATION = {
  name: 'BB Pizza (пер. Геологический, 3 / ул. Ибраимова)',
  address: 'пер. Геологический, 3',
  coords: { x: 62, y: 54 },
  phone: '+996 (559) 444-996',
};
