import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

function Modal({ children, showModal, closeModal }) {
  const modalStyle = {
    display: showModal ? 'block' : 'none',
    position: 'fixed',
    fontSize: '1.6rem'
  }
  return (
    <div className="form" style={modalStyle}>
      <span style={modalOverlayStyle}></span>
      <div style={contentModalStyle}>
        {children}
        <button style={buttonStyle} onClick={closeModal}><Icon name="check" /></button>
      </div>
    </div>
  );
}

// Prop types
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired
};

// Inline styling
const contentModalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  justifyContent: 'center',
  backgroundColor: '#fff',
  padding: '10px 15px',
  borderRadius: '5px',
  transform: 'translate(-50%, -50%)',
  zIndex: '12'
};

const buttonStyle = {
  appearance: 'none',
  display: 'block',
  width: '100%',
  border: '0',
  backgroundColor: '#27ae60',
  padding: '10px 15px',
  color: '#fff',
  marginTop: '1rem',
  fontSize: '1.4rem',
  cursor: 'pointer'
};

const modalOverlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '11'
};

export default Modal;