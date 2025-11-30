import { Link } from "react-router";


const PaymentCancelled = () => {
    return (
        <div>
          <h2 className="text-4xl text-red-800">Payment Cancelled: Please try again!</h2>
          <Link to="/dashboard/my-parcels">
          <button className="btn bg-red-700 p-5 px-10 rounded-full text-white mt-4">Go to My Parcels</button>
          </Link>  
        </div>
    );
};

export default PaymentCancelled;