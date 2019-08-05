import React from 'react';

import './custom-bottom.style.scss';

const CustomBotton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-botton`} {...otherProps}>
    {children}
  </button>
);

export default CustomBotton;