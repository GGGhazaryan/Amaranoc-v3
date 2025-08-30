export default function RussiaFilter({ locations, selected, onChange }) {
  const toggleLocation = (loc) => {
    if (selected.includes(loc)) {
      onChange(selected.filter(l => l !== loc));
    } else {
      onChange([...selected, loc]);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}
    >
      <h4 style={{ margin: '0 0 10px', fontSize: '18px', color: '#333' }}>Ֆիլտր</h4>
      {locations.map(loc => {
        const isActive = selected.includes(loc);
        return (
          <div
            key={loc}
            onClick={() => toggleLocation(loc)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              padding: '8px 10px',
              borderRadius: '8px',
              backgroundColor: isActive ? '#FF7A00' : '#111',
              color: '#fff',
              transition: 'background-color 0.3s ease'
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                border: '2px solid #fff',
                backgroundColor: isActive ? '#fff' : 'transparent',
                transition: 'background-color 0.3s ease'
              }}
            />
            <span style={{ fontSize: '16px' }}>{loc}</span>
          </div>
        );
      })}
    </div>
  );
}
