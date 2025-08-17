import React from 'react';
import { useLikedStore } from '../store';
import '../css/LikesPopup.css';

export default function LikedPopup(): React.ReactElement {
  const { likedCards, removeFromLiked } = useLikedStore();

  if (likedCards.length === 0) {
    return <div className="popup" style={{ textAlign: 'center' }}>No liked products!</div>;
  }

  return (
    <div className="popup">
      <h3>Likes</h3>
      {likedCards.map((card, index) => (
        <div key={index} className="cardPopup">
          <img src={card.image} alt={card.title} />
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
            style={{marginLeft:'40px' ,fontSize:'20px'}}
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}
