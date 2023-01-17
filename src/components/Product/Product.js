import React from 'react';

import './Product.css'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { BsCartCheckFill } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";


const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, img, seller,ratings,price} =product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p>
            <p className='product-seller'>Manufacturer : {seller}</p>
            <p className='product-rating'>Rating : {ratings}</p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <h3>Add to Cart</h3>
                <BsCartPlusFill></BsCartPlusFill>
            </button>
        </div>
    );
};

export default Product;