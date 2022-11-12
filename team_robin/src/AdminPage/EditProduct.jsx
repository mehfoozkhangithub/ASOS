
import "./EditProduct.css"
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import { useParams } from "react-router-dom";





export default function EditProductPage() {

const {id} =useParams()

 
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const [inputPrice, setinputPrice] = useState("")





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
            price
        }
        axios.patch(`http://localhost:8080/Products${id}`, payload).then(() => {

            // navigate('/')
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
        <Navbar />
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