import React from 'react';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <input
      type='text'
      placeholder='Search fruits...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className='search-bar'
    />
  );
};

export default SearchBar;
