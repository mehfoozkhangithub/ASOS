import { Radio, RadioGroup, Stack, useToast } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
import React, { useState } from 'react'
import styles from './login.module.css'
import './login.css'
import axios from 'axios'
const SignupForm = () => {
    const [email,setEmail]=useState("");
    const [fname,SetName]=useState("");
    const [password,setPassword]=useState("");
    const [lname, setSecondName] = useState("");
    const [dateOfBirth,setDate]=useState("")
    const navigate=useNavigate();
    const toast=useToast()

    const signup = () => {
      console.log("working")
      if(!email || !fname || !lname || !password || !dateOfBirth){
          toast({
              title: 'All fields are required *',
              status: 'error',
              duration: 9000,
              position: "top",
              isClosable: true,
          })
      }else if(password.length<8){
          toast({
              title: 'Password should be minimum 8 character',
              status: 'error',
              duration: 9000,
              position: "top",
              isClosable: true,
          })
      }
      else{
          axios.post("https://friendly-tam-tick.cyclic.app/user/signup", { fname,lname,email,password,dateOfBirth})
         .then((res) => {
          console.log(res)
          if(res.data.isRegisterd){
              toast({
                  title: 'User already exists',
                  status: 'error',
                  duration: 9000,
                  position: "top",
                  isClosable: true,
              })
          }else{
              toast({
                  title: 'Sign Up successfully ',
                  status: 'success',
                  duration: 9000,
                  position: "top",
                  isClosable: true,
              })
              navigate('/user/login')
          }
         
   })
  .catch((err) => {
      
  console.log(err)
  toast({
      title: 'something wrong 123435!',
      status: 'error',
      duration: 9000,
      position: "top",
      isClosable: true,
  })
  })
      }

  }
   return (
    <div className={styles.form}>
      <label>EMAIL ADDRESS:</label>
      <input type="text" className={styles.input} value={email}  onChange={(e)=>setEmail(e.target.value)} />
      <label>FIRST NAME:</label>
      <input type="text" className={styles.input} value={fname}  onChange={(e)=>SetName(e.target.value)} />
      <label>LAST NAME:</label>
      <input type="text" className={styles.input} value={lname} onChange={(e)=>setSecondName(e.target.value)}/>
      <label>PASSWORD:</label>
      <input type="password" className={styles.input} value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <label>DATE OF BIRTH:</label>
      <input type="date" className={styles.inputDate} value={dateOfBirth} onChange={(e)=>setDate(e.target.value)} />
      <br></br>
      <label>MOSTLY INTERESTED IN</label>
      <div className={styles.radioBtn}>
        <RadioGroup defaultValue="2">
          <Stack spacing={100} direction="row">
            <Radio colorScheme="black" size="lg" borderColor="gray" value="1">
              Womenswear
            </Radio>
            <Radio colorScheme="black" size="lg" borderColor="gray" value="2">
              Menswear
            </Radio>
          </Stack>
        </RadioGroup>
      </div>
      <button className={styles.signInBtn} onClick={signup}>JOIN ASOS</button>
    </div>
  );
};

export default SignupForm;
