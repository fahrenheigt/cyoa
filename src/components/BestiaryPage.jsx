import React from 'react';
import bestiaryData from '../data/bestiary.json';

function BestiaryPage() {
  return (
    <div className="bestiary-page">
      <h1>Bestiaire</h1>
      {bestiaryData.map((creature) => (
        <div key={creature.id} className="creature-card">
          <h2>{creature.name}</h2>
          <p>{creature.description}</p>
          <h3>Traits :</h3>
          <p>Taille : {creature.traits.taille}</p>
          <p>Dangerosité : {creature.traits.dangerosité}</p>
        </div>
      ))}
    </div>
  );
}

export default BestiaryPage;