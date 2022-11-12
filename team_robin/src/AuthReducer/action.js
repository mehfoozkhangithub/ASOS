import * as type from "./actionTypes"
import axios from "axios";


export const UserLoginRequest=()=>{
      return {
        type:type.LOGIN_REQUEST
      }
}
export const UserLoginSuccess=(payload)=>{
    return {
      type:type.LOGIN_SUCCESS,
      payload
    }
}
export const UserLoginFailure=()=>{
    return {
      type:type.LOGIN_FAILURE,
    }
}

export const userLogin=(data)=>(dispatch)=>{
    dispatch(UserLoginRequest());
  return axios.get(`http://localhost:8080/users?email=${data.email}&password=${data.password}`,data)
    .then((res)=>{
      if(res.data.length>0){
        console.log(res.data[0])
        return dispatch(UserLoginSuccess({token:"QpwL5tke4Pnpja7X4",data:res.data[0]}))
       }else{
        return dispatch(UserLoginFailure());
       }
      
        
    }).catch((res)=>dispatch(UserLoginFailure()))

}


export const UserSignUpRequest=()=>{
  return{
    type:type.SIGNUP_REQUEST
  }
   
}
export const UserSignUpSuccess=(payload)=>{
  return{
    type:type.SIGNUP_SUCCESS,
    payload
  }
   
}
export const UserSignUpFailure=()=>{
  return{
    type:type.SIGNUP_FAILURE
  }
   
}

export const userSignUp=(data)=>(dispatch)=>{
  dispatch(UserSignUpRequest());
return axios.post("http://localhost:8080/users",data)
  .then((res)=>{
      return dispatch(UserSignUpSuccess(res.data))
  }).catch((res)=>dispatch(UserSignUpFailure()))

}





