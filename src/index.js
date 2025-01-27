import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot
import App from './App';

// Sélectionne l'élément racine de ton application
const container = document.getElementById('root');

// Crée une racine React
const root = createRoot(container);

// Rend l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);