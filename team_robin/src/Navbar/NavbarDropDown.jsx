
import { Link } from "react-router-dom"
import { Text } from "@chakra-ui/react"
import "./DropDown.css"

export default function DropDown() {

    return <div className="navbar">

        <div className="dropdown">
            <button className="dropbtn red_bg_nav">Sale
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                    <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/">SALE View all</Link></li>
                                <li><Link className="link_font" to="/">SALE Selling Fast</Link></li>
                                <li><Link className="link_font" to="/">SALE Dresses</Link></li>
                                <li><Link className="link_font" to="/">SALE Tops</Link></li>
                                <li><Link className="link_font" to="/products/shoes">SALE Shoes</Link></li>
                                <li><Link className="link_font" to="/">SALE Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/">SALE Hoodies</Link></li>
                                <li><Link className="link_font" to="/">SALE Accessories</Link></li>
                                <li><Link className="link_font" to="/">SALE Activewear</Link></li>
                                <li><Link className="link_font" to="/">SALE Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/">SALE Jeans</Link></li>
                                <li><Link className="link_font" to="/products/mensclothing">Mens</Link></li>
                                <li><Link className="link_font" to="/products/womensclothing">Women</Link></li>
                                <li><Link className="link_font" to="/">SALE Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/">SALE Shorts</Link></li>
                                <li><Link className="link_font" to="/">SALE Skirts</Link></li>
                                <li><Link className="link_font" to="/">SALE Sunglasses</Link></li>
                                <li><Link className="link_font" to="/">SALE Swimwear</Link></li>
                                <li><Link className="link_font" to="/">SALE Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/">SALE Trouser and Leggings</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li ><Link to="/"><p fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</p></Link></li>
                                <li><Link className="link_font" style={{ fontWeight: "bolder" }} to="/">Biggest Deals</Link></li>
                                <li><Link className="link_font" style={{ fontWeight: "bolder" }} to="/">Sale under $15</Link></li>
                                <li><Link className="link_font" style={{ fontWeight: "bolder" }} to="/">Top Saved</Link></li>
                                <li><Link className="link_font" to="/">SALE Tops</Link></li>
                                <li><Link className="link_font" to="/products/shoes">SALE Shoes</Link></li>
                                <li><Link className="link_font" to="/products/productpage">View All</Link></li>
                                <li><Link className="link_font" to="/">SALE Hoodies</Link></li>
                                <li><Link className="link_font" to="/">SALE Accessories</Link></li>
                                <li><Link className="link_font" to="/">SALE Activewear</Link></li>
                                <li><Link className="link_font" to="/">SALE Designer Brands</Link></li>

                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP SALE BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>


                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn">New In
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                    <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">NEW PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/products/productpage"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/"> Tops</Link></li>
                                <li><Link className="link_font" to="/products/shoes"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>


                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">NEW EDITS</Text></Link></li>
                               <li>
                               <div className="shopByEdit1">
                                            <div>
                                                <img width="200px" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---go-for-glam.jpg" alt="img" />
                                            </div>

                                            <div>
                                                <img width="200px" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---in-house-brands.jpg"  alt="img" />
                                            </div>
                                            </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn">Clothing
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/products/womensclothing"> Women</Link></li>
                                <li><Link className="link_font" to="/products/shoes"> Shoes</Link></li>
                                <li><Link className="link_font" to="/products/mensclothing"> Men</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/"> Jeans</Link></li>
                                <li><Link className="link_font" to="/"> Jewellry and Watches</Link></li>
                                <li><Link className="link_font" to="/"> Jumpsuits and  Playsuits</Link></li>
                                <li><Link className="link_font" to="/"> Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/"> Shorts</Link></li>
                                <li><Link className="link_font" to="/"> Skirts</Link></li>
                                <li><Link className="link_font" to="/"> Sunglasses</Link></li>
                                <li><Link className="link_font" to="/"> Swimwear</Link></li>
                                <li><Link className="link_font" to="/"> Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/"> Trouser and Leggings</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</Text></Link></li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_partywear_3M_114239512?&$n_240w$" alt="img" /></div>
                                    <div><p>Party Wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_modest2_3m_114177385?&$n_240w$" alt="img" /></div>
                                    <div><p>Modest Fashion</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3m_1858721?&$n_240w$" alt="img" /></div>
                                    <div><p>Ocassion wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_autumnstyles_3m_103813428?&$n_240w$" alt="img" /></div>
                                    <div><p>Autumn Style</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_workwear_3m_110028391?&$n_240w$" alt="img" /></div>
                                    <div><p>Workwear</p></div>
                                </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn">Dresses
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">NEW PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/products/mensclothing"> Mens</Link></li>
                                <li><Link className="link_font" to="/products/womensclothing"> Tops</Link></li>
                                <li><Link className="link_font" to="/"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>


                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">NEW EDITS</Text></Link></li>
                               <li>
                               <div className="shopByEdit1">
                                            <div>
                                                <img width="200px" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---go-for-glam.jpg" alt="img" />
                                            </div>

                                            <div>
                                                <img width="200px" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---in-house-brands.jpg"  alt="img" />
                                            </div>
                                            </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn">Shoes
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home">SALE View all</Link></li>
                                <li><Link className="link_font" to="/">SALE Selling Fast</Link></li>
                                <li><Link className="link_font" to="/">SALE Dresses</Link></li>
                                <li><Link className="link_font" to="/">SALE Tops</Link></li>
                                <li><Link className="link_font" to="/">SALE Shoes</Link></li>
                                <li><Link className="link_font" to="/">SALE Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/">SALE Hoodies</Link></li>
                                <li><Link className="link_font" to="/">SALE Accessories</Link></li>
                                <li><Link className="link_font" to="/">SALE Activewear</Link></li>
                                <li><Link className="link_font" to="/">SALE Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/">SALE Jeans</Link></li>
                                <li><Link className="link_font" to="/">SALE Jewellry and Watches</Link></li>
                                <li><Link className="link_font" to="/">SALE Jumpsuits and  Playsuits</Link></li>
                                <li><Link className="link_font" to="/">SALE Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/">SALE Shorts</Link></li>
                                <li><Link className="link_font" to="/">SALE Skirts</Link></li>
                                <li><Link className="link_font" to="/">SALE Sunglasses</Link></li>
                                <li><Link className="link_font" to="/">SALE Swimwear</Link></li>
                                <li><Link className="link_font" to="/">SALE Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/">SALE Trouser and Leggings</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</Text></Link></li>
                                <li><Link className="link_font" style={{ fontWeight: "bolder" }} to="/">Biggest Deals</Link></li>
                                <li><Link className="link_font" style={{ fontWeight: "bolder" }} to="/">Sale under $15</Link></li>
                                <li><Link className="link_font" style={{ fontWeight: "bolder" }} to="/">Top Saved</Link></li>
                                <li><Link className="link_font" to="/">SALE Tops</Link></li>
                                <li><Link className="link_font" to="/">SALE Shoes</Link></li>
                                <li><Link className="link_font" to="/">SALE Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/">SALE Hoodies</Link></li>
                                <li><Link className="link_font" to="/">SALE Accessories</Link></li>
                                <li><Link className="link_font" to="/">SALE Activewear</Link></li>
                                <li><Link className="link_font" to="/">SALE Designer Brands</Link></li>

                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP SALE BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>


                            </ul>
                        </div>

                    </div>
             
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn">Sportswear
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/"> Tops</Link></li>
                                <li><Link className="link_font" to="/"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/"> Jeans</Link></li>
                                <li><Link className="link_font" to="/"> Jewellry and Watches</Link></li>
                                <li><Link className="link_font" to="/"> Jumpsuits and  Playsuits</Link></li>
                                <li><Link className="link_font" to="/"> Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/"> Shorts</Link></li>
                                <li><Link className="link_font" to="/"> Skirts</Link></li>
                                <li><Link className="link_font" to="/"> Sunglasses</Link></li>
                                <li><Link className="link_font" to="/"> Swimwear</Link></li>
                                <li><Link className="link_font" to="/"> Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/"> Trouser and Leggings</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</Text></Link></li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_partywear_3M_114239512?&$n_240w$" alt="img" /></div>
                                    <div><p>Party Wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_modest2_3m_114177385?&$n_240w$" alt="img" /></div>
                                    <div><p>Modest Fashion</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3m_1858721?&$n_240w$" alt="img" /></div>
                                    <div><p>Ocassion wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_autumnstyles_3m_103813428?&$n_240w$" alt="img" /></div>
                                    <div><p>Autumn Style</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_workwear_3m_110028391?&$n_240w$" alt="img" /></div>
                                    <div><p>Workwear</p></div>
                                </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn">Accessories
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/"> Tops</Link></li>
                                <li><Link className="link_font" to="/"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/"> Jeans</Link></li>
                                <li><Link className="link_font" to="/"> Jewellry and Watches</Link></li>
                                <li><Link className="link_font" to="/"> Jumpsuits and  Playsuits</Link></li>
                                <li><Link className="link_font" to="/"> Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/"> Shorts</Link></li>
                                <li><Link className="link_font" to="/"> Skirts</Link></li>
                                <li><Link className="link_font" to="/"> Sunglasses</Link></li>
                                <li><Link className="link_font" to="/"> Swimwear</Link></li>
                                <li><Link className="link_font" to="/"> Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/"> Trouser and Leggings</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</Text></Link></li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_partywear_3M_114239512?&$n_240w$" alt="img" /></div>
                                    <div><p>Party Wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_modest2_3m_114177385?&$n_240w$" alt="img" /></div>
                                    <div><p>Modest Fashion</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3m_1858721?&$n_240w$" alt="img" /></div>
                                    <div><p>Ocassion wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_autumnstyles_3m_103813428?&$n_240w$" alt="img" /></div>
                                    <div><p>Autumn Style</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_workwear_3m_110028391?&$n_240w$" alt="img" /></div>
                                    <div><p>Workwear</p></div>
                                </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn">Autumn
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">NEW PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/"> Tops</Link></li>
                                <li><Link className="link_font" to="/"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>


                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">NEW EDITS</Text></Link></li>
                               <li>
                               <div className="shopByEdit1">
                                            <div>
                                                <img width="200px" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---go-for-glam.jpg" alt="img" />
                                            </div>

                                            <div>
                                                <img width="200px" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---in-house-brands.jpg"  alt="img" />
                                            </div>
                                            </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn">Gifting
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home">SALE View all</Link></li>
                                <li><Link className="link_font" to="/">SALE Selling Fast</Link></li>
                                <li><Link className="link_font" to="/">SALE Dresses</Link></li>
                                <li><Link className="link_font" to="/">SALE Tops</Link></li>
                                <li><Link className="link_font" to="/">SALE Shoes</Link></li>
                                <li><Link className="link_font" to="/">SALE Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/">SALE Hoodies</Link></li>
                                <li><Link className="link_font" to="/">SALE Accessories</Link></li>
                                <li><Link className="link_font" to="/">SALE Activewear</Link></li>
                                <li><Link className="link_font" to="/">SALE Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/">SALE Jeans</Link></li>
                                <li><Link className="link_font" to="/">SALE Jewellry and Watches</Link></li>
                                <li><Link className="link_font" to="/">SALE Jumpsuits and  Playsuits</Link></li>
                                <li><Link className="link_font" to="/">SALE Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/">SALE Shorts</Link></li>
                                <li><Link className="link_font" to="/">SALE Skirts</Link></li>
                                <li><Link className="link_font" to="/">SALE Sunglasses</Link></li>
                                <li><Link className="link_font" to="/">SALE Swimwear</Link></li>
                                <li><Link className="link_font" to="/">SALE Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/">SALE Trouser and Leggings</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</Text></Link></li>
                                <li><Link className="link_font" style={{ fontWeight: "bolder" }} to="/">Biggest Deals</Link></li>
                                <li><Link className="link_font" style={{ fontWeight: "bolder" }} to="/">Sale under $15</Link></li>
                                <li><Link className="link_font" style={{ fontWeight: "bolder" }} to="/">Top Saved</Link></li>
                                <li><Link className="link_font" to="/">SALE Tops</Link></li>
                                <li><Link className="link_font" to="/">SALE Shoes</Link></li>
                                <li><Link className="link_font" to="/">SALE Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/">SALE Hoodies</Link></li>
                                <li><Link className="link_font" to="/">SALE Accessories</Link></li>
                                <li><Link className="link_font" to="/">SALE Activewear</Link></li>
                                <li><Link className="link_font" to="/">SALE Designer Brands</Link></li>

                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP SALE BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>


                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn">TopShop
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/"> Tops</Link></li>
                                <li><Link className="link_font" to="/"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/"> Jeans</Link></li>
                                <li><Link className="link_font" to="/"> Jewellry and Watches</Link></li>
                                <li><Link className="link_font" to="/"> Jumpsuits and  Playsuits</Link></li>
                                <li><Link className="link_font" to="/"> Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/"> Shorts</Link></li>
                                <li><Link className="link_font" to="/"> Skirts</Link></li>
                                <li><Link className="link_font" to="/"> Sunglasses</Link></li>
                                <li><Link className="link_font" to="/"> Swimwear</Link></li>
                                <li><Link className="link_font" to="/"> Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/"> Trouser and Leggings</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</Text></Link></li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_partywear_3M_114239512?&$n_240w$" alt="img" /></div>
                                    <div><p>Party Wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_modest2_3m_114177385?&$n_240w$" alt="img" /></div>
                                    <div><p>Modest Fashion</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3m_1858721?&$n_240w$" alt="img" /></div>
                                    <div><p>Ocassion wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_autumnstyles_3m_103813428?&$n_240w$" alt="img" /></div>
                                    <div><p>Autumn Style</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_workwear_3m_110028391?&$n_240w$" alt="img" /></div>
                                    <div><p>Workwear</p></div>
                                </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn">Face + Body
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">NEW PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/"> Tops</Link></li>
                                <li><Link className="link_font" to="/"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>


                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">NEW EDITS</Text></Link></li>
                               <li>
                               <div className="shopByEdit1">
                                            <div>
                                                <img width="200px" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---go-for-glam.jpg" alt="img" />
                                            </div>

                                            <div>
                                                <img width="200px" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/11-nov/singles-day---click-frenzy/prime/moments-features-with-borders/ww/ww---in-house-brands.jpg"  alt="img" />
                                            </div>
                                            </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn">Brands
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/"> Tops</Link></li>
                                <li><Link className="link_font" to="/"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/"> Jeans</Link></li>
                                <li><Link className="link_font" to="/"> Jewellry and Watches</Link></li>
                                <li><Link className="link_font" to="/"> Jumpsuits and  Playsuits</Link></li>
                                <li><Link className="link_font" to="/"> Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/"> Shorts</Link></li>
                                <li><Link className="link_font" to="/"> Skirts</Link></li>
                                <li><Link className="link_font" to="/"> Sunglasses</Link></li>
                                <li><Link className="link_font" to="/"> Swimwear</Link></li>
                                <li><Link className="link_font" to="/"> Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/"> Trouser and Leggings</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</Text></Link></li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_partywear_3M_114239512?&$n_240w$" alt="img" /></div>
                                    <div><p>Party Wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_modest2_3m_114177385?&$n_240w$" alt="img" /></div>
                                    <div><p>Modest Fashion</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3m_1858721?&$n_240w$" alt="img" /></div>
                                    <div><p>Ocassion wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_autumnstyles_3m_103813428?&$n_240w$" alt="img" /></div>
                                    <div><p>Autumn Style</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_workwear_3m_110028391?&$n_240w$" alt="img" /></div>
                                    <div><p>Workwear</p></div>
                                </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="dropdown">
            <button className="dropbtn red_bg_nav">Outlet
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/"> Tops</Link></li>
                                <li><Link className="link_font" to="/"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/"> Jeans</Link></li>
                                <li><Link className="link_font" to="/"> Jewellry and Watches</Link></li>
                                <li><Link className="link_font" to="/"> Jumpsuits and  Playsuits</Link></li>
                                <li><Link className="link_font" to="/"> Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/"> Shorts</Link></li>
                                <li><Link className="link_font" to="/"> Skirts</Link></li>
                                <li><Link className="link_font" to="/"> Sunglasses</Link></li>
                                <li><Link className="link_font" to="/"> Swimwear</Link></li>
                                <li><Link className="link_font" to="/"> Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/"> Trouser and Leggings</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</Text></Link></li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_partywear_3M_114239512?&$n_240w$" alt="img" /></div>
                                    <div><p>Party Wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_modest2_3m_114177385?&$n_240w$" alt="img" /></div>
                                    <div><p>Modest Fashion</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3m_1858721?&$n_240w$" alt="img" /></div>
                                    <div><p>Ocassion wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_autumnstyles_3m_103813428?&$n_240w$" alt="img" /></div>
                                    <div><p>Autumn Style</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_workwear_3m_110028391?&$n_240w$" alt="img" /></div>
                                    <div><p>Workwear</p></div>
                                </div>
                               </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn">Marketplace
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <div className="row">
                <div className="column">
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY PRODUCTS</Text></Link></li>
                                <li><Link className="link_font" to="/home"> View all</Link></li>
                                <li><Link className="link_font" to="/"> Selling Fast</Link></li>
                                <li><Link className="link_font" to="/"> Dresses</Link></li>
                                <li><Link className="link_font" to="/"> Tops</Link></li>
                                <li><Link className="link_font" to="/"> Shoes</Link></li>
                                <li><Link className="link_font" to="/"> Coats and Jackets</Link></li>
                                <li><Link className="link_font" to="/"> Hoodies</Link></li>
                                <li><Link className="link_font" to="/"> Accessories</Link></li>
                                <li><Link className="link_font" to="/"> Activewear</Link></li>
                                <li><Link className="link_font" to="/"> Designer Brands</Link></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                {/* <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">__</Text></Link></li> */}
                                <li><Link className="link_font" to="/"> Jeans</Link></li>
                                <li><Link className="link_font" to="/"> Jewellry and Watches</Link></li>
                                <li><Link className="link_font" to="/"> Jumpsuits and  Playsuits</Link></li>
                                <li><Link className="link_font" to="/"> Lingerie and Nightwears</Link></li>
                                <li><Link className="link_font" to="/"> Shorts</Link></li>
                                <li><Link className="link_font" to="/"> Skirts</Link></li>
                                <li><Link className="link_font" to="/"> Sunglasses</Link></li>
                                <li><Link className="link_font" to="/"> Swimwear</Link></li>
                                <li><Link className="link_font" to="/"> Tshirts and Vests</Link></li>
                                <li><Link className="link_font" to="/"> Trouser and Leggings</Link></li>

                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY BODY FIT</Text></Link></li>
                                <li>
                                    <Link to="/" >
                                        <div className="shopByEdit">
                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                                                <p>ASOS Curvy and Big Size</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$" alt="img" />
                                                <p>Maternity</p>
                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                            <div>
                                                <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$" alt="img" />
                                                <p>Tall</p>

                                            </div>

                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li ><Link to="/"><Text fontSize={"16px"} fontWeight="bolder">SHOP BY EDIT</Text></Link></li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_partywear_3M_114239512?&$n_240w$" alt="img" /></div>
                                    <div><p>Party Wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_modest2_3m_114177385?&$n_240w$" alt="img" /></div>
                                    <div><p>Modest Fashion</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3m_1858721?&$n_240w$" alt="img" /></div>
                                    <div><p>Ocassion wear</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_autumnstyles_3m_103813428?&$n_240w$" alt="img" /></div>
                                    <div><p>Autumn Style</p></div>
                                </div>
                               </li>
                               <li>
                                <div className="clothing">
                                    <div><img src="https://images.asos-media.com/navigation/ww_gbl_clothing_workwear_3m_110028391?&$n_240w$" alt="img" /></div>
                                    <div><p>Workwear</p></div>
                                </div>
                               </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>

}