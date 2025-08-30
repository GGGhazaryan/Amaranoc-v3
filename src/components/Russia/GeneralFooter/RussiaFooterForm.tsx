import React, { FormEvent } from "react";

export default function RussiaFooterForm(): React.ReactElement {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Ваша заявка отправлена.');
  };

  return (
    <form className="footerForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Имя Фамилия" required />
      <input type="tel" placeholder="Номер телефона" required />
      <input type="email" placeholder="Адрес электронной почты:" required />
      <button type="submit">Отправить</button>
    </form>
  );
}
