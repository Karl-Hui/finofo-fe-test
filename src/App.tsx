import React, { useState } from 'react';
import useFetchFruits from './hooks/useFetchFruits';
import FruitList from './components/FruitList';
import FruitTable from './components/FruitTable';
import GroupBySelect from './components/GroupBySelect';
import ToggleViewButton from './components/ToggleViewButton';
import Jar from './components/Jar';
import SearchBar from './components/SearchBar';
import './styles/App.css';

const App: React.FC = () => {
  const { fruits, loading, error } = useFetchFruits();
  const [groupBy, setGroupBy] = useState<string>('None');
  const [viewType, setViewType] = useState<'list' | 'table'>('list');
  const [query, setQuery] = useState('');

  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <div className='loading'>Loading...</div>;

  if (error) {
    return <div className='error'>Error: {error}</div>;
  }

  return (
    <div className='app'>
      <div className='left-section'>
        <div className='filter-container'>
          <GroupBySelect groupBy={groupBy} setGroupBy={setGroupBy} />
          <SearchBar query={query} setQuery={setQuery} />
          <ToggleViewButton viewType={viewType} setViewType={setViewType} />
        </div>
        {viewType === 'list' ? (
          <FruitList fruits={filteredFruits} groupBy={groupBy} />
        ) : (
          <FruitTable fruits={filteredFruits} groupBy={groupBy} />
        )}
      </div>
      <div className='right-section'>
        <Jar />
      </div>
    </div>
  );
};

export default App;
