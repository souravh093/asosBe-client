import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Product from "./Product/Product";

const Collection = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-2">Shoes collection</h2>
        <p className="text-lg max-w-3xl">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </p>
      </div>
      <hr className="mt-10 mb-5 h-[1px] bg-gray-300" />
      <div className="grid grid-cols-6 gap-10">
        <Sidebar />
        <Product />
      </div>
    </div>
  );
};

export default Collection;
