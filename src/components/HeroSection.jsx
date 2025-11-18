import backgroundImage from '../assets/be-a-merchant-bg.png';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden py-24 px-6 md:px-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center md:text-left text-white space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h1>
        <p className="text-gray-200 text-base md:text-lg">
          We provide the best delivery service, ensuring your business and customers are always happy. Learn more about our trusted solutions today.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition">
            Become a Merchant
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition">
            Join with English Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
