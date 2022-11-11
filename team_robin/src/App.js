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

function App() {
  return (
    <div className="App">
    {/* write code  */}
    {/* <div>Team Robin</div> */}
    <Navbar />
    <WomensPage />
    <Footer />
    </div>
  );
}
// hello every one 

export default App;
