import React from 'react';
import Logo from '../images/logo.png';

export default function Navbar() {
  return (
    <nav className="row">
      <div className="nav__container row">
        <img src={Logo} alt="Logo" className="nav__icon" />
        <h3 className="nav__title">my travel journal</h3>
      </div>
    </nav>
  );
}
