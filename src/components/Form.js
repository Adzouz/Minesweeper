import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.handleChange(e);
  }
  getFormStyle() {
    return {
      display: this.props.showSettings ? 'block' : 'none',
      position: 'fixed',
      fontSize: '1.6rem'
    }
  }
  render() {
    return (
      <div className="form" style={this.getFormStyle()}>
        <span style={formOverlayStyle}></span>
        <div style={contentFormStyle}>
          <label style={infoFormStyle}><span style={infoFormLabelStyle}>Rows:</span><input type="number" pattern="\d*" name="nbRows" value={this.props.nbRows} onChange={this.handleChange} style={inputStyle} /></label>
          <label style={infoFormStyle}><span style={infoFormLabelStyle}>Columns:</span><input type="number" pattern="\d*" name="nbColumns" value={this.props.nbColumns} onChange={this.handleChange} style={inputStyle} /></label>
          <label style={infoFormStyle}><span style={infoFormLabelStyle}>Bombs:</span><input type="number" pattern="\d*" min="1" max={Math.round((this.props.nbRows * this.props.nbColumns) - ((this.props.nbRows * this.props.nbColumns) / 100 * 50))} name="nbBombs" value={this.props.nbBombs} onChange={this.handleChange} style={inputStyle} /></label>
          <button style={infoFormButtonStyle} onClick={this.props.closeModal}>DONE</button>
        </div>
      </div>
    );
  }
}

// Prop types
Form.propTypes = {
  nbRows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  nbColumns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  nbBombs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
  showSettings: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

// Inline styling
const inputStyle = {
  width: '50px',
  padding: '5px 0',
  border: '0',
  appearance: 'none',
  margin: '5px',
  textAlign: 'center',
  fontSize: '1.6rem',
  backgroundColor: '#ecf0f1',
  marginLeft: 'auto'
};

const contentFormStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  justifyContent: 'center',
  backgroundColor: '#fff',
  padding: '10px 15px',
  borderRadius: '5px',
  transform: 'translate(-50%, -50%)',
  zIndex: '2'
};

const infoFormStyle = {
  display: 'flex',
  alignItems: 'center'
};

const infoFormLabelStyle = {
  marginRight: '1rem'
};

const infoFormButtonStyle = {
  appearance: 'none',
  display: 'block',
  width: '100%',
  border: '0',
  backgroundColor: '#27ae60',
  padding: '10px 15px',
  color: '#fff',
  marginTop: '1rem',
  fontSize: '1.4rem'
};

const formOverlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '1'
};

export default Form;