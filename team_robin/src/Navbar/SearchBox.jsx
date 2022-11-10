import { SearchIcon } from "@chakra-ui/icons"

export default function SearchBar(){
   return <div style={{display:"flex", justifyContent:"cemter",alignItems:"center"}}>
    <input type="text" placeholder="search here" style={{width:"95%" ,backgroundColor:"#FFFFFF", borderRadius:"50px",height:"25px",padding:"5px", textAlign:"left"}} />
   <span style={{position:"relative" , right:"35px" ,color:"black"}}><SearchIcon /></span>
   </div>
}