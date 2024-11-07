import React, { useState } from "react";
import Layout from "../Layout";
import FoodTable from './FoodTable';
import AddFoodModal from './AddFoodModal';

function Foods() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foodItems, setFoodItems] = useState([{ id: "FI-7923", name: "MoMo", price: 220 }]);

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddFood = (newFood) => {
    setFoodItems((prevItems) => [...prevItems, newFood]);
    handleModalClose();
  };

  return (
    <Layout>
      <div className="pt-2 pr-2 pl-6 bg-white flex flex-col min-h-screen rounded-lg shadow-lg">
        <FoodTable onAddButtonClick={handleAddButtonClick} foodItems={foodItems} />
        {isModalOpen && <AddFoodModal onClose={handleModalClose} onAddFood={handleAddFood} />}
      </div>
    </Layout>
  );
}

export default Foods;