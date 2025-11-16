import { FaQuoteLeft } from "react-icons/fa";


const ReviewsCart = ({review}) => {
    const {userName, review: testimonial, user_photoURL} = review;
    return (
        <div className="max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200">
            <FaQuoteLeft className="text-primary text-2xl mb-4"></FaQuoteLeft>
            <p className="mb-4">{testimonial}</p>
            <div className="border-t border-dashed border-gray-300 my-4"></div>
            <div className="flex items-center gap-6">
                <div className="">
                    <img className="w-10 h-10 rounded-full mx-auto mb-4 object-cover" src={user_photoURL} alt="" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">{userName}</h3>
                    <p className="text-sm">Senior Product Designer</p>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewsCart;