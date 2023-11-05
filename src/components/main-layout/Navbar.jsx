import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo/chefs-domain-logo.png";
import { Link, useLocation } from "react-router-dom";
import navbarBg from "../../assets/footer/kitchen-vector-background.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const location = useLocation();

    const links = <>
        <li>HOME</li>
        <li>FOOD ITEMS</li>
        <li>BLOG</li>
    </>

    const navbg = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${navbarBg})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center' 
    }

    return (
        <>
            {/* large device */}
            <div className="hidden absolute lg:flex justify-between items-center text-white px-10 py-2 text-sm font-semibold z-10 w-full max-w-screen-2xl" style={(location.pathname) !== '/' ? navbg : {}}>
                <div className="flex-[1] text-left">
                    <Link to='/'><img className="w-40 max-w-[33%]" src={logo} alt="" /></Link>
                </div>

                <div className="flex-[1] flex gap-10 justify-center list-none">
                    {
                        links
                    }
                </div>

                <div className="flex-[1] text-right">
                    <Link to='/login'><button className="px-5 py-2 font-bold bg-white text-primary hover:bg-primary hover:text-white active:scale-95 transition-all">SIGN IN</button></Link>
                </div>
            </div>

            {/* medium device */}
            <div className={`absolute z-10 flex gap-2 items-center justify-between lg:hidden md:px-10 px-5 py-2 text-white w-full`} style={(location.pathname) !== '/' ? navbg : {}}>
                <div className="flex sm:gap-5 gap-2 items-center">
                    <FiMenu onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer" />
                    <Link to='/'><img className="h-14 max-w-full cursor-pointer" src={logo} alt="" /></Link>
                </div>
                <div className={`${showMenu ? 'flex' : 'hidden'} flex-col absolute top-16 bg-[#000000BB] px-8 py-5 rounded space-y-3 z-10 text-white list-none`}>
                    {
                        links
                    }
                </div>
                <div className="flex items-center gap-10">
                    <Link to='/login'><button className="px-5 py-2 font-bold bg-white text-sm text-primary hover:bg-primary hover:text-white active:scale-95 transition-all">SIGN IN</button></Link>
                </div >
            </div >
        </>
    );
};

export default Navbar;