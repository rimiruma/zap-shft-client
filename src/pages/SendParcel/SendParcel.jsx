import { useForm } from "react-hook-form";


const SendParcel = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSendParcel = (data) => {
        console.log(data);


    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Send A Parcel</h2>
            <form className=" p-4 max-w-6xl mx-auto" onSubmit={handleSubmit(handleSendParcel)}>
                {/* document */}
                <div className="text-center">
                    <label className="label mr-4">
                        <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                        Document</label>
                    <label className="label">
                        <input type="radio" {...register('parcelType')} value="non-document" className="radio" defaultChecked />
                        non-Document</label>
                </div>
                {/* parcel info: name, weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8 text-black">
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (kg)</label>
                        <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight" />
                    </fieldset>
                </div>
                {/* two column */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8">
                    {/* sender info */}
                    <div>
                        <h2 className="text-2xl font-semibold py-5">Sender Details</h2>
                        {/* sender name */}
                        <fieldset className="fieldset">
                            <label className="label">Sender Name</label>
                            <input type="text" {...register('SenderName')} className="input w-full" placeholder="Sender Name" />
                        </fieldset>
                        {/* sender name */}
                        <fieldset className="fieldset">
                            <label className="label">Sender Email</label>
                            <input type="text" {...register('SenderEmail')} className="input w-full" placeholder="Sender Email" />
                        </fieldset>
                        {/* sender adders */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Sender Adders</label>
                            <input type="text" {...register('senderAdders')} className="input w-full" placeholder="Sender Adders" />
                        </fieldset>
                        {/* Sender Contact No */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Sender Contact No</label>
                            <input type="text" {...register('senderContactNo')} className="input w-full" placeholder="Sender Contact No" />
                        </fieldset>
                        {/* Your Region */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Your Region</label>
                            <input type="text" {...register('yourRegion')} className="input w-full" placeholder="Your Region" />
                        </fieldset>
                        {/* Sender Pickup Wire house */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Sender Pickup Wire house</label>
                            <input type="text" {...register('senderPickupWireHouse')} className="input w-full" placeholder="Sender Pickup Wire house" />
                        </fieldset>
                        {/* Pickup Instruction */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Pickup Instruction</label>
                            <textarea className="textarea" {...register('pickupInstruction')} placeholder="Pickup Instruction"></textarea>
                        </fieldset>
                    </div>
                    {/* receiver info */}
                    <div>
                        <h2 className="text-2xl font-semibold py-5">Receiver Details</h2>
                        {/* receiver name */}
                        <fieldset className="fieldset">
                            <label className="label">Receiver Name</label>
                            <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />
                        </fieldset>
                        {/* receiver Email */}
                        <fieldset className="fieldset">
                            <label className="label">Receiver Email</label>
                            <input type="text" {...register('receiverEmail')} className="input w-full" placeholder="Receiver Email" />
                        </fieldset>
                        {/* receiver region */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver Regions</legend>
                            <select defaultValue="Pick a browser" className="select">
                                <option disabled={true}>Pick a Regions</option>
                                <option>Chrome</option>
                                <option>FireFox</option>
                                <option>Safari</option>
                            </select>
                            <span className="label">Optional</span>
                        </fieldset>
                        {/* receiver Pickup Wire house */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Receiver Pickup Wire house</label>
                            <input type="text" {...register('receiverPickupWireHouse')} className="input w-full" placeholder="Receiver Pickup Wire house" />
                        </fieldset>
                        {/* receiver adders */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Receiver Adders</label>
                            <input type="text" {...register('receiverAdders')} className="input w-full" placeholder="Receiver Adders" />
                        </fieldset>
                        {/* receiver Contact No */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Receiver Contact No</label>
                            <input type="text" {...register('receiverContactNo')} className="input w-full" placeholder="Receiver Contact No" />
                        </fieldset>
                        {/* receiver Region */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Receiver Region</label>
                            <input type="text" {...register('receiverRegion')} className="input w-full" placeholder="Receiver Region" />
                        </fieldset>

                        {/* receiver Instruction */}
                        <fieldset className="fieldset">
                            <label className="label mt-2">Receiver Instruction</label>
                            <textarea className="textarea" {...register('ReceiverInstruction')} placeholder="receiver Instruction"></textarea>
                        </fieldset>
                    </div>
                </div>
                <div></div>
                <div className="text-center mt-10">
                    <input className="btn p-2 bg-red-600 text-white rounded-4xl px-40" type="submit"
                        value="Send-Parcel" />
                </div>

            </form>
        </div>
    );
};

export default SendParcel;