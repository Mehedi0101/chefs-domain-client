import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/food-items/Item";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import "./styles/food-items.css";
import { Box, Skeleton } from "@mui/material";

const FoodItems = () => {
    document.title = "OUR MENU";
    const [count, setCount] = useState(0);
    const contentPerPage = 9;
    const numberOfPage = Math.ceil(count / contentPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [...Array(numberOfPage).keys()];
    const [menu, setMenu] = useState([]);
    const [search, setSearch] = useState("");
    const [loadingData, setLoadingData] = useState(true);

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        setCurrentPage(0);
        setSearch(form.search.value);
    }

    useEffect(() => {
        setLoadingData(true);
        axios.get(`https://chefs-domain-server.vercel.app/foods?search=${search}&page=${currentPage}&size=${contentPerPage}`)
            .then(res => {
                setCount(res.data.count);
                setMenu(res.data.result);
                window.scrollTo(0, 0);
                setLoadingData(false);
            })
    }, [currentPage, contentPerPage, search])

    return (
        <div className="pt-40 md:px-10 px-5 min-h-[80vh] max-w-screen-2xl mx-auto">
            <h2 className="md:text-4xl text-3xl text-center font-bold text-black mb-8">Our Menu</h2>

            <form onSubmit={handleSearch} className="flex w-full max-w-md mx-auto md:mb-16 mb-8">
                <input placeholder="Search here..." className="w-full outline-none border border-dark3 px-3 py-2" type="text" name="search" id="search" />
                <button className="bg-primary px-5 font-bold text-white border-primary">Search</button>
            </form>


            {
                loadingData
                    ?
                    <Box sx={{ width: screen }
                    } >
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                    </Box>
                    :
                    menu.length === 0
                        ?
                        <h3 className="md:text-3xl text-2xl font-bold text-center min-h-[60vh] flex justify-center items-center">NO MATCH FOUND</h3>
                        :
                        <>
                            <div className="grid grid-cols-1 gap-10">
                                {
                                    menu?.map(item => <Item key={item._id} item={item}></Item>)
                                }
                            </div>
                            <div className={`flex gap-2 md:gap-5 items-center justify-center mt-14 ${count <= 9 ? 'hidden' : ''}`}>
                                <button className="md:p-2 hover:text-primary disabled:text-[#6969698c]" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0 ? true : false}><MdOutlineArrowBackIosNew /></button>
                                {
                                    pages.map(page => <button key={page} className={`${page === currentPage && 'selected'} px-2 py-1 text-sm md:text-base md:px-4 md:py-2 border-2 text-primary font-bold border-primary rounded`} onClick={() => setCurrentPage(page)}>{page}</button>)
                                }
                                <button className="md:p-2 hover:text-primary disabled:text-[#6969698c]" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === numberOfPage - 1 ? true : false}><MdOutlineArrowForwardIos /></button>
                            </div>
                        </>
            }
        </div >
    );
};

export default FoodItems;