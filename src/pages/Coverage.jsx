import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null)
    // console.log(serviceCenters);

    const handleSearch = e => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            const coord = [district.latitude, district.longitude];
            console.log(district, coord);
            // Go to the location
            mapRef.current.flyTo(coord, 14);

        }
    }

    return (
        <div>
            <h2 className="text-2xl text-center py-10">We are available in 64 districts</h2>
            <div>
                <form onSubmit={handleSearch} className="w-full max-w-md mx-auto mb-6">
                    <div className="relative">
                        {/* Input box */}
                        <input
                            type="search"
                            name="location"
                            placeholder="Search district..."
                            className="w-full border border-gray-300 rounded-full py-3 pl-12 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        {/* Search Icon */}
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <svg className="h-5 w-5 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                        </span>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="border w-full h-[600px]">
                <MapContainer ref={mapRef} className="h-[600px]" center={position} zoom={8} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenters.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude
                        ]}>
                            <Popup>
                                <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;