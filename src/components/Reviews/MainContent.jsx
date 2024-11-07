import React, { useState } from 'react';
import Header from './Header';
import ReviewList from './ReviewList';
import FilterSection from './FilterSection';

function MainContent() {
  const [sortOrder, setSortOrder] = useState('Latest to Oldest');
  const [fromDate, setFromDate] = useState(null); 
  const [toDate, setToDate] = useState(null); 
  const [selectedRating, setSelectedRating] = useState(null); 

  return (
    <main className="flex flex-col mt-5 w-[95%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col px-6 pt-6 pb-24 mx-auto w-full bg-white rounded-xl max-md:px-5 max-md:pb-24 max-md:mt-6 max-md:max-w-full">
        <Header />
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <ReviewList 
              sortOrder={sortOrder} 
              fromDate={fromDate} 
              toDate={toDate} 
              selectedRating={selectedRating} 
            />
            <FilterSection 
              sortOrder={sortOrder} 
              setSortOrder={setSortOrder}
              fromDate={fromDate} 
              setFromDate={setFromDate} 
              toDate={toDate} 
              setToDate={setToDate}
              selectedRating={selectedRating} 
              setSelectedRating={setSelectedRating} 
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;