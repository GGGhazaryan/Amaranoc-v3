import React, { useState } from 'react';

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
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${card.image})` }}
    >
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
            onClick={() => setLiked(!liked)}
          ></i>
        </p>
      </div>
    </div>
  );
}
