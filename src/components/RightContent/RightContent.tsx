import React from 'react';
import cards from '../../data/DataBase';
import Card from './Card';

export default function RightContent(): React.ReactElement {
  return (
    <main className="rightContentMain" style={{ marginTop: "5%" }}>
      <div className="headersContainer">
          <i className="fas fa-arrow-left" style={{ fontSize: "24px", cursor: "pointer" }}></i>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item1.png" alt="item1" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item2.png" alt="item2" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item3.png" alt="item3" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item4.png" alt="item4" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item5.png" alt="item5" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item6.png" alt="item6" /></div>
         <i className="fas fa-arrow-right" style={{ fontSize: "24px", cursor: "pointer" }}></i>
      </div>
      <div className="rightContentWrapper">
        {cards.map(card => (  
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}
