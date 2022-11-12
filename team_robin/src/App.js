import AddProductPage from './AdminPage/AddProducts';
import EditProductPage from './AdminPage/EditProduct';
import './App.css';
import Footer from './components/Footer';
import { Main } from './Main/Main';
import Navbar from "./Navbar/Navbar"
import MenPage from './pages/MenPage';
import WomensPage from './pages/WomensPage';
import { Route,Routes } from 'react-router-dom';
// import AddProductPage from './AdminPage/AddProducts';
// import Admin from './Admin_Panel/Admin';
import MensClothing from "../src/Productspage/MensClothing";
import {WomensClothing} from "../src/Productspage/WomensClothing";
import Shoes from "../src/Productspage/Shoes";
import {ProductPage}from "../src/ProductPage/ProductPage";
import Login from "./Login/Login"
import ProductDetails from "./productDetails/ProductDetails"
import MyAccount from './MyAccount/MyAccount';


import GetProduct from './AdminPage/GetProduct';
// import Cart from "../src/Carts_Pages/Cart";
// import Cart_Items from "../src/Carts_Pages/Cart_Item"


function App() {
  return (
    <div className="App">    
       <Routes>
        <Route path ="/" element ={<Main />}/>
        <Route path ="/womenspage" element ={<WomensPage/>}/>
        <Route path ="/menspage" element ={<MenPage/>}/>
        <Route path ="/products/productpage" element ={<ProductPage/>}/>
        <Route path ="/products/shoes" element ={<Shoes/>}/>
        <Route path ="/products/mensclothing" element ={<MensClothing/>}/>
        <Route path ="/products/womensclothing" element ={<WomensClothing/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path ="/product/:id" element ={<ProductDetails/>}/>
        <Route path ="/myaccount" element ={<MyAccount/>}/>
        {/* <Route path ="/mydetails" element ={<Mydetails/>}/> */}
        {/* <Route path ="/cartitem" element ={<Cart_Items/>}/> */}
        {/* <Route path ="/Cart" element ={<Cart/>}/> */}
       </Routes>
    </div>
  );
}


export default App;

