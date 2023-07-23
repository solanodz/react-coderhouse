import React from 'react';
import { Navbar } from './components/Navbar';
import { Greeting } from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Greeting greeting="¡Bienvenido!" />
    </div>
  );
}

export default App;
