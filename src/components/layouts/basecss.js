import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(152, 36, 117);
  background: ${props =>
    `radial-gradient(circle, ${props.theme.lightPlum}, ${props.theme.darkPlum})`};
  text-align: center;
  border-bottom: 5px solid ${props => props.theme.lightPlum};
  color: #ffffff;
  font-family: ${props => props.theme.font};
`;

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

export const Main = styled.h1`
  text-decoration: 'none';
  color: #d9ca00;
  font-family: ${props => props.theme.font};
  font-size: 4.45em;
  display: inline-block;
  line-height: 0.7;
  margin: 0.5em 0;
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

export const Content = styled.section`
  margin: 0 auto;
  padding: 2em;
  font-family: ${props => props.theme.font};
  min-height: calc(100vh - 275px);
`;

export const Footer = styled.footer`
  background-color: ${props => props.theme.darkPlum};
  color: #ffffff;
  font-family: ${props => props.theme.font};
  text-align: center;
  width: 100%;
  border-top: 5px solid ${props => props.theme.lightPlum};
`;

export const ArticleContent = styled.main`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const Card = styled.article`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  font-family: ${props => props.theme.font};
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const Category = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  display: block;
  border-radius: 15px 15px 0 0;
  padding: 1rem;
`;

export const BlogCategory = styled.p`
  color: white;
`;

export const Headline = styled.h2`
  color: #676767;
  font-family: ${props => props.theme.font};
  font-size: 30px;
  margin: 0;
`;

export const Date = styled.p`
  color: #999;
  font-size: 18px;
`;

export const Excerpt = styled.p`
  color: #999;
  font-size: 22px;
  line-height: 1.5;
`;

export const More = styled.span`
  color: ${props => props.theme.lightPlum};
  font-size: 2em;
  &::after {
    content: '→';
  }
`;
