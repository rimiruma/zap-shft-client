import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowRight, FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router";

import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full bg-white py-10">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
      >
        {/* Slide 1 */}
        <div className="relative w-full">
          <img src={bannerImg1} className="w-full" />

          {/* TEXT OVERLAY */}
          <div className="absolute left-5 md:left-20 bottom-10 space-y-4 max-w-lg">
            <p className="text-gray-700 text-lg bg-white bg-opacity-70 p-3 rounded-md">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/track"
                className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-green-600 transition"
              >
                Track Your Parcel <FaArrowRight />
              </Link>

              <Link
                to="/rider"
                className="flex items-center gap-2 border px-5 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Be A Rider <FaMotorcycle />
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full">
          <img src={bannerImg2} className="w-full" />

          <div className="absolute left-5 md:left-20 bottom-10 space-y-4 max-w-lg">
            <p className="text-gray-700 text-lg bg-white bg-opacity-70 p-3 rounded-md">
              Your parcel is picked up and delivered quickly with safety and
              precision — a seamless doorstep delivery experience.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/track"
                className="flex items-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Track Now <FaArrowRight />
              </Link>

              <Link
                to="/rider"
                className="flex items-center gap-2 border px-5 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Join As Rider <FaMotorcycle />
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full">
          <img src={bannerImg3} className="w-full" />

          <div className="absolute left-5 md:left-20 bottom-10 space-y-4 max-w-lg">
            <p className="text-gray-700 text-lg bg-white bg-opacity-70 p-3 rounded-md">
              Send documents, parcels, or heavy packages — our courier service
              ensures reliability and fast delivery.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/track"
                className="flex items-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
              >
                Track Parcel <FaArrowRight />
              </Link>

              <Link
                to="/rider"
                className="flex items-center gap-2 border px-5 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Become Rider <FaMotorcycle />
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
