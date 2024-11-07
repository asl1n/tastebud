import React, { useState } from "react";
import Layout from "../Layout";
import RestaurantTable from './RestaurantTable';
import AddRestaurantModal from './AddRestaurantModal';

function Restaurants() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [restaurants, setRestaurants] = useState([
    { id: "1001", name: "Cafe Mocha", location: { lat: 27.7172, lng: 85.3240 } }
  ]);

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants((prevItems) => [...prevItems, newRestaurant]);
    handleModalClose();
  };

  return (
    <Layout>
      <div className="pt-2 pr-2 pl-6 bg-white flex flex-col min-h-screen rounded-lg shadow-lg">
        <RestaurantTable onAddButtonClick={handleAddButtonClick} restaurants={restaurants} />
        {isModalOpen && <AddRestaurantModal onClose={handleModalClose} onAddRestaurant={handleAddRestaurant} />}
      </div>
    </Layout>
  );
}

export default Restaurants;