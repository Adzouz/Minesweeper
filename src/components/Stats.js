import React from 'react';

function Stats({ resetData }) {
  const playedGames = JSON.parse(localStorage.getItem('played_games'));
  let wonGames = {
    value: 0,
    percent: 0
  },
  lostGames = {
    value: 0,
    percent: 0
  };
  if (playedGames) {
    wonGames = {
      value: playedGames.won,
      percent: Math.round(100 / (playedGames.won + playedGames.lost) * playedGames.won)
    };
    lostGames = {
      value: playedGames.lost,
      percent: Math.round(100 / (playedGames.won + playedGames.lost) * playedGames.lost)
    };
  }
  return playedGames ? (
    <div>
      <div style={lineStyle}>
        Total games:
        <strong style={valueStyle}>{wonGames.value + lostGames.value}</strong>
      </div>
      <div style={lineStyle}>
        Won games:
        <strong style={valueStyle}>{wonGames.value}&nbsp;({wonGames.percent}%)</strong>
      </div>
      <div style={lineStyle}>
        Lost games:
        <strong style={valueStyle}>{lostGames.value}&nbsp;({lostGames.percent}%)</strong>
      </div>
      <button onClick={resetData} style={resetButtonStyle}>Reset data</button>
    </div>
  ) : (
    <div>
      <div style={lineStyle}>
        No stats for the moment.
      </div>
    </div>
  );
}

const lineStyle = {
  marginBottom: '10px',
  textAlign: 'center'
};

const valueStyle = {
  display: 'block',
  fontSize: '2.2rem'
};

const resetButtonStyle = {
  appearance: 'none',
  display: 'block',
  width: '100%',
  border: '0',
  backgroundColor: '#e74c3c',
  padding: '10px 15px',
  color: '#fff',
  marginTop: '1rem',
  fontSize: '1.4rem',
  cursor: 'pointer'
};

export default Stats;