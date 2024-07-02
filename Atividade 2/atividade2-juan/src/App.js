import React from 'react';
import './App.css';
import Complemento from './Complemento-Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Atividade 2 (Programação Orientada a Componentes)</h1>        
        <p>
          Nome: Juan Diego Francke Cardoso
        </p>
        <Complemento />
      </header>
    </div>
  );
}

export default App;