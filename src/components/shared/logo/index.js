import React from 'react';
import { Link } from 'gatsby';
import { Main, Secondary } from '../../layouts/basecss';

export default () => (
  <Link to="/">
    <Main>
      JavaScript
      <br />
      <Secondary secondary>Designer</Secondary>
    </Main>
  </Link>
);
