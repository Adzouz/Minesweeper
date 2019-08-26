import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class Table extends Component {
  render() {
    const tableRows = [];
    const { table, nbLeftTiles, endGame, showTile, toggleMarkTile } = this.props;
    // Loop on rows to generate them in table
    for (var i = 0; i < table.length; i++) {
      tableRows.push(<TableRow columns={table[i]} key={i} row={i} showTile={showTile} toggleMarkTile={toggleMarkTile} endGame={endGame} />);
    }
    return (
      <div style={tableContainerStyle}>
        <div className="remaining" style={remainingStyle}>Remaining tiles: <strong>{nbLeftTiles}</strong></div>
        <div className="scrollable-table" style={scrollableTableStyle}>
          <table style={tableStyle}>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// Prop types
Table.propTypes = {
  table: PropTypes.array.isRequired,
  showTile: PropTypes.func.isRequired,
  toggleMarkTile: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired
};

// Inline styling
const tableContainerStyle = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
};

const remainingStyle = {
  fontSize: '2rem',
  color: '#fff'
};

const scrollableTableStyle = {
  maxWidth: '100%',
  overflowX: 'scroll'
};

const tableStyle = {
  borderCollapse: 'collapse'
};

export default Table;