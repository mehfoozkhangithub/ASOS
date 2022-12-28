

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
                <div><img style={{"width":"100%","background":"black"}} src="data:image/png;base64,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" alt=""/></div>
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