import styled from 'styled-components';
import colors from './colors';

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   CSS TABLE OF CONTENTS

   1.0 - Layout
   2.0 - Components
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 1.0 - Layout */
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background: ${`radial-gradient(circle at center, ${colors.lightPlum}, ${colors.darkPlum})`};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${colors.common.white};
  font-family: ${props => props.theme.font};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const Content = styled.section`
  margin: 0 auto;
  padding: 10em 2em 2em 2em;

  & > p {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
  }

  @media (min-width: 40em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  @media (min-width: 50em) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  @media (min-width: 60em) {
    padding-left: 15rem;
    padding-right: 15rem;
  }
  @media (min-width: 70em) {
    padding-left: 20rem;
    padding-right: 20rem;
  }
`;

export const Footer = styled.footer`
  background-color: ${colors.darkPlum};
  color: ${colors.common.white};
  font-family: ${props => props.theme.font};
  text-align: center;
  width: 100%;
  border-top: 5px solid ${colors.lightPlum};
  height: 10vh;
`;

/* 2.0 - Components */
/* 2.1 - Header Logo */
export const Main = styled.div`
  font-weight: bold;
  color: ${colors.jsColor};
  font-family: ${props => props.theme.font};
  font-size: 3.45em;
  display: inline-block;
  line-height: 0.7;
  margin: 0.5em 0;
  letter-spacing: -0.05em;
`;

export const Secondary = styled.span`
  display: inline-block;
  font-family: ${props => (props.secondary ? 'Mr Dafoe' : props.theme.font)};
  font-size: 0.95em;
  color: ${colors.common.white};
  font-weight: 100;
  line-height: 0.3;
  padding-bottom: 20px;
`;

/* 2.2 - Header Author */
export const AuthorContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;

  & img {
    margin-right: 1rem;
    border-radius: 80px;
    width: 40px;
  }
`;

/* 2.3 - Home Category Filter */
export const CategoryFilter = styled.li`
  list-style-type: none;
  padding: 0.5rem;
  border-radius: 20px;
  background-color: red;
  min-width: 100px;
  margin: 0.25rem;
  text-align: center;
  color: ${colors.common.white};
  font-weight: 900;
  cursor: pointer;
`;

export const CategoryFilterContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: red;
`;

/* 2.4 - Home Blog Post */
export const ArticleContent = styled.main`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const Card = styled.article`
  background-color: ${colors.common.white};
  border-radius: 10px;
  box-shadow: 0px 10px 30px 0px ${colors.common.lightShadow};
  font-family: ${props => props.theme.font};
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0px 10px 30px 0px ${colors.common.darkShadow};
  }
`;

export const CategoryLabel = styled.span`
  color: ${colors.common.white};
  font-size: 18px;
  font-weight: 400;
  display: block;
  border-radius: 10px 10px 0 0;
  padding: 0.75rem;
  background-color: ${props => props.label};
`;

export const CardContent = styled.div`
  padding: 30px;
`;

export const BlogCategory = styled.p`
  color: ${colors.common.white};
`;

export const Headline = styled.h2`
  font-family: ${props => props.theme.font};
  font-size: 2.5em;
  margin: 0;
  text-rendering: optimizelegibility;
  letter-spacing: -0.015em;
  line-height: 1.125;
  color: ${colors.darkGray};
  font-weight: 800;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

export const Details = styled.p`
  color: ${colors.lightGray};
  font-size: 16px;
  font-weight: 500;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;

  & span {
    font-weight: 500;
  }
`;

export const Excerpt = styled.p`
  color: ${colors.darkGray};
  font-size: 18px;
  line-height: 1.5;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
`;

export const More = styled.span`
  color: ${colors.lightPlum};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  &::before {
    content: 'Read More';
    margin-right: 0.5rem;
  }
  &::after {
    content: '→';
  }
`;

/* 3.0 - Blog Post Category */
export const BlogPostCategory = styled.p`
  color: inherit;
`;

export const Summary = styled.section`
  padding: 1rem 0;
  line-height: 1.5;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px dashed ${colors.lightPlum};
  background: transparent;

  &:before {
    content: 'Quick summary 👉 ';
    display: inline;
    letter-spacing: 2px;
    font-weight: 600;
    color: ${colors.lightPlum};
    text-transform: uppercase;
  }
`;
