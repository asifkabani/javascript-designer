import styled from 'styled-components';

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
  background: ${props =>
    `radial-gradient(circle, ${props.theme.lightPlum}, ${props.theme.darkPlum})`};
  height: 90vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  font-family: ${props => props.theme.font};
`;

export const Content = styled.section`
  margin: 0 auto;
  padding: 2em;
  font-family: ${props => props.theme.font};

  & > p {
    font-size: 1.5em;
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
  @media (min-width: 80em) {
    padding-left: 25rem;
    padding-right: 25rem;
  }
`;

export const Footer = styled.footer`
  background-color: ${props => props.theme.darkPlum};
  color: #ffffff;
  font-family: ${props => props.theme.font};
  text-align: center;
  width: 100%;
  border-top: 5px solid ${props => props.theme.lightPlum};
  height: 10vh;
`;

/* 2.0 - Components */
/* 2.1 - Header Logo */
export const Main = styled.h1`
  text-decoration: 'none';
  color: #d9ca00;
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
  color: #fff;
  font-weight: 100;
  line-height: 0.3;
  padding-bottom: 20px;
`;

/* 2.1 - Header Author */
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

/* 2.2 - Home Category Filter */
export const CategoryFilter = styled.li`
  list-style-type: none;
  padding: 0.5rem;
  border-radius: 20px;
  background-color: ${props => props.label};
  min-width: 100px;
  margin: 0.25rem;
  text-align: center;
  color: white;
  font-weight: 900;
  cursor: pointer;
`;

export const CategoryFilterContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: #982475;
`;

/* 2.2 - Home Blog Post */
export const ArticleContent = styled.main`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const Card = styled.article`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  font-family: ${props => props.theme.font};
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const CategoryLabel = styled.span`
  color: #fff;
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
  color: white;
`;

export const Headline = styled.h2`
  color: #676767;
  font-family: ${props => props.theme.font};
  font-size: 3.25em;
  margin: 0;
`;

export const Details = styled.p`
  color: #999;
  font-size: 16px;
  font-weight: 700;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  & span {
    font-weight: 500;
  }
`;

export const Excerpt = styled.p`
  color: #999;
  font-size: 16px;
  line-height: 1.5;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
`;

export const More = styled.span`
  color: ${props => props.theme.lightPlum};
  font-size: 2em;
  &::after {
    content: '→';
  }
`;
