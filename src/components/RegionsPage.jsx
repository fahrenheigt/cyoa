import React from 'react';
import regionsData from '../data/regions.json';

function RegionsPage() {
  return (
    <div className="regions-page">
      <h1>Régions</h1>
      {regionsData.map((region) => (
        <div key={region.id} className="region-card">
          <h2>{region.name}</h2>
          <p>{region.description}</p>
          <h3>Traits :</h3>
          <p>Climat : {region.traits.climat}</p>
          <p>Habitants : {region.traits.habitants}</p>
        </div>
      ))}
    </div>
  );
}

export default RegionsPage;