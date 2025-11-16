import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import amazon from "../../assets/brands/amazon.png";
import amazon_vector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import star_people from "../../assets/brands/start_people.png";

const brandLogos = [
    amazon,
    amazon_vector,
    casio,
    moonstar,
    randstad,
    star,
    star_people,
];

const Brand = () => {
    return (
        <div className="py-10">
            {/* Title Section */}
            <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">
                We’ve helped thousands of sales teams
            </h1>

            {/* Slider */}
            <Swiper
                loop={true}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0:   { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024:{ slidesPerView: 5 },
                }}
            >
                {brandLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                            <img
                                src={logo}
                                alt="Brand Logo"
                                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-all"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Brand;
