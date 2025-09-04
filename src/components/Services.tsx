import '../css/App.css';
import { useState, useRef } from 'react';

const titles = [
  "Սպասարկում",
  "Շոու",
  "Միջոցառումներ",
  "Տեխնիկա",
  "Օրավարձով գույք",

];

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[index].offsetWidth;
      const scrollPos =
        sliderRef.current.children[index].offsetLeft -
        sliderRef.current.offsetWidth / 2 +
        itemWidth / 2;
      sliderRef.current.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  };

  return (
    <div className="services-main-container">
      <div className="services-header">
        <div
          className="sliderForServices"
          ref={sliderRef}
          style={{
            display: 'flex',
            gap: '100px',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            padding: '20px 0',
            justifyContent: 'center',
          }}
        >
          {titles.map((title, index) => (
            <div
              key={index}
              className="service-item"
              onClick={() => handleClick(index)}
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                flex: '0 0 auto',
                borderBottom:
                  selectedIndex === index ? '4px solid orange' : '4px solid transparent',
                paddingBottom: '5px',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src={`./servicesItem${index + 1}.png`}
                alt={`service${index + 1}`}
                className="service-image"
                style={{ maxWidth: 'auto', height: 'auto', objectFit: 'cover' }}
              />
              <p className="service-title" style={{ marginTop: '8px', fontWeight: 'bold' }}>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="services-content" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {selectedIndex === 0 && (
          <>
            <div className="services-content-Item1" style={{ marginTop: '2%', marginLeft: '4%' }}>
              <div className="card-1-Item1">
                <img className="card-1-1" src="./card-services-IMG1.webp" alt="card-services-IMG1" />
                <h3 className="card-h3-1-1">Մատուցող</h3>
                <p className="card-p-1-1" style={{ marginTop: '1%', color: '#333' }}>
                  Յուրաքանյչուր մատուցող կարող է սպասարկել 15-20 անձի։<br /> Ծառայության արժեքը կախված է միջոցառման<br /> անցկացման վայրից։ Ձեր միջոցառման կազմակերպման..
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
                  <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>20.000 ֏</h3>
                  <button
                    className="amragr"
                    style={{
                      border: '1px solid orange',
                      height: '40px',
                      width: '100px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginTop: '0.1%',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert('Booked!')}
                  >
                    ամրագրել
                  </button>
                </div>
              </div>
            </div>

            <div className="services-content-Item2" style={{ marginTop: '2%', marginLeft: '4%' }}>
              <div className="card-1-Item2">
                <img className="card-1-1" src="./card-services-IMG2.webp" alt="card-services-IMG2" />
                <h3 className="card-h3-1-2">Բարմեն</h3>
                <p className="card-p-1-2" style={{ marginTop: '1%', color: '#333' }}>
                  Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր<br /> տեսակի խմիչքների պատրաստման հմտություններին։ Մեր<br />բարմենները պատասխանատու են բարում նստած..
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
                  <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>25.000 ֏</h3>
                  <button
                    className="amragr"
                    style={{
                      border: '1px solid orange',
                      height: '40px',
                      width: '100px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginTop: '0.1%',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert('Booked!')}
                  >
                    ամրագրել
                  </button>
                </div>
              </div>
            </div>

            <div className="services-content-Item3" style={{ marginTop: '2%', marginLeft: '4%' }}>
              <div className="card-1-Item3">
                <img className="card-1-1" src="./card-services-IMG3.webp" alt="card-services-IMG3" />
                <h3 className="card-h3-1-3">Խոհարար</h3>
                <p className="card-p-1-3" style={{ marginTop: '1%', color: '#333' }}>
                  Արժեքը կախված է միջոցառման անձանց քանակից և<br /> ուտեստների մենյուից։ Ունենալով հարուստ փորձ և<br /> տաղանդ, Մեր խոհարարները ստեղծում են համերի և..
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
                  <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>35.000 ֏</h3>
                  <button
                    className="amragr"
                    style={{
                      border: '1px solid orange',
                      height: '40px',
                      width: '100px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginTop: '0.1%',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert('Booked!')}
                  >
                    ամրագրել
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedIndex === 1 && (
          <>
            <div className="services-content-ItemNew1" style={{ marginTop: '2%', marginLeft: '4%' }}>
              <div className="card-1-ItemNew1">
                <img className="card-1-1" src="./card-services-IMG4.webp" alt="card-services-IMG4" />
                <h3 className="card-h3-1-4">Դի-Ջեյ</h3>
                <p className="card-p-1-4" style={{ marginTop: '1%', color: '#333' }}>
                  Դիջեյներն Մեր կազմակերպած միջոցառումների աստղերն<br/> են՝ ովքեր ստեղծում են յուրահատուկ մթնոլորտ<br/> և զվարճանք. Միքսերով նրանք երեկոն վերածում են իրական խնջույքի։
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
                  <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>50.000 ֏</h3>
                  <button
                    className="amragr"
                    style={{
                      border: '1px solid orange',
                      height: '40px',
                      width: '100px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginTop: '0.1%',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert('Booked!')}
                  >
                    ամրագրել
                  </button>
                </div>
              </div>
            </div>

            <div className="services-content-ItemNew2" style={{ marginTop: '2%', marginLeft: '4%' }}>
              <div className="card-1-ItemNew2">
                <img className="card-1-1" src="./card-services-IMG5.webp" alt="card-services-IMG5" />
                <h3 className="card-h3-1-5">Երգիչ</h3>
                <p className="card-p-1-5" style={{ marginTop: '1%', color: '#333' }}>
                  Amaranoc.am ի երգիչները, իրենց զարմանալի<br/> ձայնով և տաղանդով, կստեղծեն յուրահատուկ մթնոլորտ։
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
                  <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>150.000 ֏</h3>
                  <button
                    className="amragr"
                    style={{
                      border: '1px solid orange',
                      height: '40px',
                      width: '100px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginTop: '0.1%',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert('Booked!')}
                  >
                    ամրագրել
                  </button>
                </div>
              </div>
            </div>

            <div className="services-content-ItemNew3" style={{ marginTop: '2%', marginLeft: '4%' }}>
              <div className="card-1-ItemNew3">
                <img className="card-1-1" src="./card-services-IMG6.webp" alt="card-services-IMG6" />
                <h3 className="card-h3-1-6">Կրակներով շոու</h3>
                <p className="card-p-1-6" style={{ marginTop: '1%', color: '#333' }}>
                  Կրակներով շոուն կստեղծի վառ և հիասքանչ ժամանց, որը կմնա<br/> Ձեր հիշողության մեջ։
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
                  <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>50.000 ֏</h3>
                  <button
                    className="amragr"
                    style={{
                      border: '1px solid orange',
                      height: '40px',
                      width: '100px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginTop: '0.1%',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert('Booked!')}
                  >
                    ամրագրել
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedIndex === 2 && (
          <>
            <div className="services-content-ItemNew4" style={{ marginTop: '2%', marginLeft: '4%' }}>
              <div className="card-1-ItemNew4">
                <img className="card-1-1" src="./card-services-IMG7.webp" alt="card-services-IMG7" />
                <h3 className="card-h3-1-7">Նշանադրության կազմակերպում</h3>
                <p className="card-p-1-7" style={{ marginTop: '1%', color: '#333' }}>
                  Նշանադրության արարողությունը առանձնահատուկ պահ է զույգի<br/> կյանքում: Մեր ընկերությունը կազմակերպում է նշանադրության արարողություն<br/>, որը ստեղծում է կախարդական պահեր սիրահարների համար...
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
                  <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>500,000 ֏</h3>
                  <button
                    className="amragr"
                    style={{
                      border: '1px solid orange',
                      height: '40px',
                      width: '100px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginTop: '0.1%',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert('Booked!')}
                  >
                    ամրագրել
                  </button>
                </div>
              </div>
            </div>

            <div className="services-content-ItemNew5" style={{ marginTop: '2%', marginLeft: '4%' }}>
              <div className="card-1-ItemNew5">
                <img className="card-1-1" src="./card-services-IMG8.webp" alt="card-services-IMG8" />
                <h3 className="card-h3-1-8">Ծննդյան առիթների կազմակերպում</h3>
                <p className="card-p-1-8" style={{ marginTop: '1%', color: '#333' }}>
                  «Amaranoc.am»-ը ձեր վստահելի գործընկերն է ծննդյան տոների<br/> կազմակերպման գործում: Մենք մասնագիտացած ենք<br/> ստեղծելու անմոռանալի միջոցառումներ...
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
                  <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>150,000 ֏</h3>
                  <button
                    className="amragr"
                    style={{
                      border: '1px solid orange',
                      height: '40px',
                      width: '100px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginTop: '0.1%',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert('Booked!')}
                  >
                    ամրագրել
                  </button>
                </div>
              </div>
            </div>

            <div className="services-content-ItemNew6" style={{ display:'flex',marginTop: '2%', marginLeft: '4%' }}>
              <div className="card-1-ItemNew6">
                <img className="card-1-1" src="./card-services-IMG9.webp" alt="card-services-IMG9" />
                <h3 className="card-h3-1-9">Հարսանյաց սենյակի ձևավորում</h3>
                <p className="card-p-1-9" style={{ marginTop: '1%', color: '#333' }}>
                  Հարսանյաց սենյակի ձևավորման գործում Ձեզ կօգնի Մեր<br/> դիզայներների և ոճաբանների թիմը՝ ովքեր հաշվի առնելով Ձեր<br/> նախասիրությունները և անհատականությունը...
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
                  <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>80,000 ֏</h3>
                  <button
                    className="amragr"
                    style={{
                      border: '1px solid orange',
                      height: '40px',
                      width: '100px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginTop: '0.1%',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert('Booked!')}
                  >
                    ամրագրել
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {selectedIndex === 3 && (
  <>
    <div className="services-content-ItemNew7" style={{ marginTop: '2%', marginLeft: '4%' }}>
      <div className="card-1-ItemNew7">
        <img className="card-1-1" src="./card-services-IMG10.webp" alt="card-services-IMG10.webp" />
        <h3 className="card-h3-1-10">Ծանր ծուխ</h3>
        <p className="card-p-1-10" style={{ marginTop: '1%', color: '#333' }}>
          Լավագույն ծանր ծուխը, որը ձեր միջոցառումն կդարձնի էլ ավելի գողեցիկ<br/> և հիշարժան։ Մեր սարքավորումները կարողանում են բարձրորակ ծուխը<br/> տարածել մաքսիմալ մեծ մակերեսով և բարձր խտությամբ։ Ծուխն <br/>էկոլոգիապես մաքուր է և իր մեջ ներառում է միայն տաք ջուր։
        </p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
          <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>30,000 ֏</h3>
          <button
            className="amragr"
            style={{
              border: '1px solid orange',
              height: '40px',
              width: '100px',
              borderRadius: '15px',
              textAlign: 'center',
              marginTop: '0.1%',
              cursor: 'pointer',
            }}
            onClick={() => alert('Booked!')}
          >
            Ամրագրել
          </button>
        </div>
      </div>
    </div>

    <div className="services-content-ItemNew8" style={{ marginTop: '2%', marginLeft: '4%' }}>
      <div className="card-1-ItemNew8">
        <img className="card-1-1" src="./card-services-IMG11.webp" alt="card-services-IMG11.webp" />
        <h3 className="card-h3-1-11">Հրավառության ծառայություն</h3>
        <p className="card-p-1-11" style={{ marginTop: '1%', color: '#333' }}>
          Հրավառության ծառայությունը առաջարկում է փայլուն և անպայման<br/> հիշարժան հրավառություն՝ յուրաքանչյուր իրադարձության համար <br/>հատուկ ձևով։ Մեր թիմը կազմակերպում է բոլոր անհրաժեշտ գործընթացները՝<br/> նախապատրաստական աշխատանքից մինչև իրականացման փուլը..
        </p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
          <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>30,000 ֏</h3>
          <button
            className="amragr"
            style={{
              border: '1px solid orange',
              height: '40px',
              width: '100px',
              borderRadius: '15px',
              textAlign: 'center',
              marginTop: '0.1%',
              cursor: 'pointer',
            }}
            onClick={() => alert('Booked!')}
          >
            Ամրագրել
          </button>
        </div>
      </div>
    </div>

    <div className="services-content-ItemNew9" style={{ marginTop: '2%', marginLeft: '4%' }}>
      <div className="card-1-ItemNew9">
        <img className="card-1-1" src="./card-services-IMG12.webp" alt="card-services-IMG12.webp" />
        <h3 className="card-h3-1-12">Սառը հրավառություն</h3>
        <p className="card-p-1-12" style={{ marginTop: '1%', color: '#333' }}>
          Սառը հրավառության ծառայությունը առաջարկում է հիանալի, անվտանգ<br/> և արտասովոր միջոցառման լուծում՝ կրակ և ծուխ բացակայությամբ: Այս<br/> ծառայությունը օգտագործում է հատուկ պիրոտեխնիկական սարքավորումներ, <br/>որոնք ստեղծում են գեղեցիկ տեսողական էֆեկտներ՝ օգտագործելով սառը..
        </p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
          <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>30,000 ֏</h3>
          <button
            className="amragr"
            style={{
              border: '1px solid orange',
              height: '40px',
              width: '100px',
              borderRadius: '15px',
              textAlign: 'center',
              marginTop: '0.1%',
              cursor: 'pointer',
            }}
            onClick={() => alert('Booked!')}
          >
            Ամրագրել
          </button>
        </div>
      </div>
    </div>
  </>
)}
{selectedIndex === 4 && (
  <>
    <div className="services-content-ItemNew10" style={{ marginTop: '2%', marginLeft: '4%' }}>
      <div className="card-1-ItemNew10">
        <img className="card-1-1" src="./card-services-IMG13.webp" alt="card-services-IMG13.webp" />
        <h3 className="card-h3-1-13">Սպասք</h3>
        <p className="card-p-1-13" style={{ marginTop: '1%', color: '#333' }}>
          Ձեր միջոցառումները դարձնելու համար ավելի հարմարավետ և ոճային,<br/> առաջարկում ենք օրավարձով սպասքի ծառայություններ։<br/> Տրամադրվում է տարբեր ձևի և միանման ամաններ, գդալներ..
        </p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
          <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>100 ֏</h3>
          <button
            className="amragr"
            style={{
              border: '1px solid orange',
              height: '40px',
              width: '100px',
              borderRadius: '15px',
              textAlign: 'center',
              marginTop: '0.1%',
              cursor: 'pointer',
            }}
            onClick={() => alert('Booked!')}
          >
            Ամրագրել
          </button>
        </div>
      </div>
    </div>

    <div className="services-content-ItemNew11" style={{ marginTop: '2%', marginLeft: '4%' }}>
      <div className="card-1-ItemNew11">
        <img className="card-1-1" src="./card-services-IMG14.webp" alt="card-services-IMG14.webp" />
        <h3 className="card-h3-1-14">Սեղան և աթոռներ</h3>
        <p className="card-p-1-14" style={{ marginTop: '1%', color: '#333' }}>
          Մեր օրավարձով կահույքի ծառայությունը հնարավորություն է տալիս<br/>վարձակալել բարձր որակի սեղաններ և աթոռներ՝ համաձայն ձեր կարիքների:
        </p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
          <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>5,000 ֏</h3>
          <button
            className="amragr"
            style={{
              border: '1px solid orange',
              height: '40px',
              width: '100px',
              borderRadius: '15px',
              textAlign: 'center',
              marginTop: '0.1%',
              cursor: 'pointer',
            }}
            onClick={() => alert('Booked!')}
          >
            Ամրագրել
          </button>
        </div>
      </div>
    </div>

    <div className="services-content-ItemNew12" style={{ marginTop: '2%', marginLeft: '4%' }}>
      <div className="card-1-ItemNew12">
        <img className="card-1-1" src="./card-services-IMG15.webp" alt="card-services-IMG15.webp" />
        <h3 className="card-h3-1-15">Տենտ</h3>
        <p className="card-p-1-15" style={{ marginTop: '1%', color: '#333' }}>
          Մեր տենտերը համադրվում են ցանկացած միջոցառմանը և հիանալի<br/> լուծում են պաշտպանվելու համար ցանկացած եղանակից։ Այն կդարձնի<br/> ձեր միջոցառման անցկացման վայրը ավելի գեղեցիկ և ոճային..
        </p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <i style={{ marginTop: '0.5%', color: 'orange' }} className="fa-solid fa-dollar-sign"></i>
          <h3 style={{ marginTop: '0.3%', color: '#333', fontSize: '23px' }}>20,000 ֏</h3>
          <button
            className="amragr"
            style={{
              border: '1px solid orange',
              height: '40px',
              width: '100px',
              borderRadius: '15px',
              textAlign: 'center',
              marginTop: '0.1%',
              cursor: 'pointer',
            }}
            onClick={() => alert('Booked!')}
          >
            Ամրագրել
          </button>
        </div>
      </div>
    </div>
  </>
)}

      </div>
    </div>
  );
};

export default Services;
