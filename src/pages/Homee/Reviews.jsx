import { use } from "react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCart from "./ReviewsCart";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);

    return (
        <div className="py-16">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">
                    What Our Clients Say
                </h1>
                <p className="text-gray-500 mt-2 text-lg max-w-xl mx-auto">
                    Real experiences from our valued customers who trusted our service.
                </p>
            </div>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <ReviewsCart review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
