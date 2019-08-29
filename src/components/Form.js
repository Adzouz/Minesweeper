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
  render() {
    return (
      <div className="form">
        <label style={infoFormStyle}><span style={infoFormLabelStyle}>Rows:</span><input type="number" pattern="\d*" name="nbRows" value={this.props.nbRows} onChange={this.handleChange} style={inputStyle} /></label>
        <label style={infoFormStyle}><span style={infoFormLabelStyle}>Columns:</span><input type="number" pattern="\d*" name="nbColumns" value={this.props.nbColumns} onChange={this.handleChange} style={inputStyle} /></label>
        <label style={infoFormStyle}><span style={infoFormLabelStyle}>Bombs:</span><input type="number" pattern="\d*" min="1" max={Math.round((this.props.nbRows * this.props.nbColumns) - ((this.props.nbRows * this.props.nbColumns) / 100 * 50))} name="nbBombs" value={this.props.nbBombs} onChange={this.handleChange} style={inputStyle} /></label>
      </div>
    );
  }
}

// Prop types
Form.propTypes = {
  nbRows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  nbColumns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  nbBombs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired
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

const infoFormStyle = {
  display: 'flex',
  alignItems: 'center'
};

const infoFormLabelStyle = {
  marginRight: '1rem'
};

export default Form;