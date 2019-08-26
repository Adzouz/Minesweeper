import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';

class TableRow extends Component {
  render() {
    const tableCells = [];
    const { columns, row, endGame, showTile, toggleMarkTile } = this.props;
    // Loop on columns to generate cells in table
    for (var i = 0; i < columns.length; i++) {
      tableCells.push(<TableCell coords={[row, i]} infos={columns[i]} key={i} showTile={showTile} toggleMarkTile={toggleMarkTile} endGame={endGame} />);
    }
    return (
      <tr className="row" style={rowStyle}>
        {tableCells}
      </tr>
    );
  }
}

// Prop types
TableRow.propTypes = {
  columns: PropTypes.array.isRequired,
  row: PropTypes.number.isRequired,
  showTile: PropTypes.func.isRequired,
  toggleMarkTile: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired
};

// Inline styling
const rowStyle = {
  width: '100%'
};

export default TableRow;