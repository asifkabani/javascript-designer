import React from 'react';

export default ({ src, name }) => (
  <>
    <img src={src} alt={name} />
    <p
      style={{ margin: 0, width: '150px', textAlign: 'left' }}
    >{`Personal Blog of ${name} in Houston, TX.`}</p>
  </>
);
