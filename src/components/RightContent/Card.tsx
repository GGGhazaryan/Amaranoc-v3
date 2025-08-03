import React from 'react';

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
  return (
    <div className="card" style={{ backgroundImage: `url(${card.image})` }}>
      <div className="cardInfo">
        <h3>{card.title}</h3>
        <p>{card.price}</p>
        <p>{card.location}</p>
        <p>{card.people}</p>
      </div>
    </div>
  );
}
