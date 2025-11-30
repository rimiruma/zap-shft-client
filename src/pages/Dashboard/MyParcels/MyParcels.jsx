import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaEdit, FaMapMarkerAlt, FaMars, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
// import { Link } from 'react-router';

const MyParcels = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
            return res.data;
        }
    })
    console.log( 'parcels', parcels);
    

    const handleParcelDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res. data);
                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch();
                            
                            Swal.fire(
                                'Deleted!',
                                'Your parcel request has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        });

    }

    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data.url);
        window.location.assign(res.data.url); // Redirect to Stripe Checkout
        
    }

    return (
        <div>
            <h1>All My Parcels: {parcels.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>
                                    {
                                        parcel.paymentStatus == 'paid' ? <span className='text-green-600 font-bold'>Paid</span>
                                         :
                                        <button type='submit' onClick={() => handlePayment(parcel)} className='btn btn-primary btn-sm text-black'>Pay</button>
                                    }
                                </td>
                                <td>{parcel.DeliveryStatus}</td>
                                <td className='gap-5 flex'>
                                    {/* Add action buttons or links here */}
                                    <button className='btn btn-square'>
                                        <FaMars></FaMars>
                                    </button>
                                    <button className='btn btn-square'>
                                        <FaEdit></FaEdit>
                                    </button>
                                    <button onClick={() => handleParcelDelete(parcel._id)} className='btn btn-square'>
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;