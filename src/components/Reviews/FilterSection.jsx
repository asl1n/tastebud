import React from 'react';
import RatingFilter from './RatingFilter';
import SortByFilter from './SortByFilter';
import DateFilter from './DateFilter';

function FilterSection({ 
  sortOrder, 
  setSortOrder, 
  selectedRating, 
  setSelectedRating, 
  fromDate, 
  setFromDate, 
  toDate, 
  setToDate 
}) {
  return (
    <section className="flex flex-col w-[30%] max-md:w-full max-md:order-first max-md:mb-4">
      <div className="flex justify-end  mb-2">
        <button className="flex items-center gap-2 text-red-600">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6ff590cfc382541cba73382cff03029cc2154dc426fbd3362be3090433834a0?placeholderIfAbsent=true&apiKey=ca89be398a334777b23d4571f98eea67"
            alt="Filter icon"
            className="w-4 h-4"
          />
          <span className="text-sm font-semibold">Filter</span>
        </button>
      </div>

      <div className="flex flex-col gap-3 p-3 rounded-md border border-gray-300">
        <RatingFilter selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
        <SortByFilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <DateFilter 
          fromDate={fromDate} 
          setFromDate={setFromDate} 
          toDate={toDate} 
          setToDate={setToDate} 
        />
      </div>
    </section>
  );
}

export default FilterSection;