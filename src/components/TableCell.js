import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const { coords, infos, toggleMarkTile, endGame, showTile } = this.props;
    if (e.type === 'click' && !infos.marked) {
      // Detect if left click and the cell not marked
      // Display the content of the tile
      showTile(coords);
      // If it's a bomb, end the game
      if (infos.bomb) {
        endGame();
      }
    } else if (e.type === 'contextmenu') {
      // Detect if right click to toggle flag mark on cell
      toggleMarkTile(coords);
    }
  }
  getCellStyle() {
    return {
      fontSize: '3rem',
      lineHeight: '48px',
      width: '50px',
      minWidth: '50px',
      height: '50px',
      textAlign: 'center',
      cursor: 'pointer',
      userSelect: 'none',
      border: '2px solid #0a3d62',
      borderRadius: '8px',
      backgroundColor: this.props.infos.showed ? '#fff' : '#051e31'
    };
  }
  render() {
    const { bomb, counter, marked, showed } = this.props.infos;
    return (<td
      className="col"
      style={this.getCellStyle()}
      onClick={this.handleClick}
      onContextMenu={this.handleClick}
    >
      <div>{
        // Put a flag if marked
        marked ?
          (<span role="img" aria-label="flag">🚩</span>)
        // Put a bomb if showed and bomb on this cell
        : bomb && showed ?
          (<span role="img" aria-label="bomb">💣</span>)
        // Put the number of nearest bombs
        : counter && showed > 0 ?
          counter
        // Or just leave a blank
        :
          ""
        }</div>
    </td>);
  }
}

// Prop types
TableCell.propTypes = {
  coords: PropTypes.array.isRequired,
  infos: PropTypes.object.isRequired,
  showTile: PropTypes.func.isRequired,
  toggleMarkTile: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired
};

export default TableCell;