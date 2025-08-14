import React from 'react';
import { Link } from 'react-router-dom';

const navLinks: { href: string; text: string }[] = [
  { href: '../', text: 'Գլխավոր' },
  { href: 'https://amaranoc.am/am/sales', text: 'Զեղչեր' },
  { href: 'https://amaranoc.am/am/services', text: 'Ծառայություններ' },
  { href: 'https://amaranoc.am/am/about-us', text: 'Մեր մասին' },
  { href: '/Chat', text: 'Չատ' },
];

export default function Navigation(): React.ReactElement {
  return (
    <nav className="allOptions">
      {navLinks.map((link, index) => {
        const isInternal = link.href.startsWith('/');
        return isInternal ? (
          <Link key={index} className={`option${index + 1}`} to={link.href}>
            {link.text}
          </Link>
        ) : (
          <a
            key={index}
            className={`option${index + 1}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        );
      })}
    </nav>
  );
}
