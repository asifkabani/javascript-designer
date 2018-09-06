import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    background-color: #FFE200;
    font-family: 'Josefin Sans';
    text-align: center;
`;

const PinkBar = styled.hr`
  background-color: #E83F6F;
  width: 50%;
  margin-left: 25%;
  height: 5px;
  border-radius: 30px;
`;

export default () => (
    <Footer>
        <PinkBar />
        <small>JavaScript Designer<br />© Copyright 2018. All Rights Reserved.</small>
    </Footer>
);