import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import HeaderRight from './HeaderRight';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header>
      <div className="logo">
        <Logo />
      </div>

      <nav className="allOptions">
        <Navigation />
      </nav>

      <div className="headerRightPlaceholder">
        <HeaderRight />
      </div>

      <button className="burgerMenuBtn" onClick={toggleMenu} aria-label="Toggle menu">
        <div></div>
        <div></div>
        <div></div>
      </button>

      <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
        <Navigation />
        <HeaderRight />
      </div>
    </header>
  );
}
