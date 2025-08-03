import React, { useEffect, useState } from 'react';

export default function NightStayFilter(): React.ReactElement {
  const [nightOptions, setNightOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchNightOptions = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/nightOptions.json'
        );
        if (!response.ok) throw new Error('Failed to fetch nightOptions');
        const data: string[] = await response.json();
        setNightOptions(data);
      } catch (error) {
        console.error('Error fetching nightOptions:', error);
      }
    };

    fetchNightOptions();
  }, []);

  return (
    <div className="nightAvalable">
      <h3 className="h3third">Գիշերակացի առկայություն</h3>
      <div className="nightBtns">
        {nightOptions.map((option, index) => (
          <button
            key={index}
            className={
              option === 'Ոչ' ? 'noBtn' :
              option === 'Այո' ? 'yesBtn' :
              'allBtn'
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
