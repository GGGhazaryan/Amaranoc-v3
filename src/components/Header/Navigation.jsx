const navLinks = [
  { href: 'https://amaranoc.am/am', text: 'Գլխավոր' },
  { href: 'https://amaranoc.am/am/sales', text: 'Զեղչեր' },
  { href: 'https://amaranoc.am/am/services', text: 'Ծառայություններ' },
  { href: 'https://amaranoc.am/am/about-us', text: 'Մեր մասին' }
];

export default function Navigation() {
  return (
    <nav className="allOptions">
      {navLinks.map((link, index) => (
        <a key={index} className={`option${index + 1}`} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}
