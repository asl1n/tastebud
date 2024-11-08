import React, { useState } from 'react';
import styles from './FoodTableBody.module.css';

const FoodTableBody = ({ foodItems, onDelete, onView }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);

    const togglePopup = (food) => {
        setSelectedFood(food);
        setIsPopupOpen((prev) => !prev);
    };

    const handleView = (food) => {
        onView(food);
        setIsPopupOpen(false); 
    };

    const handleDelete = (id) => {
        onDelete(id);
        setIsPopupOpen(false); 
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
                                <td className="py-3 px-4 text-right relative">
                                    <button
                                        onClick={() => togglePopup(item)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        •••
                                    </button>
                                    {isPopupOpen && selectedFood?.id === item.id && (
                                        <div
                                            className={`${styles.popup} ${
                                                window.innerWidth < 768 ? styles.mobilePopup : ''
                                            }`}
                                        >
                                            <button
                                                onClick={() => handleView(item)}
                                                className={styles.popupButton}
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className={`${styles.popupButton} ${styles.deleteButton}`}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-6 px-4 text-center text-gray-500 font-semibold">
                                No food items. Press "Add" to add.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default FoodTableBody;