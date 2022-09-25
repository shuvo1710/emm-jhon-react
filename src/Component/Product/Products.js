import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    
    const {name,img,ratings,seller,price } =props.product;
    // const {addToCart} = props.addToCart;
    // const {handelAddToCart} = props;
    
    // console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>price: ${price}</p>
            <p className='product-seller'><small>Manufacturer: {seller}</small></p>
            <p className='produce-rating'><small>Ratings: {ratings} star</small></p>
            </div>
            <button className='cart-button' onClick={()=>props.handelAddToCart(props.product)}>
                    <p className='btn-text'>Add To Cart</p>
                    <p className='btn-icon'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
                
            
        </div>
    );
};

export default Products;