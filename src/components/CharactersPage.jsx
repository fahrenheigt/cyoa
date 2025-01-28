import React from 'react';
import charactersData from '../data/characters.json';

function CharactersPage() {
  return (
    <div className="characters-page">
      <h1>Personnages</h1>
      {charactersData.map((character) => (
        <div key={character.id} className="character-card">
          <h2>{character.name}</h2>
          <p>{character.description}</p>
          <h3>Traits :</h3>
          <p>Physique : {character.traits.physique}</p>
          <p>Personnalité : {character.traits.personnalité}</p>
          <p>Relation avec le joueur : {character.relationWithPlayer}</p>
        </div>
      ))}
    </div>
  );
}

export default CharactersPage;