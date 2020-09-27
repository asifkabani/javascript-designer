import React from 'react';
import Logo from '../shared/logo';
import Author from '../shared/author';
import { Header, AuthorContainer } from '../layouts/basecss';
import profilePicture from '../../../static/profile.jpeg';

export default () => (
  <Header>
    <Logo />
    <AuthorContainer>
      <Author src={profilePicture} name="Asif Kabani" />
    </AuthorContainer>
  </Header>
);
