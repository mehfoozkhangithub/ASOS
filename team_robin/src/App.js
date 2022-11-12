import AddProductPage from './AdminPage/AddProducts';
import EditProductPage from './AdminPage/EditProduct';
import './App.css';
import { BannerMen } from './components/BannerMen';
import BrandsSectionMen from './components/BrandsSectionMen';
import CategoriesMen from './components/CategoriesMen';
import CtaSectionMen from './components/CtaSectionMen';
import DiscountSection from './components/DiscountSectionMen';
import Footer from './components/Footer';
import Navbar from "./Navbar/Navbar"
import MenPage from './pages/MenPage';
import WomensPage from './pages/WomensPage';
// import AddProductPage from './AdminPage/AddProducts';
// import Admin from './Admin_Panel/Admin';

function App() {
  return (
    <div className="App">
    {/* write code  */}
    {/* <div>Team Robin</div> */}
    <Navbar />
    <WomensPage />
    <Footer />
    {/* <Admin /> */}
    <AddProductPage />
    <EditProductPage />
      {/* <MensClothing />
      <Shoes />
      <WomensClothing />
      <ProductPage /> */}
      {/* <BannerMen />
      <CategoriesMen />
      <DiscountSection />
      <CtaSectionMen />
      <BrandsSectionMen /> */}
    </div>
  );
}


export default App;
