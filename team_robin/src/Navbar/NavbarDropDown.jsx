
import { Link } from "react-router-dom"
import { Text } from "@chakra-ui/react"
import "./DropDown.css"

export default function DropDown() {

    return <div className="navbar">

        <div class="dropdown">
            <button class="dropbtn red_bg_nav">Sale
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                    <div>
                        <ul>
                        <li ><Link to="/"><Text><h4>SHOP BY PRODUCTS</h4></Text></Link></li>
                        <li><Link  className="link_font" to="/">SALE View all</Link></li>
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
                        {/* <li ><Link to="/"><Text><h4>__</h4></Text></Link></li> */}
                        <li><Link  className="link_font" to="/">SALE Jeans</Link></li>
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
                        <li ><Link to="/"><Text><h4>SHOP BY EDIT</h4></Text></Link></li>
                        <li><Link  className="link_font"  style={{fontWeight:"bolder"}}  to="/">Biggest Deals</Link></li>
                        <li><Link className="link_font"  style={{fontWeight:"bolder"}}  to="/">Sale under $15</Link></li>
                        <li><Link className="link_font" style={{fontWeight:"bolder"}} to="/">Top Saved</Link></li>
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
                        <li ><Link to="/"><Text><h4>SHOP SALE BY BODY FIT</h4></Text></Link></li>
                   <li>
                       <Link to="/" >
                      <div className="shopByEdit">
                      <div>
                      <img src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$" alt="img" />
                      <p>ASOS Curvy and Big Size</p>
                      </div>

                      <div>
                      <img src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$"  alt="img"/>
                        <p>Maternity</p>
                        </div>

                        <div>
                        <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$"  alt="img"/>
                        <p>Tall</p>
                        
                        </div>

                        <div>
                        <img src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$"  alt="img"/>
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

        <div class="dropdown">
            <button class="dropbtn">New In
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Category 1</h3>
                        <Link className="link_font" to="/">Link 1</Link>
                        <Link className="link_font" to="/">Link 2</Link>
                        <Link className="link_font" to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link className="link_font" to="/">Link 1</Link>
                        <Link className="link_font" to="/">Link 2</Link>
                        <Link className="link_font" to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropbtn">Clothing
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">Dresses
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">Shoes
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">Sportswear
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">Accessories
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">Autumn
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">Gifting
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">TopShop
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">Face + Body
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn">Brands
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>


        <div class="dropdown">
            <button class="dropbtn red_bg_nav">Outlet
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropbtn">Marketplace
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <div class="row">
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>
                    <div class="column">
                        <h3 className="mm_head">Shop By Products</h3>
                        <Link to="/">Link 1</Link>
                        <Link to="/">Link 2</Link>
                        <Link to="/">Link 3</Link>
                    </div>

                </div>
            </div>
        </div>

    </div>

}