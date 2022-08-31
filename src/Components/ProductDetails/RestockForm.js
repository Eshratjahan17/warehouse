import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const RestockForm = ({product}) => {

  const [newQuantity, setNewQuantity] = useState(0);
  const {quantity}=product;
  
   console.log(quantity);
  
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();

 const onSubmit = (data) => {
  setNewQuantity(parseInt(data.quantity));
  console.log(newQuantity);
 };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-control mx-auto">
        <label class="label">
          <p class="label-text text-xl font-bold">
            Item Quantity <span className="text-red-600">*</span>
          </p>
        </label>
        <input
          type="number"
          placeholder="Quantity here"
          class="input input-bordered w-full max-w-xs"
          {...register("quantity", {
            required: {
              value: true,
              message: "quantity is reqiured",
            },
            minLength: {
              value: 1,
              message: "quantity must be more than 0",
            },
          })}
        />
        <label class="label">
          {errors.quantity?.type === "required" && (
            <span class="label-text-alt text-red-500">
              {errors.quantity.message}
            </span>
          )}
          {errors.quantity?.type === "minLength" && (
            <span class="label-text-alt text-red-500">
              {errors.quantity.message}
            </span>
          )}
        </label>
      </div>

      <input
        type="submit"
        value="Add Item"
        className="btn  rounded-lg 
                  border-secondary hover:bg-base-100 hover:border-secondary hover:border-4 hover:text-primary bg-secondary text-white mt-5 "
      />
    </form>
  );
};

export default RestockForm;