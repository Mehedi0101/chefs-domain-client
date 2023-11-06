import Proptypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';

const Item = ({ item }) => {
    const { name, image, category, price, available_quantity } = item;
    return (
        <div className='flex flex-col md:flex-row items-center md:gap-10 gap-3 justify-between md:w-full w-[320px] max-w-full md:max-w-full mx-auto md:mx-0'>
            <div className='flex-[1]'>
                <img className='w-full' src={image} alt="" />
            </div>

            <div className='lg:flex-[2] flex-[1] mr-auto'>
                <h2 className='text-2xl font-bold mb-3'>{name}</h2>
                <div className='text-sm text-white font-bold mb-2 bg-primary w-fit px-2 py-1 rounded-full'>{category}</div>

                <div className='flex items-center gap-2 text-[#2b2b2bc7] mb-1'><span className='text-[#000000c7] text-base font-bold'>Price: </span><div className='flex items-center'><BiDollar className='text-2xl' /><span className='text-xl font-extrabold'>{price}</span></div></div>

                <div className='text-[#2b2b2bc7] flex items-center gap-2 md:mx-0 mx-auto'><span className='text-base font-bold text-[#000000c7]'>Available: </span><div><span className='text-lg font-extrabold text-primary'>{available_quantity}</span> qty.</div></div>
            </div>

            <button className='px-5 py-2 bg-primary text-white active:scale-95 transition-transform font-medium mb-3 w-full md:w-fit lg:mr-20'>DETAILS</button>
        </div>
    );
};

Item.propTypes = {
    item: Proptypes.object.isRequired
}

export default Item;