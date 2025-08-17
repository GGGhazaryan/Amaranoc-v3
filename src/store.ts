import { create } from 'zustand';

type CardType = {
  image: string;
  title: string;
  price: string;
  location: string;
  people: string;
};

type Store = {
  likedCards: CardType[];
  toggleLike: (card: CardType) => void;
  removeFromLiked: (card: CardType) => void;
};

export const useLikedStore = create<Store>((set, get) => ({
  likedCards: [],
  toggleLike: (card) => {
    const { likedCards } = get();
    const isAlreadyLiked = likedCards.some(c => c.title === card.title);

    if (isAlreadyLiked) {
      set({ likedCards: likedCards.filter(c => c.title !== card.title) });
    } else {
      set({ likedCards: [...likedCards, card] });
    }
  },
  removeFromLiked: (card) => {
    const { likedCards } = get();
    set({ likedCards: likedCards.filter(c => c.title !== card.title) });
  }
}));
