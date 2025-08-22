import React, { useState } from 'react';
import { useLikedStore } from '../../store';

type CardProps = {
  card: {
    image?: string;
    title?: string;
    price?: string;
    location?: string;
    people?: string;
  };
  startPrice?: string;
  endPrice?: string;
};

export default function Card({ card, startPrice = '', endPrice = '' }: CardProps) {
  const { likedCards, toggleLike } = useLikedStore();
  const liked = likedCards.some(c => c.title === card.title);
  const [loaded, setLoaded] = useState(false);

  const priceString = card.price || '0';
  const startNum = Number(startPrice.replace(/\D/g, '')) || 0;
  const endNum = Number(endPrice.replace(/\D/g, '')) || Infinity;
  const priceNum = Number(priceString.replace(/\D/g, ''));

  const isVisible = priceNum >= startNum && priceNum <= endNum;

  if (!isVisible) return null;

  return (
    <>
      {!loaded && <div className="card skeleton"></div>}
      <div
        className="card"
        style={{ backgroundImage: `url(${card.image || ''})`, display: loaded ? 'flex' : 'none' }}
      >
        <img src={card.image || ''} alt={card.title || ''} style={{ display: 'none' }} onLoad={() => setLoaded(true)} />
        <div className="cardInfo">
          <h3>{card.title}</h3>
          <p>{card.price}</p>
          <p>{card.location}</p>
          <p>{card.people}</p>
          <i
            className="fa fa-heart"
            style={{
              backgroundColor: liked ? 'red' : 'white',
              color: liked ? 'white' : 'red',
              padding: '5px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
            onClick={() => toggleLike(card)}
          ></i>
        </div>
      </div>
    </>
  );
}
