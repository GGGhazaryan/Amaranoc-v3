import React from "react";
import FooterForm from './RussiaFooterForm';

export default function RussiaFooterGlass(): React.ReactElement {
  return (
    <div className="footerGlass">
      <h2>Разместить объявление</h2>
      <p>Введите свои данные в соответствующие поля, и мы свяжемся с вами.</p>
      <FooterForm />
    </div>
  );
}
