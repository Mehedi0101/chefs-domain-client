import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import banner1 from '../../assets/Banner/club-sandwich.jpg';
import banner2 from '../../assets/Banner/top-view-table.jpg';
import banner3 from '../../assets/Banner/traditional-indian-soup-lentils.jpg';
import { useNavigate } from 'react-router-dom';

const Slider = () => {

    const navigate = useNavigate();

    const handleViewMenu = () => {
        navigate('/');
    }
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-60 bg-[#1C1C1C]"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h5 className='text-xs tracking-widest font-light mb-2'>TASTY AND CRUNCHY</h5>
                                <h1 className="mb-5 text-6xl font-bold">Savor Culinary Excellence</h1>
                                <p className="mb-5">Indulge in a world of flavors as we craft dishes that tell stories on every plate. Join us for an unforgettable dining experience.</p>
                                <button onClick={handleViewMenu} className="px-5 py-2 font-semibold text-sm bg-primary text-white hover:bg-white hover:text-primary active:scale-95 transition-all">VIEW MENU</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay bg-opacity-60 bg-[#1C1C1C]"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h5 className='text-xs tracking-widest font-light mb-2'>ROBUST AND DELICATE</h5>
                                <h1 className="mb-5 text-6xl font-bold">Discover Unforgettable Moments</h1>
                                <p className="mb-5">Our restaurant is where memories are made, and every meal is an opportunity to create something beautiful. Come share those moments with us.</p>
                                <button onClick={handleViewMenu} className="px-5 py-2 font-semibold text-sm bg-primary text-white hover:bg-white hover:text-primary active:scale-95 transition-all">VIEW MENU</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="hero-overlay bg-opacity-60 bg-[#1C1C1C]"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h5 className='text-xs tracking-widest font-light mb-2'>LUSH AND AROMATIC</h5>
                                <h1 className="mb-5 text-6xl font-bold">Elevate Your Senses</h1>
                                <p className="mb-5">At <span className='font-bold'>CHEF&apos;S DOMAIN</span> , we believe in the power of taste and presentation. Immerse yourself in an extraordinary culinary journey that awakens your senses.</p>
                                <button onClick={handleViewMenu} className="px-5 py-2 font-semibold text-sm bg-primary text-white hover:bg-white hover:text-primary active:scale-95 transition-all">VIEW MENU</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;