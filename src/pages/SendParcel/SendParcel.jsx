import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {

    const { register, control, handleSubmit } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const serviceCenters = useLoaderData();

    const regions = [...new Set(serviceCenters.map(c => c.region))];

    const senderRegion = useWatch({ control, name: "senderRegion" });
    const receiverRegion = useWatch({ control, name: "receiverRegion" });

    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        return regionDistricts.map(d => d.district);
    };

    const handleSendParcel = async (data) => {
        const isDocument = data.parcelType === "document";

        const isSameDistrict = data.senderDistrict === data.receiverDistrict;

        const parcelWeight = parseFloat(data.parcelWeight);
        let cost = 0;

        // Parcel cost calculation
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        } else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = extraWeight * 40 + (isSameDistrict ? 0 : 40);
                cost = minCharge + extraCharge;
            }
        }
        console.log('cost', cost);
        

        data.cost = cost;

        Swal.fire({
            title: "Agree with the Cost?",
            text: `You will be charged ${cost} taka!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm and Continue Payment!"
        }).then((result) => {
            if (result.isConfirmed) {
                // save the parcel info to the database
                axiosSecure.post('/parcels', data)
                    .then(res => {
                        console.log('after saving parcel', res.data);
                        if (res.data.insertedId) {
                            navigate('/dashboard/my-parcels')
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Parcel has created, please Pay",
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }

                    })
            }
        });
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Send A Parcel</h2>

            <form className="p-4 max-w-6xl mx-auto" onSubmit={handleSubmit(handleSendParcel)}>

                {/* Parcel Type */}
                <div className="text-center">
                    <label className="label mr-4">
                        <input type="radio" {...register("parcelType")} value="document" className="radio" defaultChecked />
                        Document
                    </label>

                    <label className="label">
                        <input type="radio" {...register("parcelType")} value="non-document" className="radio" />
                        Non-Document
                    </label>
                </div>

                {/* Parcel Name + Weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8 text-black">
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" {...register("parcelName")} className="input w-full" placeholder="Parcel Name" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (kg)</label>
                        <input type="number" step="0.1" {...register("parcelWeight")} className="input w-full" placeholder="Parcel Weight" />
                    </fieldset>
                </div>

                {/* Sender & Receiver */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8">

                    {/* Sender */}
                    <div>
                        <h2 className="text-2xl font-semibold py-5">Sender Details</h2>

                        <fieldset className="fieldset">
                            <label className="label">Sender Name</label>
                            <input type="text" {...register("senderName")} defaultValue={user?.displayName} className="input w-full" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Sender Email</label>
                            <input type="email" {...register("senderEmail")} defaultValue={user?.email} className="input w-full" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Sender Region</label>
                            <select {...register("senderRegion")} className="select">
                                <option disabled>Pick a Region</option>
                                {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                            </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Sender District</label>
                            <select {...register("senderDistrict")} className="select">
                                <option disabled>Pick a District</option>
                                {districtsByRegion(senderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                            </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Sender Address</label>
                            <input type="text" {...register("senderAddress")} className="input w-full" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Sender Contact No</label>
                            <input type="text" {...register("senderContactNo")} className="input w-full" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Pickup Instruction</label>
                            <textarea {...register("pickupInstruction")} className="textarea" />
                        </fieldset>
                    </div>

                    {/* Receiver */}
                    <div>
                        <h2 className="text-2xl font-semibold py-5">Receiver Details</h2>

                        <fieldset className="fieldset">
                            <label className="label">Receiver Name</label>
                            <input type="text" {...register("receiverName")} className="input w-full" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Receiver Email</label>
                            <input type="email" {...register("receiverEmail")} className="input w-full" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Receiver Region</label>
                            <select {...register("receiverRegion")} className="select">
                                <option disabled>Pick a Region</option>
                                {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                            </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Receiver District</label>
                            <select {...register("receiverDistrict")} className="select">
                                <option disabled>Pick a District</option>
                                {districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                            </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Receiver Address</label>
                            <input type="text" {...register("receiverAddress")} className="input w-full" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Receiver Contact No</label>
                            <input type="text" {...register("receiverContactNo")} className="input w-full" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Receiver Instruction</label>
                            <textarea {...register("receiverInstruction")} className="textarea" />
                        </fieldset>
                    </div>
                </div>

                {/* Submit */}
                <div className="text-center mt-10">
                    <input className="btn p-2 bg-red-600 text-white rounded-4xl px-40"
                        type="submit"
                        value="Send Parcel"
                    />
                </div>

            </form>
        </div>
    );
};

export default SendParcel;
