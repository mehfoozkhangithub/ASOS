import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, Divider, Flex, Spacer, Text } from "@chakra-ui/react";
import {FiTruck} from "react-icons/fi";
import {ImCross} from "react-icons/im";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Quantity from "./Quantity"
import Total from "./Total";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import { BsCursor } from "react-icons/bs";
// import  style from "./cart.css"


const style={
    color:"red",
    BsCursor:"pointer"
}

function getCart(){

    return axios.get("https://mock-api-server.onrender.com/cartItem")
}
function deleteItem(id){
  //  console.log(id)
    return axios.delete(`https://mock-api-server.onrender.com/cartItem/${id}`)
}



export const Cart=()=>{
const [data,setData]=useState([])
const navigate=useNavigate()
    useEffect(()=>{
        handleGetCart()
    },[])
    function handleGetCart(){
        getCart().then((res)=>{
            console.log(res.data)
            setData(res.data)
            
         })
    }
    function calculateTotal(products){
        console.log(products);
        var res=0;
        var itm=0;
        products.map(el => {
           return res+=el.quantity*Number(el.price||el.Price)
            
        });
        products.map(el => {
            return itm+=el.quantity;
             
         });
        localStorage.setItem("total",Math.floor(res))
        localStorage.setItem("item",Math.floor(itm))
        return Math.floor(res);
        // return products.reduce((a,b)=>a+b.quantity*Math.floor(Number(b.price)),0)
    }


    function handleDelete(id){
           deleteItem(id)
          .then(res=>handleGetCart())
          .catch((err)=>console.log(err)) 
    }

    const handleChangeQty=(id,price)=>{
       // console.log(typeof(id))
        let updatedData=data.map(item=>{
            if(item.id===id){
                return {
                    ...item,
                    quantity:item.quantity+Number(price)
                }
            }
            else{
                return item
            }
        })
        setData(updatedData)
    }
    
    return (
        <>
        <Box paddingTop="30px" bg="rgb(238,238,238)">
        <Flex margin="auto" w="900px">
            <Box>
                
                    <Flex paddingLeft="20px" paddingRight="20px" marginBottom="20px" paddingTop="20px" paddingBottom="20px" w="510px" bg="white">
                        <Text fontWeight="600" fontSize="18.4px" color="RGB(45, 45, 45)" fontFamily="Arial">MY BAG</Text>
                        <Spacer/>
                        <Text>Items are reserved for 60 minutes</Text> 
                    </Flex>
                    {data?.map((item)=>(
                        <Box key={item.id}>
                        <Flex key={item.id}  w="510px" paddingBottom="20px" paddingTop="20px" paddingLeft="20px" paddingRight="20px" bg="white">
                            <Box w="120px">
                                <img  src={item.Image} alt="" />
                            </Box>
                            <Spacer/>
                            <Box paddingLeft="30px" w="360px">
                                <Flex>
                                <Text marginBottom="15px" fontSize="18px" fontWeight="600" textAlign="left">$ {item.price||item.Price}</Text>
                                <Spacer/>
                                {/* sx={{"& :hover":{color:"red"}}} */}
                                <ImCross style={style} onClick={()=>handleDelete(item.id)}/>
                                </Flex>
                                <Text textAlign="left">{item.title}</Text>
                                <Flex marginTop="10px">
                                    <Text paddingRight="10px" >{item.color}</Text>
                                    <Center paddingRight="10px" w="2px" height='25px'>
                                    <Divider orientation='vertical' />
                                    </Center> 
                                
                                    <Quantity
                                    qty={item.quantity}
                                    incrementCount={()=>handleChangeQty(item.id,1)}
                                    decrementCount={()=>handleChangeQty(item.id,-1)}
                                    />
                                </Flex>

                            </Box>
                        </Flex>
                        <Center >
                        <Divider orientation='horizontal' />
                        </Center>
                        </Box>
                        
                    ))}
                



                <Box marginTop="20px" paddingTop="20px" paddingBottom="20px" paddingLeft="20px" paddingRight="20px" bg="white">
                    <Flex>
                        <Box paddingTop="20px" paddingLeft="30px" w="100px">
                    <FiTruck  size="30px"/>
                    </Box>
                    <Box>
                    <Text textAlign="left">FREE* STANDARD DELIVERY</Text>
                   
                    <Text textAlign="left">Faster delivery options available to most countries.</Text>
                    </Box>
                    </Flex>
                </Box>
            </Box>
            <Spacer/>
            <Box paddingTop="20px" paddingBottom="20px" paddingLeft="20px" paddingRight="20px" height="300px"   w="360px" bg="white">
                <Text textAlign="left" fontWeight="600" fontSize="18.4px" color="RGB(45, 45, 45)" fontFamily="Arial">TOTAL</Text>
                <Center height='25px'>
                 <Divider orientation='horizontal' />
            </Center>
            <Flex>
            <Text textAlign="left" fontWeight="600" fontSize="16.4px" color="RGB(45, 45, 45)" fontFamily="Arial">Sub-total</Text>
            <Spacer/>
            <Total total={calculateTotal(data)}/>
            </Flex>
            <Text textAlign="left" fontWeight="600" fontSize="16.4px" color="RGB(45, 45, 45)" fontFamily="Arial">Delivery</Text>
            <Text marginTop="15px" textAlign="left">Standard Delivery ($ 6.50)</Text>
            <Center height='25px'>
                 <Divider orientation='horizontal' />
            </Center>
            <Button color="white" marginTop="20px" bg="rgb(1,136,73)" w="320px" onClick={()=>navigate("/checkout")}>PLACE ORDER</Button>
            </Box>
        </Flex>
        </Box>
        {/* <Footer/> */}
        </>
    )
} 