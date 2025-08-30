import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks: { href: string; text: string }[] = [
  { href: '/', text: 'Գլխավոր' },
  { href: '/sales', text: 'Զեղչեր' },
  { href: '/services', text: 'Ծառայություններ' },
  { href: '/about-us', text: 'Մեր մասին' },
  { href: '/Chat', text: 'Չատ' },
];

export default function Navigation(): React.ReactElement {
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
