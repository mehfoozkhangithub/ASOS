import React, { useState, useEffect } from "react"
import {FaSearch} from "react-icons/fa"
import {SearchBox} from "./SearchBox"
import { useCallback } from "react"
import axios from "axios"
const Searchbar = () => {
    const [SearchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //         // const API_URL = `https://asos-server123.herokuapp.com/api/products/?brand=${search}`
    //         const API_URL=`https://mock-api-server.onrender.com/Products/?q=${search}`
    //         axios
    //             .get(API_URL)
    //             .then(res => {
    //                 const contacts = res.data
    //                 setSearchData(contacts)
    //                 // console.log(SearchData);
    //             })
    //             .catch((err)=>{
    //                 console.log(err)
    //             })
    //     }, [])   


        // const onSubmit=()=>{
        //     console.log("contact:",SearchData);
        //     // setSearch("");
        // } 
        const [query ,setQuery]=useState("")
        const [suggestions,setSuggestions] = useState([]);
        //  useEffect(() => {
        //     // const API_URL = `https://asos-server123.herokuapp.com/api/products/?brand=${search}`
        //     const API_URL=`https://mock-api-server.onrender.com/Products/?q=${query}`
        //     axios
        //         .get(API_URL)
        //         .then(res => {
        //             const contacts = res.data
        //             setSearchData(contacts)
        //             // console.log(SearchData);
        //         })
        //         .catch((err)=>{
        //             console.log(err)
        //         })
        // }, [])   

        const getData=()=>{
            const API_URL=`https://mock-api-server.onrender.com/Products/?q=${query}`

            axios.get(API_URL)
                        .then(res => {
                            const data = res.data
                            setSearchData(data)
                            console.log(SearchData);
                        })
                        .catch((err)=>{
                            console.log(err)
                        })

        }

        useEffect(()=>{
            getData()
        },[query])


      
        const queryHandler = useCallback((val)=>{
          console.log("INSIDE QUERY HANDLES", val)
          setQuery(val)
        },[])
      
      
        // const queryHandler = (val) => {
        //   setQuery(val)
        // }
      
        useEffect(()=> {
          if(query===""){
            setSuggestions([])
          }
          else{
            let text = query.toLowerCase();
            // console.log(SearchData)
            let newSuggesstions=SearchData.filter
            ((item)=> {
              return item.Brand_Name.toLowerCase().indexOf(text) !== -1;
            }).map((item) => item.Brand_Name);
            setSuggestions(newSuggesstions)
          }
        } , [query,SearchData])
      
      
    return <div>
            {/* <input style={{width:"90%",height:"40px",textAlign:"left",borderRadius:"25px",padding:"10px",backgroundColor:"white", color:"black"}}
             type="text"                  
                    placeholder="Search for items and brands here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                 />
               <button style={{position:"relative", marginLeft:"-40px", color:"black"}} variant="outline-success" onClick={onSubmit} className="searchbtn"><FaSearch/></button>             */}
               <SearchBox suggestions={suggestions} queryHandler={queryHandler} />
            </div>
}

export default Searchbar;

