import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { Printer } from './Printer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Printer />
      </header>
    </div>
  );
}

export default App;
