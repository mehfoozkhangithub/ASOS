import "./App.css";
import { BannerMen } from "./components/BannerMen";
import BrandsSectionMen from "./components/BrandsSectionMen";
import CategoriesMen from "./components/CategoriesMen";
import CtaSectionMen from "./components/CtaSectionMen";
import DiscountSection from "./components/DiscountSectionMen";
import Navbar from "./Navbar/Navbar";
import { ProductPage } from "./ProductPage/ProductPage";
import MensClothing from "./Productspage/MensClothing";
import Shoes from "./Productspage/Shoes";
import { WomensClothing } from "./Productspage/WomensClothing";
import Login from "./Login/Login"

function App() {
  return (
    <div className="App">
      <Navbar />
      <MensClothing />
      <Shoes />
      <WomensClothing />
      <ProductPage />
      <BannerMen />
      <CategoriesMen />
      <DiscountSection />
      <CtaSectionMen />
      <BrandsSectionMen />
      

    </div>
  );
}
// hello every one

export default App;
