import React from 'react';
import './App.css';

function selectableCell(props){
  const { rowIndex, columnIndex } = props

  return (
    <div className='cell'>
      Item {rowIndex},{columnIndex}
    </div>
  );
}

export default selectableCell;
