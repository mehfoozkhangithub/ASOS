import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux"



function PrivateRoute({children}) {
    const state=useSelector((state)=>state.Auth);
    const {isAuth}=state;
    console.log(isAuth)
    if(!isAuth){
        return <Navigate to="/login" />
 
    }
    return children
        
    
}

export default PrivateRoute;