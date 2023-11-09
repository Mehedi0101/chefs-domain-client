import { Outlet } from "react-router-dom";
import ProfileLayout from "../layouts/ProfileLayout";

const MyProfile = () => {
    document.title = "MY PROFILE";
    return (
        <div className="lg:pt-40 pt-28 max-w-screen-2xl mx-auto">
            <h2 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold text-black mb-8">My Profile</h2>
            <div className="flex flex-col md:flex-row lg:gap-20 gap-10 items-start justify-between">
                <ProfileLayout></ProfileLayout>
                <div className="md:w-3/4 w-full">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;