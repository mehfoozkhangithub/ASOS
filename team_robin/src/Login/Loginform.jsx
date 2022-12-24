import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './login.module.css'
import { useNavigate } from "react-router-dom"
import { UserLoginFailure, UserLoginRequest, UserLoginSuccess, userLogin } from "../AuthReducer/action"
import { getProductData } from "../ProductReducer/action";
import axios from "axios"
import { useToast } from '@chakra-ui/react'

const LoginForm = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Auth);
    const toast = useToast()
    const { isAuth, userData } = data;
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const login = () => {

        if (!email || !password) {
            toast({
                title: 'Please enter Email ID and Password',
                status: 'error',
                duration: 9000,
                position: "top",
                isClosable: true,
            })
        } else {
            dispatch(UserLoginRequest())
            axios.post("https://lazy-rose-oyster-sock.cyclic.app/user/login", { email, password })
                .then((res) => {
                    console.log(res.data)
                    if(res.data.isUser){
                        dispatch(UserLoginSuccess(res.data))
                        toast({
                            title: "Login success",
                            position: "top",
                            duration: 9000,
                            status: "success",
                            isClosable:true
                        })
                        navigate("/")
                       } else if(res.data.isUser==undefined){
                        dispatch(UserLoginFailure());
                        toast({
                            title: "Please enter correct login id and password",
                            position: "top",
                            duration: 9000,
                            status: "error",
                            isClosable:true
                        })
                       }else{
                        dispatch(UserLoginFailure());
                        toast({
                            title: "User not found",
                            position: "top",
                            duration: 9000,
                            status: "error",
                            isClosable:true
                        })
                       }
                   
                   
                })
                .catch((err) => {
                    console.log(err);
                   dispatch(UserLoginFailure());
                   toast({
                    title: "Something went wrong !",
                    position: "top",
                    duration: 9000,
                    status: "error",
                    isClosable:true
                })
                })
        }
    }

    return (
        <>
            <div className={styles.form}>
                <label>EMAIL ADDRESS</label>
                <input type="text" className={styles.input}
                    name="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <label>PASSWORD</label>
                <input type="password" className={styles.input}
                    value={password}
                    name="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button className={styles.signInBtn} onClick={login}>SIGN IN</button>
            </div>
        </>
    )
}
export default LoginForm;