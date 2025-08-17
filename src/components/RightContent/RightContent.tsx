import React from 'react';
import cards from '../../data/DataBase';
import Card from './Card';

export default function RightContent(): React.ReactElement {
  return (
    <main className="rightContentWrapper" style={{ marginTop: "5%", gap: '10px', padding: '10px' }}>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </main>
  );
}
