import React from 'react';
import Logo from '../components/Logo';
import { Header, PinkBar } from '../layouts/basecss';

export default () => (
  <Header>
    <Logo />
    <p style={{ fontSize: '1.5em' }}>A Front End Developer's Journey</p>
    <PinkBar />
  </Header>
);