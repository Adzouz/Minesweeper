import React from 'react';

function Stats() {
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
  return (
    <div>
      <div style={lineStyle}>
        Won games:
        <strong style={valueStyle}>{wonGames.value}&nbsp;({wonGames.percent}%)</strong>
      </div>
      <div style={lineStyle}>
        Lost games:
        <strong style={valueStyle}>{lostGames.value}&nbsp;({lostGames.percent}%)</strong>
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

export default Stats;