import './App.css';
import { BannerMen } from './components/BannerMen';
import CategoriesMen from './components/CategoriesMen';
import DiscountSection from './components/DiscountSectionMen';
import Navbar from "./Navbar/Navbar"
import { ProductPage } from './ProductPage/ProductPage';
import MensClothing from './Productspage/MensClothing';
import Shoes from './Productspage/Shoes';
import { WomensClothing } from './Productspage/WomensClothing';

function App() {
  return (
    <div className="App">
     <MensClothing/>
     <Shoes/>
     <WomensClothing/>
  <ProductPage/>
    <Navbar />
    <BannerMen />
    <CategoriesMen />
    <DiscountSection />
    </div>
  );
}
// hello every one 

export default App;
