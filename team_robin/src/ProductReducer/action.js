import * as type from "./actionType";
import axios from "axios";

export const getProductRequest=()=>{
    return{
        type:type.PRODUCT_REQUEST
    }
}
export const getProductSuccess=(payload)=>{
    return{
        type:type.PRODUCT_SUCCESS,
        payload
    }
}
export const getProductFailure=()=>{
    return{
        type:type.PRODUCT_FAILURE
    }
}
// this is product data coming from dispatch 
export const getProductData=(id)=>(dispatch)=>{
        dispatch(getProductRequest());
        return axios.get(`https://mock-api-server.onrender.com/Products/${id}`)
        .then((res)=>{
            console.log(res.data)
            return dispatch(getProductSuccess(res.data));
        })
        .catch((err)=>{
            return dispatch(getProductFailure())
        })

}
//  this is comming from cart product at dispatch 
export const getProductCart=(id)=>(dispatch)=>{
    dispatch(getProductRequest());
    return axios.get(`https://asos-server123.herokuapp.com/api/products/${id}`)
    .then((res)=>{
        console.log(res.data)
        return dispatch(getProductSuccess(res.data));
    })
    .catch((err)=>{
        return dispatch(getProductFailure())
    })

}

//  this is add to cart request handler from action dispatch 

const addCartRequest=()=>{
    return{
        type:type.ADD_CART_REQUEST,
    }
}

//  this is add to cart success handler from action dispatch 

const addCartSuccess=()=>{
    return{
        type:type.ADD_CART_SUCCESS
    }
}

//  this is add to cart failure  handler from action dispatch 

const addCartFailure=()=>{
    return{
        type:type.ADD_CART_FAILURE
    }
}

// export const addToCart=(data)=>(dispatch)=>{
// dispatch(addCartRequest());
// return axios.post(``)

// }
