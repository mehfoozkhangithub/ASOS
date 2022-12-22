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
    // this is the axios where we have fetch the data 
  return axios.get(`https://mock-api-server.onrender.com/users?email=${data.email}&password=${data.password}`,data)
  // here we have to matain the data where we geting from api 
    .then((res)=>{
      if(res.data.length>0){
        console.log(res.data[0])
        return dispatch(UserLoginSuccess({token:"QpwL5tke4Pnpja7X4",data:res.data[0]}))
       }else{
        console.log("error")
        return dispatch(UserLoginFailure());
       }      
    })
    // here we have to handle the error any thing in api
    .catch((res)=>{
      console.log(res)
     return dispatch(UserLoginFailure())

    })

}

//  here we have to handle the signup requied 

export const UserSignUpRequest=()=>{
  return{
    type:type.SIGNUP_REQUEST
  }   
}

//  here we have to handle the signup success 

export const UserSignUpSuccess=(payload)=>{
  return{
    type:type.SIGNUP_SUCCESS,
    payload
  }
   
}
//  here we have to handle the signup failed 


export const UserSignUpFailure=()=>{
  return{
    type:type.SIGNUP_FAILURE
  }
   
}

//  here we have to handle the signup from dispatch 

export const userSignUp=(data)=>(dispatch)=>{
  dispatch(UserSignUpRequest());
return axios.post("https://mock-api-server.onrender.com/users",data)
  .then((res)=>{
      return dispatch(UserSignUpSuccess(res.data))
  }).catch((res)=>dispatch(UserSignUpFailure()))

}

// here we have to login request

const UserLogoutRequest=()=>{
  return{
    type:type.LOGOUT_REQUEST
  }
}

//  here we have to login will successful 
const UserLogoutSuccess=()=>{
  return{
    type:type.LOGOUT_SUCCESS
  }
}

// here we havre to mantained the logout 

export const UserLogout=()=>(dispatch)=>{
     dispatch(UserLogoutSuccess())
}






