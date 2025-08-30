import React from 'react';
import { useLikedStore } from '../../store';
import '../css/LikesPopup.css';

export default function RussiaLikedPopup(): React.ReactElement {
  const { likedCards, removeFromLiked } = useLikedStore();

  if (likedCards.length === 0) {
    return <div className="popup" style={{ textAlign: 'center' }}>No liked posts!</div>;
  }

  return (
    <div className="popup">
      <h3>Liked Posts</h3>
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
            <i className="fa fa-trash" style={{border:'none !important'}} aria-hidden="true"></i>
          </button>
        </div>
      ))}
    </div>
  );
}
