import React from "react";

const SingleProduct = ({ product }) => {
    const {imageUrl, name, price, rating, brandName} = product;
  return (
    <div>
      <div className="card w-full bg-base-100 border-2">
        <figure className="object-cover h-52">
          <img
            src={`https://${imageUrl}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brandName}</h2>
          <p>{name}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="border-4 px-2 py-1 border-green-400 font-bold rounded-lg">
              <p>$ {price.current.value}</p>  
            </div>
            <div>
                <p>⭐{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
