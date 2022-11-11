import React from "react"
import { useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import styles from './login.module.css'
import {useNavigate} from "react-router-dom"
import { userLogin } from "../AuthReducer/action"

const LoginForm = () => {
    const dispatch=useDispatch();
    const fxData=useSelector((state)=>state.Auth);
    const {isAuth}=fxData
    console.log(isAuth)
    // console.log(isAuth)
    
    const Navigate=useNavigate()
    const [email, setEmail] = useState("bhupendra@gmail.com");
    const [password,setPassword]=useState(12345678)

   
    const handledSubmit = (e) => {
        e.preventDefault();
        const user={
            email,
            password,
        }
          dispatch(userLogin(user));
        //   Navigate("/")
        console.log(user)
     }
    return (
        <>
            <form className={styles.form}>
                <label>EMAIL ADDRESS</label>
                <input type="text" className={styles.input}
                    name="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <label>PASSWORD</label>
                <input type="password" className={styles.input}
                 value={password}
                 name="password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <button className={styles.signInBtn} onClick={handledSubmit}>SIGN IN</button>
            </form>
        </>
    )
}
export default LoginForm;