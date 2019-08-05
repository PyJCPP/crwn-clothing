import React from 'react';

import './custom-bottom.style.scss';

const CustomBotton = ({ children, ...otherProps }) => (
  <button className='custom-botton' {...otherProps}>
    {children}
  </button>
);

export default CustomBotton;