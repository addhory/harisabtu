import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productList_DUMMY } from '../utils/constans';

const ProductDetail = () => {
  console.log('is Render');
  const params = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState([
    {
      title: '',
      price: null,
    },
  ]);

  const fetchData = () => {
    const data = productList_DUMMY.filter(
      (product) => product.id === Number(params.productId)
    );

    setProductData(data);
  };

  // fetch barang product dengan id 1

  return (
    <React.Fragment>
      {console.log(productData)}
      <div>
        <img src='' alt='SomeImage' />
        <h4>Title: {productData[0].title}</h4>
        <p>Price: {productData[0].price}</p>
        <p>Description</p>
      </div>
      <button onClick={fetchData}>Fetch Data</button>
    </React.Fragment>
  );
};

export default ProductDetail;
