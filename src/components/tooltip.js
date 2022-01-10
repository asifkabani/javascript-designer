import React from 'react';
import ReactTooltip from 'react-tooltip';

export default ({ title, children }) => {
  return (
    <div style={{ cursor: 'pointer', display: 'inline' }}>
      <a
        data-tip={title}
        data-event="click focus"
        style={{ borderBottom: '3px dotted #982475', fontWeight: '500' }}
      >
        {children}
      </a>
      <ReactTooltip globalEventOff="click" />
    </div>
  );
};
