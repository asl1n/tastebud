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
        { id: 7925, name: 'Thukpa', price: 250 },
        { id: 7926, name: 'Biryani', price: 300 },
        { id: 7927, name: 'Pasta', price: 200 },
        { id: 7928, name: 'Burger', price: 150 },
        { id: 7929, name: 'Pizza', price: 350 },
        { id: 7930, name: 'Sushi', price: 400 },
        { id: 7931, name: 'Sandwich', price: 120 },
        { id: 7932, name: 'Salad', price: 100 },
        { id: 7933, name: 'Spring Roll', price: 80 },
        { id: 7934, name: 'Fried Rice', price: 180 },
        { id: 7935, name: 'Tacos', price: 200 },
        { id: 7936, name: 'Dumplings', price: 250 },
        { id: 7937, name: 'Noodles', price: 150 },
        { id: 7938, name: 'Ramen', price: 320 },
        { id: 7939, name: 'Pancakes', price: 180 },
        { id: 7940, name: 'Steak', price: 500 },
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
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

    const handleDelete = (id) => {
        setFoodItems(foodItems.filter(item => item.id !== id));
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
                        <FoodTableBody foodItems={filteredItems} onDelete={handleDelete} />
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
            {showModal && (
                <AddFoodModal
                    newFood={newFood}
                    setNewFood={setNewFood}
                    onClose={() => setShowModal(false)}
                    onAddFood={handleAddFood}
                />
            )}
        </div>
    );
};

export default FoodTable;