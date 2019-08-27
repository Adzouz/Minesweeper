import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateMatrix, updateGameStatus } from '../actions/gameActions';

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const { coords, infos } = this.props;
    if (e.type === 'click' && !infos.marked) {
      // Detect if left click and the cell not marked
      // Display the content of the tile
      this.showTile(coords);
      // If it's a bomb, end the game
      if (infos.bomb) {
        this.displayAll();
        this.props.updateGameStatus(true);
      }
    } else if (e.type === 'contextmenu') {
      // Detect if right click to toggle flag mark on cell
      this.toggleMarkTile(coords);
    }
  }
  displayAll() {
    const matrix = this.props.matrix.map((r) => {
      return r.map((c) => {
        c.showed = true;
        return c;
      });
    });
    // Update the matrix in store
    this.props.updateMatrix(matrix);
  }
  showTile(coords) {
    const matrix = this.props.matrix.map((r, rowIndex) => {
      return r.map((c, colIndex) => {
        if (rowIndex === coords[0] && colIndex === coords[1]) {
          c.marked = false;
          c.showed = true;
        }
        return c;
      });
    });
    // Update the matrix in store
    this.props.updateMatrix(matrix);
    // If no more tile to discover and we don't have a game over, it's because the player has won the game so reveal all tiles
    if (this.props.nbLeftTiles === 0 && !this.props.gameOver) {
      this.displayAll();
    }
    // If we are on an empty cell, we'll check the cells around to display
    if (matrix[coords[0]][coords[1]].counter === 0 && !matrix[coords[0]][coords[1]].bomb) {
      if (matrix[coords[0] - 1] &&
        matrix[coords[0] - 1][coords[1] - 1] &&
        (matrix[coords[0] - 1][coords[1] - 1].counter === 0 || (matrix[coords[0] - 1][coords[1] - 1].counter !== 0 && matrix[coords[0]][coords[1]].counter === 0)) &&
        !matrix[coords[0] - 1][coords[1] - 1].bomb &&
        !matrix[coords[0] - 1][coords[1] - 1].showed) {
        this.showTile([coords[0] - 1, coords[1] - 1]);
      }
      if (matrix[coords[0] - 1] &&
        matrix[coords[0] - 1][coords[1]] &&
        (matrix[coords[0] - 1][coords[1]].counter === 0 || (matrix[coords[0] - 1][coords[1]].counter !== 0 && matrix[coords[0]][coords[1]].counter === 0)) &&
        !matrix[coords[0] - 1][coords[1]].bomb &&
        !matrix[coords[0] - 1][coords[1]].showed) {
        this.showTile([coords[0] - 1, coords[1]]);
      }
      if (matrix[coords[0] - 1] &&
        matrix[coords[0] - 1][coords[1] + 1] &&
        (matrix[coords[0] - 1][coords[1] + 1].counter === 0 || (matrix[coords[0] - 1][coords[1] + 1].counter !== 0 && matrix[coords[0]][coords[1]].counter === 0)) &&
        !matrix[coords[0] - 1][coords[1] + 1].bomb &&
        !matrix[coords[0] - 1][coords[1] + 1].showed) {
        this.showTile([coords[0] - 1, coords[1] + 1]);
      }
      if (matrix[coords[0]] &&
        matrix[coords[0]][coords[1] - 1] &&
        (matrix[coords[0]][coords[1] - 1].counter === 0 || (matrix[coords[0]][coords[1] - 1].counter !== 0 && matrix[coords[0]][coords[1]].counter === 0)) &&
        !matrix[coords[0]][coords[1] - 1].bomb &&
        !matrix[coords[0]][coords[1] - 1].showed) {
        this.showTile([coords[0], coords[1] - 1]);
      }
      if (matrix[coords[0]] &&
        matrix[coords[0]][coords[1] + 1] &&
        (matrix[coords[0]][coords[1] + 1].counter === 0 || (matrix[coords[0]][coords[1] + 1].counter !== 0 && matrix[coords[0]][coords[1]].counter === 0)) &&
        !matrix[coords[0]][coords[1] + 1].bomb &&
        !matrix[coords[0]][coords[1] + 1].showed) {
        this.showTile([coords[0], coords[1] + 1]);
      }
      if (matrix[coords[0] + 1] &&
        matrix[coords[0] + 1][coords[1] - 1] &&
        (matrix[coords[0] + 1][coords[1] - 1].counter === 0 || (matrix[coords[0] + 1][coords[1] - 1].counter !== 0 && matrix[coords[0]][coords[1]].counter === 0)) &&
        !matrix[coords[0] + 1][coords[1] - 1].bomb &&
        !matrix[coords[0] + 1][coords[1] - 1].showed) {
        this.showTile([coords[0] + 1, coords[1] - 1]);
      }
      if (matrix[coords[0] + 1] &&
        matrix[coords[0] + 1][coords[1]] &&
        (matrix[coords[0] + 1][coords[1]].counter === 0 || (matrix[coords[0] + 1][coords[1]].counter !== 0 && matrix[coords[0]][coords[1]].counter === 0)) &&
        !matrix[coords[0] + 1][coords[1]].bomb &&
        !matrix[coords[0] + 1][coords[1]].showed) {
        this.showTile([coords[0] + 1, coords[1]]);
      }
      if (matrix[coords[0] + 1] &&
        matrix[coords[0] + 1][coords[1] + 1] &&
        (matrix[coords[0] + 1][coords[1] + 1].counter === 0 || (matrix[coords[0] + 1][coords[1] + 1].counter !== 0 && matrix[coords[0]][coords[1]].counter === 0)) &&
        !matrix[coords[0] + 1][coords[1] + 1].bomb &&
        !matrix[coords[0] + 1][coords[1] + 1].showed) {
        this.showTile([coords[0] + 1, coords[1] + 1]);
      }
    }
  }
  toggleMarkTile(coords) {
    const matrix = this.props.matrix.map((r, rowIndex) => {
      return r.map((c, colIndex) => {
        if (rowIndex === coords[0] && colIndex === coords[1]) {
          c.marked = !c.marked;
        }
        return c;
      });
    });
    this.props.updateMatrix(matrix);
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
  nbLeftTiles: PropTypes.number.isRequired,
  matrix: PropTypes.array.isRequired,
  gameOver: PropTypes.bool.isRequired
};

// Map store state and actions to current component
const mapStateToProps = (state) => ({
  matrix: state.game.matrix,
  gameOver: state.game.gameOver
});

const mapDispatchToProps = {
  updateMatrix,
  updateGameStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(TableCell);