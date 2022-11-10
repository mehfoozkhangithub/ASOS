import React, { useEffect, useState } from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FaRegUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import SearchBar from "./SearchBox";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    // MenuItemOption,
    // MenuGroup,
    // MenuOptionGroup,
    // MenuDivider,
} from '@chakra-ui/react'

import { Button } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import { Image } from "@chakra-ui/react";


// div --> 3 div  
export default function NavbarTop() {

    const [btnBg1, setButtonBg1] = useState(false)
    const [btnBg2, setButtonBg2] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
   

    useEffect(()=>{
        buttonColor1Onclick();
    },[])

    const navigate = useNavigate();

    const brandOnclick = () => {
        navigate("/")
    }


    const buttonColor1Onclick = () => {
        setButtonBg1(true);
        setButtonBg2(false);

    }
    const buttonColor2Onclick = () => {
        setButtonBg2(true);
        setButtonBg1(false);

    }


    return <div>
        <div className="nav_containor">
            <div className="nav_first_div">
                <div>
                    <div>
                        <button>Marketplace</button>
                    </div>
                    <div>
                        <button>Contact and FAQ's</button>
                    </div>
                    <div>
                        <img src="https://assets.asosservices.com/storesa/images/flags/in.png" alt="flag" />
                    </div>

                </div>
            </div>

            <div className="nav_second_div">
                <div className="nav_mid">

                    <div id="nav_logo">
                        <div onClick={brandOnclick}>ASOS</div>
                        <div><h4 style={{ backgroundColor: btnBg1 ? "#525050" : "transparent" }} onClick={buttonColor1Onclick}>WOMEN</h4></div>
                        <div><h4 style={{ backgroundColor: btnBg2 ? "#525050" : "transparent" }} onClick={buttonColor2Onclick}>MEN</h4></div>
                    </div>

                    <div id="search_box"><SearchBar /></div>

                    <div id="nav-icons">
                        <Menu isOpen={isOpen}>
                            <MenuButton
                                // variant="ghost"
                                // mx={1}
                                background={"transparent"}
                                color="white"
                                py={[1, 2, 2]}
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
                                <MenuItem height={50} color="black">Menu Item 1</MenuItem>
                                <MenuItem height={50} color="black">Menu Item 2</MenuItem>
                                <MenuItem height={50} color="black">Menu Item 3</MenuItem>
                                <MenuItem height={50} color="black">Menu Item 3</MenuItem>
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

            </div>


            <div className="nav_third_div">

            <div className="nav_hover_div">
                <ol>
                    <li><p className="red_bg_nav">Sale</p></li>
                    <li><p>New In</p></li>
                    <li><p>Clothing</p></li>
                    <li><p>Dresses</p></li>
                    <li><p>Shoes</p></li>
                    <li><p>Sportswear</p></li>
                    <li><p>Accessories</p></li>
                    <li><p>Autumn</p></li>
                    <li><p>Gifting</p></li>
                    <li><p>TopShop</p></li>
                    <li><p>Face + Body</p></li>
                    <li><p>Brands</p></li>
                    <li><p className="red_bg_nav">Outlet</p></li>
                    <li><p>Marketplace</p></li>



                </ol>
            </div>

            </div>

        </div>
    </div>
}

