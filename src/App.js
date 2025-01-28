import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameManager from './components/GameManager';
import Menu from './components/MenuPage';
import CharactersPage from './components/CharactersPage';
import BestiaryPage from './components/BestiaryPage';
import RegionsPage from './components/RegionsPage';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<GameManager />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/bestiary" element={<BestiaryPage />} />
        <Route path="/regions" element={<RegionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;