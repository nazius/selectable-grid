import React from 'react';
import './App.css';
import SelectableCell from './selectableCell'
import { FixedSizeGrid as Grid } from 'react-window';

function App() {
  const Cell = ({ columnIndex, rowIndex, style }) => (
    <div className='cell-container' style={style}>
      <SelectableCell
        rowIndex={rowIndex}
        columnIndex={columnIndex}
      />
    </div>
  );

  return (
    <div className="App">

        <Grid
          columnCount={10}
          rowCount={100}

          columnWidth={100}
          rowHeight={60}

          height={600}
          width={1080}
        >

          {Cell}


        </Grid>
    </div>
  );
}

export default App;
