import { BiArrowBack } from "react-icons/bi";
import { useLoaderData, useNavigate } from "react-router-dom";

const FoodDetails = () => {
    const { _id, name, image, category, price, made_by_name, origin, serving_size, ingredients, preparation_method, storage_instructions, description, available_quantity } = useLoaderData().data;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(`/food-items`);
    }

    const handleOrder = () => {
        navigate(`/order/${_id}`);
    }

    return (
        <div className="md:px-10 px-5">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold lg:pt-40 pt-28 lg:mb-10 mb-5 text-center">{name}</h2>

            <div className="">
                <div className="">
                    <img className="w-[500px] max-w-full mx-auto mb-8" src={image} alt="" />

                    <div className="mb-2">
                        <span className="font-bold mr-2 text-lg">Type: </span>
                        <span className="px-2 py-1 rounded-full bg-primary text-white font-bold text-sm">{category === "Select a Category" ? "N/A" : category}</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <span className="font-bold mr-2 text-lg">Serving: </span>
                        <span className="text-xl font-extrabold mr-1">{serving_size} </span>person
                    </div>

                    <div className="flex items-center mb-2">
                        <span className="font-bold mr-2 text-lg">Remaining: </span>
                        <span className="text-xl font-extrabold text-primary mr-1">{available_quantity || "N/A"} </span>qty.
                    </div>

                    <div className="flex items-center mb-8">
                        <span className="font-bold mr-2 text-lg">Price: </span>
                        <span className="text-2xl font-extrabold text-primary mr-1">{price}$ </span>
                    </div>


                    <div className="mb-2">
                        <span className="mr-2 text-lg font-bold">Ingredients: </span>
                        <div className="flex flex-wrap">
                            {ingredients?.map((ingredient, idx) => <span className="mr-4 font-medium" key={idx}>{ingredient}</span>) || "N/A"}
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className="mr-2 text-lg font-bold">Origin: </span>
                        <span className="font-medium">{origin || "N/A"}</span>
                    </div>

                    <div className="mb-8">
                        <span className="mr-2 text-lg font-bold">Made By: </span>
                        <span className="font-medium">{made_by_name}</span>
                    </div>

                    <div className="mb-2">
                        <span className="mr-2 text-lg font-bold">Preparation Method: </span>
                        <span className="font-medium">{preparation_method || "N/A"}</span>
                    </div>

                    <div className="mb-8">
                        <span className="mr-2 text-lg font-bold">Storage Instructions: </span>
                        <span className="font-medium">{storage_instructions || "N/A"}</span>
                    </div>

                    <p className="font-medium">{description}</p>

                    <div className="flex items-center justify-center gap-10 mt-10 flex-wrap-reverse">
                        <button onClick={handleGoBack} className="text-primary flex items-center gap-2 text-lg font-medium active:scale-95"><BiArrowBack />Go Back</button>
                        <button onClick={handleOrder} className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform font-medium'>ORDER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;