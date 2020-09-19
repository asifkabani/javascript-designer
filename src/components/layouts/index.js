import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Header from './header';
// import CategoriesFilter from '../shared/categoriesFilter';
import Footer from './footer';
import { Content, PageContainer } from './basecss';

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
        allMdx {
          edges {
            node {
              frontmatter {
                category
              }
            }
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
        <PageContainer>
          <Header />
          {/* <CategoriesFilter data={data.allMarkdownRemark.edges} /> */}
          <Content>{children}</Content>
          <Footer />
        </PageContainer>
      </ThemeProvider>
    )}
  />
);
