import React, { useState } from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FaRegUser, FaHeart, FaShoppingBag } from "react-icons/fa";
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

  import {Button} from "@chakra-ui/react"
  import {ChevronDownIcon,ChevronUpIcon} from "@chakra-ui/icons"
  import { Image } from "@chakra-ui/react";


// div --> 3 div  
export default function NavbarTop() {

    const [btnBg1, setButtonBg1] = useState(false)
    const [btnBg2, setButtonBg2] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()


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
                        <div><h2 style={{ backgroundColor: btnBg1 ? "#525050" : "transparent" }} onClick={buttonColor1Onclick}>WOMEN</h2></div>
                        <div><h2 style={{ backgroundColor: btnBg2 ? "#525050" : "transparent" }} onClick={buttonColor2Onclick}>MEN</h2></div>
                    </div>

                    <div id="search_box">search box</div>

                    <div id="nav-icons">
                    <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: ("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                <FaRegUser size={20} />
            </MenuButton>
            <MenuList width={200} onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem height={50}>Menu Item 1</MenuItem>
                <MenuItem  height={50}>Menu Item 2</MenuItem>
                <MenuItem  height={50}>Menu Item 3</MenuItem>
                <MenuItem  height={50}>Menu Item 3</MenuItem>
            </MenuList>
        </Menu>
<FaHeart size={20} />
<FaShoppingBag size={20}  />
                    </div>


                </div>

            </div>


            <div className="nav_third_div">
         
            </div>

        </div>
        </div>
}

