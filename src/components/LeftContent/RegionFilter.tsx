import { useState, useEffect } from 'react';

type Region = {
  label: string;
  count: number;
};

type RegionFilterProps = {
  onRegionChange?: (selectedRegions: string[]) => void;
};

export default function RegionFilter({ onRegionChange }: RegionFilterProps) {
  const [regions, setRegions] = useState<Region[]>([]);
  const [clickedRegions, setClickedRegions] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch('https://amaranoc-4b1df-default-rtdb.firebaseio.com/regions.json');
        const data = await response.json();
        setRegions(data);
        setClickedRegions(new Array(data.length).fill(false));
      } catch (error) {
        console.error('Error fetching regions:', error);
      }
    };

    fetchRegions();
  }, []);

  // Call onRegionChange whenever clickedRegions change
  useEffect(() => {
    if (!onRegionChange) return;

    const selected = regions
      .filter((_, i) => clickedRegions[i])
      .map(region => region.label);

    onRegionChange(selected);
  }, [clickedRegions, regions, onRegionChange]);

  const toggleRegion = (index: number) => {
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
  <label className="customCheckbox" key={region.label}>
    <input
      type="checkbox"
      checked={clickedRegions[index] || false}
      onChange={() => toggleRegion(index)}
    />
    <span
      className="checkmark"
      style={{ backgroundColor: clickedRegions[index] ? 'orange' : 'transparent' }}
    ></span>
    {region.label} {region.count}
  </label>
))}

      </div>
    </>
  );
}
