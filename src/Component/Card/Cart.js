import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h5 className='text-order'>Orders Summary </h5>
            <div className='cart-info'>
            <p>Selected Item:{cart.length}</p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <h5>Grand Total:</h5>
            </div>
        </div>
    );
};

export default Cart;