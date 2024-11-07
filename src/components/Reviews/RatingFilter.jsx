import React from 'react';

const ratings = [5, 4, 3, 2, 1];

function RatingFilter({ selectedRating, setSelectedRating }) {
  return (
    <div className="flex overflow-hidden flex-col w-full font-medium">
      <h4 className="text-sm text-black">Rating</h4>
      <div className="flex overflow-hidden gap-2 items-start py-0.5 mt-2 w-full text-center text-zinc-500">
        {ratings.map((rating) => (
          <button 
            key={rating} 
            onClick={() => setSelectedRating(rating === selectedRating ? null : rating)}
            className={`flex justify-center items-center h-6 rounded-xl border border-solid 
              ${rating === selectedRating ? 'text-red-600 border-red-600' : 'border-stone-900 border-opacity-10'} 
              text-[10px] sm:text-[12px]`}
          >
            <div className="self-stretch py-1 px-1.5 sm:px-2 my-auto">{`${rating} Star`}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RatingFilter;