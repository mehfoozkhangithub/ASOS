import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import React, { useState } from 'react'
import { userSignUp } from "../AuthReducer/action"
import styles from './login.module.css'
import './login.css'
const SignupForm = () => {
    const [email,setEmail]=useState("");
    const [fname,SetName]=useState("");
    const [pass,setPass]=useState();
    const [lname, setSecondName] = useState("");
    const [date,setDate]=useState("")
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleFormEvent=(e)=>{
        e.preventDefault();
        const password=Number(pass)
        let payload = {fname,lname,email,password,date}
        console.log(payload)
        dispatch(userSignUp(payload));
        
        navigate("/")
        
    }
   return (
    <form className={styles.form}>
      <label>EMAIL ADDRESS:</label>
      <input type="text" className={styles.input} value={email}  onChange={(e)=>setEmail(e.target.value)} />
      <label>FIRST NAME:</label>
      <input type="text" className={styles.input} value={fname}  onChange={(e)=>SetName(e.target.value)} />
      <label>LAST NAME:</label>
      <input type="text" className={styles.input} value={lname} onChange={(e)=>setSecondName(e.target.value)}/>
      <label>PASSWORD:</label>
      <input type="password" className={styles.input} value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <label>DATE OF BIRTH:</label>
      <input type="date" className={styles.inputDate} value={date} onChange={(e)=>setDate(e.target.value)} />
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
      <button className={styles.signInBtn} onClick={handleFormEvent}>JOIN ASOS</button>
    </form>
  );
};

export default SignupForm;
