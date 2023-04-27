import React from "react";

const Sidebar = () => {
  return (
    <div className="col-span-1 divide-y-2 divide- flex flex-col gap-10">
      <div>
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Backpacks</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Travel Bags</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Laptop Sleeves</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Organization</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Accessories</span>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-3">Colors</h2>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>White</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Beige</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Blue</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Black</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Brown</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Green</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Navy</span>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-3">Sizes</h2>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>XS</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>s</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>M</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>XL</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>2XL</span>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-3">Sort order</h2>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Most Popular</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Best Rating</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Newest</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Price Low - High</span>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="" id="" />
          <span>Price High - Low</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
