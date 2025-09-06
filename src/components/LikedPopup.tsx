import React from 'react';
import { useLikedStore } from '../store';
import '../css/LikesPopup.css';

export default function LikedPopup(): React.ReactElement {
  const { likedCards, removeFromLiked } = useLikedStore();

  if (likedCards.length === 0) {
    return <div className="popup" style={{ textAlign: 'center' }}>Հավանած գրառումներ չկան:</div>;
  }

  return (
    <div className="popup">
      <h3>Հավանածներ <i className="fa fa-bookmark" aria-hidden="true"></i>
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
