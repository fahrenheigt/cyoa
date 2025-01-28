import React, { useState, useEffect } from 'react';
import chapter1 from '../data/chapters/chapter1.json';
import variablesData from '../data/variables.json';
import '../styles.css';

function GameManager() {
  const [currentChapter, setCurrentChapter] = useState(chapter1); // Chapitre actuel
  const [currentScene, setCurrentScene] = useState('scene1'); // Scène actuelle
  const [variables, setVariables] = useState(variablesData); // Variables d'état

  // Fonction pour gérer les choix
  const handleChoice = (choice) => {
    // Appliquer les effets du choix (modifier les variables)
    if (choice.effects) {
      const newVariables = { ...variables };
      choice.effects.forEach((effect) => {
        newVariables[effect.variable] = effect.value;
      });
      setVariables(newVariables);
    }

    // Passer à la scène suivante
    setCurrentScene(choice.nextScene);
  };

  // Récupérer la scène actuelle
  const scene = currentChapter.scenes[currentScene];

  return (
    <div className="App">
      <h1>Histoire Interactive</h1>
      <p>{scene.text}</p>
      <div>
        {scene.choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoice(choice)}>
            {choice.text}
          </button>
        ))}
      </div>
      <div>
        <h3>Variables d'état :</h3>
        <p>Courage : {variables.courage}</p>
        <p>Curiosité : {variables.curiosity}</p>
        <p>Dialogue avec NPC1 : {variables.dialogueWithNPC1}</p>
        <p>Clé obtenue : {variables.hasKey ? "Oui" : "Non"}</p>
      </div>
    </div>
  );
}

export default GameManager;