import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import RestockForm from './RestockForm';

const ProductDetails = () => {
    let { id } = useParams();

    console.log(id);
    const [product, setProduct] = useState([]);
    useEffect(() => {
      const url = `http://localhost:5000/products/${id}`;
      console.log(url);
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);
 
  return (
    <div class="hero min-h-screen py-20">
      <div class="   hero-content flex-col lg:flex-row ">
        <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <figure>
            <img src={product.picture} alt="Shoes" />
          </figure>
          <div class="card-body bg-primary text-white  ">
            <h2 class="card-title text-2xl">{product.name}</h2>
            <p>{product.about}</p>
            <p>
              <span className="font-bold text-xl"> Price:</span>
              {product.price}
            </p>
            <p>
              <span className="font-bold text-xl"> Quantity:</span>
              {product.quantity}
            </p>
            <p>
              <span className="font-bold text-xl"> SupplierName:</span>
              {product.supplier}
            </p>
            <div class="card-actions justify-end">
              <button class=" text-white btn btn-outline btn-white hover:btn-nutral  hover:btn">
                Delivered
              </button>
            </div>
          </div>
        </div>
        <div className=" text-center lg:text-left ">
          <RestockForm product={product}></RestockForm>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;