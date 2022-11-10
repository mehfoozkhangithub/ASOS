import './App.css';
import { BannerMen } from './components/BannerMen';
import BrandsSectionMen from './components/BrandsSectionMen';
import CategoriesMen from './components/CategoriesMen';
import CtaSectionMen from './components/CtaSectionMen';
import DiscountSection from './components/DiscountSectionMen';
import Navbar from "./Navbar/Navbar"

function App() {
  return (
    <div className="App">
    {/* write code  */}
    {/* <div>Team Robin</div> */}
    <Navbar />
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
