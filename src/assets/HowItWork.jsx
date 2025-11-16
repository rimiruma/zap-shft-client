import { FaTruckPickup } from "react-icons/fa";

const HowItWork = () => {
  return (
    <div className="py-14 bg-gray-100">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          How it Works
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaTruckPickup className="text-4xl text-green-700 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Booking Pick & Drop
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaTruckPickup className="text-4xl text-green-700 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Cash On Delivery
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaTruckPickup className="text-4xl text-green-700 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Delivery Hub
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaTruckPickup className="text-4xl text-green-700 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Booking SME & Corporate
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWork;
