import React from 'react';
import './App.css';
import { Typography, Button } from './components';

function App() {
  const [value, setValue] = React.useState<string>();

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
