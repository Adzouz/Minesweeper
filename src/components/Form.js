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
      <form style={formStyle}>
        <label style={infoFormStyle}>Rows: <input type="number" name="nbRows" value={this.props.nbRows} onChange={this.handleChange} style={inputStyle} /></label>
        <label style={infoFormStyle}>Columns: <input type="number" name="nbColumns" value={this.props.nbColumns} onChange={this.handleChange} style={inputStyle} /></label>
        <label style={infoFormStyle}>Bombs: <input type="number" min="1" max={Math.round((this.props.nbRows * this.props.nbColumns) - ((this.props.nbRows * this.props.nbColumns) / 100 * 50))} name="nbBombs" value={this.props.nbBombs} onChange={this.handleChange} style={inputStyle} /></label>
      </form>
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
const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: '#0a3d62',
  padding: '5px'
};

const inputStyle = {
  width: '50px',
  padding: '5px 0',
  border: '0',
  appearance: 'none',
  margin: '5px',
  textAlign: 'center'
};

const infoFormStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#fff'
};

export default Form;