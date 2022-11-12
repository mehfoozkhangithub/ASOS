// import { useCallback } from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// // import './App.css';
// import { SearchBox } from './SearchBox';
// import country from '../utils/countries';

// function SearchBar() {

//   const [query ,setQuery]=useState("")
//   const [suggestions,setSuggestions] = useState([]);

//   const queryHandler = useCallback((val)=>{
//     console.log("INSIDE QUERY HANDLES", val)
//     setQuery(val)
//   },[])


//   // const queryHandler = (val) => {
//   //   setQuery(val)
//   // }

//   useEffect(()=> {
//     if(query===""){
//       setSuggestions([])
//     }
//     else{
//       let text = query.toLowerCase();
//       let newSuggesstions= country.filter
//       ((item)=> {
//         return item.country.toLowerCase().indexOf(text) !== -1
//         ? true:false;
//       }).map((item) => item.country);
//       setSuggestions(newSuggesstions)
//     }
//   } , [query])

//   return (
//     <div className="SearchBar">
//      <SearchBox suggestions={suggestions} queryHandler={queryHandler} />
//     </div>
//   );
// }

// export default SearchBar;
import { SearchIcon } from "@chakra-ui/icons";

import React, { useState, useEffect } from "react"
import { Form, FormControl } from "react-bootstrap";
// import { Form, FormControl,Button } from "react-bootstrap";

// import {FaSearch} from "react-icons/fa"
import axios from "axios"
const Searchbar = () => {
    const [SearchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
            const API_URL = `http://localhost:8080/shoes/?title=${search}`
            axios
                .get(API_URL)
                .then(res => {
                    const contacts = res.data
                    setSearchData(contacts)
                    console.log(SearchData);
                })
        }, [SearchData,search])   
        const onSubmit=()=>{
            console.log("contact:",SearchData);
            setSearch("");
        } 
    return (
        <>
            <Form className="d-flex form_controls">
                <FormControl
              style={{width:"90%", height:"35px", borderRadius:"50px", padding:"10px", fontSize:"15px"}}
                    type="search"
                    placeholder="Search for items and brands here"
                    className="me-2 "
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
   <span style={{position:"relative" , right:"35px" ,color:"black"}}  onClick={onSubmit}><SearchIcon /></span>

               {/* <Button variant="outline-success" className="searchbtn"><FaSearch/></Button> */}
            </Form>

        </>
    )
}

export default Searchbar;