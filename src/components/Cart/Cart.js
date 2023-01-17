import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h2 className='order-summery'>Order Summery</h2>
                <div className='order-items'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: </p>
                <p>Total Shopping Charge: </p>
                <p>Tax: </p>
                </div>
        </div>
    );
};

export default Cart;