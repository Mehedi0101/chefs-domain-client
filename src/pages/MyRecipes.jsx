import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";

const MyRecipes = () => {
    document.title = "MY RECIPES";
    const [addedItems, setAddedItems] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/food-by-chef?chefEmail=${currentUser?.email}`)
            .then(res => setAddedItems(res.data))
    }, [currentUser])

    const handleUpdate = id => {
        navigate(`/update/${id}`);
    }

    return (
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-10 w-full md:px-10 px-5">
            {
                addedItems?.map(item =>
                    <div key={item._id} className="card w-[288px] max-w-full shadow-xl mx-auto">
                        <figure><img src={item?.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item?.name}</h2>
                            <p><span className="font-extrabold">Price: </span><span className="font-bold text-primary">$ {item?.price}</span></p>
                            <p><span className="font-extrabold">Available: </span><span className="font-bold">{item?.available_quantity}</span> qty.</p>
                            <div className="card-actions">
                                <button onClick={() => handleUpdate(item._id)} className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3 flex items-center gap-1 justify-center'><BsFillPencilFill className="text-lg" />Update</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyRecipes;