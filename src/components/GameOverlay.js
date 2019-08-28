import React from 'react';

function GameOverlay({ gameOver, resetGame }) {
  return !gameOver ? (
    <div className="game-overlay" style={gameOverlayStyle}>
      <img alt="" src="https://media.giphy.com/media/3rgXBvnbXtxwaWmhr2/source.gif" style={gifOverlayStyle} />
      <img alt="" src="https://i.imgur.com/fWs529F.gif" style={gif1Style} />
      <img alt="" src="https://img1.picmix.com/output/stamp/normal/5/9/6/8/648695_03eca.gif" style={gif2Style} />
      <img alt="" src="https://media2.giphy.com/media/3ov9jCNV5rD8mCjsNG/giphy.gif" style={gif3Style} />
      <img alt="" className="rotate" src="https://media2.giphy.com/media/XWR4jehW2X2E0/giphy.gif" style={gif4Style} />
      <img alt="" src="https://66.media.tumblr.com/8536b658c824f7f5ee5db70e5af1e11c/tumblr_pfa585inqo1rm7fw6o1_1280.gif" style={gif5Style} />
      <img alt="" src="https://media.giphy.com/media/3oKIPvsbX1yYTrvC6s/giphy.gif" style={gif6Style} />
      <h2 style={h2Style}><span role="img" aria-label="hurray">🎉</span> YOU WIN <span role="img" aria-label="hurray">🎉</span></h2>
      <button style={buttonStyle} onClick={resetGame}>Reset</button>
    </div>
  ) : (
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
      <button style={buttonStyle} onClick={resetGame}>Reset</button>
    </div>
  )
}

const gameOverlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '2'
};

const overlayStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: '2'
};

const h2Style = {
  width: '100%',
  backgroundColor: '#0a3d62',
  color: '#fff',
  padding: '10px 15px',
  marginBottom: '20px',
  position: 'relative',
  zIndex: '3',
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
  zIndex: '3'
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
  zIndex: '2'
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

export default GameOverlay;
