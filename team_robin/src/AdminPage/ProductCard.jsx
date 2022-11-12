import React, { useState } from "react";
import "./productcard.css"

import { getData } from "../Redux/action";
// import { deleteProduct } from "../Redux/action";
import { useDispatch } from "react-redux";
import axios from "axios";


const ProductCard = ({ item }) => {

    const [data,setData]=useState([])

    const dispatch=useDispatch()

    // const deleteProd =() => {
    //     dispatch(deleteProduct(item.id)).then((res)=>
    //     dispatch(getData()))
    // }

    const deleteProd = (id) => {
        axios.delete(`http://localhost:8080/products/${id}`).then(() => {
                dispatch(getData)
            })
    }


      
    // const dispatch=useDispatch();

    return (
        <div data-cy={`product-card-${item.id}`}>
            <div data-cy="product-card-name">{item.title}</div>
            <div data-cy="product-card-category">{item.category}</div>
            <div>
                <img data-cy="product-card-image" src={item.image} alt={item.title} />
            </div>
            <div data-cy="product-card-price">€ {item.price}</div>
            <div>
                <div>
                    {/* Add a onClick handler for delete functionality */}
                    <button onClick={()=>deleteProd(item.id)} data-cy="delete-button" className="danger">
                        <img src='./delete.png' alt='delete' width='20px' />
                    </button>

                </div>
                <div>
                    <button data-cy='add-to-cart' className="add-to-cart">
                        +
                    </button>
                    <span data-cy='product-quantity'>{item.cartQuantity}</span>
                    <button data-cy='remove-from-cart' className="remove-from-cart">
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
