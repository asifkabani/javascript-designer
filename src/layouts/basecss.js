import React from 'react';
import normalize from 'styled-normalize';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  ${normalize}
`;

// Theme is located at src/layouts/index.js

export const Header = styled.header`
  background-color: ${props => props.theme.yellow};
  text-align: center;
  color: ${props => props.theme.pink};
  font-family: ${props => props.theme.font};
  padding-top: 50px;
`;

export const Main = styled.h1`
  text-decoration: 'none';
  color:${props => props.theme.pink};
  font-family: ${props => props.theme.font};
  font-size: 50px;
  display: inline;
  line-height: 0.7;
`;

export const Secondary = styled.span`
  display: inline-block;
  font-family: ${props => props.secondary ? 'Mr Dafoe' : props.theme.font};
  font-size: 50px;
  color: #FFFFFF;
  font-weight: 100;
  line-height: 0.3;
  padding-bottom: 20px;
`;

export const PinkBar = styled.hr`
  background-color: ${props => props.theme.pink};
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
  font-family: ${props => props.theme.font};
  width: 100%;
  height: 100%;
`;

export const Post = styled.div`
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 50px;
  font-family: ${props => props.theme.font};
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
`;

export const Headline = styled.h2`
  color: #676767;
  font-family: ${props => props.theme.font};
  font-size: 30px;
`;

export const Excerpt = styled.p`
  color: #999;
  font-size: 22px;
  line-height: 1.5;
`;

export const Footer = styled.footer`
    background-color: ${props => props.theme.yellow};
    font-family: ${props => props.theme.font};
    text-align: center;
`;