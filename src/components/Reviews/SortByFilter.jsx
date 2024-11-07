import React from 'react';

const sortOptions = ['Latest to Oldest', 'Oldest to Latest'];

function SortByFilter({ sortOrder, setSortOrder }) {
  return (
    <div className="flex overflow-hidden flex-col mt-2.5 w-full font-medium">
      <h4 className="text-sm text-black">Sort By</h4>
      <div className="flex overflow-hidden gap-2.5 items-start py-0.5 mt-2.5 w-full text-xs tracking-normal leading-none text-center">
        {sortOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => setSortOrder(option)}
            className={`flex overflow-hidden justify-center items-center h-6 rounded-xl border border-solid ${
              sortOrder === option ? 'text-red-600 border-red-600' : 'border-stone-900 border-opacity-10 text-zinc-500'
            }`}
          >
            <div className="self-stretch py-1 px-1.5 sm:px-2 my-auto">{option}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SortByFilter;