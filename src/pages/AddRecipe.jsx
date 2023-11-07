import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const AddRecipe = () => {

    document.title = 'Add Product';
    const { currentUser } = useContext(AuthContext);

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const price = form.price.value;
        const made_by_name = form.madeByName.value;
        const made_by_email = form.madeByEmail.value;
        const origin = form.origin.value;
        const description = form.description.value;
        const available_quantity = form.quantity.value;
        const orders_count = "0";

        const newProduct = { name, image, category, price, made_by_name, made_by_email, origin, description, available_quantity, orders_count }

        console.log(newProduct);

        axios.post('http://localhost:5000/foods', newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: `${name} successfully added`,
                    })
                    form.reset();
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong!',
                        text: `Please try again later`,
                    })
                }
            })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleAddProduct} className="xl:p-14 lg:p-12 md:p-10 p-8 rounded text-sm md:text-base max-w-[90%] mx-auto">
                <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="name" id="name" placeholder="Recipe Name" required />
                <br />

                <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="image" id="image" placeholder="Image URL" required />
                <br />

                <select className={`outline-none border-b-2 font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8 cursor-pointer bg-transparent`} defaultValue={"Select a Category"} name="category" id="category" required>
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

                <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="quantity" id="quantity" placeholder="Quantity" required />
                <br />

                <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="price" id="price" placeholder="Price (USD)" required />
                <br />

                <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="madeByName" id="madeByName" placeholder="Chef Name" defaultValue={currentUser?.displayName} required disabled />
                <br />

                <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="email" name="madeByEmail" id="madeByEmail" placeholder="Chef Email" defaultValue={currentUser?.email} required disabled />
                <br />

                <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent`} type="text" name="origin" id="origin" placeholder="Food Origin" required />
                <br />

                <div className={`border-2 font-medium py-1 max-w-full w-[400px] mb-8`}>
                    <textarea className={`outline-none px-2 py-1 w-full resize-none placeholder:font-medium bg-transparent`} name="description" id="description" cols="30" rows="10" placeholder="Short Description" required></textarea>
                </div>

                <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Add Product</button>
            </form>
        </div>
    );
};

export default AddRecipe;