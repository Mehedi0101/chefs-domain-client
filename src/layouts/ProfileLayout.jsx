import { NavLink } from "react-router-dom";
import sideBarBg from "../assets/footer/kitchen-vector-background.png";

const ProfileLayout = () => {

    const asideBg = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${sideBarBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <div style={asideBg} className="flex flex-row md:flex-col p-5 md:p-10 lg:p-20 md:gap-10 gap-3 justify-between text-center font-bold text-white md:text-base text-xs">
            <NavLink to='/user-profile/'>USER INFO</NavLink>
            <NavLink to='/user-profile/my-recipes'>MY RECIPES</NavLink>
            <NavLink to='/user-profile/my-orders'>MY ORDERS</NavLink>
            <NavLink to='/user-profile/add-recipe'>ADD RECIPE</NavLink>
        </div>
    );
};

export default ProfileLayout;