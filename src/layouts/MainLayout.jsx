import { Outlet } from "react-router-dom";
import Navbar from "../components/main-layout/Navbar";
import Footer from "../components/main-layout/Footer";
import ScrollToTop from "../utils/scrollToTop";

const MainLayout = () => {
    return (
        <div className="font-primary max-w-screen-2xl mx-auto">
            <ScrollToTop />
            <div className="relative">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[60vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;