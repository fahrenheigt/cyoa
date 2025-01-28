import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Histoire</Link>
      <Link to="/characters">Personnages</Link>
      <Link to="/bestiary">Bestiaire</Link>
      <Link to="/regions">Régions</Link>
    </nav>
  );
}

export default Menu;