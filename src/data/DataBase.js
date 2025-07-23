const cards = [
  { id: 1, image: '2photo.webp', title: 'Վարձով Տուն', price: 'Սկսած 120,000 ֏', location: 'Դիլիջան', people: 'Մինչև 6 մարդ' },
  { id: 2, image: 'firstphoto.webp', title: 'Աղբյուրի Տուն', price: 'Սկսած 115,000 ֏', location: 'Ձորաղբյուր', people: 'Մինչև 4 մարդ' },
  { id: 3, image: '3photo.webp', title: 'Լեռնային Տուն', price: 'Սկսած 125,000 ֏', location: 'Ծաղկաձոր', people: 'Մինչև 8 մարդ' },
  { id: 4, image: '4photo.webp', title: 'Բնակարան Տուն', price: 'Սկսած 118,000 ֏', location: 'Երևան', people: 'Մինչև 5 մարդ' },
  { id: 5, image: '5photo.webp', title: 'Ստանդարտ Տուն', price: 'Սկսած 112,000 ֏', location: 'Աշտարակ', people: 'Մինչև 3 մարդ' },
  { id: 6, image: '6photo.webp', title: 'Ակտիվ հանգիստ', price: 'Սկսած 130,000 ֏', location: 'Դիլիջան', people: 'Մինչև 10 մարդ' },
  { id: 7, image: '7photo.webp', title: 'Հարմարավետ Տուն', price: 'Սկսած 122,000 ֏', location: 'Գյումրի', people: 'Մինչև 6 մարդ' },
  { id: 8, image: '8photo.webp', title: 'Նավակ Տուն', price: 'Սկսած 117,000 ֏', location: 'Սևան', people: 'Մինչև 4 մարդ' },
  { id: 9, image: '9photo.webp', title: 'Ծովի Կողմ', price: 'Սկսած 135,000 ֏', location: 'Վանա լիճ', people: 'Մինչև 8 մարդ' },
  { id: 10, image: '10photo.webp', title: 'Բարձրլեռնային Տուն', price: 'Սկսած 128,000 ֏', location: 'Ճամբարակ', people: 'Մինչև 7 մարդ' },
  { id: 11, image: '11photo.webp', title: 'Մխիթարիչ Տուն', price: 'Սկսած 121,000 ֏', location: 'Երևան', people: 'Մինչև 5 մարդ' },
  { id: 12, image: '12photo.webp', title: 'Հարմարավետ Բնակարան', price: 'Սկսած 119,000 ֏', location: 'Հրազդան', people: 'Մինչև 4 մարդ' },
  { id: 13, image: '13photo.webp', title: 'Լիճափնյա Տուն', price: 'Սկսած 124,000 ֏', location: 'Սևան', people: 'Մինչև 6 մարդ' },
  { id: 14, image: '14photo.webp', title: 'Փոքր Վիլլա', price: 'Սկսած 114,000 ֏', location: 'Աշտարակ', people: 'Մինչև 2 մարդ' },
  { id: 15, image: '15photo.webp', title: 'Հասանելի Տուն', price: 'Սկսած 110,000 ֏', location: 'Երևան', people: 'Մինչև 4 մարդ' },
  { id: 16, image: '5photo.webp', title: 'Ստանդարտ Տուն', price: 'Սկսած 112,000 ֏', location: 'Աշտարակ', people: 'Մինչև 3 մարդ' },
  { id: 17, image: '6photo.webp', title: 'Ակտիվ հանգիստ', price: 'Սկսած 130,000 ֏', location: 'Դիլիջան', people: 'Մինչև 10 մարդ' },
  { id: 18, image: 'firstphoto.webp', title: 'Աղբյուրի Տուն', price: 'Սկսած 115,000 ֏', location: 'Ձորաղբյուր', people: 'Մինչև 4 մարդ' },
  { id: 19, image: '3photo.webp', title: 'Լեռնային Տուն', price: 'Սկսած 125,000 ֏', location: 'Ծաղկաձոր', people: 'Մինչև 8 մարդ' },
  { id: 20, image: '4photo.webp', title: 'Բնակարան Տուն', price: 'Սկսած 118,000 ֏', location: 'Երևան', people: 'Մինչև 5 մարդ' }
];
export default cards
export const regions = [
  { label: 'Դիլիջան', count: 88 },
  { label: 'Ծաղկաձոր', count: 63 },
  { label: 'Ձորաղբյուր', count: 17 },
  { label: 'Երևան', count: 15 },
  { label: 'Աշտարակ', count: 15 }
];

export const priceCurrencies = ['֏', '$', '€', '₽'];

export const nightOptions = ['Բոլորը', 'Այո', 'Ոչ'];

export const roomCounts = ['Բոլորը', '1', '2', '3', '4', '5', '6 և ավելի'];

export const bathroomCounts = ['Բոլորը', '1', '2', '3+'];

export const poolOptions = ['Բոլորը', 'Բաց', 'Փակ', 'Տաքացվող', 'Առանց լողավազանի'];

export const features = [
  'Շոգեբաղնիք',
  'Ջակուզի',
  'Բիլիարդ',
  'Սեղանի թենիս',
  'Բացօթյա տաղավար',
  'Փակ տաղավար',
  'Մանղալ',
  'Թոնիր'
];