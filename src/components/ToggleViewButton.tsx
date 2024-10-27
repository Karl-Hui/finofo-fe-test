import React from 'react';

interface Props {
  viewType: 'list' | 'table';
  setViewType: React.Dispatch<React.SetStateAction<'list' | 'table'>>;
}

const ToggleViewButton: React.FC<Props> = ({ viewType, setViewType }) => {
  const toggleView = () => {
    setViewType(viewType === 'list' ? 'table' : 'list');
  };

  return (
    <button onClick={toggleView} className='toggle-view-button'>
      Switch to {viewType === 'list' ? 'Table' : 'List'} View
    </button>
  );
};

export default ToggleViewButton;
