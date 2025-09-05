import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks: { href: string; text: string }[] = [
  { href: '/ru', text: 'Главная' },
  { href: '/sales', text: 'Скидки' },
  { href: '/services', text: 'Услуги' },
  { href: '/about-us', text: 'О нас' },
  { href: '/Chat', text: 'Чат' },
];

export default function RussiaNavigation(): React.ReactElement {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <nav className="allOptions">
      {navLinks.map((link, index) => {
        const isActive = activeLink === link.href;
        return (
          <Link
            key={index}
            className={`option${index + 1} ${isActive ? 'active' : ''}`}
            to={link.href}
            onClick={() => setActiveLink(link.href)}
          >
            {link.text}
          </Link>
        );
      })}
    </nav>
  );
}
