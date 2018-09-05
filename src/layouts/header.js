import React from 'react'
import Link from 'gatsby-link'
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

const Logo = () => (
  <h1>
      <Link to="/" style={{
        textDecoration: 'none',
        color: '#E83F6F',
        fontFamily: 'Josefin Sans',
        fontSize: 50
      }}>
        JavaScript
        <span style={{
          display: 'block',
          fontFamily: 'Mr Dafoe',
          fontSize: 50,
          color: 'white',
          fontWeight: 100,
          lineHeight: 0.5,
          paddingBottom: 20
        }}>
          Designer
        </span>
      </Link>
    </h1>
);

export default () => (
  <Header>
    <Logo />
    <p>A Front End Developer's Journey</p>
    <PinkBar />
  </Header>
);