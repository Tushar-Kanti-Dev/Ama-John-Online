import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total= 0;
    let shipping = 0;
    let quantity = 0
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    // console.log(tax);
    const grandTotal = parseInt(tax) + shipping + total;
    return (
        <div className='cart'>
            <h2 className='order-summery'>Order Summery</h2>
                <div className='order-items'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shopping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal}</h5>
                </div>
        </div>
    );
};

export default Cart;