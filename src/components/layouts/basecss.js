import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(152,36,117);
  background: radial-gradient(circle, rgba(152,36,117,1) 0%, rgba(65,15,50,1) 100%);
  text-align: center;
  border-bottom: 5px solid ${props => props.theme.cyan};
  color: #ffffff;
  font-family: ${props => props.theme.font};
`;

export const Main = styled.h1`
  text-decoration: 'none';
  color: #D9CA00;
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
  color: #FFF;
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
  background-color: ${props => props.theme.plum};
  color: #ffffff;
  font-family: ${props => props.theme.font};
  text-align: center;
  width: 100%;
  border-top: 5px solid ${props => props.theme.cyan};
`;

export const ArticleContent = styled.main`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const Box = styled.article`
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

export const More = styled.button`
  border-color: ${props => props.theme.pink};
  background-color: transparent;
  color: ${props => props.theme.pink};
  border-radius: 5px;
  padding: 1em;
  font-size: 1em;
  margin-top: 1em;
  transition: all 0.5s;
  &:hover {
    background-color: ${props => props.theme.red};
    color: #fff;
  }
  &::after {
    content: ' \\27F6';
  }
`;
