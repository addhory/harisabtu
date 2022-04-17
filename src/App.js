import { useState } from 'react';
import Posts from './components/Posts';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World</h1>
      </header>
      <main>
        <Posts />
      </main>
    </div>
  );
}

export default App;
