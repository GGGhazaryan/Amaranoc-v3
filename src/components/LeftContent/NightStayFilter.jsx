import { nightOptions } from '../../data/DataBase';

export default function NightStayFilter() {
  return (
    <div className="nightAvalable">
      <h3 className="h3third">Գիշերակացի առկայություն</h3>
      <div className="nightBtns">
        {nightOptions.map((option, index) => (
          <button key={index} className={
            option === 'Ոչ' ? 'noBtn' :
            option === 'Այո' ? 'yesBtn' : 'allBtn'}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
