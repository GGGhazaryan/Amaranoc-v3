import { useEffect, useState } from 'react';

export default function PoolFilter() {
  const [poolOptions, setPoolOptions] = useState([]);

  useEffect(() => {
    const fetchPoolOptions = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/poolOptions.json'
        );
        if (!response.ok) throw new Error('Failed to fetch poolOptions');
        const data = await response.json();
        setPoolOptions(data);
      } catch (error) {
        console.error('Error fetching poolOptions:', error);
      }
    };

    fetchPoolOptions();
  }, []);

  return (
    <div className="poolSection">
      <label className="sectionLabel">Լողավազան</label>
      <div className="poolBtns">
        {poolOptions.map((option, index) => (
          <button key={index} className={option === 'Բոլորը' ? 'allBtn' : 'poolBtn'}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
