import React from 'react';

const AddFoodButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
        Add
        </button>
    );
};

export default AddFoodButton;