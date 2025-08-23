import React, { useState } from 'react';
import { useLikedStore } from '../../store'; // adjust path as needed

type CardData = {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  people: string;
  region?: string;
};

type CardProps = {
  card: CardData;
};

export default function Card({ card }: CardProps) {
  const { likedCards, toggleLike } = useLikedStore();
  const [loading, setLoading] = useState(true);

  const isLiked = likedCards.some(c => c.title === card.title);
  const titleLength = card.title ? card.title.length : 0;

  // When image loads, wait 1.5s then remove loading state to fade blur and skeleton
  const handleImageLoad = () => {
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="card">
      <div className={`cardImage ${loading ? 'skeleton' : ''}`}>
        <img
          src={card.image || ''}
          alt={card.title || 'No Title'}
          className={loading ? 'blur' : ''}
          onLoad={handleImageLoad}
        />

        <button
          className={`likeButton ${isLiked ? 'liked' : ''}`}
          onClick={() => toggleLike(card)}
          aria-label={isLiked ? 'Unlike' : 'Like'}
          type="button"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>

      <div className={`cardInfo ${loading ? 'skeleton' : ''}`}>
        <h3 className="titleRow">
          <span className="icon skeleton-icon">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <span className="locationText skeleton-text">{card.location || 'No Location'}</span>

          <span className="icon peopleIcon skeleton-icon">
            <i className="fas fa-users"></i>
          </span>
          <span className="peopleText skeleton-text">{card.people || 'N/A'}</span>
        </h3>

        <p>
          <span className="icon skeleton-icon">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span className="skeleton-text">{card.price || 'N/A'}</span>
        </p>
      </div>
    </div>
  );
}
