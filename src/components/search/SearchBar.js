// src/components/search/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ data, onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
