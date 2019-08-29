import React from 'react';
import Icon from './Icon';

const Actions = ({ showSettings, showStats, closeModal, displaySettings, displayStats }) => {
  let iconClose = null;
  if (showSettings || showStats) {
    iconClose = (<Icon name="close" />);
    return (
      <button onClick={closeModal} style={headerButtonStyle}>
        {iconClose}
      </button>
    );
  }
  return (
    <div style={actionsStyle}>
      <button onClick={displaySettings} style={headerButtonStyle}>
        <Icon name="settings" />
      </button>
      <button onClick={displayStats} style={headerButtonStyle}>
        <Icon name="chart" />
      </button>
    </div>
  );
}

const actionsStyle = {
  display: 'flex'
};

const headerButtonStyle = {
  backgroundColor: 'transparent',
  border: '0',
  appearance: 'none',
  padding: '8px 20px',
  cursor: 'pointer',
  display: 'block',
  position: 'relative',
  zIndex: '2',
  marginTop: '30px'
};

export default Actions;
