
import { GET_ITEM_CART_LOADING, GET_ITEM_CART_SUCCESS, GET_ITEM_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, ADD_TO_CART_ERROR, REMOVE_FROM_CART_LOADING, REMOVE_FROM_CART_SUCCESS, REMOVE_FROM_CART_ERROR, UPDATE_CART_LOADING, UPDATE_CART_SUCCESS, UPDATE_CART_ERROR, GET_PRODUCT_DETAILS_LOADING, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_ERROR } from '.././cart_auth/cart_types';
import axios from "axios"


//! Get request handle

export const getItemApi=()=>(dispatch)=>{
  dispatch({type:GET_ITEM_CART_LOADING});

  axios.get("https://mock-api-server.onrender.com/cartItem")
  .then((res)=>(dispatch({type:GET_ITEM_CART_SUCCESS,payload:res.data}))).catch((err)=>(
  ({type:GET_ITEM_CART_ERROR})
  ))
}

//* add request handle

export const addCartApi=(item,v)=>(dispatch)=>{

  dispatch({type:ADD_TO_CART_LOADING});

  axios.post("https://mock-api-server.onrender.com/cartItem",{
    productName: item.Brand_Name||item.title,
    Image: item.Image||item.image,
    Price: item.Price||item.price,
    size:v,
    color:item.color,
    quantity:1,
    // id: item.id,
  }).then((res)=>(dispatch({type:ADD_TO_CART_SUCCESS,payload:res.data}))).catch((err)=>{dispatch({type:ADD_TO_CART_ERROR})})

}

//? remove request handle 

export const removeCartApi=(id)=>(dispatch)=>{
  dispatch({type:REMOVE_FROM_CART_LOADING});

  axios.delete(`https://mock-api-server.onrender.com/cartItem/${id}`)
  .then((res)=>{dispatch({type:REMOVE_FROM_CART_SUCCESS,payload:id})})
  .catch((err)=>{dispatch({type:REMOVE_FROM_CART_ERROR})})
}

//TODO :  This is update request handle

export const updateCartApi=(id,quantity,size)=>(dispatch)=>{
dispatch({type:UPDATE_CART_LOADING});

axios.patch(`https://mock-api-server.onrender.com/cartItem/${id}`,{
  quantity:quantity,
  size:size,
}).then((res)=>(dispatch)({type:UPDATE_CART_SUCCESS,payload:{id,quantity,size}})).catch((err)=>{dispatch({type:UPDATE_CART_ERROR})})
}


// product get api

export const getProductDetailsApi=(id)=>(dispatch)=>{
  dispatch({type:GET_PRODUCT_DETAILS_LOADING});
  axios.get(`https://mock-api-server.onrender.com/Products/${id}`).then((res)=>(dispatch)=>({type:GET_PRODUCT_DETAILS_SUCCESS,payload:res.data})).catch((err)=>(dispatch({type:GET_PRODUCT_DETAILS_ERROR})))
}