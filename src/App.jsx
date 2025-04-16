import React from 'react';
import CocomoCalculator from './components/CocomoCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COCOMO 81 - Modelo Intermedio</h1>
      </header>
      <main>
        <CocomoCalculator />
      </main>
    </div>
  );
}

export default App;