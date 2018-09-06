import React from 'react';
import styled from 'styled-components';

const Main = styled.h1`
  text-decoration: 'none';
  color: #E83F6F;
  font-family: 'Josefin Sans';
  font-size: 50px;
`;

const Secondary = styled.span`
  display: block;
  font-family: 'Mr Dafoe';
  font-size: 50px;
  color: #FFFFFF;
  font-weight: 100;
  line-height: 0.3;
  padding-bottom: 20px;
`;

export default () => (
  <a href="/" style={{ textDecoration: 'none' }}>
    <Main>
      JavaScript
      <Secondary>Designer</Secondary>
    </Main>
  </a>
);