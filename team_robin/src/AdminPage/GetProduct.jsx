// import React, { useEffect, useState } from 'react'
// import './Getproduct.css'
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { getData } from '../Redux/action';
// import ProductCard from '../Components/ProductCard';
// import axios from "axios"


// const GetProduct = () => {

//     const dispatch=useDispatch();
//     const [data,setData]=useState([])
//     // const isLoading=useSelector((state)=>state.isLoading)

//     const getProducts=()=>{
//         axios
//         .get("  http://localhost:8080/products")
//         .then((res) => {
//          setData(res.data)
//         })
//         .catch((err)=>{
        
//             console.log(err)
//         })
//     }

//     useEffect(()=> {
//     dispatch(getData)
//     },[dispatch])

//     // console.log(product)
//     return (
//         <div style={{ width: "100%" }}>
//             <div className='product-cards'>
//                 {/* Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
//                 */}
//                 {data.map((item)=>{
//                     return <ProductCard key={item.id} item={item} />
//                 })}
//             </div>
//         </div>
//     );
// }

// export default GetProduct


import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Select,
  Stack,
} from "@chakra-ui/react";

import axios from "axios";

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

import styles from "./GetProduct.module.css";
import { useEffect } from "react";
import { showProducts, sort } from "../../src/ProductsStore/products.action"
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const GetProduct = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

    const navigate=useNavigate();

    const [data,setData]=useState([])
    const [error,setError]=useState(false)
    const [loading,setLoading]=useState(false)

    const getData = () => {
        setLoading(true)
        axios.get('https://mock-api-server.onrender.com/products').then((res) => {
    setData(res.data)
    setLoading(false)
            // navigate('/')
            // alert("product added succesfully")
        }).catch((err) => {
            setError(true)
            console.log(err)
        })

    }

    
    useEffect(()=> {
        getData();
    },[])

 

    const goToEdit=(id)=>{
        navigate(`/editProduct/${id}`)
    }

    const deleteProduct=(id)=>{
        axios.delete(`https://mock-api-server.onrender.com/products/${id}`).then(() => {
      onOpen()
      // getData()
        // alert("Product deleted successfully")
        // getData();
        }).catch((err) => {
        console.log(err)
        })   
    }

  const dispatch = useDispatch();
//   const { loading, error, data } = useSelector((state) => state.products);
//   const location = useLocation();
//   const from = {
//     pathname: location.pathname,
//   };
//   useEffect(() => {
//     // console.log("useEffect");

//     showProducts(dispatch, "Men");
//   }, [dispatch]);

  const handleOnSelect = (e) => {
    // e.preventDefault()
    const { value } = e.target;
    console.log(value);
    // let keys = Object.keys(data[1]);
    // console.log('keys',keys)

    sort(dispatch, value, data, "Men");
  };

  if (loading)
    return (
      <div className={styles.loading}>
        <h1>LOADING</h1>
      </div>
    );
  if (error)
    return (
      <div className={styles.error}>
        <h1>SOMETHING WENT WRONG.......</h1>
      </div>
    );

  return (
    <div >
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
            Product Deleted Successfully
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogFooter>
          {/* ref={cancelRef} used in ok button  */}
            <Button bg="red" color="white" onClick={()=>{
              onClose()
              getData()
            }} ref={cancelRef}>
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
      {/* <div
        className={styles.headline_box}
        style={{ border: "1px solid grey", width: "100%", height: "220px" }}
      >
        <div className={styles.headline}>
          <h1>Men's New in: Men Clothes</h1>
          <p style={{ fontSize: "11px" }}>
            If you needed another excuse to build on your footwear collection,
            our edit of men's new shoes is a pretty good one. We've rounded up
            new men's trainers, shoes and men's new boots from some of your
            favourite brands (think Nike, adidas Originals, Dr. Martens and ASOS
            DESIGN) to bring you the latest shoe styles all in one place. Jack &
            Jones, New Look and River Island are in the mix, too, with
            everything from brogues and loafers to smart wedding shoes to cop.
            All you need now are some big plans to debut your new kicks.
          </p>
        </div>
      </div> */}
      {/* <div className={styles.filter_box}>
        <Flex top={2} left={110}>
          <Stack spacing={3}>
            <Select
              variant="filled"
              placeholder="Sort"
              w={200}
              onChange={(e) => handleOnSelect(e)}
            >
              <option value="What's new">What's new</option>
              <option value="DESC">Price high to low</option>
              <option value="ASC">Price low to high</option>
            </Select>
          </Stack>
          <Stack spacing={3}>
            <Select
              variant="filled"
              placeholder="Color"
              w={200}
              ml={3}
              onChange={(e) => handleOnSelect(e)}
            >
              <option value="none">All Colors</option>
              <option value="Black">black</option>
              <option value="Orange">orange</option>
              <option value="Green">green</option>
              <option value="White">white</option>
              <option value="Blue">blue</option>
              <option value="Beige-Brown">beige brown</option>
            </Select>
          </Stack>
        </Flex>
      </div> */}
      {/* <div>
      <h1 style={{fontSize:"50px"}} textAlign="center">Dashboard</h1>
      </div> */}
      <div>
        <p>{data.length} styles found</p>
      </div>
  

      <div className={styles.products}>
        {data.map((el) => (
          <div id={styles.items} key={el.id}>
            {/* <Link to={`/productdetails/${el.id}`} state={from}> */}
            <img src={el.Image} alt="" />
            <div id={styles.name_div}>
              <h2> {el.Brand_Name}</h2>
            </div>
            <div id={styles.price_div}>
              <h3>{`£ ${+el.Price}`}</h3>
            </div>
            <div className={styles.crud_btn_div}>
                <button onClick={()=>goToEdit(el.id)}>Edit</button>
                <button onClick={()=>deleteProduct(el.id)}>Delete</button>
            </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProduct;
