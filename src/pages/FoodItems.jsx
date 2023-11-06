import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/food-items/Item";
import { useLoaderData } from "react-router-dom";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import "./styles/food-items.css";

const FoodItems = () => {
    const count = useLoaderData()?.data?.count;
    const contentPerPage = 9;
    const numberOfPage = Math.ceil(count / contentPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [...Array(numberOfPage).keys()];
    const [menu, setMenu] = useState([]);

    console.log(menu);

    // useEffect(() => {
    //     axios.get("http://localhost:5000/foods")
    //         .then(res => setMenu(res.data));
    // }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/foods?page=${currentPage}&size=${contentPerPage}`)
        .then(res => setMenu(res.data))
    }, [currentPage, contentPerPage])

    return (
        <div className="pt-40 md:px-10 px-5">
            <h2 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold text-black lg:mb-16 mb-8">OUR MENU</h2>
            <div className="grid grid-cols-1 gap-10">
                {
                    menu?.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
            <div className="flex gap-5 items-center justify-center mt-14">
                <button className="p-2 hover:text-primary disabled:text-[#6969698c]" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0 ? true : false}><MdOutlineArrowBackIosNew /></button>
                {
                    pages.map(page => <button key={page} className={`${page === currentPage && 'selected'} px-4 py-2 border-2 text-primary font-bold border-primary rounded`} onClick={() => setCurrentPage(page)}>{page}</button>)
                }
                <button className="p-2 hover:text-primary disabled:text-[#6969698c]" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === numberOfPage - 1 ? true : false}><MdOutlineArrowForwardIos /></button>
            </div>
        </div>
    );
};

export default FoodItems;