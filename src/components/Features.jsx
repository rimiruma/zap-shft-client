import image1 from '../assets/safe-delivery.png';
import image2 from '../assets/live-tracking.png';
// import image3 from '../assets/customer-support.png';

const Features = () => {
  return (
    <section className="py-24 bg-gray-200">
      <div className="container mx-auto space-y-16">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fadeIn">
            Our Key Features
          </h1>
          <p className="text-gray-600 text-lg md:text-xl animate-fadeIn delay-200">
            Experience the best delivery service with safety, transparency, and support at every step.
          </p>
        </div>

        {/* Feature 1 */}
        <div className='w-[1100px] mx-auto'>
          <div className="flex flex-col md:flex-row gap-8 items-center animate-slideInLeft">
            <div className=" flex justify-center md:justify-start">
              <img
                src={image2}
                alt="Live Parcel Tracking"
                className="w-44 h-44 md:w-52 md:h-52 object-contain rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                Live Parcel Tracking
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Stay updated in real-time on the status of your parcel tracking. Receive push notifications, emails, and transparent delivery updates at every step.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 animate-slideInLeft">
            <div className="flex justify-center mt-10 md:justify-start">
              <img
                src={image1}
                alt="100% Safe Delivery"
                className="w-44 h-44 md:w-52 md:h-52 object-contain rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                100% Safe Delivery
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                We ensure your parcel is handled with care, and it arrives safely and securely to the destination. Our reliable process gives peace of mind for deliveries every time.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 animate-slideInLeft">
            <div className="flex mt-10 justify-center md:justify-start">
              <img
                src={image2}
                alt="24/7 Customer Support"
                className="w-44 h-44 md:w-52 md:h-52 object-contain rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                24/7 Customer Support
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Our dedicated support team is available around the clock to assist you with any queries, updates, or delivery concerns—anytime you need us.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
