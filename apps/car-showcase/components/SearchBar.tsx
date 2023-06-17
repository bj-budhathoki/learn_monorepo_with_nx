'use client';
import React, { useState } from 'react';
import SearchCompany from './SearchCompany';

const SearchBar = () => {
  const [company, setCompany] = useState('');
  const onSearch = () => {
    console.log('');
  };
  return (
    <form className="searchbar" onSubmit={onSearch}>
      <div className="searchbar__item">
        <SearchCompany company={company} setCompany={setCompany} />
      </div>
    </form>
  );
};

export default SearchBar;
