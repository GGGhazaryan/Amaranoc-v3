import { poolOptions } from '../../data/DataBase';

export default function PoolFilter() {
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
