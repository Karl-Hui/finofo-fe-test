import React from 'react';

interface Props {
  groupBy: string;
  setGroupBy: React.Dispatch<React.SetStateAction<string>>;
}

const GroupBySelect: React.FC<Props> = ({ groupBy, setGroupBy }) => {
  return (
    <div className='group-by-select'>
      <label className='group-by-label' htmlFor='groupBy'>
        Group by:{' '}
      </label>
      <select
        id='groupBy'
        value={groupBy}
        onChange={(e) => setGroupBy(e.target.value)}
      >
        <option value='None'>None</option>
        <option value='Family'>Family</option>
        <option value='Order'>Order</option>
        <option value='Genus'>Genus</option>
      </select>
    </div>
  );
};

export default GroupBySelect;
