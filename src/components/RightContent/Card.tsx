import React, { useState } from 'react';
import { useLikedStore } from '../../store'; // Adjust path as needed

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

  const handleImageLoad = () => {
    // Fade out loading effects after delay
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="card">
      {/* Image with optional blur and skeleton */}
      <div className={`cardImage ${loading ? 'skeleton' : ''}`}>
        <img
          src={card.image || ''}
          alt={card.title || 'No Title'}
          className={loading ? 'blur' : ''}
          onLoad={handleImageLoad}
        />

        {/* Like button */}
        <button
          className={`likeButton ${isLiked ? 'liked' : ''}`}
          onClick={() => toggleLike(card)}
          aria-label={isLiked ? 'Unlike' : 'Like'}
          type="button"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>

      {/* Card Info */}
      <div className={`cardInfo ${loading ? 'skeleton' : ''}`}>
        {/* Top row: Location + People */}
        <h3 className="titleRow">
          <span className="icon skeleton-icon">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <span className="locationText skeleton-text">
            {card.location || 'No Location'}
          </span>

          <span className="icon peopleIcon skeleton-icon">
            <i className="fas fa-users"></i>
          </span>
          <span className="peopleText skeleton-text">
            {card.people || 'N/A'}
          </span>
        </h3>

        {/* Price */}
        <p>
          <span className="icon skeleton-icon">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span className="skeleton-text">
            {card.price || 'N/A'}
          </span>
        </p>
      </div>
    </div>
  );
}
