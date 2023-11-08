import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import reviewBg from "../../assets/banner/review-background.jpg";
import user1 from "../../assets/review/review2.jpg";
import user2 from "../../assets/review/review1.jpg";
import user3 from "../../assets/review/review3.jpg";

const Reviews = () => {
    return (
        <div className="hero min-h-[60vh] md:mt-20 mt-10" style={{ backgroundImage: `url(${reviewBg})` }}>
            <div className="hero-overlay bg-opacity-60 bg-[#1C1C1C]"></div>
            <div className="hero-content text-center text-neutral-content">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper sm:max-w-lg max-w-[90vw]"
                >
                    <SwiperSlide className='text-white'>
                        <img className='mx-auto rounded-full w-20' src={user1} alt="" />
                        <p className='text-base sm:text-lg font-medium my-5'>I stumbled upon Chef&apos;s Domain and it&apos;s been a delightful journey. The website is user-friendly, and the food options are both tantalizing and diverse.</p>
                        <h3 className='font-light text-sm sm:text-base'>Isabella Hall</h3>
                    </SwiperSlide>

                    <SwiperSlide className='text-white w-full'>
                        <img className='mx-auto rounded-full w-20' src={user2} alt="" />
                        <p className='text-base sm:text-lg font-medium my-5'>Chef&apos;s Domain is my culinary sanctuary. Navigating the website is a breeze, and the variety of food options is astounding.</p>
                        <h3 className='font-light text-sm sm:text-base'>Christopher Wilson</h3>
                    </SwiperSlide>

                    <SwiperSlide className='text-white w-full'>
                        <img className='mx-auto rounded-full w-20' src={user3} alt="" />
                        <p className='text-base sm:text-lg font-medium my-5'>Chef&apos;s Domain is the pinnacle of online food experiences. The elegant selection of dishes and the seamless ordering process make it a true gem.</p>
                        <h3 className='font-light text-sm sm:text-base'>Grace Taylor</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;