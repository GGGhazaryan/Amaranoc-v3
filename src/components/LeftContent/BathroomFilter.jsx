import { useEffect, useState } from 'react';

export default function BathroomFilter() {
  const [bathroomCounts, setBathroomCounts] = useState([]);

  useEffect(() => {
    const fetchBathroomCounts = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/bathroomCounts.json'
        );
        if (!response.ok) throw new Error('Failed to fetch bathroomCounts');
        const data = await response.json();
        setBathroomCounts(data);
      } catch (error) {
        console.error('Error fetching bathroomCounts:', error);
      }
    };

    fetchBathroomCounts();
  }, []);

  return (
    <div className="bathroomCount">
      <label className="sectionLabel">Սանհանգույցների քանակ</label>
      <div className="bathroomBtns">
        {bathroomCounts.map((count, index) => (
          <button key={index} className={count === 'Բոլորը' ? 'allBtn' : 'bathroomBtn'}>
            {count}
          </button>
        ))}
      </div>
    </div>
  );
}
