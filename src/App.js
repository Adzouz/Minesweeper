import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Table from './components/Table'

class App extends Component {
  constructor(props) {
    super(props);
    // Default state
    this.state = {
      nbRows: 10,
      nbColumns: 7,
      nbBombs: 10,
      gameOver: false,
      matrix: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.showTile = this.showTile.bind(this);
    this.toggleMarkTile = this.toggleMarkTile.bind(this);
    this.displayAll = this.displayAll.bind(this);
    this.resetBombs = this.resetBombs.bind(this);
    this.endGame = this.endGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.nbLeftTiles = this.nbLeftTiles.bind(this);
  }
  handleChange(event) {
    // If something is changed in one of the input in form, update the value in the state and reset the board
    this.setState({ [event.target.name]: parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 1 }, this.resetBombs);
  }
  toggleMarkTile(coords) {
    let matrix = this.state.matrix;
    matrix[coords[0]][coords[1]].marked = !matrix[coords[0]][coords[1]].marked;
    this.setState({
      matrix
    });
  }
  showTile(coords) {
    let matrix = this.state.matrix;
    matrix[coords[0]][coords[1]].marked = false;
    matrix[coords[0]][coords[1]].showed = true;
    this.setState({
      matrix
    });
    if (this.nbLeftTiles() === 0 && !this.state.gameOver) {
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
  displayAll() {
    const matrix = this.state.matrix.map((r) => {
      return r.map((c) => {
        c.showed = true;
        return c;
      });
    });
    this.setState({
      matrix
    });
  }
  nbLeftTiles() {
    let counter = 0;
    this.state.matrix.map((r) => {
      r.map((c) => {
        if (!c.showed && !c.bomb) {
          counter++
        }
        return c;
      })
      return r;
    });
    return counter;
  }
  endGame() {
    this.displayAll();
    this.setState({
      gameOver: true
    });
  }
  resetGame() {
    this.setState({
      gameOver: false
    });
    this.resetBombs();
  }
  resetBombs() {
    let bombsCoords = [];
    let nbBombs = this.state.nbBombs;
    const maxAuthorizedBombs = Math.round((this.state.nbRows * this.state.nbColumns) - ((this.state.nbRows * this.state.nbColumns) / 100 * 50));
    if (this.state.nbBombs > maxAuthorizedBombs) {
      this.setState({
        nbBombs: maxAuthorizedBombs
      });
      nbBombs = maxAuthorizedBombs;
    }
    for (let i = 0; i < nbBombs; i++) {
      let found = true;
      var coords = [Math.floor(Math.random() * Math.floor(this.state.nbRows)), Math.floor(Math.random() * Math.floor(this.state.nbColumns))];
      while (found) {
        // eslint-disable-next-line
        found = bombsCoords.filter((bc) => { return bc[0] === coords[0] && bc[1] === coords[1] }).length > 0
        if (!found) {
          bombsCoords.push([coords[0], coords[1]]);
        } else {
          coords = [Math.floor(Math.random() * Math.floor(this.state.nbRows)), Math.floor(Math.random() * Math.floor(this.state.nbColumns))];
        }
      }
    }
    let matrix = [];
    for (let i = 0; i < this.state.nbRows; i++) {
      let row = [];
      for (let j = 0; j < this.state.nbColumns; j++) {
        row.push({
          showed: false,
          bomb: false,
          counter: 0,
          marked: false
        });
      }
      matrix.push(row);
    }
    bombsCoords.map((bc) => {
      matrix[bc[0]][bc[1]].bomb = true;
      return bc;
    });
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let counter = 0;
        bombsCoords.map((bc) => {
          if (bc[0] === i - 1 && bc[1] === j - 1) { counter++ }
          if (bc[0] === i - 1 && bc[1] === j) { counter++ }
          if (bc[0] === i - 1 && bc[1] === j + 1) { counter++ }
          if (bc[0] === i && bc[1] === j - 1) { counter++ }
          if (bc[0] === i && bc[1] === j + 1) { counter++ }
          if (bc[0] === i + 1 && bc[1] === j - 1) { counter++ }
          if (bc[0] === i + 1 && bc[1] === j) { counter++ }
          if (bc[0] === i + 1 && bc[1] === j + 1) { counter++ }
          return bc;
        });
        matrix[i][j].counter = counter;
      }
    }
    this.setState({
      gameOver: false,
      matrix
    });
  }
  componentDidMount() {
    this.resetBombs();
  }
  render() {
    let gameOver = null, gameWinned = null;
    if (this.state.gameOver) {
      gameOver = (
        <div className="game-overlay" style={gameOverlayStyle}>
          <span style={overlayStyle}></span>
          <img alt="" src="https://media0.giphy.com/media/26tPdwMm4jyClgxTq/giphy.gif?cid=790b76113be8a3eda238c4edaa4be3e66abd0b54a5f7de32&rid=giphy.gif" style={gifOverlayStyle} />
          <img alt="" src="https://i.gifer.com/5GpM.gif" style={gif2Style} />
          <img alt="" src="https://i.gifer.com/YGg6.gif" style={gif4Style} />
          <img alt="" src="https://media2.giphy.com/media/13zvwxJX6VzHqg/source.gif" style={gif3Style} />
          <img alt="" src="https://media2.giphy.com/media/KfMhwrXg5WXjRC7v3M/giphy.gif" style={gif1Style} />
          <img alt="" src="https://media3.giphy.com/media/10a1Cwco2kUtlS/giphy.gif" style={gif5Style} />
          <img alt="" src="https://media.giphy.com/media/QPoCzipoOdlAODKovi/giphy.gif" style={gif6Style} />
          <h2 style={h2Style}><span role="img" aria-label="kaboom">💥</span> GAME OVER <span role="img" aria-label="kaboom">💥</span></h2>
          <button style={buttonStyle} onClick={this.resetGame}>Reset</button>
        </div>
      )
    }
    if (this.nbLeftTiles() <= 0 && !this.state.gameOver) {
      gameWinned = (
        <div className="game-overlay" style={gameOverlayStyle}>
          <img alt="" src="https://media.giphy.com/media/3rgXBvnbXtxwaWmhr2/source.gif" style={gifOverlayStyle} />
          <img alt="" src="https://i.imgur.com/fWs529F.gif" style={gif1Style} />
          <img alt="" src="https://img1.picmix.com/output/stamp/normal/5/9/6/8/648695_03eca.gif" style={gif2Style} />
          <img alt="" src="https://media2.giphy.com/media/3ov9jCNV5rD8mCjsNG/giphy.gif" style={gif3Style} />
          <img alt="" className="rotate" src="https://media2.giphy.com/media/XWR4jehW2X2E0/giphy.gif" style={gif4Style} />
          <img alt="" src="https://66.media.tumblr.com/8536b658c824f7f5ee5db70e5af1e11c/tumblr_pfa585inqo1rm7fw6o1_1280.gif" style={gif5Style} />
          <img alt="" src="https://media.giphy.com/media/3oKIPvsbX1yYTrvC6s/giphy.gif" style={gif6Style} />
          <h2 style={h2Style}><span role="img" aria-label="hurray">🎉</span> YOU WIN <span role="img" aria-label="hurray">🎉</span></h2>
          <button style={buttonStyle} onClick={this.resetGame}>Reset</button>
        </div>
      )
    }
    return (
      <div className="App" style={appStyle}>
        <Form handleChange={this.handleChange} nbRows={this.state.nbRows} nbColumns={this.state.nbColumns} nbBombs={this.state.nbBombs} />
        {gameOver}
        {gameWinned}
        <Table table={this.state.matrix} nbLeftTiles={this.nbLeftTiles()} showTile={this.showTile} toggleMarkTile={this.toggleMarkTile} endGame={this.endGame} />
      </div>
    );
  }
}

// Inline styling
const appStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const gameOverlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const overlayStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: '1'
};

const h2Style = {
  width: '100%',
  backgroundColor: '#0a3d62',
  color: '#fff',
  padding: '10px 15px',
  marginBottom: '20px',
  position: 'relative',
  zIndex: '1'
};

const buttonStyle = {
  fontSize: '2.2rem',
  appearance: 'none',
  marginBottom: '40px',
  padding: '10px 15px',
  backgroundColor: '#0a3d62',
  color: '#fff',
  border: '0',
  cursor: 'pointer',
  borderRadius: '5px',
  position: 'relative',
  zIndex: '1'
};

const gifOverlayStyle = {
  minWidth: '100%',
  minHeight: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '0',
  opacity: '0.5'
};

const gif1Style = {
  position: 'absolute',
  bottom: '0',
  right: '0',
  zIndex: '2'
};

const gif2Style = {
  position: 'absolute',
  bottom: '-20%',
  left: '0',
  width: '100%',
  zIndex: '1'
};

const gif3Style = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  zIndex: '2'
};

const gif4Style = {
  position: 'absolute',
  bottom: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: '2',
  width: '400px'
};

const gif5Style = {
  position: 'absolute',
  top: '0',
  right: '10%',
  zIndex: '2',
  maxWidth: '300px'
};

const gif6Style = {
  position: 'absolute',
  top: '10%',
  left: '10%',
  zIndex: '2',
  maxWidth: '300px'
};

export default App;
