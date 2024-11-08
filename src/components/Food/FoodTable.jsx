import React, { useState } from 'react';
import TablePagination from './TablePagination';
import AddFoodButton from './AddFoodButton';
import AddFoodModal from './AddFoodModal';
import Searchbar from './Searchbar';
import FoodTableBody from './FoodTableBody';

const FoodTable = () => {
    const [foodItems, setFoodItems] = useState([
        { id: 7923, name: 'MoMo', price: 220 },
        { id: 7924, name: 'Chowmein', price: 180 },
        { id: 7925, name: 'Pizza', price: 600 },
        { id: 7926, name: 'Burger', price: 250 },
        { id: 7927, name: 'Sandwich', price: 150 },
        { id: 7928, name: 'Fried Rice', price: 200 },
        { id: 7929, name: 'Pasta', price: 300 },
        { id: 7930, name: 'Sushi', price: 800 },
        { id: 7931, name: 'Spring Roll', price: 120 },
        { id: 7932, name: 'Salad', price: 100 },
        { id: 7933, name: 'Dumplings', price: 250 },
        { id: 7934, name: 'Hot Dog', price: 180 },
        { id: 7935, name: 'Steak', price: 1000 },
    ]);    

    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [foodToDelete, setFoodToDelete] = useState(null);
    const [newFood, setNewFood] = useState({ id: '', name: '', price: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredItems = foodItems
        .sort((a, b) => a.id - b.id)
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleAddFood = () => {
        if (!newFood.id || isNaN(newFood.id) || !newFood.name || isNaN(newFood.price)) {
            alert("Please enter a numeric ID and price, and fill out all fields.");
            return;
        }
        setFoodItems([...foodItems, { ...newFood, id: Number(newFood.id) }]);
        setNewFood({ id: '', name: '', price: '' });
        setShowModal(false);
    };

    const openDeleteModal = (id) => {
        setIsDeleteModalOpen(true);
        setFoodToDelete(id);
    };

    const confirmDelete = () => {
        setFoodItems(foodItems.filter(item => item.id !== foodToDelete));
        setIsDeleteModalOpen(false);
        setFoodToDelete(null);
    };

    const cancelDelete = () => {
        setIsDeleteModalOpen(false);
        setFoodToDelete(null);
    };

    return (
        <div className="flex mt-5 flex-col lg:flex-row w-full p-6">
            <div className="w-full lg:w-3/4 pr-0 lg:pr-6 mb-4 lg:mb-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                    <h1 className="self-stretch my-auto text-2xl font-bold text-black">Food Items</h1>
                    <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <Searchbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                        <AddFoodButton onClick={() => setShowModal(true)} />
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <div className="w-full max-w-2xl">
                        <FoodTableBody 
                            foodItems={filteredItems} 
                            onDelete={openDeleteModal} 
                            onView={(food) => alert(`Viewing details for: ${food.name} (ID: ${food.id})`)} 
                        />
                        <div className="flex justify-center mt-4">
                            <TablePagination
                                currentPage={currentPage}
                                totalItems={foodItems.length}
                                itemsPerPage={itemsPerPage}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for adding new food items */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <AddFoodModal
                        newFood={newFood}
                        setNewFood={setNewFood}
                        onClose={() => setShowModal(false)}
                        onAddFood={handleAddFood}
                    />
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto sm:max-w-xs md:max-w-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Are you sure?</h2>
                        <p className="text-gray-600 mb-6">Do you really want to delete this item?</p>
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
        </div>
    );
};

export default FoodTable;