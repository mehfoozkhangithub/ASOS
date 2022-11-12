import React, { useEffect, useState } from 'react'
import './productpage.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getData } from '../Redux/action';
import ProductCard from '../Components/ProductCard';
import axios from "axios"


const GetProduct = () => {

    const dispatch=useDispatch();
    const [data,setData]=useState([])
    // const isLoading=useSelector((state)=>state.isLoading)

    const getProducts=()=>{
        axios
        .get("  http://localhost:8080/products")
        .then((res) => {
         setData(res.data)
        })
        .catch((err)=>{
        
            console.log(err)
        })
    }

    useEffect(()=> {
    dispatch(getData)
    },[dispatch])

    // console.log(product)
    return (
        <div style={{ width: "100%" }}>
            <div className='product-cards'>
                {/* Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
                */}
                {data.map((item)=>{
                    return <ProductCard key={item.id} item={item} />
                })}
            </div>
        </div>
    );
}

export default GetProduct