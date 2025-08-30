export const cards = [
  {
    id: 1,
    images: [
      '2photo.webp',
      '2photo(1).webp',
      '2photo(2).webp'
    ],
    title: 'Դիլիջան',
    price: '120,000 ֏',
    location: 'Դիլիջան',
    people: '6'
  },
  {
    id: 2,
    images: [
      'firstphoto.webp',
      'firstphoto(1).webp',
      'firstphoto(2).webp'
    ],
    title: 'Ձորաղբյուր',
    price: '115,000 ֏',
    location: 'Ձորաղբյուր',
    people: '4'
  },

  { id: 3, image: '3photo.webp', title: 'Ծաղկաձոր', price: ' 125,000 ֏', location: 'Ծաղկաձոր', people: '8' },
  { id: 4, image: '4photo.webp', title: 'Երևան', price: '118,000 ֏', location: 'Երևան', people: '5' },
  { id: 5, image: '5photo.webp', title: 'Երևան', price: ' 112,000 ֏', location: 'Երևան', people: '3' },
  { id: 6, image: '6photo.webp', title: 'Դիլիջան', price: ' 130,000 ֏', location: 'Դիլիջան', people: '10' },
  { id: 7, image: '7photo.webp', title: 'Գյումրի', price: ' 122,000 ֏', location: 'Գյումրի', people: '6' },
  { id: 8, image: '8photo.webp', title: 'Սևան', price: ' 117,000 ֏', location: 'Սևան', people: '4' },
  { id: 9, image: '9photo.webp', title: 'Վանաձոր', price: ' 135,000 ֏', location: 'Վանաձոր', people: '8' },
  { id: 10, image: '10photo.webp', title: 'Ծաղկաձոր', price: '128,000 ֏', location: 'Ծաղկաձոր', people: '7' },
  { id: 11, image: '11photo.webp', title: 'Երևան', price: ' 121,000 ֏', location: 'Երևան', people: '5' },
  { id: 12, image: '12photo.webp', title: 'Հրազդան', price: ' 119,000 ֏', location: 'Հրազդան', people: '4' },
  { id: 13, image: '13photo.webp', title: 'Սևան', price: ' 124,000 ֏', location: 'Սևան', people: '6' },
  { id: 14, image: '14photo.webp', title: 'Աշտարակ', price: ' 114,000 ֏', location: 'Աշտարակ', people: '2' },
  { id: 15, image: '15photo.webp', title: 'Երևան', price: ' 110,000 ֏', location: 'Երևան', people: '4' },
  { id: 16, image: '5photo.webp', title: 'Աշտարակ', price: ' 112,000 ֏', location: 'Աշտարակ', people: '3' },
  { id: 17, image: '6photo.webp', title: 'Աշտարակ', price: ' 130,000 ֏', location: 'Աշտարակ', people: '10' },
  { id: 18, image: 'firstphoto.webp', title: 'Երևան', price: ' 115,000 ֏', location: 'Երևան', people: '4' },
  { id: 19, image: '3photo.webp', title: 'Ճամբարակ', price: ' 125,000 ֏', location: 'Ճամբարակ', people: '8' },
  { id: 20, image: '4photo.webp', title: 'Ձորաղբյուր', price: ' 118,000 ֏', location: 'Ձորաղբյուր', people: '5' }
].map(card => {
  if (card.images) return card;
  if (card.image) {
    const name = card.image.replace(/\.\w+$/, '');
    return {
      ...card,
      images: [
        `${name}.webp`,
        `${name}(1).webp`,
        `${name}(2).webp`
      ]
    };
  }
  return card;
});

export const Rucard = [
  {
    id: 1,
    images: [
      '2photo.webp',
      '2photo(1).webp',
      '2photo(2).webp'
    ],
    title: 'Дилижан',
    price: '120,000 ֏',
    location: 'Дилижан',
    people: '6'
  },
  {
    id: 2,
    images: [
      'firstphoto.webp',
      'firstphoto(1).webp',
      'firstphoto(2).webp'
    ],
    title: 'Дзорагпюр',
    price: '115,000 ֏',
    location: 'Дзорагпюр',
    people: '4'
  },

  { id: 3, image: '3photo.webp', title: 'Цахкадзор', price: ' 125,000 ֏', location: 'Цахкадзор', people: '8' },
  { id: 4, image: '4photo.webp', title: 'Ереван', price: '118,000 ֏', location: 'Ереван', people: '5' },
  { id: 5, image: '5photo.webp', title: 'Ереван', price: ' 112,000 ֏', location: 'Ереван', people: '3' },
  { id: 6, image: '6photo.webp', title: 'Дилижан', price: ' 130,000 ֏', location: 'Дилижан', people: '10' },
  { id: 7, image: '7photo.webp', title: 'Гюмри', price: ' 122,000 ֏', location: 'Гюмри', people: '6' },
  { id: 8, image: '8photo.webp', title: 'Севан', price: ' 117,000 ֏', location: 'Севан', people: '4' },
  { id: 9, image: '9photo.webp', title: 'Ванадзор', price: ' 135,000 ֏', location: 'Ванадзор', people: '8' },
  { id: 10, image: '10photo.webp', title: 'Цахкадзор', price: '128,000 ֏', location: 'Цахкадзор', people: '7' },
  { id: 11, image: '11photo.webp', title: 'Ереван', price: ' 121,000 ֏', location: 'Ереван', people: '5' },
  { id: 12, image: '12photo.webp', title: 'Храздан', price: ' 119,000 ֏', location: 'Храздан', people: '4' },
  { id: 13, image: '13photo.webp', title: 'Севан', price: ' 124,000 ֏', location: 'Севан', people: '6' },
  { id: 14, image: '14photo.webp', title: 'Аштарак', price: ' 114,000 ֏', location: 'Аштарак', people: '2' },
  { id: 15, image: '15photo.webp', title: 'Ереван', price: ' 110,000 ֏', location: 'Ереван', people: '4' },
   { id: 16, image: '5photo.webp', title: 'Аштарак', price: ' 112,000 ֏', location: 'Аշտարակ', people: '3' },
  { id: 17, image: '6photo.webp', title: 'Аштарак', price: ' 130,000 ֏', location: 'Аштарак', people: '10' },
  { id: 18, image: 'firstphoto.webp', title: 'Ереван', price: ' 115,000 ֏', location: 'Ереван', people: '4' },
  { id: 19, image: '3photo.webp', title: 'Чамбарак', price: ' 125,000 ֏', location: 'Чамбарак', people: '8' },
  { id: 20, image: '4photo.webp', title: 'Дзорагпюр', price: ' 118,000 ֏', location: 'Дзорагпюр', people: '5' }
].map(card => {
  if (card.images) return card;
  if (card.image) {
    const name = card.image.replace(/\.\w+$/, '');
    return {
      ...card,
      images: [
        `${name}.webp`,
        `${name}(1).webp`,
        `${name}(2).webp`
      ]
    };
  }
  return card;
});

