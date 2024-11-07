import React from 'react';

const RestaurantTableBody = ({ restaurants }) => {
    return (
        <table className="w-full max-w-2xl bg-white shadow-md rounded-lg border border-gray-200">
            <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">ID</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Location</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Name</th>
                </tr>
            </thead>
            <tbody>
                {restaurants.map((restaurant) => (
                    <tr key={restaurant.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">{restaurant.id}</td>
                        <td className="py-3 px-4">Lat: {restaurant.location.lat}, Lng: {restaurant.location.lng}</td>
                        <td className="py-3 px-4">{restaurant.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RestaurantTableBody;