import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components';

import Header from './header';
import Footer from './footer';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Content } from './basecss';


const theme = {
  yellow: "#FFE200",
  pink: "#E83F6F",
  font: "Josefin Sans, sans-serif"
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'JavaScript Designer is personal blog of Asif Kabani.' },
            { name: 'keywords', content: 'javascript, designer' },
          ]} />
        <Header />
        <Content>
          {children}
        </Content>
        <Footer />
      </ThemeProvider>
    )}
  />
);