import React, { useState } from 'react';
import UserTablePagination from './UserTablePagination';
import Searchbar from './Searchbar';
import UserTableBody from './UserTableBody';

const UserTable = () => {
    const [userItems, setUserItems] = useState([
        { id: "1001", created: "2023-10-01", name: "John Doe" },
        { id: "1002", created: "2023-10-05", name: "Jane Smith" },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredItems = userItems
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleDelete = (id) => {
        setUserItems(userItems.filter(item => item.id !== id));
    };

    return (
        <div className="flex mt-5 flex-col lg:flex-row w-full p-6">
            <div className="w-full lg:w-3/4 pr-0 lg:pr-6 mb-4 lg:mb-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                    <h1 className="self-stretch my-auto text-2xl font-bold text-black">Users</h1>
                    <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <Searchbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                    </div>
                </div>
                
                <div className="flex flex-col items-start">
                    <div className="w-full max-w-2xl">
                        <UserTableBody userItems={filteredItems} onDelete={handleDelete} />
                        <div className="flex justify-center mt-4">
                            <UserTablePagination
                                currentPage={currentPage}
                                totalItems={userItems.length}
                                itemsPerPage={itemsPerPage}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTable;