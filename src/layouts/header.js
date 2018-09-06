import React from 'react';
import Logo from '../components/Logo';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #FFE200;
  text-align: center;
  color: #E83F6F;
  font-family: "Josefin Sans";
  padding-top: 20px;
`;

const PinkBar = styled.hr`
  background-color: #E83F6F;
  width: 50%;
  margin-left: 25%;
  height: 5px;
  border-radius: 30px;
`;

export default () => (
  <Header>
    <Logo />
    <p>A Front End Developer's Journey</p>
    <PinkBar />
  </Header>
);