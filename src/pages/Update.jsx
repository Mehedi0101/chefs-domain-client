import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const Update = () => {
    document.title = 'UPDATE RECIPE';

    const { _id, name, image, category, price, origin, description, available_quantity, made_by_email } = useLoaderData().data;

    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleUpdate = e => {
        e.preventDefault();
        Swal.fire({
            title: `Are you sure want to update ${name}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const form = e.target;

                const name = form.name.value;
                const image = form.image.value;
                const category = form.category.value;
                const price = form.price.value;
                const origin = form.origin.value;
                const description = form.description.value;
                const available_quantity = form.quantity.value;
                const email = made_by_email;

                const updateFood = { name, image, category, price, origin, description, available_quantity, email };

                axios.patch(`https://chefs-domain-server.vercel.app/food-update/${_id}`, updateFood, { withCredentials: true })
                    .then(res => {
                        if (res.data.matchedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                `${name} has been updated successfully.`,
                                'success'
                            )
                            navigate(`/food-details/${_id}`)
                        }
                    })
                    .catch(() => {
                        Swal.fire(
                            'Update Failed!',
                            `You are not authorized to update this recipe`,
                            'error'
                        )
                    })
            }
        })
    }

    return (
        <div>
            <div className="pt-20 pb-10 flex flex-col justify-center items-center">
                <form onSubmit={handleUpdate} className="xl:p-14 lg:p-12 md:p-10 p-8 rounded text-sm md:text-base max-w-[90%] mx-auto">
                    <h2 className={`font-bold text-3xl md:text-4xl mb-10`}>Update: <span className="text-primary">{name}</span></h2>
                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="name" id="name" placeholder="Recipe Name" defaultValue={name} required />
                    <br />

                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="image" id="image" placeholder="Image URL" defaultValue={image} required />
                    <br />

                    <select className={`outline-none border-b-2 font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8 cursor-pointer bg-transparent`} defaultValue={category} name="category" id="category" required>
                        <option disabled>Select a Category</option>
                        <option>Main Course</option>
                        <option>Salad</option>
                        <option>Appetizer</option>
                        <option>Seafood</option>
                        <option>Breakfast</option>
                        <option>Beverage</option>
                        <option>Vegetarian</option>
                        <option>Dessert</option>
                    </select>
                    <br />

                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="number" name="quantity" id="quantity" min={1} placeholder="Quantity" defaultValue={available_quantity} required />
                    <br />

                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="price" id="price" placeholder="Price (USD)" defaultValue={price} required />
                    <br />

                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="madeByName" id="madeByName" placeholder="Chef Name" defaultValue={currentUser?.displayName} required disabled />
                    <br />

                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="origin" id="origin" placeholder="Food Origin" defaultValue={origin} required />
                    <br />

                    <div className={`border-2 font-medium py-1 max-w-full w-[400px] mb-8`}>
                        <textarea className={`outline-none px-2 py-1 w-full resize-none placeholder:font-medium bg-transparent`} name="description" id="description" cols="30" rows="10" placeholder="Short Description" defaultValue={description} required></textarea>
                    </div>

                    <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;