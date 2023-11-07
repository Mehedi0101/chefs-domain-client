import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Order = () => {
    document.title = 'Update';

    const { _id, name, image, category, price, made_by_name, origin, serving_size, ingredients, preparation_method, storage_instructions, description, available_quantity } = useLoaderData().data;

    const { currentUser } = useContext(AuthContext);


    const handleOrderConfirm = e => {
        e.preventDefault();
        // Swal.fire({
        //     title: `Order Confirmation for 2 Qty. of ${name}?`,
        //     text: "Number",
        //     icon: 'info',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Confirm'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         const form = e.target;

        //         const name = form.name.value;
        //         const image = form.image.value;
        //         const brand = form.brand.value;
        //         const type = form.type.value;
        //         const price = form.price.value;
        //         const rating = form.rating.value;

        //         const updatedProduct = { name, image, brand, type, price, rating };

        //         fetch(`https://drive-elegance-serverside.vercel.app/products-id/${userId}`, {
        //             method: 'PUT',
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(updatedProduct)
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if (data.matchedCount > 0) {
        //                     Swal.fire(
        //                         'Success!',
        //                         `${name} has been ordered successfully.`,
        //                         'success'
        //                     )
        //                 }
        //             })
        //     }
        // })
    }

    return (
        <div>
            <div className="lg:pt-40 pt-28 flex flex-col justify-center items-center md:px-10 px-5">
                <form onSubmit={handleOrderConfirm} className="rounded text-sm md:text-base max-w-full mx-auto">
                    <h2 className={`font-bold text-3xl md:text-4xl mb-10`}>Place Your Order</h2>

                    <label className="font-extrabold" htmlFor="foodName">Item:</label>
                    <br />
                    <input className={`outline-none border-b-2  font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 mt-1 bg-transparent`} type="text" name="foodName" id="foodName" placeholder="Food Item" defaultValue={name} required disabled />
                    <br />

                    <label className="font-extrabold mb-1" htmlFor="price">Price:</label>
                    <br />
                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 mt-1 bg-transparent`} type="text" name="price" id="price" placeholder="Price" defaultValue={price} required disabled />
                    <br />

                    <label className="font-extrabold mb-1" htmlFor="quantity">Quantity:</label>
                    <br />
                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 mt-1 bg-transparent`} type="number" min={1} defaultValue={1} name="quantity" id="quantity" placeholder="Order Amount" required />
                    <br />

                    <label className="font-extrabold mb-1" htmlFor="customerName">Name:</label>
                    <br />
                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 mt-1 bg-transparent`} type="text" name="customerName" id="customerName" placeholder="Customer Name" defaultValue={currentUser?.displayName} required disabled />
                    <br />

                    <label className="font-extrabold mb-1" htmlFor="customerEmail">Email:</label>
                    <br />
                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 mt-1 bg-transparent`} type="email" name="customerEmail" id="customerEmail" placeholder="Email" defaultValue={currentUser?.email} required disabled />
                    <br />

                    <label className="font-extrabold mb-1" htmlFor="date">Date:</label>
                    <br />
                    <input className={`outline-none border-b-2 font-medium placeholder:font-medium py-1 max-w-full w-[400px] mb-8 mt-1 bg-transparent cursor-text`} type="date" name="date" id="date" required />
                    <br />

                    <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default Order;