import React from 'react';
import { useLikedStore } from '../../store';

type CardProps = {
  card: {
    image: string;
    title: string;
    price: string;
    location: string;
    people: string;
  };
};

export default function Card({ card }: CardProps): React.ReactElement {
  const { likedCards, toggleLike } = useLikedStore();
  const liked = likedCards.some(c => c.title === card.title);

  return (
    <>
      <div className="card" style={{ backgroundImage: `url(${card.image})` }}>
        <div className="cardInfo">
          <h3>{card.title}</h3>
          <p>{card.price}</p>
          <p>{card.location}</p>
          <p>{card.people}</p>
          <p>
            <i
              className="fa fa-heart"
              style={{
                backgroundColor: liked ? 'red' : 'white',
                color: liked ? 'white' : 'red',
                padding: '5px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={() => toggleLike(card)}
            ></i>
          </p>
        </div>
      </div>
    </>
  );
}
