import * as type from "./actionTypes"
const initialState = {
  userData:JSON.parse(localStorage.getItem("user"))||{},
  isAuth: localStorage.getItem("isAuth")||false,
  token:localStorage.getItem("token")||"",
  isLoadingLogin: false,
  isErrorLogin: false,
  isLoadingSignUp:false,
  isErrorSignUp:false,
  isLogout:false,
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
              localStorage.setItem("user",JSON.stringify(action.payload.data))
              localStorage.setItem("token",action.payload.token)
              localStorage.setItem("isAuth",true)
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
            case type.LOGOUT_SUCCESS:
              localStorage.setItem("user",JSON.stringify({}))
              localStorage.setItem("token","")
              localStorage.setItem("isAuth",false)
              return{
                ...state,
                userData:{},
                isAuth:false,
                token:"",
                isLoadingLogin:false,
                isLoadingSignUp:false,
                isErrorLogin:false,
                isErrorSignUp:false,
                isLogout:true,

              }
            default:
              return state;
          }
  
};

export { reducer };
