import React from 'react';

import './span-element.styles.scss';

const SpanElement = ({ children }) => {
  return <span className='element'>{children}</span>;
};

export default SpanElement;
