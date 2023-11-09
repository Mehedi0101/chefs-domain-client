import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const Order = () => {
    document.title = 'ORDER CONFIRMATION';

    const { _id, name, image, price, available_quantity, made_by_email } = useLoaderData().data;

    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleOrderConfirm = e => {
        e.preventDefault();
        const form = e.target;

        const customerName = form.customerName.value;
        const customerEmail = form.customerEmail.value;
        const foodId = _id;
        const foodItem = form.foodName.value;
        const photo = image;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const date = new Date();

        if (made_by_email === currentUser.email) {
            Swal.fire(
                'Order Placement Failed!',
                `Cannot Order Your Own Recipe`,
                'error'
            )
        }
        else if (parseInt(quantity) > parseInt(available_quantity) || parseInt(available_quantity) <= 0) {
            Swal.fire(
                'Order Placement Failed!',
                `Sorry, We currently don't have enough ${foodItem} in stock`,
                'error'
            )
        }
        else {
            Swal.fire({
                title: `Confirm Your Order`,
                text: `Order Confirmation for ${quantity} Qty. of ${foodItem}`,
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.isConfirmed) {
                    const orderData = { customerName, customerEmail, foodId, foodItem, photo, price, quantity, date };

                    axios.post('https://chefs-domain-server.vercel.app/order', orderData)
                        .then(res => {
                            if (res?.data?.insertedId || res?.data?.modifiedCount > 0) {
                                Swal.fire(
                                    'Success!',
                                    `Successfully Ordered ${quantity} Qty. of ${foodItem}.`,
                                    'success'
                                )
                                axios.patch(`https://chefs-domain-server.vercel.app/foods/${_id}`, { quantity })
                                    .then(() => {
                                        navigate('/user-profile/my-orders');
                                    })
                            }
                        })
                }
            })
        }
    }

    return (
        <div>
            <div className="lg:pt-40 pt-28 flex flex-col justify-center items-center md:px-10 px-5 max-w-screen-2xl mx-auto">
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
                    <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default Order;