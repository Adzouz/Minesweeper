import React from 'react';

function GameOverlay({ gameOver, resetGame }) {
  return !gameOver ? (
    <div className="game-overlay" style={gameOverlayStyle}>
      <span style={overlayStyle}></span>
      <h2 style={h2Style}><span role="img" aria-label="hurray">🎉</span> YOU WIN <span role="img" aria-label="hurray">🎉</span></h2>
      <button style={buttonStyle} onClick={resetGame}>Reset</button>
    </div>
  ) : (
    <div className="game-overlay" style={gameOverlayStyle}>
      <span style={overlayStyle}></span>
      <h2 style={h2Style}><span role="img" aria-label="kaboom">💥</span> GAME OVER <span role="img" aria-label="kaboom">💥</span></h2>
      <button style={buttonStyle} onClick={resetGame}>Reset</button>
    </div>
  )
}

// Inline styling
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
  zIndex: '20'
};

const h2Style = {
  width: '100%',
  backgroundColor: '#0a3d62',
  color: '#fff',
  padding: '10px 15px',
  marginBottom: '20px',
  position: 'relative',
  zIndex: '21',
  textAlign: 'center',
  flex: '0'
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
  zIndex: '21'
};

export default GameOverlay;
