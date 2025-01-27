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

    // Passer à la scène suivante ou changer de chapitre
    if (choice.nextChapter) {
      loadChapter(choice.nextChapter);
    } else {
      setCurrentScene(choice.nextScene);
    }
  };

  // Charger un nouveau chapitre
  const loadChapter = (chapterId) => {
    import(`../data/chapters/${chapterId}.json`)
      .then((chapter) => {
        setCurrentChapter(chapter.default);
        setCurrentScene('scene1'); // Commencer à la première scène du nouveau chapitre
      })
      .catch((error) => console.error('Erreur lors du chargement du chapitre :', error));
  };

  // Sauvegarder et charger la progression
  useEffect(() => {
    const savedData = localStorage.getItem('gameProgress');
    if (savedData) {
      const { scene, variables, chapter } = JSON.parse(savedData);
      setCurrentScene(scene);
      setVariables(variables);
      setCurrentChapter(chapter);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameProgress', JSON.stringify({
      scene: currentScene,
      variables: variables,
      chapter: currentChapter,
    }));
  }, [currentScene, variables, currentChapter]);

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
      <button onClick={() => localStorage.removeItem('gameProgress')}>
        Réinitialiser la progression
      </button>
    </div>
  );
}

export default GameManager;