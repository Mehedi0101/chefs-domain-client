import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../food-items/Item";
import { Link } from "react-router-dom";

const PopularPicks = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/popular')
            .then(res => setPopularItems(res.data))
    }, [])

    return (
        <div className="md:px-10 px-5">
            <h2 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold text-black mb-8 md:mt-20 mt-10">Popular Picks</h2>
            <div className="grid grid-cols-1 gap-10">
                {
                    popularItems?.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
            <Link to='/food-items'><button className="px-5 py-2 font-bold bg-primary text-white active:scale-95 transition-all mt-10 block mx-auto">SEE ALL</button></Link>
        </div>
    );
};

export default PopularPicks;