import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    background-color: #FFE200;
`;

const PinkBar = styled.hr`
  background-color: #E83F6F;
  width: 50%;
  margin-left: 25%;
  height: 5px;
  border-radius: 30px;
`;

const year = new Date();

export default () => (
    <Footer>
        <PinkBar />
        <small>Copyright 2018</small>
    </Footer>
);