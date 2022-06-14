import React from 'react';
import Nav from './components/Nav';
import About from '../src/components/about';

function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />        
      </main>
    </div>
  );
}

export default App;
