import { useLoaderData } from "react-router-dom";
import Blog from "../components/all-blogs/Blog";

const AllBlogs = () => {
    document.title = "BLOG";

    const allBlogs = useLoaderData().data;
    console.log(allBlogs);
    return (
        <div className="lg:pt-40 pt-28 md:px-10 px-5">
            <h2 className="md:text-4xl text-3xl text-center font-bold text-black mb-8">Blogs</h2>
            <div className="mt-10 font-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
                {
                    allBlogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;