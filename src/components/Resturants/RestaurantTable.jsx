import React, { useState } from 'react';
import Searchbar from './Searchbar';
import AddRestaurantButton from './AddRestaurantButton';
import TablePagination from './TablePagination';
import RestaurantTableBody from './RestaurantTableBody';

const RestaurantTable = ({ onAddButtonClick, restaurants }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredItems = restaurants
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="flex mt-5 flex-col lg:flex-row w-full p-6">
            <div className="w-full lg:w-3/4 pr-0 lg:pr-6 mb-4 lg:mb-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                    <h1 className="self-stretch my-auto text-2xl font-bold text-black">Restaurants</h1>
                    <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <Searchbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                        <AddRestaurantButton onClick={onAddButtonClick} />
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <RestaurantTableBody restaurants={filteredItems} />
                    <div className="flex justify-center mt-4">
                        <TablePagination
                            currentPage={currentPage}
                            totalItems={restaurants.length}
                            itemsPerPage={itemsPerPage}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantTable;