import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import AboutUs from './components/AboutUs';
import ProductDetail from './components/ProductDetail';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}>
        <Route path='me' element={<AboutMe />} />
        <Route path='us' element={<AboutUs />} />
      </Route>
      <Route path='/product' element={<ProductsPage />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
