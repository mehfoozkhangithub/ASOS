import * as type from "./actionType"
const initialState={
    isLoading:false,
    isError:false,
    ProductData:{},
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case type.PRODUCT_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case type.PRODUCT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                ProductData:action.payload
            }
            case type.PRODUCT_FAILURE:
                return{
                    ...state,
                    isLoading:false,
                    isError:true,
                    ProductData:{}
                }
        default:
            return state
    }

}
