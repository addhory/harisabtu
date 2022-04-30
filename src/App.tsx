import React from 'react';
import './App.css';
import Button from './components/Button';
import Typography from './components/Typography';

function App() {
  return (
    <div className='App'>
      <Button variant='secondary' size='medium'>
        Button
      </Button>
      <Typography variant='h1'>Hello World</Typography>
      <Typography variant='h3'>Hello World</Typography>
    </div>
  );
}

export default App;
