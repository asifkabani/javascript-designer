import React from 'react'
import Logo from '../logo'
import { Header, AuthorContainer } from '../layouts/basecss'
import profilePicture from '../../../static/profile.jpeg';

const Author = ({ src, name }) => (
  <>
    <img style={{ borderRadius: '80px', width: '40px', height: '40px' }} src={src} alt={name} />
    <p style={{ margin: 0, width: '150px', textAlign: 'left' }}>{`Personal Blog of ${name} in Houston, TX.`}</p>
  </>
)

export default () => (
  <Header>
    <Logo />
    <AuthorContainer>
      <Author src={profilePicture} name="Asif Kabani" />
    </AuthorContainer>
  </Header>
)
