import React from 'react';

import './icon-buttom.styles.scss';

const IconButton = ({ icon, onClick, title }) => (
  <span onClick={onClick} className='icon-button' alt={title} title={title}>
    {icon}
  </span>
);

export default IconButton;
