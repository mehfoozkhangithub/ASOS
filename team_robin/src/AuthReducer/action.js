import * as type from "./actionTypes"
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

export const UserLogoutSuccess=()=>{
  return {
    type:type.LOGOUT_SUCCESS,
  }
}







