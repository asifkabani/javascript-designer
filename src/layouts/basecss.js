import React from 'react';
import normalize from 'styled-normalize';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  ${normalize}
`;

export const Header = styled.header`
  background-color: #FFE200;
  text-align: center;
  color: #E83F6F;
  font-family: "Josefin Sans";
  padding-top: 50px;
`;

export const Main = styled.h1`
  text-decoration: 'none';
  color: #E83F6F;
  font-family: 'Josefin Sans';
  font-size: 50px;
  display: inline;
  line-height: 0.7;
`;

export const Secondary = styled.span`
  display: inline-block;
  font-family: 'Mr Dafoe';
  font-size: 50px;
  color: #FFFFFF;
  font-weight: 100;
  line-height: 0.3;
  padding-bottom: 20px;
`;

export const PinkBar = styled.hr`
  background-color: #E83F6F;
  height: 5px;
  border-radius: 30px 30px 0 0;
  border: 0;
  max-width: 960px;
  transform: ${props => props.footer ? 'rotate(180deg)' : 'none'};
`;

export const Content = styled.section`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  padding-top: 0;
`;

export const Post = styled.div`
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 50px;
  font-family: 'Josefin Sans';
`;

export const ArticleContent = styled.main`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Category = styled.p`
  color: #BABABA;
  font-size: 18px;
  font-weight: 400;
`;

export const Date = styled.p`
  color: #999;
  margin-top: -10px;
`;

export const Headline = styled.h2`
  color: #676767;
  font-family: 'Josefin Sans';
`;

export const Excerpt = styled.p`
  color: #999;
`;

export const Footer = styled.footer`
    background-color: #FFE200;
    font-family: 'Josefin Sans';
    text-align: center;
`;