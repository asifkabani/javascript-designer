import React from 'react';
import Helmet from 'react-helmet';

import Header from '../layouts/header';
import Footer from '../layouts/footer';
import styled from 'styled-components';
import './index.css'

const Content = styled.section`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  padding-top: 0;
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}/>
    <Header />
    <Content>
      {children()}
    </Content>
    <Footer />
  </div>
);

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`