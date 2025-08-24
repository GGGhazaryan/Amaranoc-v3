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
  const [filteredCards, setFilteredCards] = useState(cardsData);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
      <aside className="container" style={{ marginTop: '19%', height: 'max-content' }}>
        <div className="mainLeftContentDiv">
          <RegionFilter onRegionChange={handleRegionChange} />
          <PriceFilter />
          <StartEndInput cards={cardsData} onFilter={setFilteredCards} />
          <PeopleCounter label="Մարդկանց թույլատրելի քանակ" />
          <NightStayFilter />
          <PeopleCounter label="Մարդկանց թույլատրելի քանակ Գիշերակացության համար" />
          <RoomFilter />
          <BathroomFilter />
          <PoolFilter />
          <FeatureFilter />
        </div>
      </aside>

      <RightContent cards={filteredCards} selectedRegions={selectedRegions} />
    </>
  );
}
