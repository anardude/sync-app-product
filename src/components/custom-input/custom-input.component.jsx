import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({
  reff = '',
  className = '',
  type = '',
  name = '',
  defaultValue = '',
  value,
  required = false,
  onChange = () => {},
}) => {
  return (
    <input
      ref={reff}
      required={required}
      className={className}
      type={type}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default CustomInput;
