import React from 'react';

type CardData = {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  people: string;
  region?: string; // Make sure this is in your card data for filtering
};

type CardProps = {
  card: CardData;
};

export default function Card({ card }: CardProps) {
  if (!card) {
    return <div>Card data not available</div>;
  }
  else{
    console.log(card); // Check if this array contains duplicates

  }

  const titleLength = card.title ? card.title.length : 0;

  return (
    <div >
      <img src={card.image || ''} alt={card.title || 'No title'} />
      <h2>{card.title || 'No Title'} ({titleLength} characters)</h2>
      <p>Price: {card.price || 'N/A'}</p>
      <p>Location: {card.location || 'N/A'}</p>
      <p>Capacity: {card.people || 'N/A'}</p>
    </div>
  );
}
