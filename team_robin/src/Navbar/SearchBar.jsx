import React, { useState, useEffect } from "react"
import {FaSearch} from "react-icons/fa"
import axios from "axios"
const Searchbar = () => {
    const [SearchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
            const API_URL = `https://asos-server123.herokuapp.com/api/products/?brand=${search}`
            axios
                .get(API_URL)
                .then(res => {
                    const contacts = res.data
                    setSearchData(contacts)
                    console.log(SearchData);
                })
        }, [])   


        const onSubmit=()=>{
            console.log("contact:",SearchData);
            // setSearch("");
        } 
    return <div>
            <input style={{width:"90%",height:"40px",textAlign:"left",borderRadius:"25px",padding:"10px",backgroundColor:"white", color:"black"}}
             type="text"                  
                    placeholder="Search for items and brands here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                 />
               <button style={{position:"relative", marginLeft:"-40px", color:"black"}} variant="outline-success" onClick={onSubmit} className="searchbtn"><FaSearch/></button>            
            </div>
}

export default Searchbar;

