import React from 'react'
import Logo from '../Logo'
import { Header } from '../layouts/basecss'
import profilePicture from '../../../static/profile.jpeg';

const Author = ({ src, name }) => (
  <div>
    <img style={{ borderRadius: '80px', width: '50px', height: '50px' }} src={src} alt={name} />
    <p>{`Personal Blog of ${name} in Houston, TX.`}</p>
  </div>
)

export default () => (
  <Header>
    <Logo />
    <Author src={profilePicture} name="Asif Kabani" />
  </Header>
)
