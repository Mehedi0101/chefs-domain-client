import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import './styles/Navbar.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import defaultUser from "../../assets/logo/default-user.png";
import logo from "../../assets/logo/chefs-domain-logo.png";
import navbarBg from "../../assets/footer/kitchen-vector-background.png";
import toast from "react-hot-toast";

const Navbar = () => {
    const { currentUser, logoutUser } = useContext(AuthContext);
    const [showUser, setShowUser] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const location = useLocation();

    const handleLogout = () => {
        const toastId = toast.loading('Signing out...');
        logoutUser()
            .then(() => {
                toast.success('Signed out successfully', { id: toastId });
            })
            .catch(() => {
                toast.error('Something went wrong', { id: toastId });
            })
    }


    const links = <>
        <NavLink onClick={() => setShowUser(false)} to='/'>HOME</NavLink>
        <NavLink onClick={() => setShowUser(false)} to='/food-items'>FOOD ITEMS</NavLink>
        <NavLink onClick={() => setShowUser(false)} to='/blog'>BLOG</NavLink>
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
                    {
                        currentUser
                            ?
                            <div className="flex items-center relative">
                                <img onClick={() => { setShowUser(!showUser) }} className="w-12 h-12 object-cover rounded-full cursor-pointer border hover:border-2 border-primary ml-auto" src={currentUser.photoURL || defaultUser} alt="" />
                                <div className={`absolute top-[60px] right-0 flex flex-col gap-3 text-white bg-[#000000BB] p-8 rounded z-10 ${!showUser && 'hidden'}`}>
                                    <p onClick={() => { setShowUser(false) }} className="mb-3 flex gap-2"><span className="font-bold">USER: </span>{currentUser.displayName}</p>
                                    <p onClick={() => { setShowUser(false) }} className="mb-3 flex gap-2"><span className="font-bold">EMAIL: </span>{currentUser.email}</p>
                                    <div className="flex gap-2">
                                        <Link to='/user-profile' onClick={() => setShowUser(false)}><button className="px-5 py-2 font-bold bg-white text-primary active:scale-95 transition-all">PROFILE</button></Link>

                                        <Link to='/login'><button onClick={() => { handleLogout(); setShowUser(false) }} className="px-5 py-2 font-bold bg-primary text-white active:scale-95 transition-all">SIGN OUT</button></Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/login'><button className="px-5 py-2 font-bold bg-white text-primary active:scale-95 transition-all">SIGN IN</button></Link>
                    }
                </div>
            </div>

            {/* medium device */}
            <div className={`absolute z-10 flex gap-2 items-center justify-between lg:hidden md:px-10 px-5 py-2 text-white w-full`} style={(location.pathname) !== '/' ? navbg : {}}>
                <div className="flex sm:gap-5 gap-2 items-center">
                    <FiMenu onClick={() => { setShowMenu(!showMenu); setShowUser(false) }} className="text-2xl cursor-pointer" />
                    <Link to='/'><img className="h-14 max-w-full cursor-pointer" src={logo} alt="" /></Link>
                </div>
                <div className={`${showMenu ? 'flex' : 'hidden'} flex-col absolute top-16 bg-[#000000BB] px-8 py-5 rounded space-y-3 z-10 text-white list-none text-sm`}>
                    {
                        links
                    }
                </div>
                <div className="flex items-center gap-10 text-sm">
                    {
                        currentUser
                            ?
                            <div className="flex items-center">
                                <img onClick={() => { setShowUser(!showUser); setShowMenu(false) }} className="w-10 h-10 object-cover rounded-full cursor-pointer border hover:border-2 border-primary" src={currentUser.photoURL || defaultUser} alt="" />
                                <div className={`flex absolute top-[60px] right-5 md:right-10 flex-col md:gap-3 gap-1 text-white bg-[#000000BB] sm:p-8 py-8 px-4 rounded z-10 ${!showUser && 'hidden'} max-w-full ml-5`}>
                                    <p onClick={() => { setShowUser(false) }} className="mb-3 flex gap-2"><span className="font-bold">USER: </span>{currentUser.displayName}</p>
                                    <p onClick={() => { setShowUser(false) }} className="mb-3 hidden gap-2 min-[260px]:flex"><span className="font-bold">EMAIL: </span>{currentUser.email}</p>
                                    <div className="flex gap-2 flex-wrap">
                                        <Link onClick={() => setShowUser(false)} className="w-full block" to='/user-profile'><button className="px-5 py-2 font-bold bg-white text-primary active:scale-95 transition-all w-full block">PROFILE</button></Link>

                                        <Link className="w-full block" to='/login'><button onClick={() => { handleLogout(); setShowUser(false) }} className="px-5 py-2 font-bold bg-primary text-white active:scale-95 transition-all w-full block">SIGN OUT</button></Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/login'><button className="px-5 py-2 font-bold bg-white text-sm text-primary active:scale-95 transition-all">SIGN IN</button></Link>
                    }
                </div >
            </div >
        </>
    );
};

export default Navbar;