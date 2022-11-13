
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./productDetails.module.css";
import SimpleSlider from "./DataSlide"
import { getProductData ,getProductCart} from "../ProductReducer/action";
import Navbar from "../Navbar/Navbar"
import {
  Button,
  Spinner,
  Collapse,
  ListItem,
  UnorderedList,
  OrderedList,
  Wrap,
  WrapItem,
  Alert,
  AlertIcon,
  useToast,
  Progress,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useNativeBase } from "native-base";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { addCartApi } from "../cart_auth/cart_Action_type";
const ProductDetails = () => {
  const toast = useToast();
  const refSize = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate=useNavigate()

  let flag=false;
  if (location.state.pathname === "/products/productpage") {
       flag=true
       console.log("working")
  } 
  
   const data=useSelector((state)=>state.Prod)
   const cartData=useSelector((state)=>state.cartInfo);
   const {addItemCart}=cartData;
   console.log(addItemCart)
   
  const {ProductData,isLoading,isError,loading}=data
  console.log(ProductData)

  const [size, setSize] = useState("");
  const [show, setShow] = useState(false);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
      if(flag){
       dispatch(getProductCart(id));
      }else{
        dispatch(getProductData(id));
      }
    
    
    return () => {};
  }, [id]);

  // let handleAddCart = () => {
  //   let s = refSize.current;
  //   if (s === null) {
  //     setSelectSize(true);
  //   }
  //   let new1 = cartData.some((el) => el.id === productDetails.id);
  //   if (!new1 && s) {
  //     dispatch(addCartApi(productDetails, s));

  //     return toast({
  //       title: `successfully added`,
  //       status: "success",
  //       position: "top",
  //       isClosable: true,
  //       color:"white"
  //     });
  //   }
  // };
  // let handleSize = (e) => {
  //   refSize.current = e.target.value;
  //   setSelectSize(false);
  // };
const handleAddCart=()=>{
  dispatch(addCartApi(ProductData,size));
  setTimeout(()=>{
    navigate("/cartpage")
  },2000)
}

  const handleToggle = () => setShow(!show);
  if (isLoading) {
    return (
      <div>
        <Progress size="lg" isIndeterminate />
      </div>
    );
  } else if (isError) {
    return (
      <div>
        <Stack spacing={3}>
          <Alert status="error">
            <AlertIcon />
            There was an error processing your request
          </Alert>
        </Stack>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.breadCrumbDiv}>
        {/* <Breadcrumb className={styles.breadCrumb1}
          spacing="8px"
          separator={<ChevronRightIcon color='gray.500' />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

         {prevLocation &&  <BreadcrumbItem>
            <BreadcrumbLink href={location.state.pathname}>
              {prevLocation}
            </BreadcrumbLink>
          </BreadcrumbItem>}

          <BreadcrumbItem isCurrentPage>
            <p>{ProductData.Brand_Name}</p>
          </BreadcrumbItem>
        </Breadcrumb> */}
      </div>
      <div className={styles.uperDiv}>
        <div className={styles.imgDiv}>
          <div className={styles.smallimgDiv}>
            <img
              className={styles.smallImg}
              src={ProductData.Image||ProductData.image}
              alt="img"
            />
          </div>
          <img className={styles.bigImg} src={ProductData.Image||ProductData.image} alt="img" />
        </div>
        <div className={styles.detailsDiv}>
          <div className={styles.brand}>
            <p className={styles.brandname}>{ProductData.Brand_Name||ProductData.brand}</p>
          </div>
          <div className={styles.price1}>
            <h3 className={styles.price2}>{`£${ProductData.Price||ProductData.price}`}</h3>
          </div>
          <div className={styles.color}>
            <span className={styles.cspan}>COLOUR: </span>
            {ProductData.color}
          </div>
          <div className={styles.sizeDiv}>
            <h5 className={styles.sizeH}>SIZE:</h5>
            <div>
              <select
                className={styles.select}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                <option hidden>Please select</option>
                <option value={"2XS"}>2XS </option>
                <option value={"XS"}>XS </option>
                <option value={"S"}>S </option>
                <option value={"M"}>M </option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL </option>
              </select>
            </div>
          </div>
          {/* {selectSize && (
            <div className={styles.chooseSize}>
              Please select from the available colour and size options
            </div>
          )} */}
          <div className={styles.btnDiv}>
            <Wrap>
              <WrapItem>
                <button
                  className={styles.btnCart}
                  onClick={handleAddCart}
                >
                  <div className={styles.spin}>
                    {addItemCart.loading && <Spinner color="white" />}
                  </div>
                  <div className={styles.insidebtn}>ADD TO BAG</div>
                </button>
              </WrapItem>
            </Wrap>
          </div>
          <div className={styles.delivery}>
            <div className={styles.iconDiv}>
              <img
                className={styles.icon}
                src="https://cdn-icons-png.flaticon.com/512/3233/3233997.png" alt=""
              />
              <span>Free Delivery.</span>
            </div>
            <p className={styles.tc}>
              {"Ts&Cs apply. "}
              <span className={styles.lSpan}>Learn more</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.lowerDiv}>
        <Collapse startingHeight={110} in={show}>
          <div className={styles.innerlower}>
            <div className={styles.innerLowerone}>
              <h2 className={styles.h2}>PRODUCT DETAILS</h2>
              <p className={styles.p}>
                <span className={styles.uSpan}>Product</span> by{" "}
                <span className={styles.uSpan}>ASOS DESIGN</span>
              </p>
              <div className={styles.ul}>
                <OrderedList>
                  <ListItem className={styles.li}>Next stop: checkout</ListItem>
                  <ListItem className={styles.li}>Wolverine design</ListItem>
                  <ListItem className={styles.li}>Crew neck</ListItem>
                  <ListItem className={styles.li}>Short sleeves</ListItem>
                  <ListItem className={styles.li}>Oversized fit</ListItem>
                </OrderedList>
              </div>
            </div>
            <div className={styles.innerLowertwo}>
              <h2 className={styles.h2}>PRODUCT CODE</h2>
              <p className={styles.p}>
                {Math.floor(Math.random() * 10000000) + 10000000}
              </p>
              <div>
                <h3 className={styles.h3}>BRAND</h3>
                <p className={styles.p}>
                  This is <span className={styles.uSpan}>ASOS DESIGN</span> –
                  your go-to for all the latest trends, no matter who you are,
                  where you’re from and what you’re up to. Exclusive to ASOS,
                  our universal brand is here for you, and comes in Plus and
                  Tall. Created by us, styled by you.
                </p>
              </div>
            </div>
            <div className={styles.innerLowerthree}>
              <h3 className={styles.h2}>{"SIZE & FIT"}</h3>
              <p className={styles.p}>Model's height: 188cm/6'2"</p>
              <p className={styles.p1}>Model is wearing: Size Medium</p>
              <div>
                <h2 className={styles.h3}>LOOK AFTER ME</h2>
                <p className={styles.p}>
                  Machine wash according to instructions on care label
                </p>
              </div>
              <div>
                <h2 className={styles.h3}>ABOUT ME</h2>
                <p className={styles.p}>
                  By choosing our Better Cotton products, you’re supporting
                  ASOS’s investment in Better Cotton’s mission. This product is
                  sourced via a system of mass balance and therefore may not
                  contain Better Cotton. See:
                  https://www.asos.com/responsible-fashion/partner/our-certification-partners/
                </p>
                <p className={styles.p2}>Main: 100% Good Quality.</p>
              </div>
            </div>
          </div>
        </Collapse>
        <Button
          className={styles.btn2}
          size="md"
          backgroundColor={"white"}
          onClick={handleToggle}
          mt="1rem"
        >
          Show {show ? "Less" : "More"}
        </Button>
      </div>
      <div className={styles.like}>
      <h1 className={styles.h1Like}>YOU MIGHT ALSO LIKE</h1>
      <SimpleSlider />
      </div>
    </div>
  );
};

export default ProductDetails;
