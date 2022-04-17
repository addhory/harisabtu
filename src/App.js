import React from 'react';
import Posts from './components/Posts';
import { AnotherModal as ModalNumber2 } from './components/Modal';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World</h1>
      </header>
      <main>
        <Posts />

        <ModalNumber2 />
      </main>
    </div>
  );
}

export default App;
