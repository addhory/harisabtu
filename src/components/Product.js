import React from 'react';
import { useNavigate } from 'react-router-dom';

// const Products = () => {
//   const [price, setPrice] = useState(4000);

//   const changePriceHandler = () => {
//     setPrice(6000);
//   };

//   if (price > 5000) {
//     throw new Error('Price is over standard');
//   }

//   return (
//     <div>
//       <ul>
//         <li>
//           <h4>Indomie</h4>
//           <p>Rp. {price}</p>
//           <button onClick={changePriceHandler}>Change Price</button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Products;

const Product = ({ product }) => {
  console.log(product.id);
  const navigate = useNavigate();

  // /product/:id
  const productDetailHandler = () => {
    navigate('1');
  };

  return (
    <div style={{ padding: '1rem' }} onClick={productDetailHandler}>
      <h4>{product.title}</h4>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
