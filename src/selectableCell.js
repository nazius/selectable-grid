import React from 'react';
import { createSelectable } from 'react-selectable';
import './App.css';


function selectableCell(props){
  const { rowIndex, columnIndex, selected} = props

  return (
    <div className={`cell ${selected ? 'selected' : ''}`}>
      Item {rowIndex},{columnIndex}
    </div>
  );
}

export default createSelectable(selectableCell);
