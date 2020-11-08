import React from 'react';

import './span-element.styles.scss';

const SpanElement = ({ children, className = '' }) => {
  return <span className={`element ${className}`}>{children}</span>;
};

export default SpanElement;
