import { Outlet } from "react-router-dom";
import Navbar from "../components/main-layout/Navbar";

const MainLayout = () => {
    return (
        <div className="font-primary max-w-screen-2xl mx-auto">
            <div className="relative">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;