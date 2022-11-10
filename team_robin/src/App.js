import './App.css';
import { BannerMen } from './components/BannerMen';
import CategoriesMen from './components/CategoriesMen';
import DiscountSection from './components/DiscountSectionMen';
import Navbar from "./Navbar/Navbar"
import { ProductPage } from './ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
    {/* write code  */}
    {/* <div>Team Robin</div> */}
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
