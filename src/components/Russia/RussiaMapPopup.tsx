import React, { useState } from 'react';
import {Rucard} from './../../data/DataBase';
import Filter from './RussiaFilter';
import '../../css/App.css'

export default function RussiaMapPopup({ onClose }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filterLocations, setFilterLocations] = useState([]);

const locations = [...new Set(Rucard.map(card => card.location))];


  const filteredCards = filterLocations.length
    ? Rucard.filter(card => filterLocations.includes(Rucard.location))
    : Rucard;

  const handlePointClick = (card) => {
    setSelectedLocation(card);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5', 
        zIndex: 1000
      }}
    >
     
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '28px',
          color: '#333',
          background: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          zIndex: 1100
        }}
      >
        ✕
      </button>

     
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src="/armenia-map.png"
          alt="Map of Armenia"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />

        {/* Чекпоинты */}
        {filteredCards.map(Rucard => (
          <div
            key={Rucard.id}
            onClick={() => handlePointClick(Rucard)}
            style={{
              position: 'absolute',
              top: getLocation(card.location).top,
              left: getLocation(card.location).left,
              backgroundColor: filterLocations.includes(Rucard.location) ? '#FF7A00' : '#111',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)',
              transition: 'background 0.3s ease'
            }}
          >
            <img
              src={`/${Rucard.image}`}
              alt={Rucard.title}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}

        {/* Фильтр */}
        <Filter
          locations={locations}
          selected={filterLocations}
          onChange={setFilterLocations}
        />
      </div>

      {/* Попап с деталями */}
      {selectedLocation && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '15px',
            width: '400px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
            zIndex: 1200,
            textAlign: 'center',
            animation: 'scaleIn 0.3s ease'
          }}
        >
          <img
            src={`/${selectedLocation.image}`}
            alt={selectedLocation.title}
            style={{
              width: '100%',
              height: '220px',
              borderRadius: '12px',
              objectFit: 'cover',
              marginBottom: '15px'
            }}
          />
          <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>{selectedLocation.title}</h2>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Գին: <strong>{selectedLocation.price}</strong></p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Մարդիկ: <strong>{selectedLocation.people}</strong></p>
          <button
            onClick={() => setSelectedLocation(null)}
            style={{
              marginTop: '15px',
              padding: '10px 20px',
              backgroundColor: '#FF7A00',
              color: '#fff',
              fontSize: '16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e66a00'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#FF7A00'}
          >
          X
          </button>
        </div>
      )}
    </div>
  );
}

function getLocation(location) {
  const coords = {
    'Երևան': { top: '40%', left: '45%' },
    'Դիլիջան': { top: '30%', left: '50%' },
    'Ձորաղբյուր': { top: '55%', left: '45%' },
    'Ծաղկաձոր': { top: '40%', left: '48%' },
    'Սևան': { top: '35%', left: '55%' },
    'Գյումրի': { top: '20%', left: '35%' },
    'Վանաձոր': { top: '25%', left: '45%' },
    'Աշտարակ': { top: '50%', left: '42%' },
    'Հրազդան': { top: '38%', left: '47%' },
    'Ճամբարակ': { top: '32%', left: '52%' }
  };
  return coords[location] || { top: '50%', left: '50%' };
}
