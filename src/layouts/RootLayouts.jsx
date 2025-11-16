import { Outlet } from "react-router";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar";


const RootLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>  
        </div>
    );
};

export default RootLayouts;