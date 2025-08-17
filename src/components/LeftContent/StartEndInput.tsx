import React, { useState, useEffect } from 'react';

export default function StartEndInput() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <div className="startEndInputsArray">
        <div className="skeleton startInput" style={{ height: '30px', width: '100px', borderRadius: '5px' }}></div>
        <div className="skeleton endInput" style={{ height: '30px', width: '100px', borderRadius: '5px', marginLeft: '10px' }}></div>
      </div>
    );
  }

  return (
    <div className="startEndInputsArray">
      <input type="text" className="startInput" placeholder="Սկսած" />_
      <input type="text" className="endInput" placeholder="Միչնև" />
    </div>
  );
}
