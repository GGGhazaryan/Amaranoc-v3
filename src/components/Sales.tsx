import React, { useState, useMemo } from 'react';
import '../css/App.css';
import Card from '../components/RightContent/Card';
import PriceFilter from '../components/LeftContent/PriceFilter';
import { cards } from '../data/DataBase';
const Sales = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('֏');
  const [minPrice, setMinPrice] = useState(0);

  const filteredCards = useMemo(() => {
    return cards.filter(card => {
      const price = Number(card.price?.replace(/\D/g, '')) || 0;
      return price >= minPrice;
    });
  }, [minPrice]);

  return (
    <>
      <div className="headerTitle">
        <h1>Հատուկ զեղչեր</h1>
      </div>

      <div className="cardsSales">
        <div className="salesCard" style={{ backgroundImage: 'url("salesIMG1.png")' }}>
          <div className="salesContent">
            <h2>-15%</h2>
            <p>Զեղչ կախված ամրագրման օրերի քանակից</p>
            <span>Ստացիր 5-15% զեղչ կատարելով ամրագրում 3-ից մինչև 20 օր։</span>
          </div>
        </div>

        <div className="salesCard" style={{ backgroundImage: 'url("salesIMG1.png")' }}>
          <div className="salesContent">
            <h2>-10%</h2>
            <p>Ամենահայտնի Reel-ը սոցիալական հարթակում</p>
            <span>Վիդեո տարբերակով ներկայացրու քո լավագույն օրերից մեկը amaranoc.am-ի առանձնատներից մեկում և ստացիր 15% զեղչ</span>
          </div>
        </div>

        <div className="salesCard" style={{ backgroundImage: 'url("salesIMG1.png")' }}>
          <div className="salesContent">
            <h2>-5%</h2>
            <p>Ավելացրու 5% զեղչ քո յուրաքանչյուր 3-րդ այցի համար</p>
            <span>Իրականացրու բազմաթիվ ամրագրումներ և յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ</span>
          </div>
        </div>
      </div>

      <div className="textPlaceholderSecondary">
        <h2 className="titleSec">
          Պատվիրի՛ր <span className="giftcard">Նվեր քարտ</span><br />
          Քո կամ ընկերերիդ համար
        </h2>
        <div className="underlineOrange"></div>
        <p className="textSec">
          Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում ես քո հաջորդ<br />
          արձակուրդը՝ ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային քարտերը<br />
          առաջարկում են անգերազանցելի խնայողություններ ամառանոցների և<br />
          ծառայությունների լայն տեսականիով: Ընտրիր զեղչի չափը քարտի վրա։
        </p>
      </div>

      <div className="sectionTitle">
        <h2>Թեժ առաջարկներ</h2>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <PriceFilter
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />

        <div style={{ marginTop: '20px', marginBottom: '30px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>
            Գին՝ սկսած {minPrice.toLocaleString()} ֏
          </label>
 <input
  type="range"
  className="customRange"
  min={0}
  max={135000}
  step={1000}
  value={minPrice}
  onChange={(e) => {
    const val = Number(e.target.value);
    setMinPrice(val);
    const percent = ((val - 0) / (135000 - 0)) * 100;
    e.target.style.setProperty('--value', `${percent}%`);
  }}
  style={{ width: '100%' }} 
/>


        </div>

        <div className="cardList" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {filteredCards.map(card => (
            <Card
              key={card.id}
              card={card}
              selectedCurrency={selectedCurrency}
              baseCurrency="֏"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;