import React, { useState } from 'react';
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

  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className="card skeleton"></div>} {/* skeleton блок */}

      <div
        className="card"
        style={{ backgroundImage: `url(${card.image})`, display: loaded ? 'flex' : 'none' }}
      >
        {/* Загрузка картинки для отслеживания завершения */}
        <img
          src={card.image}
          alt={card.title}
          style={{ display: 'none' }}
          onLoad={() => setLoaded(true)}
        />
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
