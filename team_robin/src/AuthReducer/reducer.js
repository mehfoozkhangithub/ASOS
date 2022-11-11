import * as type from "./actionTypes"
const initialState = {
  userData:{},
  isAuth: false,
  token:"",
  isLoadingLogin: false,
  isErrorLogin: false,
  isLoadingSignUp:false,
  isErrorSignUp:false,
};

const reducer = (state = initialState,action) => {
          switch(action.type){
            case type.LOGIN_REQUEST :
              return{
                ...state,
                isLoadingLogin:true,
                isError:false,
                isAuth:false,
              }
            case type.LOGIN_SUCCESS:
              return{
                ...state,
                isLoadingLogin:false,
                isErrorLogin:false,
                isAuth:true,
                token:action.payload.token,
                userData:action.payload.data,

                }
            case type.LOGIN_FAILURE:
              return {
                ...state,
                isLoadingLogin:false,
                isErrorLogin:true,
                isAuth:false,
                userData:{}
              }
            case type.SIGNUP_REQUEST:
              return{
                ...state,
                isLoadingSignUp:true,
                isErrorSignUp:false,

              }
            case type.SIGNUP_SUCCESS:
              return{
                ...state,
                isLoadingSignUp:false,
                isErrorSignUp:false,
              }
            case type.SIGNUP_FAILURE:
              return{
                ...state,
                isLoadingSignUp:false,
                isErrorSignUp:true,
              }
            default:
              return state;
          }
  
};

export { reducer };