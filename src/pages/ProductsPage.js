import React from 'react';
import Product from '../components/Product';
import { productList_DUMMY } from '../utils/constans';

const ProductsPage = () => {
  const products = productList_DUMMY;

  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsPage;
