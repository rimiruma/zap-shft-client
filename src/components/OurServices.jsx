import { FaTruck, FaBoxOpen, FaHandshake, FaUndoAlt } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className="py-20 bg-[#03342E]">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Our Services
        </h2>
        <p className="text-gray-200 text-center mt-3 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">

          {/* Card 1 */}
          <div className="bg-white cursor-pointer hover:bg-[#D4F26B] p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaTruck className="text-5xl text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Express & Standard Delivery
            </h3>
            <p className="text-gray-600 text-center mt-3 text-sm">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.
              Express delivery in Dhaka within 4–6 hours from pick-up to drop-off.
            </p>
          </div>

          {/* Card 2 - Highlighted Middle Card */}
          <div className="bg-white hover:bg-[#D4F26B] cursor-pointer p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaTruck className="text-5xl text-gray-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 text-center">
              Nationwide Delivery
            </h3>
            <p className="text-gray-800 text-center mt-3 text-sm">
              We deliver products nationwide with home delivery in every district,
              ensuring customers receive their products within 48–72 hours.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white hover:bg-[#D4F26B] cursor-pointer p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaBoxOpen className="text-5xl text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Fulfillment Solution
            </h3>
            <p className="text-gray-600 text-center mt-3 text-sm">
              Customized services with inventory management support, online order processing,
              packaging, and after-sales support.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white hover:bg-[#D4F26B] cursor-pointer p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaHandshake className="text-5xl text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Cash on Home Delivery
            </h3>
            <p className="text-gray-600 text-center mt-3 text-sm">
              100% guaranteed cash-on-delivery service anywhere in Bangladesh
              with safe product handling.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white hover:bg-[#D4F26B] cursor-pointer p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaHandshake className="text-5xl text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Corporate Service / Contract In Logistics
            </h3>
            <p className="text-gray-600 text-center mt-3 text-sm">
              Customized corporate logistics services including warehouse and
              inventory management.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white hover:bg-[#D4F26B] cursor-pointer p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaUndoAlt className="text-5xl text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Parcel Return
            </h3>
            <p className="text-gray-600 text-center mt-3 text-sm">
              Reverse logistics solutions allowing customers to return or exchange
              products with ease.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurServices;
