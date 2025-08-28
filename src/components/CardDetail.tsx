import React from 'react';
import { useParams } from 'react-router-dom';

type CardData = {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  people: string;
};

type CardDetailProps = {
  cards: CardData[];
};

export default function CardDetail({ cards }: CardDetailProps) {
  const { id } = useParams();
  const card = cards.find(c => c.id === Number(id));

  if (!card) return <div>Card not found</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} style={{ width: '100%', borderRadius: '12px' }} />
      <p>Location: {card.location}</p>
      <p>People: {card.people}</p>
      <p>Price: {card.price}</p>
    </div>
  );
}
