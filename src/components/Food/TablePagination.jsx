import React from 'react';

function TablePagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex items-center justify-center w-full mt-4">
            <div className="flex items-center justify-between w-full max-w-xs bg-gray-100 px-3 py-2 rounded-md text-xs font-semibold text-gray-700">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`px-2 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-red-500 hover:underline'}`}
                >
                    &lt;
                </button>
                <span className="text-base sm:text-sm md:text-xs">
                    {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-2 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-red-500 hover:underline'}`}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default TablePagination;