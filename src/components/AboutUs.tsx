import '../css/App.css'

const AboutUs = () => {
  return (
    <>
      <div className="about-main-container">
        <div className="about-main-image">
          <img src="./about_us_main_image.webp" alt="HTML img" style={{ width: '100%', objectFit: 'cover' }} />
        </div>

        {/* Մեր մասին */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 20px' }}>
          <div style={{ display: 'flex', gap: '30px', maxWidth: '1000px', alignItems: 'flex-start' }}>
            <img
              src="./about_us_image_content_1.webp"
              alt="HTML img"
              style={{ width: '664px', height: '442px', borderRadius: '10px', objectFit: 'cover' }}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ height: '2px', backgroundColor: 'black', flex: 1, marginRight: '10px' }}></div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>Մեր մասին</h2>
                <div style={{ height: '2px', backgroundColor: 'black', flex: 1, marginLeft: '10px' }}></div>
              </div>
              <p style={{ fontSize: '16px', lineHeight: 1.4, color: '#333' }}>
                Amaranoc.am-ը վստահության, հավատարմության և գերազանցության ձգտման պատմություն է: Հանդիսանալով
                ամառանոցների վարձակալության ոլորտում համար մեկ ընկերությունը, մենք ձեզ առաջարկում ենք շքեղ
                առանձնատների, քոթեջների, վիլլաների և ամառանոցների լայն ու բազմազան ընտրություն; Մեր հիմնական
                առաքելությունն է սպասարկել մեր հաճախորդներին ամենաբարձր մակարդակով՝ ստեղծելով հարմարավետության և
                շքեղության մթնոլորտ մեր յուրաքանչյուր առանձնատանում: Մեր նվիրվածությունը և մանրուքների հանդեպ
                ուշադրությունը երաշխավորում է հիշարժան հանգիստ Հայաստանի ամենահիասքանչ ամառանոցներում
              </p>
            </div>
          </div>
        </div>

        {/* Մեր թիմը */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 20px' }}>
          <div style={{ display: 'flex', gap: '30px', maxWidth: '1000px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ height: '2px', backgroundColor: 'black', flex: 1, marginRight: '10px' }}></div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>Մեր թիմը</h2>
                <div style={{ height: '2px', backgroundColor: 'black', flex: 1, marginLeft: '10px' }}></div>
              </div>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#333' }}>
                Շուրջ 20 մասնագետներից բաղկացած մեր պրոֆեսիոնալ թիմն իր աշխատանքն իրականացնում է փայլուն հմտությամբ՝ բավարարելու անգամ ամենաքմահաճ հաճախորդի կարիքները.
                Շնորհիվ ոլորտում ունեցած մեր անգնահատելի փորձի, մեր նպատակն է անմոռանալի պահեր ստեղծել մեր հյուրերի համար. 
                Մենք պարզապես չենք ստեղծում ժամանց, մենք ստեղծում ենք պատմություններ, և յուրաքանչյուր առանձնատուն (որոնք դուք տեսնում եք մեր կայքում) այդ պատմության մի մասն է. 
                Օրըօր ընդլայնվելով՝ մենք ձգտում ենք նորագույն չափանիշներ սահմանել ոլորտում և որ ամենակարևորն է մենք օր օրի հստակ ու կայուն քայլերով շարժվում ենք առաջ՝ բարելավելով մեր երկրում սպասարկման ոլորտը՝ շքեղ առանձնատները հասանելի դարձնելով բոլորին.
              </p>
            </div>
            <img
              src="./about_us_image_2.webp"
              alt="HTML img"
              style={{ width: '664px', height: '442px', borderRadius: '10px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Картинка второй блок */}
        <div className="second">
          <img src="./second.webp" alt="" style={{ width: '100%', objectFit: 'cover' }} />
        </div>

        {/* Կարծիքներ */}
        <div style={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>Կարծիքներ</h2>
            
            {/* Review 1 */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', alignItems: 'flex-start' }}>
              <img src="./user1.webp" alt="user" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
              <div>
                <h3 style={{ margin: 0 }}>Anna</h3>
                <p style={{ margin: '5px 0', color: 'red' }}>❤️❤️❤️</p>
              </div>
            </div>

            {/* Review 2 */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', alignItems: 'flex-start' }}>
              <img src="./user2.webp" alt="user" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
              <div>
                <h3 style={{ margin: 0 }}>Vahag Vahag</h3>
                <p style={{ margin: '5px 0' }}>
                  Շատ լավ ենք սպասարկում, նորից կդիմենք անպայման, առանձին շնորհակալություն Ծովինարին
                </p>
              </div>
            </div>

            {/* Review 3 */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', alignItems: 'flex-start' }}>
              <img src="./user3.webp" alt="user" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
              <div>
                <h3 style={{ margin: 0 }}>Serob Samsoni</h3>
                <p style={{ margin: '5px 0' }}>
                  Շատ ապրեք։ Լավագույն թիմնա, իր պրոֆեսիոնալ աշխատում են։ Մեր հյուրատները լցնում են շատ ցիվիլ հաճախորդներով։ Հատուկ ուզում եմ Ծովինարին ասեմ Բռավոոո՝ գրագետ աշխատանքի համար։
                </p>
              </div>
            </div>

      
            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', alignItems: 'flex-start' }}>
              <img src="./user4.webp" alt="user" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
              <div>
                <h3 style={{ margin: 0 }}>Ani Arzumanyan</h3>
                <p style={{ margin: '5px 0' }}>
                  Сдали наш дом, имеем отличный результат, очень довольны !!
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
              <button style={{ padding: '10px 20px', border: '1px solid orange', borderRadius: '10px', cursor: 'pointer', backgroundColor: 'white' }}>Թողնել կարծիք</button>
              <button style={{ padding: '10px 20px', border: '1px solid orange', borderRadius: '10px', cursor: 'pointer', backgroundColor: 'white' }}>Տեսնել բոլորը</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
