import React from 'react';

const FilterSelection = ({ options, onSelect }) => {
  const handleSelect = (event) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="filter" className="text-gray-700">
        Filter:
      </label>
      <select
        id="filter"
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
        onChange={handleSelect}
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelection;
