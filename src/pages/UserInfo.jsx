import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const UserInfo = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="p-10 flex flex-col md:items-start justify-around md:px-10 px-5 items-center text-center md:text-left gap-5">
            <img className="rounded-full" src={currentUser.photoURL} alt="" />
            <div className="">
                <span className="font-extrabold">User Name: </span>
                <span>{currentUser.displayName}</span>
            </div>
            <div className="">
                <span className="font-extrabold">Email: </span>
                <span>{currentUser.email}</span>
            </div>
        </div>
    );
};

export default UserInfo;