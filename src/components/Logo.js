import React from 'react';
import { Main, Secondary } from '../layouts/basecss';

export default () => (
  <a href="/" style={{ textDecoration: 'none' }}>
    <Main>
      JavaScript<br/>
      <Secondary secondary>Designer</Secondary>
    </Main>
  </a>
);