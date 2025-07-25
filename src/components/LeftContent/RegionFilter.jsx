import { useState, useEffect } from 'react';

export default function RegionFilter() {
  const [regions, setRegions] = useState([]);
  const [clickedRegions, setClickedRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/regions.json'
        );
        if (!response.ok) throw new Error('Failed to fetch regions');
        const data = await response.json();
        setRegions(data);
        setClickedRegions(new Array(data.length).fill(false));
      } catch (error) {
        console.error('Error fetching regions:', error);
      }
    };

    fetchRegions();
  }, []);

  const toggleRegion = (index) => {
    setClickedRegions((prev) => {
      const newClicked = [...prev];
      newClicked[index] = !newClicked[index];
      return newClicked;
    });
  };

  return (
    <>
      <h3 className="h3leftcontent">Տարածաշրջան</h3>
      <div className="checkboxsArray">
        {regions.map((region, index) => (
          <label className="customCheckbox" key={index}>
            <input type="checkbox" checked={clickedRegions[index] || false} readOnly />
            <span
              className="checkmark"
              style={{ backgroundColor: clickedRegions[index] ? 'black' : 'transparent' }}
              onClick={() => toggleRegion(index)}
            ></span>
            {region.label} {region.count}
          </label>
        ))}
      </div>
    </>
  );
}
