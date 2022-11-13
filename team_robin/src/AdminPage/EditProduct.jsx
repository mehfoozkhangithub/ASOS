
import "./EditProduct.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";




  import {
    useDisclosure,
    AlertDialog,
    Button,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogFooter,
    // AlertDialogBody
  } from "@chakra-ui/react";


export default function EditProductPage() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();


const {id} =useParams()

 
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    // const [inputPrice, setinputPrice] = useState("")





    // const showPrice = (price) => {
    //     setTimeout(() => {
    //         setinputPrice(price)
    //     }, 1000);
    // }



    const handlePrice = (e) => {
        setPrice(e.target.value)
        // showPrice(e.target.value)
    }

    const EditProducts = () => {
        let payload = {
            Price:price
        }
        axios.patch(`https://mock-api-server.onrender.com/products/${id}`, payload).then(() => {
            onOpen()
            // navigate('/getProduct')
        }).catch((err) => {
        console.log(err)
        })   


      clearForm()

                
         // eslint-disable-next-line 
    }

    const clearForm=()=>{
        setPrice("")
    }

    return <div className="edit_main_div">
    <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            {/* {" "}
            Do you Agree with terms and conditions ?{" "} */}
            Product Price Updated Successfully
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogFooter>
          {/* ref={cancelRef} used in ok button  */}
            <Button bg="green" color="white"  onClick={() => navigate("/getProduct")}>
              Ok
            </Button>:
       
            {/* <Button onClick={onClose}  colorScheme="red" ml={3}>
              Close
            </Button> */}
          </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    
        <div style={{width:"100%", display:"flex",justifyContent:"center",gap:"50px",backgroundColor:"#F8F8F8",color:"white",padding:"10px"
        }}>
        <Link style={{padding:"10px 25px", color:"white", backgroundColor:"#D01345", fontSize:"15px"}} to="/getProduct">Dashboard</Link>
        <Link style={{padding:"10px 25px", color:"white", backgroundColor:"#D01345", fontSize:"15px"}} to="/addProduct">Add Product</Link>
        </div>
        <div className="editProducts">
            <div
                className="add-product-wrapper">
                <h1 style={{marginBottom:"20px"}} textAlign="center">Edit Product</h1>
                <div className="form-element-div">
                    <label className="form-label">Product Price</label>
                    <input onChange={handlePrice} data-cy="add-product-price" type="text" />
                </div>
                <div style={{ textAlign: "center" }}>
                    <button className="addbtn" onClick={EditProducts} data-cy="add-product-button">Edit Product</button>
                </div>
            </div>

            {/* <div className="showAddProduct">
                     <h1 style={{marginBottom:"10px"}} textAlign="center">Product Details</h1>
                    <div className="show_input">
                        <div>
                            <label className="form-label">Product title</label>
                        </div>
                        <div>
                            <h3>{inputTitle}</h3>
                        </div>
                    </div>
                    <div className="show_input">
                        <div>
                            <label className="form-label">Product Category</label>
                        </div>
                        <div>
                            <h3>{inputCat}</h3>
                        </div>
                    </div>
                    <div className="show_input">
                        <div>
                            <label className="form-label">Product Image</label>
                        </div>
                        <div>
                           <img width="200px" height="200px" src={inputImg ? inputImg : " "} alt="" />
                        </div>
                    </div>
                    <div className="show_input">
                        <div>
                            <label className="form-label">Product Price</label>
                        </div>
                        <div>
                            <h3>{inputPrice}</h3>
                        </div>
                    </div>
                
     

            </div> */}



        </div>
    </div>
}