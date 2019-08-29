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
      <div style={marginStyle}>Won games: {wonGames.value} ({wonGames.percent}%)</div>
      <div style={marginStyle}>Lost games: {lostGames.value} ({lostGames.percent}%)</div>
    </div>
  );
}

const marginStyle = {
  marginBottom: '10px'
};

export default Stats;