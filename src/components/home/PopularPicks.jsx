import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../food-items/Item";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { Box, Skeleton } from "@mui/material";

const PopularPicks = () => {
    const [popularItems, setPopularItems] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        axios.get('https://chefs-domain-server.vercel.app/popular')
            .then(res => {
                setPopularItems(res.data);
                setLoadingData(false);
            })
    }, [])

    return (
        <div className="md:px-10 px-5 max-w-screen-2xl mx-auto">
            <h2 className="md:text-4xl text-3xl text-center font-bold text-black mb-8 md:mt-20 mt-10">Popular Picks</h2>
            {
                loadingData
                    ?
                    <Box sx={{ width: screen }}>
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                    </Box>
                    :
                    <>
                        <div className="grid grid-cols-1 gap-10">
                            {
                                popularItems?.map(item => <Item key={item._id} item={item}></Item>)
                            }
                        </div>
                        <Link to='/food-items' className="flex text-primary justify-center items-center mt-10"><button className="font-bold active:scale-95 transition-all">SEE ALL</button><BsArrowRightShort className="text-3xl" /></Link>
                    </>

            }
            {/* <div className="grid grid-cols-1 gap-10">
                {
                    popularItems?.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div> */}
            {/* <Link to='/food-items' className="flex text-primary justify-center items-center mt-10"><button className="font-bold active:scale-95 transition-all">SEE ALL</button><BsArrowRightShort className="text-3xl" /></Link> */}
        </div>
    );
};

export default PopularPicks;