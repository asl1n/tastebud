import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateFilter({ fromDate, setFromDate, toDate, setToDate }) {
  return (
    <div className="flex flex-col font-medium">
      <h4 className="text-sm text-black mb-3">Date</h4>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col w-full">
          <label className="text-sm text-black mb-1">From</label>
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            className="w-full px-3 py-2 text-sm border border-solid border-gray-300 rounded-md focus:outline-none"
            isClearable
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-sm text-black mb-1">To</label>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            className="w-full px-3 py-2 text-sm border border-solid border-gray-300 rounded-md focus:outline-none"
            isClearable
          />
        </div>
      </div>
    </div>
  );
}

export default DateFilter;