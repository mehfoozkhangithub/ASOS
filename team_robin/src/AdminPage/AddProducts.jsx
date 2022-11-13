
import "./AddProduct.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Navbar from "../Navbar/Navbar"
// import { color } from "@chakra-ui/react";
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




export default function AddProductPage() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();



    const [title, setTitle] = useState('')
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')

    const navigate = useNavigate()

    const [inputTitle, setinputTitle] = useState("")
    const [inputImg, setinputImg] = useState("")
    const [inputPrice, setinputPrice] = useState("")
    const [inputColor, setinputColor] = useState("")



    const showTitle = (title) => {
        setTimeout(() => {
            setinputTitle(title)

        }, 1000);
    }


    const showColor = (title) => {
        setTimeout(() => {
            setinputColor(title)

        }, 1000);
    }

    const showImg = (image) => {
        setTimeout(() => {
            setinputImg(image)

        }, 1000);
    }



    const showPrice = (price) => {
        setTimeout(() => {
            setinputPrice(price)
        }, 100);
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
        showTitle(e.target.value)
    }

    const handleColor = (e) => {
        setColor(e.target.value)
        showColor(e.target.value)
    }



    const handleImage = (e) => {
        setImage(e.target.value)
        showImg(e.target.value)

    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
        showPrice(e.target.value)
    }

    const AddProducts = () => {
        let payload = {
            Image: image,
            Brand_Name: title,
            Price: price,
            color: color,

        }
        axios.post('https://mock-api-server.onrender.com/products', payload).then(() => {
            onOpen()
            // alert("product added succesfully")
            // navigate('/getProduct')
        }).catch((err) => {
            console.log(err)
        })




        // eslint-disable-next-line 
    }



    return <div className="add_main_div">
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
            Product Added Successfully
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
        <div className="addProducts">
            <div
                className="add-product-wrapper">
                <h1 style={{fontSize:"25px", fontWeight:"bolder"}} textAlign="center">Add Product</h1>
                <div className="form-element-div">
                    <label className="form-label">Name</label>
                    <input data-cy="add-product-title" onChange={handleTitle} type="text" />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Image</label>
                    <input name="image"
                        onChange={handleImage}
                        data-cy="add-product-image"
                        type="url"
                        placeholder="Image URL"
                    />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Color</label>
                    <input name="color"
                        onChange={handleColor}
                        data-cy="add-product-color"
                        type="text"
                        placeholder="product color"
                    />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Price</label>
                    <input onChange={handlePrice} data-cy="add-product-price" type="text" />
                </div>
                <div style={{ textAlign: "center" }}>
                    <button className="addbtn" onClick={AddProducts} data-cy="add-product-button">Add Product</button>
                </div>
            </div>

            <div className="showAddProduct">
                <h1  style={{ marginBottom: "10px",fontSize:"25px", fontWeight:"bolder" }} textAlign="center">Product Details</h1>
                <div className="show_input">
                    <div>
                        <label className="form-label">Brand</label>
                    </div>
                    <div>
                        <h3>{inputTitle}</h3>
                    </div>
                </div>
                <div className="show_input">
                    <div>
                        <label className="form-label">Image</label>
                    </div>
                    <div>
                        <img width="200px" height="200px" src={inputImg ? inputImg : " "} alt="" />
                    </div>
                </div>

                <div className="show_input">
                    <div>
                        <label className="form-label">Color</label>
                    </div>
                    <div>
                        <h3>{inputColor}</h3>
                    </div>
                </div>

                <div className="show_input">
                    <div>
                        <label className="form-label">Price</label>
                    </div>
                    <div>
                        <h3>{inputPrice}</h3>
                    </div>
                </div>



            </div>



        </div>
    </div>
}