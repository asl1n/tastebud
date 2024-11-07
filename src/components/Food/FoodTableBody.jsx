import React, { useState } from 'react';

const FoodTableBody = ({ foodItems, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFoodId, setSelectedFoodId] = useState(null);

    const handleDeleteClick = (id) => {
        setSelectedFoodId(id);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        onDelete(selectedFoodId);
        setIsModalOpen(false);
        setSelectedFoodId(null);
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
        setSelectedFoodId(null);
    };

    return (
        <>
            <table className="w-full max-w-2xl bg-white shadow-md rounded-lg border border-gray-200">
                <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">ID</th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">Name</th>
                        <th className="text-left py-3 px-4 text-gray-600 font-medium">Price (NPR)</th>
                        <th className="py-3 px-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {foodItems.length > 0 ? (
                        foodItems.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4">{item.id}</td>
                                <td className="py-3 px-4">{item.name}</td>
                                <td className="py-3 px-4">{item.price}</td>
                                <td className="py-3 px-4 text-right">
                                    <button
                                        onClick={() => handleDeleteClick(item.id)}
                                        className="text-red-500 hover:text-red-700 text-lg font-bold"
                                    >
                                        &times;
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-6 px-4 text-center text-gray-500 font-semibold">
                                No food items found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Are you sure?</h2>
                        <p className="text-gray-600 mb-6">Do you really want to delete this food item?</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Yes
                            </button>
                            <button
                                onClick={cancelDelete}
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FoodTableBody;