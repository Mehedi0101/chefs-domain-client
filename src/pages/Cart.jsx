import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { BsTrash3 } from "react-icons/bs";
import Swal from "sweetalert2";

const Cart = () => {
    document.title = "MY ORDERS";
    const [orderedItems, setOrderedItems] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/order?email=${currentUser?.email}`)
            .then(res => setOrderedItems(res.data))
    }, [currentUser])

    const handleCancel = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/order/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Success!',
                                'Order Cancelled Successfully',
                                'success'
                            )
                            setOrderedItems(orderedItems.filter(item => item._id !== id));
                        }
                    });
            }
        })
    }

    return (
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-10 w-full md:px-10 px-5">
            {
                orderedItems?.map(item =>
                    <div key={item._id} className="card w-[288px] max-w-full shadow-xl mx-auto">
                        <figure><img src={item.photo} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item?.foodItem}</h2>
                            <p><span className="font-extrabold">Price: </span><span className="font-bold text-primary">$ {item?.price}</span></p>
                            <p><span className="font-extrabold">Quantity: </span><span className="font-bold">{item?.quantity}</span> qty.</p>
                            <div className="card-actions">
                                <button onClick={() => handleCancel(item._id)} className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3 flex items-center gap-1 justify-center'><BsTrash3 className="text-lg" />CANCEL ORDER</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Cart;