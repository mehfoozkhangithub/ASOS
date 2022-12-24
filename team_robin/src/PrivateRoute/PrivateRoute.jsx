import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
function PrivateRoute({children}) {
    const data=useSelector((state)=>{return state.Auth});
    const {isAuth}=data;
    console.log(isAuth)
    const navigate=useNavigate()
    useEffect(()=>{
        if(!isAuth){
        navigate("/user/login")
        }
    },[])
    return children;
        
    
}

export default PrivateRoute;