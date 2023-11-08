import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../food-items/Item";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs"

const PopularPicks = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/popular')
            .then(res => setPopularItems(res.data))
    }, [])

    return (
        <div className="md:px-10 px-5">
            <h2 className="md:text-4xl text-3xl text-center font-bold text-black mb-8 md:mt-20 mt-10">Popular Picks</h2>
            <div className="grid grid-cols-1 gap-10">
                {
                    popularItems?.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
            <Link to='/food-items' className="flex text-primary justify-center items-center mt-10"><button className="font-bold active:scale-95 transition-all">SEE ALL</button><BsArrowRightShort className="text-3xl" /></Link>
        </div>
    );
};

export default PopularPicks;