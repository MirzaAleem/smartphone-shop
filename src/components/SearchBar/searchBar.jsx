import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center space-x-4 mb-1">
      <label htmlFor="search" className="text-gray-700">
        Search:
      </label>
      <input
        type="text"
        id="search"
        placeholder="Enter search term..."
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
