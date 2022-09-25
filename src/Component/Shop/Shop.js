import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Card/Cart';
import Products from '../Product/Products';

import './shop.css'

const Shop = () => {
    const [products,setProduct] = useState([]);

    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

   const handelAddToCart = (product) => {
    // console.log(Product)
    const newCart = [...cart, product]
    setCart(newCart)
   }

    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                products.map(product =>
                <Products 
                key={product.id}
                product={product}
                handelAddToCart = {handelAddToCart}
                ></Products>)
               }
            </div>
            <div className='order-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;