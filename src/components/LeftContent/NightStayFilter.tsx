import React, { useEffect, useState } from 'react';

type NightStayFilterProps = {
  selectedNightStay: string;
  onChange: (value: string) => void;
};

export default function NightStayFilter({ selectedNightStay, onChange }: NightStayFilterProps): React.ReactElement {
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

  // Set default selection if empty
  useEffect(() => {
    if (nightOptions.length > 0 && !selectedNightStay) {
      onChange(nightOptions[0]);
    }
  }, [nightOptions, selectedNightStay, onChange]);

  return (
    <div className="nightAvalable">
      <h3 className="h3third">Գիշերակացի առկայություն</h3>
      <div className="nightBtns">
        {nightOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onChange(option)}
            style={{
              backgroundColor: selectedNightStay === option ? 'black' : '',
              color: selectedNightStay === option ? 'white' : ''
            }}
            className={
              option === 'Ոչ' ? 'noBtn' :
              option === 'Այո' ? 'yesBtn' :
              'yesBtn'
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
