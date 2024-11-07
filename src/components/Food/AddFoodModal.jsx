import React from 'react';

const AddFoodModal = ({ newFood, setNewFood, onClose, onAddFood }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md mx-4">
                <h2 className="text-lg font-semibold mb-4">Add New Food</h2>
                <input
                    type="number"
                    placeholder="ID (Numeric Only)"
                    value={newFood.id}
                    onChange={(e) => setNewFood({ ...newFood, id: e.target.value })}
                    className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={newFood.name}
                    onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                    className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    type="number"
                    placeholder="Price (NPR)"
                    value={newFood.price}
                    onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onAddFood}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Add Food
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddFoodModal;