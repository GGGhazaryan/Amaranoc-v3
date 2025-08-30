import React, { useEffect, useState } from 'react';

type BathroomFilterProps = {
  selectedBathroomCount: string;
  onBathroomCountChange: (count: string) => void;
};

export default function RussiaBathroomFilter({
  selectedBathroomCount,
  onBathroomCountChange,
}: BathroomFilterProps): React.ReactElement {
  const [bathroomCounts, setBathroomCounts] = useState<string[]>([]);

  useEffect(() => {
    const fetchBathroomCounts = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/RuBathroomCounts.json'
        );
        if (!response.ok) throw new Error('Failed to fetch bathroomCounts');
        const data: string[] = await response.json();
        setBathroomCounts(data);
      } catch (error) {
        console.error('Error fetching bathroomCounts:', error);
      }
    };

    fetchBathroomCounts();
  }, []);

  useEffect(() => {
    if (bathroomCounts.length > 0 && !selectedBathroomCount) {
      onBathroomCountChange(bathroomCounts[0]);
    }
  }, [bathroomCounts, selectedBathroomCount, onBathroomCountChange]);

  return (
    <div className="bathroomCount">
      <label className="sectionLabel">Количество ванных комнат</label>
      <div className="bathroomBtns">
        {bathroomCounts.map((count, index) => (
          <button
            key={index}
            className={count === 'Все' ? 'yesBtn' : 'bathroomBtn'}
            onClick={() => onBathroomCountChange(count)}
            style={{
              backgroundColor: selectedBathroomCount === count ? 'black' : '',
              color: selectedBathroomCount === count ? 'white' : '',
            }}
          >
            {count}
          </button>
        ))}
      </div>
    </div>
  );
}
