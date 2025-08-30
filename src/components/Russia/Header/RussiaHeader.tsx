import React, { useState } from 'react';
import Logo from './RussiaLogo';
import Navigation from './RussiaNavigation';
import HeaderRight from './RussiaHeaderRight';

export default function RussiaHeader(): React.ReactElement {


  

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
