import { useState } from 'react';
import { regions } from '../../data/DataBase';

export default function RegionFilter() {
  const [clickedRegions, setClickedRegions] = useState(regions.map(() => false));

  const toggleRegion = (index) => {
    setClickedRegions(prev => {
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
            <input type="checkbox" checked={clickedRegions[index]} readOnly />
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
