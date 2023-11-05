import { Outlet } from "react-router-dom";
import Navbar from "../components/main-layout/Navbar";
import Footer from "../components/main-layout/Footer";

const MainLayout = () => {
    return (
        <div className="font-primary max-w-screen-2xl mx-auto">
            <div className="relative">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;