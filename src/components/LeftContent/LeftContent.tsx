import React, { useState, useEffect } from 'react';
import '../../css/App.css';

import RegionFilter from './RegionFilter';
import PriceFilter from './PriceFilter';
import StartEndInput from './StartEndInput';
import PeopleCounter from '../PeopleCounter';
import NightStayFilter from './NightStayFilter';
import RoomFilter from './RoomFilter';
import BathroomFilter from './BathroomFilter';
import PoolFilter from './PoolFilter';
import FeatureFilter from './FeatureFilter';

import RightContent from '../RightContent/RightContent';

import cardsData from '../../data/DataBase';

export default function LeftContent(): React.ReactElement {
  const [loaded, setLoaded] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [peopleCount, setPeopleCount] = useState(1);
  const [filteredCards, setFilteredCards] = useState(cardsData);
  const [selectedNightStay, setSelectedNightStay] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('֏');
  
  const baseCurrency = '֏';
  const [selectedBathroomCount, setSelectedBathroomCount] = useState('Բոլորը');

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = cardsData.filter(card => {
      const cardLocation = card.location?.trim().toLowerCase() || '';
      const regionMatch =
        selectedRegions.length === 0 ||
        selectedRegions.some(region => region.trim().toLowerCase() === cardLocation);

      const cardPeopleNum = Number(card.people) || 0;
      const peopleMatch = cardPeopleNum >= peopleCount;

      return regionMatch && peopleMatch;
    });

    setFilteredCards(filtered);
  }, [selectedRegions, peopleCount]);

  const handleRegionChange = (regions: string[]) => {
    setSelectedRegions(prev => {
      if (JSON.stringify(prev) !== JSON.stringify(regions)) {
        return regions;
      }
      return prev;
    });
  };

  if (!loaded) {
    return (
      <aside
        className="container"
        style={{ marginTop: '19%', height: 'max-content', padding: '15 25' }}
      >
        <div className="mainLeftContentDiv skeleton" style={{ height: '500px' }}></div>
      </aside>
    );
  }

  return (
    <>
    <div className="father">
      <aside className="container" style={{ marginTop: '19%', height: 'max-content' }}>
        <div className="mainLeftContentDiv">
          <RegionFilter onRegionChange={handleRegionChange} />
         <PriceFilter
  selectedCurrency={selectedCurrency}
  setSelectedCurrency={setSelectedCurrency}
/>

          <StartEndInput cards={cardsData} onFilter={setFilteredCards} />
          <PeopleCounter
            label="Մարդկանց թույլատրելի քանակ"
            min={1}
            max={20}
            onChange={setPeopleCount}
          />
          <NightStayFilter
            selectedNightStay={selectedNightStay}
            onChange={setSelectedNightStay}
          />
          <PeopleCounter label="Մարդկանց թույլատրելի քանակ Գիշերակացության համար" min={1} max={20} onChange={() => { }} />
          <RoomFilter />
          <BathroomFilter
            selectedBathroomCount={selectedBathroomCount}
            onBathroomCountChange={setSelectedBathroomCount}
          />
          <PoolFilter />
          <FeatureFilter />
        </div>
      </aside>
</div>
      <RightContent
        cards={filteredCards}
        selectedRegions={selectedRegions}
        selectedNightStay={selectedNightStay}
        selectedCurrency={selectedCurrency}
        baseCurrency={baseCurrency}
      />
    </>
  );
}
