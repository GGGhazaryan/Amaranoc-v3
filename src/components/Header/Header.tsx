import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import HeaderRight from './HeaderRight';

export default function Header(): React.ReactElement {


  

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

    </header>
  );
}
