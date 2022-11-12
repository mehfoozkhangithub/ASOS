import Navbar from "../Navbar/Navbar";
import MenPage from "../pages/MenPage";
import WomensPage from "../pages/WomensPage";

const Main =()=>{

    return(
        <div>
            <Navbar/>
            <WomensPage/>
            <MenPage/>
        </div>
    )
}

export {Main}