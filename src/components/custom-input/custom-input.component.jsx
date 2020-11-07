import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({
  reff,
  className,
  type,
  name,
  value,
  required,
  onChange,
}) => {
  return (
    <input
      ref={reff}
      required={required}
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;
