export default function FooterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ձեր հայտը ուղարկված է։');
  };

  return (
    <form className="footerForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Անուն Ազգանուն" required />
      <input type="tel" placeholder="Հեռախոսահամար" required />
      <input type="email" placeholder="Էլ․ հասցե" required />
      <button type="submit">Ուղարկել</button>
    </form>
  );
}
