

import "./MobNav.css"

import {
    CloseIcon, HamburgerIcon

} from "@chakra-ui/icons";
// import { SearchIcon } from "@chakra-ui/icons"


import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import "./Navbar.css"
import { BsSearch } from "react-icons/bs"
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


    // const toggleNavList = (id) => {

    //     var element = document.getElementById(id)
    //     if (element) {
    //         element.scrollIntoView({ behavior: "smooth", block: 'center' });
    //     }
    //     setNavlist(!navList);
    // };
    return (
        <div className="header">
            <div className="logo-nav">
                <div style={{
                    marginLeft: "2vw",
                }}>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <CloseIcon w={50} h={50} className="menu-icon" />
                        ) : (
                            <HamburgerIcon w={50} h={50} className="menu-icon" />
                        )}
                    </div>
                </div>
                <div><img src="https://github.com/mehfoozkhangithub/tangible-robin-3650/blob/fw20_0748_day-3/team_robin/src/Navbar/Team%20Robin.jpeg?raw=true" alt=""/></div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={() => {
                       
                        closeMobileMenu()
                    }}>
                        <a href="#about">HOME</a>
                    </li>
                    <li className="option" onClick={() => {
                        closeMobileMenu()
                    }}>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li className="option" onClick={() => {
                        closeMobileMenu()
                    }}>
                        <a href="#contact">CONTACT</a>
                    </li>
                    <li className="option" onClick={() => {
                        closeMobileMenu()
                    }}>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li className="option" onClick={() => {
                        closeMobileMenu()
                    }}>
                        <a href="#skills">SKILLS</a>
                    </li>
                    {/* <li className="option mobile-option" onClick={() => {
                        closeMobileMenu()
                    }}>
                        <button onClick={() => {
                            window.open("https://drive.google.com/file/d/18QWx9vFvtc65I3yXhY3_WCdL2sCPJm52/view")
                        }} className="sign-up">
                            RESUME
                        </button>
                    </li> */}
                </ul>
            </div>
            <ul className="signin-up">
                <li className="sign-in" onClick={closeMobileMenu}>
                    <a href="/">SIGN-IN</a>
                </li>
                <li onClick={closeMobileMenu}>
                    <a href="/" className="signup-btn">
                        SIGN-UP
                    </a>
                </li>
            </ul>
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