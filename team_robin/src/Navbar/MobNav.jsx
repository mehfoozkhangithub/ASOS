

import "./MobNav.css"

import {
    CloseIcon, HamburgerIcon

} from "@chakra-ui/icons";
import ReactTooltip from "react-tooltip"
// import { SearchIcon } from "@chakra-ui/icons"


import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import "./Navbar.css"
import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FaRegUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    // MenuItemOption,
    // MenuGroup,
    // MenuOptionGroup,
    // MenuDivider,
} from '@chakra-ui/react'


export default function MobNav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    // const [navList, setNavlist] = useState(false)/
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [men,setMen]=useState(false)
    const [women,setWomen]=useState(false)
     

    const menClick=()=> {
        setMen(true)
        setWomen(false)
    }

    const womenClick =() => {
        setWomen(true)
        setMen(false)
    }

    useEffect(()=>{
      setWomen(true)
    },[])


    // const toggleNavList = (id) => {

    //     var element = document.getElementById(id)
    //     if (element) {
    //         element.scrollIntoView({ behavior: "smooth", block: 'center' });
    //     }
    //     setNavlist(!navList);
    // };
    return (
        <div className="header">
        <ReactTooltip wrapper="span" />
            <div className="logo-nav">
                <div style={{
                    marginLeft: "2vw",
                }}>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <CloseIcon w={25} h={25} className="menu-icon" />
                        ) : (
                            <HamburgerIcon w={25} h={25} className="menu-icon" />
                        )}
                    </div>
                </div>
                <div><img src="https://github.com/mehfoozkhangithub/tangible-robin-3650/blob/fw20_0748_day-3/team_robin/src/Navbar/Team%20Robin.jpeg?raw=true" alt=""/></div>
                <ul className={click ? "nav-options active" : "nav-options"}>

                       
               
               
                      <Link style={{textDecoration:"none"}} to="/">
                      <div style={{width:"70%",margin:"auto",marginTop:"20px",fontSize:"20px",display:"flex",justifyContent:"space-between"}}>
                       <h4 style={{padding:"7px 10px",border:women?"2px solid blue":"white"}}  onClick={womenClick}>WOMEN</h4>
                       <h4 style={{padding:"7px 10px",border:men?"2px solid blue":"white"}}  onClick={menClick}>MEN</h4>
                      </div>
                      </Link>
              

                   {men ? <div> <li className="option" onClick={() => {
                       
                       closeMobileMenu()
                   }}>
                      <Link style={{textDecoration:"none"}} to="/">
                      <div>
                       <h4>HOME</h4>
                      <img src="https://images.asos-media.com/navigation/mw_homebuttonnew_1826147?&$n_320w$" alt="home" />   
                      </div>
                      </Link>
                   </li>

                   {/* <li className="option" onClick={() => {
                      
                      closeMobileMenu()
                  }}>
                     <Link style={{textDecoration:"none"}} to="/">
                     <div>
                     <h4 style={{width:"40%", position:"relative",zIndex:1,left:"50px",top:"20px", textAlign:"left"}}>Sale upto 30% off</h4>
                     <img style={{marginLeft:"-125px", width:"270px"}} src="https://images.asos-media.com/navigation/gradient_1_1m_041021?&$n_320w$" alt="banner" />
                     </div>
                     </Link>
                  </li> */}

                   <li className="option" onClick={() => {
                      
                      closeMobileMenu()
                  }}>
                     <Link style={{textDecoration:"none"}} to="/">
                     <div>
                      <h4>NEW IN</h4>
                      <img className="nav_mid_img"  src="https://images.asos-media.com/navigation/mw_gbl_new_in_new_in_flo_118858767_4WL?&$n_320w$" alt="img" />
                     </div>
                     </Link>
                  </li>

                  <li className="option" onClick={() => {
                      
                      closeMobileMenu()
                  }}>
                     <Link style={{textDecoration:"none"}} to="/">
                     <div>
                      <h4>CLOTHING</h4>
                     <img className="nav_mid_img" src="https://images.asos-media.com/navigation/mw_gbl_clothing_clothing_flo_116031299_4WL?&$n_320w$" alt="home" />   
                     </div>
                     </Link>
                  </li>

                  <li className="option" onClick={() => {
                      
                      closeMobileMenu()
                  }}>
                     <Link style={{textDecoration:"none"}} to="/">
                     <div>
                      <h4>SPORTSWEAR</h4>
                     <img className="nav_mid_img" src="https://images.asos-media.com/navigation/mw_gbl_sportswear_sportswear_1585797_1m?&$n_320w$" alt="home" />   
                     </div>
                     </Link>
                  </li>

                  <li className="option" onClick={() => {
                      
                      closeMobileMenu()
                  }}>
                     <Link style={{textDecoration:"none"}} to="/">
                     <div>
                      <h4>SHOES</h4>
                     <img className="nav_mid_img" src="https://images.asos-media.com/navigation/mw_toplevel_shoes_gbl_1m_117448576?&$n_320w$" alt="home" />   
                     </div>
                     </Link>
                  </li> </div> : " "}


                  {women ? <div> <li className="option" onClick={() => {
                       
                       closeMobileMenu()
                   }}>
                      <Link style={{textDecoration:"none"}} to="/">
                      <div>
                       <h4>HOME</h4>
                      <img className="nav_mid_img" src="https://images.asos-media.com/navigation/ww_homebuttontemplate_1746711?&$n_320w$" alt="home" />   
                      </div>
                      </Link>
                   </li>

                   <li className="option" onClick={() => {
                      
                      closeMobileMenu()
                  }}>
                     <Link style={{textDecoration:"none"}} to="/">
                     <div>
                      <h4>NEW IN</h4>
                     <img className="nav_mid_img" src="https://images.asos-media.com/navigation/ww_gbl_newin_newin_4wl_119920305?&$n_320w$" alt="home" />   
                     </div>
                     </Link>
                  </li>

                  <li className="option" onClick={() => {
                      
                      closeMobileMenu()
                  }}>
                     <Link style={{textDecoration:"none"}} to="/">
                     <div>
                      <h4>CLOTHING</h4>
                     <img className="nav_mid_img" src="https://images.asos-media.com/navigation/ww_sale_autumnedit_au_1m_1251578?&$n_320w$" alt="home" />   
                     </div>
                     </Link>
                  </li>

                  <li className="option" onClick={() => {
                      
                      closeMobileMenu()
                  }}>
                     <Link style={{textDecoration:"none"}} to="/">
                     <div>
                      <h4>DRESSES</h4>
                     <img className="nav_mid_img" src="https://images.asos-media.com/navigation/ww_gbl_toplevel_dresses_1m_117815345?&$n_320w$" alt="home" />   
                     </div>
                     </Link>
                  </li>

                  <li className="option" onClick={() => {
                      
                      closeMobileMenu()
                  }}>
                     <Link style={{textDecoration:"none"}} to="/">
                     <div>
                      <h4>SHOES</h4>
                     <img className="nav_mid_img" src="https://images.asos-media.com/navigation/ww_gbl_shoes_toplevel2_1m_114865509?&$n_320w$" alt="home" />   
                     </div>
                     </Link>
                  </li> </div> : " "}
            
                </ul>
            </div>
            <div id="nav-icons">
                <BsSearch size={23} />
                <Menu isOpen={isOpen}>
                    <MenuButton
                        // variant="ghost"
                        // mx={1}
                        background={"transparent"}
                        color="white"
                        py={[1, 2, 2]}
                        cursor="pointer"
                        // px={4}
                        // borderRadius={5}
                        // _hover={{ bg: ("gray.100", "gray.700") }}
                        // aria-label="Courses"
                        fontWeight="normal"
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                    >
                        <FaRegUser
                            size={23} />
                    </MenuButton>
                    <MenuList width={200} onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <div style={{ width: "auto", height: "35px", display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "20px", position: "relative", backgroundColor: "white", color: "black", paddingLeft: "10px", zIndex: "2px" }}>
                            <p>Sign In</p>
                            <p>Join</p>
                        </div>
                        <MenuItem paddingLeft={10} height={50} color="black">My Account</MenuItem>
                        <MenuItem paddingLeft={10} height={50} color="black">My Orders</MenuItem>
                        <MenuItem paddingLeft={10} height={50} color="black">Return Information</MenuItem>
                        <MenuItem paddingLeft={10} height={50} color="black">Contact Preferences</MenuItem>
                    </MenuList>
                </Menu>
                <div>
                    <FaHeart color="transparent" style={{ stroke: "white", strokeWidth: "50" }} border="2px solid white" size={23} />
                </div>
                <div>
                    <FaShoppingBag
                        color="transparent" style={{ stroke: "white", strokeWidth: "50" }} border="2px solid white"
                        size={23} />
                </div>
            </div>

        </div>
    )

}