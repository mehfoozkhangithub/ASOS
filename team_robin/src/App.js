import './App.css';
import { BannerMen } from './components/BannerMen';
import CategoriesMen from './components/CategoriesMen';
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
    </div>
  );
}
// hello every one 

export default App;
