import React, { useContext } from 'react';
import { RootContext } from '../../../Provider/Provider';
import SingleProduct from './SingleProduct/SingleProduct';

const Product = () => {
    const { product } = useContext(RootContext);
    return (
        <div className="col-span-5 grid grid-cols-3 gap-5">
            {
                product.map((pro, index) => <SingleProduct key={pro.id} product={pro} />)
            }
        </div>
    );
};

export default Product;