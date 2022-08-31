import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const [isLoding, setIsLoading] = useState(false);
  const { price, picture, quantity, name, supplier, about ,_id} = product;
    const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const onmouseenter = (e) => {
    setHover(true);
    console.log("hoverd", hover);
  };
  const onmouseleave = (e) => {
    setHover(false);
    console.log("unhoverd", hover);
  };
  const handleproduct=(id)=>{
    setIsLoading(true);
    navigate(`/products/${id}`);


  }
  return (
    <div
      onMouseEnter={onmouseenter}
      onMouseLeave={onmouseleave}
      class="card w-full  h-96 bg-base-200 shadow-xl "
    >
      <figure className="hover:scale-125  hover:transition hover:ease-in-out relative   ">
        <img className="h-full w-full" src={picture} alt={name} />
      </figure>

      {hover === true ? (
        <div class="card-body absolute bottom-0   pt-9 px-3  text-white bg-primary w-full h-full">
          <h2 class="  card-title text-2xl  text-white">{name}</h2>
          <p>{about}</p>
          <p>
            <span className="font-bold text-xl">Supllier Name:</span>
            {supplier}
          </p>
          <p>
            <span className="font-bold text-xl">In Stock:</span> {quantity}
          </p>
          <h4>Price:{price}</h4>
          <button
            onClick={() => handleproduct(_id)}
            href="/products/:id"
            className="btn btn-secondary text-white"
          >
            Manage Stock
          </button>
        </div>
      ) : (
        <div class="card-body absolute bottom-0   pt-9 px-3 text-white bg-secondary w-full hidden">
          <h2 class="  card-title text-2xl  text-white">{name}</h2>
          <p>{about}</p>
          <p>
            <span className="font-bold text-xl">Supllier Name:</span>
            {supplier}
          </p>
          <p>
            <span className="font-bold text-xl">In Stock:</span> {quantity}
          </p>
          <h4>Price:{price}</h4>
        </div>
      )}
    </div>
  );
};

export default Product;