import React from 'react';
import { useLikedStore } from '../../store';


export default function RussiaLikedPopup(): React.ReactElement {
  const { likedCards, removeFromLiked } = useLikedStore();

  if (likedCards.length === 0) {
    return <div className="popup" style={{ textAlign: 'center' }}>Нет лайков для постов!</div>;
  }

  return (
    <div className="popup">
      <h3>Избранное <i className="fa fa-bookmark" aria-hidden="true"></i>
      </h3>
      {likedCards.map((card, index) => (
        <div key={index} className="cardPopup">
          <img src={`/${card.images?.[0]}`} alt={card.title} />
          <div className="cardPopupInfo">
            <p>{card.title}</p>
            <p>{card.price}</p>
            <p>{card.location}</p>
            <p>{card.people}</p>
          </div>
          <button
            className="deleteBtn"
            onClick={() => removeFromLiked(card)}
            title="Remove from liked"
            style={{ marginLeft: '40px', fontSize: '20px' }}
          >
            <i className="fa fa-trash" style={{ border: 'none !important' }} aria-hidden="true"></i>
          </button>
        </div>
      ))}
    </div>
  );
}
