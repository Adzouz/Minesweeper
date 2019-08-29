import React from 'react';
import PropTypes from 'prop-types';
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

// Prop types
Actions.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  showStats: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  displaySettings: PropTypes.func.isRequired,
  displayStats: PropTypes.func.isRequired
};

// Inline styling
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
  zIndex: '11',
  marginTop: '30px'
};

export default Actions;
