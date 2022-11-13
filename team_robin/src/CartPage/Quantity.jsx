import { Button } from "@chakra-ui/react";
import React from "react";
import {AiOutlineMinusSquare,AiOutlinePlusSquare} from "react-icons/ai";
function Quantity({ qty, decrementCount, incrementCount }) {
    // console.log(qty)
    
    return (
      <div
        style={{
          display: "flex",
          gap: "1rem"
        }}
      >
        <button  disabled={qty === 1} onClick={decrementCount}>
          <AiOutlineMinusSquare size="20px"/>
        </button>
        <div>
          <h4>{qty}</h4>
        </div>
        <button onClick={incrementCount}><AiOutlinePlusSquare size="20px"/></button>
      </div>
    );
  }
  
  export default Quantity;
  