import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World</h1>
      </header>
      <main>
        <section className='products'>
          <ErrorBoundary></ErrorBoundary>
        </section>
        <footer></footer>
      </main>
    </div>
  );
};

export default Home;
