import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AdditionalImage from "./AdditionalImgae/AdditionalImage";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const {
    imageUrl,
    id,
    additionalImageUrls,
    name,
    brandName,
    rating,
    price,
    description,
  } = productDetails;

  const [number, setNumber] = useState(0)
  const handlerOdd = () => {
    setNumber(number - 1)
    if(number < 1) {
        setNumber(0)
    }
  }

  const handlerSum = () => {
    setNumber(number + 1)
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 grid grid-cols-2 gap-10">
      <div>
        <figure className="object-cover">
          <img
            src={`https://${imageUrl}`}
            alt="Shoes"
            className="w-full h-[550px] object-cover"
          />
        </figure>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {additionalImageUrls.map((additional) => (
            <AdditionalImage key={id} additional={additional} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-5">{name}</h2>
        <div className="my-3">
          <div className="flex gap-20 items-center mt-2">
            <div className="border-4 px-2 py-1 border-green-400 font-bold rounded-lg">
              <p>$ {price.current.value}</p>
            </div>
            <div>
              <p>⭐{rating}</p>
            </div>
          </div>
        </div>
        
        <div>
            <h2 className="mb-1 mt-5 font-bold">Size: XS</h2>
            <div className="grid grid-cols-6 gap-5">
                <div className="bg-blue-500 text-white rounded-xl py-3 text-center">XS</div>
                <div className="bg-blue-500 text-white rounded-xl py-3 text-center">S</div>
                <div className="bg-blue-500 text-white rounded-xl py-3 text-center">M</div>
                <div className="bg-blue-500 text-white rounded-xl py-3 text-center">L</div>
                <div className="bg-blue-500 text-white rounded-xl py-3 text-center">XL</div>
                <div className="bg-blue-500 text-white rounded-xl py-3 text-center">2XL</div>
            </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-10 mb-5 mt-7">
            <div className="col-span-1 flex gap-5 items-center bg-red-50 px-5 py-2 rounded-3xl">
                <button onClick={handlerOdd} className="border-4 px-3 text-xl text-gray-700 rounded-full cursor-pointer">-</button>
                <div>{number}</div>
                <button onClick={handlerSum} className="border-4 px-3 text-xl text-gray-700 rounded-full cursor-pointer">+</button>
            </div>
            <div className="col-span-2">
                <button className="bg-gray-900 w-full justify-center rounded-3xl py-5 gap-3 text-white flex items-center"><FaShoppingCart /> Add to cart</button>
            </div>
        </div>

        <div>
            <h2>Description</h2>
           {description}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
