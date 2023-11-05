import logo from "../../assets/logo/chefs-domain-logo.png";

const Navbar = () => {
    const links = <>
    <li>HOME</li>
    <li>FOOD ITEMS</li>
    <li>BLOG</li>
    </>

    return (
        <>
            {/* large device */}
            <div className="bg-black flex justify-between items-center text-white px-10 py-2 text-sm font-medium">
                <div className="flex-[1] text-left">
                    <img className="w-40 max-w-[33%]" src={logo} alt="" />
                </div>

                <div className="flex-[1] flex gap-10 justify-center list-none">
                    {
                        links
                    }
                </div>

                <div className="flex-[1] text-right">
                    <button className="px-5 py-2 bg-primary">LOGIN</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;