import { bathroomCounts } from '../../data/DataBase';

export default function BathroomFilter() {
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
