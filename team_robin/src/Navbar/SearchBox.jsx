// import { SearchIcon } from "@chakra-ui/icons"

// export default function SearchBar(){
//    return <div style={{display:"flex", justifyContent:"cemter",alignItems:"center"}}>
//     <input type="text" placeholder="search here" style={{width:"95%" ,backgroundColor:"#FFFFFF", borderRadius:"50px",height:"25px",padding:"5px", textAlign:"left"}} />
//    <span style={{position:"relative" , right:"35px" ,color:"black"}}><SearchIcon /></span>
//    </div>
// }

import styled from "styled-components"
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import {useThrottle} from "use-throttle"

const SearchBox =({ suggestions,queryHandler}) => {
     
    const [text,setText]=useState("");
    const [active,setActive]=useState(0);
    const scrollRef=useRef();
    const throttledText= useThrottle(text,1000);

    useEffect(()=>{
        queryHandler(throttledText)  
    },[queryHandler,throttledText])

//    console.log(active)
    // useEffect(()=>{
    //  queryHandler(text)
    // },[text,queryHandler])
    //prev use effect used when usthrottle is not there
     
    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleActiveSuggestions =(e)=>{
        console.log(e.keyCode)
        //uparrow -38
        //downarrow - 40
        switch(e.keyCode) {
            case 38:
                if(active === 1){
                    scrollRef.current.scrollTop = suggestions.length* 38.667;
                    setActive(suggestions.length)
                }
                else if(active <= suggestions.length-3){
                  scrollRef.current.scrollTop -= 38.667
                }
                if(active > 1){
                    setActive((prev)=>prev-1)
                }
                break;

                case 40:
                    if(active === suggestions.length){
                        scrollRef.current.scrollTop =0;
                        setActive(0)
                    }
                  else if(active >=4){
                        scrollRef.current.scrollTop +=38.667
                    }
                        setActive((prev)=>prev+1)
                    // if(active < suggestions.length && active !== suggestions.length){
                    //     setActive((prev)=>prev+1)
                    // }
                    // setActive((prev)=>prev+1)
                    break;
                    default :
                    return ;
        }
    }
    
    return (
        <Wrapper onKeyUp={handleActiveSuggestions}>
            <SearchBarWrapper>
                <Input value={text} onChange={handleChange} />
            </SearchBarWrapper>
            <SuggestionBox len={5} active={active} ref={scrollRef}>
            {suggestions.map((item,index)=>{
                return <div key={index} onMouseOver={()=>setActive(index+1)}>{item}</div>
                
            })}
            </SuggestionBox>
        </Wrapper>
    )
}

//wrap the country div in a link to coiuntry id for routing
 //max-height:200px
const SuggestionBox=styled.div`
${'' /* border:1px solid red; */}
position:absolute;
width:800px;
margin:auto;
margin-top:-5px;
background:white;
color:black;
z-index:2;
display:flex;
flex-direction:column;
max-height:${({len})=> `${len*38.667}px`};
border-top-color:${({len})=> (len?"transparent":"black")};
border-bottom-color:${({len})=> (len?"transparent":"black")};
overflow:auto;
& * {
    flex:1;
    text-align:left;
    padding:8px;
    padding-left:30px;
}
   && :nth-child(${({active}) => active}) {
        background: rgba(0,0,0,0.09);
        cursor:pointer;
    };
`

const SearchBarWrapper = styled.div`
border:1px solid black;
display:flex;
padding:5px 10px;
align-items:center;`

const Input= styled.input`
border:2px solid black;
outline:none;
font-size:20px;
width:90%;
height:20px;
padding:10px;
font-size:15px;
border-radius:25px;
flex:1`

const Wrapper = styled.div`
max-width:800px;
margin:auto;`

export {SearchBox}