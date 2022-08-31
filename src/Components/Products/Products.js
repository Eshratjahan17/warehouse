import React from 'react';
import useProduct from '../../Hooks/useProduct';
import Product from './Product';

const Products = () => {
  const [products] = useProduct();

  return <div>
    <h1 className='font-bold text-primary text-3xl text-center my-5 '> PRODUCTS</h1>
    <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 pl-9 py-9">
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  </div>;
};

export default Products;