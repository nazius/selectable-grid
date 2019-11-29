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
      selectedKeys: [],
      lastSelectedValue: null,
  	};
  }


  render() {
    const handleSelection = (selectedKeys) => {
      console.log('check')
      this.setState({ selectedKeys });
    }

    const handleShiftClick = (index, e) => {
      const { selectedKeys, lastSelectedValue } = this.state


      this.setState({
        ...this.state,
        selectedKeys: [...selectedKeys, index],
        lastSelectedValue: index,
      })


      if(!e.shiftKey || !lastSelectedValue) return
      // start of range selection


      let rangeSelection = [];
      let highValue = null
      let lowValue = null

      if(index > lastSelectedValue){
        highValue = index
        lowValue = lastSelectedValue
      } else {
        highValue = lastSelectedValue
        lowValue = index
      }

      for (let i = lowValue; i <= highValue; i++) {
        rangeSelection.push(i);
      }

      this.setState({
        ...this.state,
        selectedKeys: selectedKeys.concat(...rangeSelection), // probably duplicate values
      })
    }

    const Cell = ({ columnIndex, rowIndex, style }) =>  {
      const index = flatt2DIndexTo1D(columnIndex, rowIndex, columnCount)
      const selected = this.state.selectedKeys.indexOf(index) > -1

      return (
          <div
            className='cell-container'
            style={style}
            onClick={handleShiftClick.bind(null, index)}
          >
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
