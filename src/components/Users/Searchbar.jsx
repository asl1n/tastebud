import React from 'react';

const Searchbar = ({ searchTerm, onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
    );
};

export default Searchbar;