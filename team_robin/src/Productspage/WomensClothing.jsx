import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  Flex,
  Select,
  Stack,
} from "@chakra-ui/react";

import styles from './Shoes.module.css';
import { useEffect } from "react";
import { showProducts, sort } from "../../src/ProductsStore/products.action"
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const WomensClothing = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.products);
  const location = useLocation();
  const from = {
    pathname: location.pathname
  }
  useEffect(() => {
    // console.log("useEffect");

    showProducts(dispatch, "Women");
  }, [dispatch]);

  const handleOnSelect = (e) => {
    // e.preventDefault()
    const { value } = e.target;
    // console.log(value);
    // let keys = Object.keys(data[1]);
    // console.log('keys',keys)

    sort(dispatch, value, data, "Women");
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

    <div>
      {/* <Navbar/> */}
      <div className={styles.headline_box} style={{ border: "1px solid blue", width: "100%", height: "220px" }}>
        <div className={styles.headline}>
          <h1>Women's New in: Women Clothes</h1>
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
      </div>
      <div className={styles.filter_box}>
        <Flex top={2} left={110}>
          {/* <div className={styles.flex_box}> */}
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
        {/* </div> */}
      </div>
      <div>
        <p>{data.length} styles found</p>
      </div>

      <div className={styles.products}>
        {data.map((el) => (
          <div id={styles.items} key={el.id}>
            <Link to={`/product/${el.id}`} state={from}>
            <img src={el.Image} alt="" />
            <div id={styles.name_div}>
              <h2> {el.Brand_Name}</h2>
            </div>
            <div id={styles.price_div}>
              <h3>{`£ ${+(el.Price)}`}</h3>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WomensClothing };
