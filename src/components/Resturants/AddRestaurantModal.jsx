import React, { useState } from 'react';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const AddRestaurantModal = ({ onClose, onAddRestaurant, google }) => {
    const [restaurant, setRestaurant] = useState({ id: '', name: '', location: { lat: null, lng: null } });

    const handleMapClick = (_, __, clickEvent) => {
        const { latLng } = clickEvent;
        setRestaurant({
            ...restaurant,
            location: { lat: latLng.lat(), lng: latLng.lng() }
        });
    };

    const handleAdd = () => {
        if (!restaurant.id || !restaurant.name || !restaurant.location.lat || !restaurant.location.lng) {
            alert("Please complete all fields and select a location.");
            return;
        }
        onAddRestaurant(restaurant);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Restaurant</h2>
                <input
                    type="text"
                    placeholder="ID"
                    value={restaurant.id}
                    onChange={(e) => setRestaurant({ ...restaurant, id: e.target.value })}
                    className="w-full mb-4 p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={restaurant.name}
                    onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })}
                    className="w-full mb-4 p-2 border rounded"
                />
                {/* <div className="h-64 mb-4">
                    <Map
                        google={google}
                        zoom={14}
                        onClick={handleMapClick}
                        initialCenter={{ lat: 27.7172, lng: 85.3240 }}
                        containerStyle={{ position: 'relative', width: '100%', height: '100%' }}
                    >
                        {restaurant.location.lat && (
                            <Marker position={restaurant.location} />
                        )}
                    </Map>
                </div> */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

// export default GoogleApiWrapper({
//     apiKey: "YOUR_GOOGLE_MAPS_API_KEY" // Replace with your Google Maps API Key
// })(AddRestaurantModal);

export default AddRestaurantModal;
