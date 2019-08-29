import React from 'react';

const Icons = ({ name }) => {
  return (
    <img src={'/icons/' + name + '.svg'} alt="" style={iconStyle} />
  );
}

const iconStyle = {
  width: '24px'
};

export default Icons;
