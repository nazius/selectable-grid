import React from 'react';
import './App.css';
import SelectableCell from './selectableCell'
import { FixedSizeGrid as Grid } from 'react-window';
import { SelectableGroup } from 'react-selectable';

const columnCount = 10

function flatt2DIndexTo1D(columnIndex, rowIndex, columnCount) {
  return columnIndex + rowIndex * columnCount
}
class App extends React.Component {
  constructor (props) {
  	super(props);
  	this.state = {
  		selectedKeys: []
  	};
  }


  render() {
    const handleSelection = (selectedKeys) => {
      this.setState({ selectedKeys });
    }

    const Cell = ({ columnIndex, rowIndex, style }) =>  {
      const index = flatt2DIndexTo1D(columnIndex, rowIndex, columnCount)
      const selected = this.state.selectedKeys.indexOf(index) > -1

      return (
          <div className='cell-container' style={style}>
            <SelectableCell
              selectableKey={index}
              selectedKeys={this.state.selectedKeys}
              
              selected={selected}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
            />
          </div>
      );
    }



    return (
      <div className="App">
        <SelectableGroup onSelection={handleSelection}>
            <Grid
              columnCount={columnCount}
              rowCount={100}

              columnWidth={100}
              rowHeight={60}

              height={600}
              width={1080}
            >
              {Cell}

          </Grid>
        </SelectableGroup>

      </div>
    );
  }
}

export default App;
