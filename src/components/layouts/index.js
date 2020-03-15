import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Header from './header';
import Footer from './footer';
import { Content } from './basecss';

const GlobalStyle = createGlobalStyle`
  ${Normalize}
`;

const theme = {
  gray: '#4c4c4c',
  lightPlum: '#982475',
  darkPlum: '#410f32',
  font: 'Josefin Sans, sans-serif',
};

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'JavaScript Designer is personal blog of Asif Kabani.',
            },
            { name: 'keywords', content: 'javascript, designer' },
          ]}
        />
        <Header />
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    )}
  />
);
