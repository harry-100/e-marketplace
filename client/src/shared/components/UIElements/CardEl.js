import React from 'react';

import './CardEl.css';

const CardEl = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default CardEl;
