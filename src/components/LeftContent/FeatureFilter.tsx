import React, { useEffect, useState } from 'react';

export default function FeatureFilter(): React.ReactElement {
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/features.json'
        );
        if (!response.ok) throw new Error('Failed to fetch features');
        const data: string[] = await response.json();
        setFeatures(data);
      } catch (error) {
        console.error('Error fetching features:', error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <div className="featuresSection">
      <label className="sectionLabel">Առավելություններ</label>
      <div className="checkboxsArray">
        {features.map((feature, index) => (
          <label className="customCheckbox" key={index}>
            <input type="checkbox" />
            <span className="checkmark"></span> {feature}
          </label>
        ))}
      </div>
    </div>
  );
}
